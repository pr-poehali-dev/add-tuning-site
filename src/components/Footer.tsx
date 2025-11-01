import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Icon name="Zap" size={24} className="text-primary-foreground" />
              </div>
              <span className="text-2xl font-bold text-foreground">ADD Tuning</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Профессиональный чип-тюнинг автомобилей. Увеличение мощности и крутящего момента.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">Навигация</h3>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-muted-foreground hover:text-primary transition-colors">Услуги</Link></li>
              <li><Link to="/price" className="text-muted-foreground hover:text-primary transition-colors">Прайс</Link></li>
              <li><Link to="/portfolio" className="text-muted-foreground hover:text-primary transition-colors">Портфолио</Link></li>
              <li><Link to="/reviews" className="text-muted-foreground hover:text-primary transition-colors">Отзывы</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">Контакты</h3>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li className="flex items-center">
                <Icon name="Phone" size={16} className="mr-2 text-primary" />
                <a href="tel:+79372134547" className="hover:text-primary transition-colors">+7 (937) 213-45-47</a>
              </li>
              <li className="flex items-center">
                <Icon name="Mail" size={16} className="mr-2 text-primary" />
                <a href="mailto:serereme@yandex.ru" className="hover:text-primary transition-colors">serereme@yandex.ru</a>
              </li>
              <li className="flex items-start">
                <Icon name="MapPin" size={16} className="mr-2 mt-1 text-primary flex-shrink-0" />
                <span>г. Тольятти, Пр-кт Степана Разина, дом 50</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">Мы в соцсетях</h3>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center hover:bg-primary transition-colors group">
                <Icon name="Instagram" size={20} className="text-muted-foreground group-hover:text-primary-foreground" />
              </a>
              <a href="#" className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center hover:bg-primary transition-colors group">
                <Icon name="Youtube" size={20} className="text-muted-foreground group-hover:text-primary-foreground" />
              </a>
              <a href="#" className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center hover:bg-primary transition-colors group">
                <Icon name="MessageCircle" size={20} className="text-muted-foreground group-hover:text-primary-foreground" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground text-sm">
          <p>&copy; {new Date().getFullYear()} ADD Tuning. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;