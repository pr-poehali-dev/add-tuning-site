import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const MobileBookingButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
        setIsExpanded(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const handleWhatsApp = () => {
    window.open('https://wa.me/79372134547?text=Здравствуйте!%20Хочу%20записаться%20на%20чип-тюнинг', '_blank');
  };

  const handleTelegram = () => {
    window.open('https://t.me/addtuning', '_blank');
  };

  const handleVK = () => {
    window.open('https://vk.com/addtuning', '_blank');
  };

  const handleMAX = () => {
    window.open('https://max.mail.ru/channels/addtuning', '_blank');
  };

  return (
    <div 
      className={`fixed bottom-4 right-3 sm:bottom-6 sm:right-4 z-40 lg:hidden transition-all duration-300 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
      }`}
    >
      {isExpanded && (
        <div className="flex flex-col gap-2 mb-2">
          <Button 
            size="sm"
            className="bg-[#25D366] hover:bg-[#20BA5A] text-white shadow-lg shadow-[#25D366]/30 text-xs font-semibold px-3 py-2 rounded-full"
            onClick={handleWhatsApp}
          >
            <Icon name="MessageCircle" size={14} className="mr-1.5" />
            WhatsApp
          </Button>
          <Button 
            size="sm"
            className="bg-[#0088cc] hover:bg-[#006DA8] text-white shadow-lg shadow-[#0088cc]/30 text-xs font-semibold px-3 py-2 rounded-full"
            onClick={handleTelegram}
          >
            <Icon name="Send" size={14} className="mr-1.5" />
            Telegram
          </Button>
          <Button 
            size="sm"
            className="bg-[#0077FF] hover:bg-[#0066DD] text-white shadow-lg shadow-[#0077FF]/30 text-xs font-semibold px-3 py-2 rounded-full"
            onClick={handleVK}
          >
            <Icon name="Users" size={14} className="mr-1.5" />
            VK
          </Button>
          <Button 
            size="sm"
            className="bg-[#FF6633] hover:bg-[#E55522] text-white shadow-lg shadow-[#FF6633]/30 text-xs font-semibold px-3 py-2 rounded-full"
            onClick={handleMAX}
          >
            <Icon name="Mail" size={14} className="mr-1.5" />
            MAX
          </Button>
        </div>
      )}
      <Button 
        size="lg" 
        className="bg-primary hover:bg-primary/90 shadow-lg shadow-primary/50 text-sm sm:text-base font-semibold px-4 py-4 sm:px-6 sm:py-6 rounded-full w-full"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <Icon name={isExpanded ? "X" : "MessageCircle"} size={16} className="mr-1.5 sm:mr-2 sm:w-5 sm:h-5" />
        {isExpanded ? 'Закрыть' : 'Написать'}
      </Button>
    </div>
  );
};

export default MobileBookingButton;