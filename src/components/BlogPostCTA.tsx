import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import MessengerButtons from '@/components/MessengerButtons';

const BlogPostCTA = () => {
  return (
    <div className="mt-12 pt-8 border-t">
      <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/30">
        <CardContent className="p-8 text-center">
          <Icon name="MessageSquare" size={48} className="text-primary mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-4">Остались вопросы по теме?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Свяжитесь с нами любым удобным способом — я подробно расскажу про тюнинг именно вашего автомобиля
          </p>
          <MessengerButtons />
        </CardContent>
      </Card>
    </div>
  );
};

export default BlogPostCTA;