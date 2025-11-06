import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const BlogPostCTA = () => {
  return (
    <div className="mt-12 pt-8 border-t">
      <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/30">
        <CardContent className="p-8 text-center">
          <Icon name="MessageSquare" size={48} className="text-primary mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-4">Остались вопросы по теме?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Позвоните или напишите в WhatsApp — я подробно расскажу про тюнинг именно вашего автомобиля
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+79372134547"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              <Icon name="Phone" size={20} className="mr-2" />
              +7 (937) 213-45-47
            </a>
            <a
              href="https://wa.me/79372134547?text=Здравствуйте!%20У%20меня%20вопрос%20о%20чип-тюнинге"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-background border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-colors"
            >
              <Icon name="MessageCircle" size={20} className="mr-2" />
              Написать в WhatsApp
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default BlogPostCTA;
