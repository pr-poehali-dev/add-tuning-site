import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const MobileBookingButton = () => {
  return (
    <div className="fixed bottom-6 right-4 z-40 lg:hidden">
      <Link to="/contacts">
        <Button 
          size="lg" 
          className="bg-primary hover:bg-primary/90 shadow-lg shadow-primary/50 text-base font-semibold px-6 py-6 rounded-full"
        >
          <Icon name="Calendar" size={20} className="mr-2" />
          Записаться
        </Button>
      </Link>
    </div>
  );
};

export default MobileBookingButton;
