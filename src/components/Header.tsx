import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import QuickBookingForm from '@/components/QuickBookingForm';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { to: '/', label: 'Главная' },
    { to: '/services', label: 'Услуги' },
    { to: '/price', label: 'Прайс' },
    { to: '/portfolio', label: 'Портфолио' },
    { to: '/reviews', label: 'Отзывы' },
    { to: '/faq', label: 'FAQ' },
    { to: '/contacts', label: 'Контакты' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm z-50 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <Icon name="Zap" size={24} className="text-primary-foreground" />
            </div>
            <span className="text-2xl font-bold text-foreground">ADD Tuning</span>
          </Link>

          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-4 py-2 rounded-md transition-colors ${
                  isActive(link.to)
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <a href="tel:+79999999999" className="text-foreground hover:text-primary transition-colors flex items-center">
              <Icon name="Phone" size={20} className="mr-2" />
              +7 (999) 999-99-99
            </a>
            <a href="/contacts">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Записаться
              </Button>
            </a>
          </div>

          <button
            className="lg:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Icon name={isMenuOpen ? 'X' : 'Menu'} size={28} />
          </button>
        </div>

        {isMenuOpen && (
          <nav className="lg:hidden pb-6 animate-fade-in">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-4 py-3 rounded-md transition-colors ${
                  isActive(link.to)
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-4 px-4 space-y-3">
              <QuickBookingForm onSuccess={() => setIsMenuOpen(false)} />
              <a href="tel:+79999999999" className="flex items-center justify-center text-foreground hover:text-primary transition-colors p-3 bg-muted rounded-md">
                <Icon name="Phone" size={20} className="mr-2" />
                +7 (999) 999-99-99
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;