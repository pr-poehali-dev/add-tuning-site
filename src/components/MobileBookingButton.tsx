import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const MobileBookingButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div 
      className={`fixed bottom-4 right-3 sm:bottom-6 sm:right-4 z-40 lg:hidden transition-all duration-300 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
      }`}
    >
      <Link to="/contacts">
        <Button 
          size="lg" 
          className="bg-primary hover:bg-primary/90 shadow-lg shadow-primary/50 text-sm sm:text-base font-semibold px-4 py-4 sm:px-6 sm:py-6 rounded-full"
        >
          <Icon name="Calendar" size={16} className="mr-1.5 sm:mr-2 sm:w-5 sm:h-5" />
          Записаться
        </Button>
      </Link>
    </div>
  );
};

export default MobileBookingButton;