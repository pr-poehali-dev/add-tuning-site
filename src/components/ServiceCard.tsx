import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
  features: string[];
  price: string;
}

interface ServiceCardProps {
  service: Service;
  index: number;
  onSelectService: (title: string) => void;
}

const ServiceCard = ({ service, index, onSelectService }: ServiceCardProps) => {
  return (
    <Card 
      id={service.id} 
      className="group hover:border-primary transition-all duration-300 animate-scale-in" 
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <CardHeader className="p-4 sm:p-6">
        <div className="flex items-start justify-between mb-3 sm:mb-4">
          <div className="w-12 h-12 sm:w-14 sm:h-14 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary transition-colors">
            <Icon name={service.icon as any} size={24} className="text-primary group-hover:text-primary-foreground transition-colors sm:w-7 sm:h-7" />
          </div>
          <span className="text-xl sm:text-2xl font-bold text-primary">{service.price}</span>
        </div>
        <CardTitle className="text-xl sm:text-2xl">{service.title}</CardTitle>
        <p className="text-muted-foreground">{service.description}</p>
      </CardHeader>
      <CardContent className="p-4 sm:p-6 pt-0">
        <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
          {service.features.map((feature, idx) => (
            <li key={idx} className="flex items-start">
              <Icon name="CheckCircle2" size={18} className="text-primary mr-2 mt-0.5 flex-shrink-0 sm:w-5 sm:h-5" />
              <span className="text-sm sm:text-base text-muted-foreground">{feature}</span>
            </li>
          ))}
        </ul>
        <Button 
          className="w-full bg-primary hover:bg-primary/90 text-sm sm:text-base py-5 sm:py-6"
          onClick={() => onSelectService(service.title)}
        >
          Запись на услугу
        </Button>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;