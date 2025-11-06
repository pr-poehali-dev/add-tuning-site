import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
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

interface OrderFormProps {
  serviceName: string;
  onClose: () => void;
}

const OrderForm = ({ serviceName, onClose }: OrderFormProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    brand: '',
    model: '',
    fuelType: '',
    year: '',
    horsepower: '',
    engineVolume: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
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

    const modelRegex = /^[а-яёА-ЯЁa-zA-Z0-9\s-]+$/;
    if (!modelRegex.test(formData.model)) {
      toast({
        title: "Ошибка",
        description: "Модель должна содержать только буквы и цифры",
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

    setIsSubmitting(true);
    setLastSubmitTime(Date.now());

    try {
      const response = await fetch('https://functions.poehali.dev/6400c45a-8e89-4809-b5a1-19d27ee8d1c6', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          service: serviceName,
          ...formData,
        }),
      });

      if (response.ok) {
        setIsSuccess(true);
        setTimeout(() => {
          onClose();
        }, 3000);
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
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  if (isSuccess) {
    return (
      <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <Card className="max-w-md w-full">
          <CardContent className="pt-6 text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="CheckCircle2" size={32} className="text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-2">Заявка отправлена!</h3>
            <p className="text-muted-foreground">
              Мы скоро с вами свяжемся
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
      <Card className="max-w-2xl w-full my-8">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-2xl">Заказать: {serviceName}</CardTitle>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <Icon name="X" size={20} />
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Ваше имя <span className="text-destructive">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-md border border-input bg-background"
                  placeholder="Иван"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Телефон <span className="text-destructive">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-md border border-input bg-background"
                  placeholder="+7 (999) 123-45-67"
                />
              </div>
            </div>

            <div className="border-t pt-4">
              <h4 className="font-semibold mb-4">Данные автомобиля</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Марка <span className="text-destructive">*</span>
                  </label>
                  <select
                    name="brand"
                    required
                    value={formData.brand}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-md border border-input bg-background"
                  >
                    <option value="">Выберите марку</option>
                    {carBrands.map((brand) => (
                      <option key={brand} value={brand}>{brand}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Модель <span className="text-destructive">*</span>
                  </label>
                  <input
                    type="text"
                    name="model"
                    required
                    value={formData.model}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-md border border-input bg-background"
                    placeholder="320d"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Тип топлива <span className="text-destructive">*</span>
                  </label>
                  <select
                    name="fuelType"
                    required
                    value={formData.fuelType}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-md border border-input bg-background"
                  >
                    <option value="">Выберите тип топлива</option>
                    <option value="Бензин">Бензин</option>
                    <option value="Дизель">Дизель</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Год выпуска <span className="text-destructive">*</span>
                  </label>
                  <select
                    name="year"
                    required
                    value={formData.year}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-md border border-input bg-background"
                  >
                    <option value="">Выберите год</option>
                    {years.map((year) => (
                      <option key={year} value={year}>{year}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Объём двигателя (л) <span className="text-destructive">*</span>
                  </label>
                  <select
                    name="engineVolume"
                    required
                    value={formData.engineVolume}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-md border border-input bg-background"
                  >
                    <option value="">Выберите объем</option>
                    {engineVolumes.map((volume) => (
                      <option key={volume} value={volume}>{volume}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Мощность (л.с.) <span className="text-destructive">*</span>
                  </label>
                  <select
                    name="horsepower"
                    required
                    value={formData.horsepower}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-md border border-input bg-background"
                  >
                    <option value="">Выберите мощность</option>
                    {horsepowers.map((hp) => (
                      <option key={hp} value={hp}>{hp}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <div className="flex gap-3 pt-4">
              <Button
                type="submit"
                className="flex-1"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Отправка...' : 'Отправить заявку'}
              </Button>
              <Button type="button" variant="outline" onClick={onClose}>
                Отмена
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default OrderForm;