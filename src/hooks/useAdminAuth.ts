import { useState, useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';

export const useAdminAuth = () => {
  const { toast } = useToast();
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loginAttempts, setLoginAttempts] = useState(0);
  const [isBlocked, setIsBlocked] = useState(false);

  useEffect(() => {
    const savedAuth = localStorage.getItem('admin_auth');
    const authToken = localStorage.getItem('admin_token');
    const authTime = localStorage.getItem('admin_auth_time');
    
    if (savedAuth === 'true' && authToken && authTime) {
      const timePassed = Date.now() - parseInt(authTime);
      const fourHours = 4 * 60 * 60 * 1000;
      
      if (timePassed < fourHours) {
        setIsAuthenticated(true);
      } else {
        localStorage.removeItem('admin_auth');
        localStorage.removeItem('admin_token');
        localStorage.removeItem('admin_auth_time');
      }
    }

    const blockTime = localStorage.getItem('admin_block_time');
    if (blockTime) {
      const timePassed = Date.now() - parseInt(blockTime);
      const fifteenMinutes = 15 * 60 * 1000;
      
      if (timePassed < fifteenMinutes) {
        setIsBlocked(true);
        setTimeout(() => {
          setIsBlocked(false);
          localStorage.removeItem('admin_block_time');
          setLoginAttempts(0);
        }, fifteenMinutes - timePassed);
      } else {
        localStorage.removeItem('admin_block_time');
      }
    }
  }, []);

  const handleLogin = () => {
    if (isBlocked) {
      toast({
        title: 'Доступ заблокирован',
        description: 'Слишком много неудачных попыток входа. Попробуйте через 15 минут.',
        variant: 'destructive',
      });
      return false;
    }

    if (password === 'addtuning2024') {
      const authToken = Math.random().toString(36).substring(2) + Date.now().toString(36);
      setIsAuthenticated(true);
      localStorage.setItem('admin_auth', 'true');
      localStorage.setItem('admin_token', authToken);
      localStorage.setItem('admin_auth_time', Date.now().toString());
      setLoginAttempts(0);
      toast({
        title: 'Успешный вход',
        description: 'Добро пожаловать в админ-панель',
      });
      return true;
    } else {
      const newAttempts = loginAttempts + 1;
      setLoginAttempts(newAttempts);
      
      if (newAttempts >= 5) {
        setIsBlocked(true);
        localStorage.setItem('admin_block_time', Date.now().toString());
        toast({
          title: 'Доступ заблокирован',
          description: 'Слишком много неудачных попыток входа. Доступ заблокирован на 15 минут.',
          variant: 'destructive',
        });
        setTimeout(() => {
          setIsBlocked(false);
          localStorage.removeItem('admin_block_time');
          setLoginAttempts(0);
        }, 15 * 60 * 1000);
      } else {
        toast({
          title: 'Ошибка',
          description: `Неверный пароль. Осталось попыток: ${5 - newAttempts}`,
          variant: 'destructive',
        });
      }
      return false;
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('admin_auth');
    localStorage.removeItem('admin_token');
    localStorage.removeItem('admin_auth_time');
    setPassword('');
    toast({
      title: 'Выход выполнен',
      description: 'Вы вышли из админ-панели',
    });
  };

  return {
    password,
    setPassword,
    isAuthenticated,
    loginAttempts,
    isBlocked,
    handleLogin,
    handleLogout,
  };
};
