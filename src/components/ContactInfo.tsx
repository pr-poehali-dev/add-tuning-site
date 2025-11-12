import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface ContactInfoItem {
  icon: string;
  title: string;
  content: string;
  link: string | null;
}

const ContactInfo = () => {
  const contactInfo: ContactInfoItem[] = [
    {
      icon: 'Phone',
      title: 'Телефон',
      content: '+7 (937) 213-45-47',
      link: 'tel:+79372134547'
    },
    {
      icon: 'Mail',
      title: 'Email',
      content: 'serereme@yandex.ru',
      link: 'mailto:serereme@yandex.ru'
    },
    {
      icon: 'MapPin',
      title: 'Адрес',
      content: 'г. Тольятти, проспект Степана Разина, д. 50',
      link: 'https://yandex.ru/maps'
    },
    {
      icon: 'Clock',
      title: 'Режим работы',
      content: 'Пн-Вс: 9:00 - 20:00 Без выходных',
      link: null
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
      {contactInfo.map((item, index) => (
        <Card key={index} className="animate-scale-in" style={{ animationDelay: `${index * 50}ms` }}>
          <CardContent className="p-4 sm:p-6">
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Icon name={item.icon as any} size={20} className="text-primary sm:w-6 sm:h-6" />
              </div>
              <div>
                <h3 className="text-sm sm:text-base font-semibold mb-1">{item.title}</h3>
                {item.link ? (
                  <a href={item.link} className="text-muted-foreground hover:text-primary transition-colors text-xs sm:text-sm">
                    {item.content}
                  </a>
                ) : (
                  <p className="text-muted-foreground text-xs sm:text-sm">{item.content}</p>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ContactInfo;