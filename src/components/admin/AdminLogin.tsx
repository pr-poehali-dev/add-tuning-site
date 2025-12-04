import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';

interface AdminLoginProps {
  password: string;
  setPassword: (value: string) => void;
  handleLogin: () => void;
}

const AdminLogin = ({ password, setPassword, handleLogin }: AdminLoginProps) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-primary/5 p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl text-center flex items-center justify-center gap-2">
            <Icon name="Lock" size={24} className="text-primary" />
            Админ-панель ADD Tuning
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Input
              type="password"
              placeholder="Введите пароль"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleLogin()}
            />
          </div>
          <Button onClick={handleLogin} className="w-full">
            <Icon name="LogIn" size={18} className="mr-2" />
            Войти
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminLogin;
