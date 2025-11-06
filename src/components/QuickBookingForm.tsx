import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import Icon from '@/components/ui/icon';

const QuickBookingForm = ({ onSuccess }: { onSuccess?: () => void }) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
  });
  const [lastSubmitTime, setLastSubmitTime] = useState(0);

  const validateForm = () => {
    const nameRegex = /^[а-яёА-ЯЁa-zA-Z\s-]+$/;
    if (!nameRegex.test(formData.name)) {
      toast({
        title: "Ошибка",
        description: "Имя должно содержать только буквы",
        variant: "destructive",
      });
      return false;
    }

    const phoneRegex = /^[\d\s\+\-\(\)]+$/;
    if (!phoneRegex.test(formData.phone) || formData.phone.replace(/\D/g, '').length < 10) {
      toast({
        title: "Ошибка",
        description: "Введите корректный номер телефона",
        variant: "destructive",
      });
      return false;
    }

    const now = Date.now();
    if (now - lastSubmitTime < 10000) {
      toast({
        title: "Подождите",
        description: "Вы отправляете заявки слишком часто. Подождите 10 секунд.",
        variant: "destructive",
      });
      return false;
    }

    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setLastSubmitTime(Date.now());
    
    toast({
      title: "Заявка отправлена!",
      description: "Мы перезвоним вам в ближайшее время",
    });
    
    setFormData({ name: '', phone: '' });
    
    if (onSuccess) {
      onSuccess();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
        <h3 className="font-semibold mb-3 flex items-center text-sm">
          <Icon name="CalendarCheck" size={18} className="text-primary mr-2" />
          Быстрая запись
        </h3>
        <div className="space-y-3">
          <Input
            placeholder="Ваше имя"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
            className="bg-background"
          />
          <Input
            type="tel"
            placeholder="+7 (937) 213-45-47"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            required
            className="bg-background"
          />
          <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
            <Icon name="Send" size={16} className="mr-2" />
            Отправить заявку
          </Button>
          <p className="text-xs text-muted-foreground text-center">
            Перезвоним в течение 15 минут
          </p>
        </div>
      </div>
    </form>
  );
};

export default QuickBookingForm;