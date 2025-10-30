import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const TuningCalculator = () => {
  const [currentPower, setCurrentPower] = useState('');
  const [currentTorque, setCurrentTorque] = useState('');
  const [stage, setStage] = useState('stage1');
  const [fuelType, setFuelType] = useState('petrol');

  const calculateResults = () => {
    const power = parseFloat(currentPower) || 0;
    const torque = parseFloat(currentTorque) || 0;

    const multipliers: Record<string, { power: number; torque: number }> = {
      stage1: { power: 1.25, torque: 1.20 },
      stage2: { power: 1.45, torque: 1.35 },
      eco: { power: 1.05, torque: 1.08 },
    };

    const fuelBonus = fuelType === 'diesel' ? 1.05 : 1.0;

    const newPower = Math.round(power * multipliers[stage].power * fuelBonus);
    const newTorque = Math.round(torque * multipliers[stage].torque * fuelBonus);

    return {
      newPower,
      newTorque,
      powerGain: newPower - power,
      torqueGain: newTorque - torque,
      powerPercent: Math.round(((newPower - power) / power) * 100),
      torquePercent: Math.round(((newTorque - torque) / torque) * 100),
    };
  };

  const results = calculateResults();
  const hasInput = currentPower && currentTorque;

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="lg" variant="outline" className="border-2 border-primary hover:bg-primary/10">
          <Icon name="Calculator" size={20} className="mr-2" />
          Калькулятор тюнинга
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-2xl flex items-center">
            <Icon name="Calculator" size={24} className="text-primary mr-2" />
            Калькулятор прироста мощности
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium mb-2 block">Текущая мощность (л.с.)</label>
              <Input
                type="number"
                placeholder="200"
                value={currentPower}
                onChange={(e) => setCurrentPower(e.target.value)}
              />
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Крутящий момент (Нм)</label>
              <Input
                type="number"
                placeholder="350"
                value={currentTorque}
                onChange={(e) => setCurrentTorque(e.target.value)}
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium mb-2 block">Тип тюнинга</label>
              <Select value={stage} onValueChange={setStage}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="stage1">Stage 1 (до 30%)</SelectItem>
                  <SelectItem value="stage2">Stage 2 (до 50%)</SelectItem>
                  <SelectItem value="eco">Эко-тюнинг (экономия)</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Тип топлива</label>
              <Select value={fuelType} onValueChange={setFuelType}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="petrol">Бензин</SelectItem>
                  <SelectItem value="diesel">Дизель</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {hasInput && (
            <Card className="bg-primary/5 border-primary/20 animate-fade-in">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Icon name="TrendingUp" size={20} className="text-primary mr-2" />
                  Результаты расчета
                </h3>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-4 bg-background rounded-lg">
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Было</p>
                        <p className="text-2xl font-bold">{currentPower} л.с.</p>
                      </div>
                      <Icon name="ArrowRight" size={24} className="text-muted-foreground" />
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Станет</p>
                        <p className="text-2xl font-bold text-primary">{results.newPower} л.с.</p>
                      </div>
                    </div>
                    <div className="text-center p-3 bg-primary/10 rounded-lg">
                      <p className="text-sm text-muted-foreground mb-1">Прирост мощности</p>
                      <p className="text-xl font-bold text-primary">
                        +{results.powerGain} л.с. ({results.powerPercent}%)
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-4 bg-background rounded-lg">
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Было</p>
                        <p className="text-2xl font-bold">{currentTorque} Нм</p>
                      </div>
                      <Icon name="ArrowRight" size={24} className="text-muted-foreground" />
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Станет</p>
                        <p className="text-2xl font-bold text-primary">{results.newTorque} Нм</p>
                      </div>
                    </div>
                    <div className="text-center p-3 bg-primary/10 rounded-lg">
                      <p className="text-sm text-muted-foreground mb-1">Прирост момента</p>
                      <p className="text-xl font-bold text-primary">
                        +{results.torqueGain} Нм ({results.torquePercent}%)
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-accent/10 rounded-lg border border-accent/20">
                  <div className="flex items-start gap-3">
                    <Icon name="Info" size={20} className="text-accent mt-0.5" />
                    <div className="text-sm text-muted-foreground">
                      <p className="font-semibold mb-1">Важно:</p>
                      <p>Это расчетные данные. Точные показатели определяются после диагностики вашего автомобиля на нашем оборудовании.</p>
                    </div>
                  </div>
                </div>

                <Button className="w-full mt-4 bg-primary hover:bg-primary/90">
                  <Icon name="Phone" size={20} className="mr-2" />
                  Записаться на диагностику
                </Button>
              </CardContent>
            </Card>
          )}

          {!hasInput && (
            <div className="text-center py-8 text-muted-foreground">
              <Icon name="Calculator" size={48} className="mx-auto mb-4 opacity-50" />
              <p>Введите текущие характеристики вашего автомобиля</p>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TuningCalculator;
