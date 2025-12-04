import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';
import type { ServiceItem } from '../AdminTypes';

interface ServicesTabProps {
  services: ServiceItem[];
  newService: ServiceItem;
  setNewService: (value: ServiceItem) => void;
  addService: () => void;
  deleteService: (index: number) => void;
}

const ServicesTab = ({
  services,
  newService,
  setNewService,
  addService,
  deleteService,
}: ServicesTabProps) => {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Добавить услугу</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Input
            placeholder="Название услуги"
            value={newService.name}
            onChange={(e) => setNewService({ ...newService, name: e.target.value })}
          />
          <div className="grid grid-cols-2 gap-4">
            <Input
              type="number"
              placeholder="Мин. цена"
              value={newService.minPrice}
              onChange={(e) => setNewService({ ...newService, minPrice: Number(e.target.value) })}
            />
            <Input
              type="number"
              placeholder="Макс. цена"
              value={newService.maxPrice}
              onChange={(e) => setNewService({ ...newService, maxPrice: Number(e.target.value) })}
            />
          </div>
          <select
            className="w-full p-2 border rounded-md"
            value={newService.category}
            onChange={(e) => setNewService({ ...newService, category: e.target.value })}
          >
            <option>Чип-тюнинг</option>
            <option>Программное отключение (бензин)</option>
            <option>Программное отключение (дизель)</option>
            <option>Коробки передач</option>
            <option>Диагностика</option>
          </select>
          <Button onClick={addService} className="w-full">
            <Icon name="Plus" size={16} className="mr-2" />
            Добавить
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Список услуг ({services.length})</CardTitle>
        </CardHeader>
        <CardContent>
          {services.length === 0 ? (
            <p className="text-muted-foreground text-center py-8">Услуги не добавлены</p>
          ) : (
            <div className="space-y-2 max-h-96 overflow-y-auto">
              {services.map((service, index) => (
                <div key={index} className="flex justify-between items-center p-3 border rounded-lg">
                  <div className="flex-1">
                    <p className="font-medium">{service.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {service.category} • {service.minPrice.toLocaleString()} - {service.maxPrice.toLocaleString()} ₽
                    </p>
                  </div>
                  <Button variant="ghost" size="sm" onClick={() => deleteService(index)}>
                    <Icon name="Trash2" size={16} className="text-destructive" />
                  </Button>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default ServicesTab;
