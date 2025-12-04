import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { useState } from 'react';
import type { FAQItem } from '../AdminTypes';

interface FAQTabProps {
  faqItems: FAQItem[];
  newFAQ: FAQItem;
  setNewFAQ: (value: FAQItem) => void;
  addFAQ: () => void;
  deleteFAQ: (index: number) => void;
  updateFAQ: (index: number, item: FAQItem) => void;
}

const FAQTab = ({
  faqItems,
  newFAQ,
  setNewFAQ,
  addFAQ,
  deleteFAQ,
  updateFAQ,
}: FAQTabProps) => {
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [editedItem, setEditedItem] = useState<FAQItem | null>(null);

  const startEditing = (index: number, item: FAQItem) => {
    setEditingIndex(index);
    setEditedItem({ ...item });
  };

  const cancelEditing = () => {
    setEditingIndex(null);
    setEditedItem(null);
  };

  const saveEditing = () => {
    if (editingIndex !== null && editedItem) {
      updateFAQ(editingIndex, editedItem);
      setEditingIndex(null);
      setEditedItem(null);
    }
  };
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
            <div className="space-y-3 max-h-[600px] overflow-y-auto">
              {faqItems.map((item, index) => (
                <div key={index} className="p-4 border rounded-lg">
                  {editingIndex === index && editedItem ? (
                    <div className="space-y-3">
                      <Input
                        placeholder="Вопрос"
                        value={editedItem.question}
                        onChange={(e) => setEditedItem({ ...editedItem, question: e.target.value })}
                      />
                      <Textarea
                        placeholder="Ответ"
                        value={editedItem.answer}
                        onChange={(e) => setEditedItem({ ...editedItem, answer: e.target.value })}
                        rows={4}
                      />
                      <div className="flex gap-2">
                        <Button onClick={saveEditing} size="sm" className="flex-1">
                          <Icon name="Check" size={14} className="mr-1" />
                          Сохранить
                        </Button>
                        <Button onClick={cancelEditing} size="sm" variant="outline" className="flex-1">
                          <Icon name="X" size={14} className="mr-1" />
                          Отмена
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <>
                      <div className="flex justify-between items-start mb-2">
                        <p className="font-medium flex-1">{item.question}</p>
                        <div className="flex gap-1">
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            onClick={() => startEditing(index, item)}
                            title="Редактировать"
                          >
                            <Icon name="Pencil" size={16} className="text-primary" />
                          </Button>
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            onClick={() => deleteFAQ(index)}
                            title="Удалить"
                          >
                            <Icon name="Trash2" size={16} className="text-destructive" />
                          </Button>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground">{item.answer}</p>
                    </>
                  )}
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