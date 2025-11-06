import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import Icon from '@/components/ui/icon';

const carBrands = [
  'Audi', 'BMW', 'Mercedes-Benz', 'Volkswagen', 'Porsche', 'Skoda',
  'Toyota', 'Lexus', 'Honda', 'Nissan', 'Mazda', 'Mitsubishi', 'Subaru',
  'Hyundai', 'Kia', 'Genesis',
  'Ford', 'Chevrolet', 'Jeep', 'Dodge', 'Chrysler',
  'Volvo', 'Peugeot', 'Renault', 'Citroen',
  'Land Rover', 'Jaguar', 'Mini',
  'Lada', 'UAZ', 'ГАЗ',
  'Другая'
];

const currentYear = new Date().getFullYear();
const years = Array.from({ length: 36 }, (_, i) => currentYear - i + 1);
const engineVolumes = ['1.0', '1.2', '1.4', '1.5', '1.6', '1.8', '2.0', '2.2', '2.4', '2.5', '2.7', '3.0', '3.2', '3.5', '3.6', '4.0', '4.2', '4.4', '4.6', '5.0', '5.5', '6.0', '6.2'];
const horsepowers = Array.from({ length: 40 }, (_, i) => (i + 5) * 10);

interface TuningBookingFormProps {
  lastSubmitTime: number;
  setLastSubmitTime: (time: number) => void;
}

const TuningBookingForm = ({ lastSubmitTime, setLastSubmitTime }: TuningBookingFormProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    brand: '',
    car: '',
    year: '',
    engineVolume: '',
    horsepower: '',
    message: ''
  });

  const validateForm = (data: typeof formData) => {
    const nameRegex = /^[а-яёА-ЯЁa-zA-Z\s-]+$/;
    if (!nameRegex.test(data.name)) {
      toast({
        title: "Ошибка",
        description: "Имя должно содержать только буквы",
        variant: "destructive",
      });
      return false;
    }

    const phoneRegex = /^[\d\s\+\-\(\)]+$/;
    if (!phoneRegex.test(data.phone) || data.phone.replace(/\D/g, '').length < 10) {
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
    
    if (!validateForm(formData)) {
      return;
    }

    setLastSubmitTime(Date.now());
    
    try {
      const response = await fetch('https://functions.poehali.dev/6400c45a-8e89-4809-b5a1-19d27ee8d1c6', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "Заявка отправлена!",
          description: "Мы свяжемся с вами в ближайшее время",
        });
        setFormData({ name: '', phone: '', brand: '', car: '', year: '', engineVolume: '', horsepower: '', message: '' });
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
    <Card className="animate-fade-in" style={{ animationDelay: '100ms' }}>
      <CardContent className="p-6">
        <h2 className="text-2xl font-bold mb-6">Запись на тюнинг</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-sm font-medium mb-2 block">Ваше имя</label>
            <Input
              placeholder="Иван Иванов"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
          </div>
          <div>
            <label className="text-sm font-medium mb-2 block">Телефон</label>
            <Input
              type="tel"
              placeholder="+7 (937) 213-45-47"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              required
            />
          </div>
          <div>
            <label className="text-sm font-medium mb-2 block">Марка автомобиля</label>
            <select
              className="w-full px-4 py-2 rounded-md border border-input bg-background"
              value={formData.brand}
              onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
              required
            >
              <option value="">Выберите марку</option>
              {carBrands.map((brand) => (
                <option key={brand} value={brand}>{brand}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="text-sm font-medium mb-2 block">Модель автомобиля</label>
            <Input
              placeholder="320d F30"
              value={formData.car}
              onChange={(e) => setFormData({ ...formData, car: e.target.value })}
              required
            />
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <label className="text-sm font-medium mb-2 block">Год выпуска</label>
              <select
                className="w-full px-4 py-2 rounded-md border border-input bg-background"
                value={formData.year}
                onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                required
              >
                <option value="">Год</option>
                {years.map((year) => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Объем (л)</label>
              <select
                className="w-full px-4 py-2 rounded-md border border-input bg-background"
                value={formData.engineVolume}
                onChange={(e) => setFormData({ ...formData, engineVolume: e.target.value })}
                required
              >
                <option value="">Объем</option>
                {engineVolumes.map((volume) => (
                  <option key={volume} value={volume}>{volume}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Мощность (л.с.)</label>
              <select
                className="w-full px-4 py-2 rounded-md border border-input bg-background"
                value={formData.horsepower}
                onChange={(e) => setFormData({ ...formData, horsepower: e.target.value })}
                required
              >
                <option value="">Л.с.</option>
                {horsepowers.map((hp) => (
                  <option key={hp} value={hp}>{hp}</option>
                ))}
              </select>
            </div>
          </div>
          <div>
            <label className="text-sm font-medium mb-2 block">Комментарий</label>
            <Textarea
              placeholder="Интересует Stage 1 тюнинг..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              rows={4}
            />
          </div>
          <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-lg py-6">
            <Icon name="Send" size={20} className="mr-2" />
            Отправить заявку
          </Button>
          <p className="text-xs text-muted-foreground text-center">
            Нажимая кнопку, вы соглашаетесь с политикой обработки персональных данных
          </p>
        </form>
      </CardContent>
    </Card>
  );
};

export default TuningBookingForm;
