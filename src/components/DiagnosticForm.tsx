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

interface DiagnosticFormProps {
  lastSubmitTime: number;
  setLastSubmitTime: (time: number) => void;
}

const DiagnosticForm = ({ lastSubmitTime, setLastSubmitTime }: DiagnosticFormProps) => {
  const { toast } = useToast();
  const [diagnosticForm, setDiagnosticForm] = useState({
    brand: '',
    model: '',
    year: '',
    fuelType: '',
    engineVolume: '',
    message: ''
  });

  const validateDiagnosticForm = (data: typeof diagnosticForm) => {
    const textRegex = /^[а-яёА-ЯЁa-zA-Z\s-]+$/;
    if (!textRegex.test(data.brand)) {
      toast({
        title: "Ошибка",
        description: "Марка должна содержать только буквы",
        variant: "destructive",
      });
      return false;
    }

    if (!textRegex.test(data.model)) {
      toast({
        title: "Ошибка",
        description: "Модель должна содержать только буквы",
        variant: "destructive",
      });
      return false;
    }

    const yearRegex = /^\d{4}$/;
    const year = parseInt(data.year);
    if (!yearRegex.test(data.year) || year < 1990 || year > new Date().getFullYear() + 1) {
      toast({
        title: "Ошибка",
        description: "Введите корректный год выпуска (1990-2025)",
        variant: "destructive",
      });
      return false;
    }

    const volumeRegex = /^\d+\.?\d*$/;
    const volume = parseFloat(data.engineVolume);
    if (!volumeRegex.test(data.engineVolume) || volume < 0.5 || volume > 10) {
      toast({
        title: "Ошибка",
        description: "Введите корректный объем двигателя (0.5-10.0 л)",
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

  const handleDiagnosticSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateDiagnosticForm(diagnosticForm)) {
      return;
    }

    setLastSubmitTime(Date.now());
    
    try {
      const response = await fetch('https://functions.poehali.dev/01f2cb9d-2f7b-43df-ad0d-d7fea2093342', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(diagnosticForm),
      });

      if (response.ok) {
        toast({
          title: "Заявка на диагностику отправлена!",
          description: "Мы свяжемся с вами для уточнения времени",
        });
        setDiagnosticForm({ brand: '', model: '', year: '', fuelType: '', engineVolume: '', message: '' });
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
    <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/30 animate-fade-in" style={{ animationDelay: '300ms' }}>
      <CardContent className="p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
            <Icon name="Calendar" size={24} className="text-primary" />
          </div>
          <div>
            <h3 className="text-xl font-bold">Записаться на диагностику</h3>
            <p className="text-sm text-muted-foreground">Стоимость: 2000 ₽</p>
          </div>
        </div>
        <form onSubmit={handleDiagnosticSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium mb-2 block">Марка</label>
              <select
                className="w-full px-4 py-2 rounded-md border border-input bg-background"
                value={diagnosticForm.brand}
                onChange={(e) => setDiagnosticForm({ ...diagnosticForm, brand: e.target.value })}
                required
              >
                <option value="">Выберите марку</option>
                {carBrands.map((brand) => (
                  <option key={brand} value={brand}>{brand}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Модель</label>
              <Input
                placeholder="320d"
                value={diagnosticForm.model}
                onChange={(e) => setDiagnosticForm({ ...diagnosticForm, model: e.target.value })}
                required
              />
            </div>
          </div>
          <div>
            <label className="text-sm font-medium mb-2 block">Тип топлива</label>
            <select
              className="w-full px-4 py-2 rounded-md border border-input bg-background"
              value={diagnosticForm.fuelType}
              onChange={(e) => setDiagnosticForm({ ...diagnosticForm, fuelType: e.target.value })}
              required
            >
              <option value="">Выберите тип топлива</option>
              <option value="Бензин">Бензин</option>
              <option value="Дизель">Дизель</option>
            </select>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium mb-2 block">Год выпуска</label>
              <Input
                placeholder="2018"
                value={diagnosticForm.year}
                onChange={(e) => setDiagnosticForm({ ...diagnosticForm, year: e.target.value })}
                required
              />
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Объем двигателя</label>
              <Input
                placeholder="2.0"
                value={diagnosticForm.engineVolume}
                onChange={(e) => setDiagnosticForm({ ...diagnosticForm, engineVolume: e.target.value })}
                required
              />
            </div>
          </div>
          <div>
            <label className="text-sm font-medium mb-2 block">Что необходимо</label>
            <Textarea
              placeholder="Опишите проблему или что нужно проверить..."
              value={diagnosticForm.message}
              onChange={(e) => setDiagnosticForm({ ...diagnosticForm, message: e.target.value })}
              rows={3}
            />
          </div>
          <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
            <Icon name="Send" size={20} className="mr-2" />
            Отправить заявку
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default DiagnosticForm;