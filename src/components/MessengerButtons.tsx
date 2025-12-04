import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface MessengerButtonsProps {
  size?: 'default' | 'sm' | 'lg';
  className?: string;
  layout?: 'horizontal' | 'vertical';
}

const MessengerButtons = ({ size = 'lg', className = '', layout = 'horizontal' }: MessengerButtonsProps) => {
  const whatsappNumber = '79372134547';
  const telegramUsername = 'addtuning';
  const vkLink = 'https://vk.com/addtuning';

  const handleWhatsApp = () => {
    window.open(`https://wa.me/${whatsappNumber}?text=Здравствуйте!%20Хочу%20записаться%20на%20чип-тюнинг`, '_blank');
  };

  const handleTelegram = () => {
    window.open(`https://t.me/${telegramUsername}`, '_blank');
  };

  const handleVK = () => {
    window.open(vkLink, '_blank');
  };

  const buttonClass = layout === 'vertical' ? 'w-full' : '';
  const containerClass = layout === 'vertical' ? 'flex-col' : 'flex-wrap';

  return (
    <div className={`flex justify-center gap-3 sm:gap-4 ${containerClass} ${className}`}>
      <Button 
        size={size}
        className={`bg-[#25D366] hover:bg-[#20BA5A] text-white shadow-lg shadow-[#25D366]/30 text-sm sm:text-base font-semibold px-4 sm:px-6 py-4 sm:py-5 gap-2 ${buttonClass}`}
        onClick={handleWhatsApp}
      >
        <Icon name="MessageCircle" size={18} className="sm:w-5 sm:h-5" />
        <span className="hidden xs:inline">Написать в </span>WhatsApp
      </Button>

      <Button 
        size={size}
        className={`bg-[#0088cc] hover:bg-[#006DA8] text-white shadow-lg shadow-[#0088cc]/30 text-sm sm:text-base font-semibold px-4 sm:px-6 py-4 sm:py-5 gap-2 ${buttonClass}`}
        onClick={handleTelegram}
      >
        <Icon name="Send" size={18} className="sm:w-5 sm:h-5" />
        <span className="hidden xs:inline">Написать в </span>Telegram
      </Button>

      <Button 
        size={size}
        className={`bg-[#0077FF] hover:bg-[#0066DD] text-white shadow-lg shadow-[#0077FF]/30 text-sm sm:text-base font-semibold px-4 sm:px-6 py-4 sm:py-5 gap-2 ${buttonClass}`}
        onClick={handleVK}
      >
        <Icon name="Users" size={18} className="sm:w-5 sm:h-5" />
        <span className="hidden xs:inline">Написать в </span>VK
      </Button>
    </div>
  );
};

export default MessengerButtons;
