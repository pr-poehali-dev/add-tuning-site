import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import type { Review } from '../AdminTypes';

interface ReviewsTabProps {
  reviews: Review[];
  newReview: Review;
  setNewReview: (value: Review) => void;
  addReview: () => void;
  deleteReview: (index: number) => void;
}

const ReviewsTab = ({
  reviews,
  newReview,
  setNewReview,
  addReview,
  deleteReview,
}: ReviewsTabProps) => {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Добавить отзыв</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <Input
              placeholder="Имя"
              value={newReview.name}
              onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
            />
            <Input
              placeholder="Автомобиль"
              value={newReview.car}
              onChange={(e) => setNewReview({ ...newReview, car: e.target.value })}
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Input
              type="number"
              min="1"
              max="5"
              placeholder="Рейтинг (1-5)"
              value={newReview.rating}
              onChange={(e) => setNewReview({ ...newReview, rating: Number(e.target.value) })}
            />
            <Input
              type="date"
              value={newReview.date}
              onChange={(e) => setNewReview({ ...newReview, date: e.target.value })}
            />
          </div>
          <Textarea
            placeholder="Текст отзыва"
            value={newReview.text}
            onChange={(e) => setNewReview({ ...newReview, text: e.target.value })}
            rows={4}
          />
          <Button onClick={addReview} className="w-full">
            <Icon name="Plus" size={16} className="mr-2" />
            Добавить отзыв
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Список отзывов ({reviews.length})</CardTitle>
        </CardHeader>
        <CardContent>
          {reviews.length === 0 ? (
            <p className="text-muted-foreground text-center py-8">Отзывы не добавлены</p>
          ) : (
            <div className="space-y-3 max-h-96 overflow-y-auto">
              {reviews.map((review, index) => (
                <div key={index} className="p-4 border rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <p className="font-medium">{review.name}</p>
                      <p className="text-sm text-muted-foreground">{review.car}</p>
                    </div>
                    <Button variant="ghost" size="sm" onClick={() => deleteReview(index)}>
                      <Icon name="Trash2" size={16} className="text-destructive" />
                    </Button>
                  </div>
                  <p className="text-sm mb-2">{review.text}</p>
                  <div className="flex gap-2 text-sm text-muted-foreground">
                    <span>⭐ {review.rating}/5</span>
                    <span>•</span>
                    <span>{review.date}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default ReviewsTab;
