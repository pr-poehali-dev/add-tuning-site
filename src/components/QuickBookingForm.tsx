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
    serviceType: 'diagnostic' as 'diagnostic' | 'tuning',
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setLastSubmitTime(Date.now());
    
    try {
      const response = await fetch('https://functions.poehali.dev/6400c45a-8e89-4809-b5a1-19d27ee8d1c6', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          serviceType: formData.serviceType === 'diagnostic' ? 'Диагностика' : 'Чип-тюнинг',
        }),
      });

      if (response.ok) {
        toast({
          title: "Заявка отправлена!",
          description: "Мы перезвоним вам в ближайшее время",
        });
        setFormData({ name: '', phone: '', serviceType: 'diagnostic' });
        
        if (onSuccess) {
          onSuccess();
        }
      } else {
        toast({
          title: "Ошибка",
          description: "Не удалось отправить заявку. Попробуйте позже.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Ошибка",
        description: "Не удалось отправить заявку. Попробуйте позже.",
        variant: "destructive",
      });
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
          <div>
            <label className="text-xs font-medium mb-2 block">Выберите услугу</label>
            <div className="grid grid-cols-2 gap-2">
              <Button
                type="button"
                variant={formData.serviceType === 'diagnostic' ? 'default' : 'outline'}
                className="w-full"
                onClick={() => setFormData({ ...formData, serviceType: 'diagnostic' })}
              >
                <Icon name="Search" size={16} className="mr-2" />
                Диагностика
              </Button>
              <Button
                type="button"
                variant={formData.serviceType === 'tuning' ? 'default' : 'outline'}
                className="w-full"
                onClick={() => setFormData({ ...formData, serviceType: 'tuning' })}
              >
                <Icon name="Zap" size={16} className="mr-2" />
                Чип-тюнинг
              </Button>
            </div>
          </div>
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