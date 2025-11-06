import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const MapCard = () => {
  return (
    <Card className="bg-primary/5 border-primary/20 animate-fade-in" style={{ animationDelay: '200ms' }}>
      <CardContent className="p-6">
        <div className="flex items-start gap-4 mb-4">
          <Icon name="Info" size={24} className="text-primary mt-1" />
          <div>
            <h3 className="font-semibold mb-2">Как нас найти?</h3>
            <p className="text-sm text-muted-foreground mb-3">Мы находимся на проспекте Степана Разина, дом 50 в Тольятти. Есть удобная парковка для клиентов.</p>
            <Button variant="outline" className="w-full" asChild>
              <a href="https://yandex.ru/maps/-/CDdkqSlp" target="_blank" rel="noopener noreferrer">
                <Icon name="Navigation" size={16} className="mr-2" />
                Построить маршрут
              </a>
            </Button>
          </div>
        </div>
        <div className="mt-4 rounded-lg overflow-hidden border border-border">
          <iframe
            src="https://yandex.ru/map-widget/v1/?ll=49.291683%2C53.510332&z=16&l=map&pt=49.291683,53.510332,pm2rdm"
            width="100%"
            height="300"
            frameBorder="0"
            className="w-full"
            title="ADD Tuning - проспект Степана Разина, 50, Тольятти"
          ></iframe>
        </div>
      </CardContent>
    </Card>
  );
};

export default MapCard;
