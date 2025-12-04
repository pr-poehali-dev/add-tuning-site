import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import type { FAQItem } from '../AdminTypes';

interface FAQTabProps {
  faqItems: FAQItem[];
  newFAQ: FAQItem;
  setNewFAQ: (value: FAQItem) => void;
  addFAQ: () => void;
  deleteFAQ: (index: number) => void;
}

const FAQTab = ({
  faqItems,
  newFAQ,
  setNewFAQ,
  addFAQ,
  deleteFAQ,
}: FAQTabProps) => {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Добавить вопрос</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Input
            placeholder="Вопрос"
            value={newFAQ.question}
            onChange={(e) => setNewFAQ({ ...newFAQ, question: e.target.value })}
          />
          <Textarea
            placeholder="Ответ"
            value={newFAQ.answer}
            onChange={(e) => setNewFAQ({ ...newFAQ, answer: e.target.value })}
            rows={4}
          />
          <Button onClick={addFAQ} className="w-full">
            <Icon name="Plus" size={16} className="mr-2" />
            Добавить вопрос
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>FAQ ({faqItems.length})</CardTitle>
        </CardHeader>
        <CardContent>
          {faqItems.length === 0 ? (
            <p className="text-muted-foreground text-center py-8">Вопросы не добавлены</p>
          ) : (
            <div className="space-y-3 max-h-96 overflow-y-auto">
              {faqItems.map((item, index) => (
                <div key={index} className="p-4 border rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <p className="font-medium">{item.question}</p>
                    <Button variant="ghost" size="sm" onClick={() => deleteFAQ(index)}>
                      <Icon name="Trash2" size={16} className="text-destructive" />
                    </Button>
                  </div>
                  <p className="text-sm text-muted-foreground">{item.answer}</p>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default FAQTab;
