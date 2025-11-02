import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface OrderFormProps {
  serviceName: string;
  onClose: () => void;
}

const OrderForm = ({ serviceName, onClose }: OrderFormProps) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    brand: '',
    model: '',
    year: '',
    horsepower: '',
    engineVolume: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

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
      }
    } catch (error) {
      console.error('Error submitting order:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
                  <input
                    type="text"
                    name="brand"
                    required
                    value={formData.brand}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-md border border-input bg-background"
                    placeholder="BMW"
                  />
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
                    Год выпуска <span className="text-destructive">*</span>
                  </label>
                  <input
                    type="text"
                    name="year"
                    required
                    value={formData.year}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-md border border-input bg-background"
                    placeholder="2020"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Мощность (л.с.) <span className="text-destructive">*</span>
                  </label>
                  <input
                    type="text"
                    name="horsepower"
                    required
                    value={formData.horsepower}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-md border border-input bg-background"
                    placeholder="190"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Объём двигателя (л) <span className="text-destructive">*</span>
                  </label>
                  <input
                    type="text"
                    name="engineVolume"
                    required
                    value={formData.engineVolume}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-md border border-input bg-background"
                    placeholder="2.0"
                  />
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