import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { useNavigate } from 'react-router-dom';

const ServicesGrid = () => {
  const navigate = useNavigate();

  const services = [
    {
      id: 'stage1',
      icon: 'Gauge',
      title: 'Чип-тюнинг Stage 1',
      description: 'Увеличение мощности до 30% без механических доработок',
    },
    {
      id: 'stage2',
      icon: 'Zap',
      title: 'Чип-тюнинг Stage 2',
      description: 'Прирост до 50% с установкой дополнительного оборудования',
    },
    {
      id: 'diagnostic',
      icon: 'Settings',
      title: 'Диагностика ЭБУ',
      description: 'Полная диагностика электронных блоков управления',
    },
    {
      id: 'removal',
      icon: 'FileCheck',
      title: 'Удаление систем',
      description: 'DPF/EGR/AdBlue, Евро 2, Иммобилайзер, Swirl, DTC, ГБО',
    },
    {
      id: 'srs',
      icon: 'LifeBuoy',
      title: 'Ремонт и восстановление блоков SRS',
      description: 'Чистка Crash data и восстановление после ДТП',
    },
    {
      id: 'sas',
      icon: 'Navigation',
      title: 'Восстановление работы SAS',
      description: 'Калибровка датчика угла поворота руля, восстановление после программной блокировки',
    },
    {
      id: 'ecu-recovery',
      icon: 'RefreshCw',
      title: 'Восстановление ECU',
      description: 'Восстановление ЭБУ после неудачной прошивки',
    },
  ];

  return (
    <section className="py-12 sm:py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">Мои услуги</h2>
          <p className="text-base sm:text-xl text-muted-foreground">Полный спектр работ по чип-тюнингу</p>
        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:border-primary transition-all duration-300 animate-fade-in cursor-pointer" 
              style={{ animationDelay: `${index * 50}ms` }}
              onClick={() => navigate(`/services#${service.id}`)}
            >
              <CardContent className="p-4 sm:p-6">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-primary transition-colors">
                  <Icon name={service.icon as any} size={24} className="text-primary group-hover:text-primary-foreground transition-colors sm:w-7 sm:h-7" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-sm sm:text-base text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;