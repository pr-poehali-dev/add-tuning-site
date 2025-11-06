import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 animate-fade-in">
      <Card className="max-w-4xl mx-auto bg-card/95 backdrop-blur-sm border-2 border-primary/20 shadow-2xl">
        <div className="p-6 flex flex-col md:flex-row items-start md:items-center gap-4">
          <div className="flex-shrink-0">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
              <Icon name="Cookie" size={24} className="text-primary" />
            </div>
          </div>
          
          <div className="flex-1">
            <h3 className="text-lg font-semibold mb-2">Мы используем Cookie</h3>
            <p className="text-sm text-muted-foreground">
              Этот сайт использует файлы cookie для улучшения работы и анализа посещаемости. 
              Продолжая использовать сайт, вы соглашаетесь с использованием cookie-файлов.
            </p>
          </div>
          
          <div className="flex gap-3 w-full md:w-auto">
            <Button 
              variant="outline" 
              onClick={handleDecline}
              className="flex-1 md:flex-none"
            >
              Отклонить
            </Button>
            <Button 
              onClick={handleAccept}
              className="flex-1 md:flex-none bg-primary hover:bg-primary/90"
            >
              Принять
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default CookieConsent;
