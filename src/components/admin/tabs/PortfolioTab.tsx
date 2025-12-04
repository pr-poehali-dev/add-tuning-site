import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';
import type { PortfolioItem } from '../AdminTypes';

interface PortfolioTabProps {
  portfolio: PortfolioItem[];
  newPortfolio: PortfolioItem;
  setNewPortfolio: (value: PortfolioItem) => void;
  addPortfolio: () => void;
  deletePortfolio: (index: number) => void;
}

const PortfolioTab = ({
  portfolio,
  newPortfolio,
  setNewPortfolio,
  addPortfolio,
  deletePortfolio,
}: PortfolioTabProps) => {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Добавить работу</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <Input
              placeholder="Автомобиль"
              value={newPortfolio.car}
              onChange={(e) => setNewPortfolio({ ...newPortfolio, car: e.target.value })}
            />
            <Input
              placeholder="Год"
              value={newPortfolio.year}
              onChange={(e) => setNewPortfolio({ ...newPortfolio, year: e.target.value })}
            />
          </div>
          <select
            className="w-full p-2 border rounded-md"
            value={newPortfolio.stage}
            onChange={(e) => setNewPortfolio({ ...newPortfolio, stage: e.target.value })}
          >
            <option>Stage 1</option>
            <option>Stage 2</option>
            <option>Эко-тюнинг</option>
          </select>
          <div className="grid grid-cols-2 gap-4">
            <Input
              placeholder="Мощность до (л.с.)"
              value={newPortfolio.powerBefore}
              onChange={(e) => setNewPortfolio({ ...newPortfolio, powerBefore: e.target.value })}
            />
            <Input
              placeholder="Мощность после (л.с.)"
              value={newPortfolio.powerAfter}
              onChange={(e) => setNewPortfolio({ ...newPortfolio, powerAfter: e.target.value })}
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Input
              placeholder="Момент до (Нм)"
              value={newPortfolio.torqueBefore}
              onChange={(e) => setNewPortfolio({ ...newPortfolio, torqueBefore: e.target.value })}
            />
            <Input
              placeholder="Момент после (Нм)"
              value={newPortfolio.torqueAfter}
              onChange={(e) => setNewPortfolio({ ...newPortfolio, torqueAfter: e.target.value })}
            />
          </div>
          <Input
            placeholder="URL изображения"
            value={newPortfolio.image}
            onChange={(e) => setNewPortfolio({ ...newPortfolio, image: e.target.value })}
          />
          <Button onClick={addPortfolio} className="w-full">
            <Icon name="Plus" size={16} className="mr-2" />
            Добавить работу
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Портфолио ({portfolio.length})</CardTitle>
        </CardHeader>
        <CardContent>
          {portfolio.length === 0 ? (
            <p className="text-muted-foreground text-center py-8">Работы не добавлены</p>
          ) : (
            <div className="grid sm:grid-cols-2 gap-4 max-h-96 overflow-y-auto">
              {portfolio.map((item, index) => (
                <div key={index} className="p-4 border rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <p className="font-medium">{item.car}</p>
                      <p className="text-sm text-muted-foreground">{item.year} • {item.stage}</p>
                    </div>
                    <Button variant="ghost" size="sm" onClick={() => deletePortfolio(index)}>
                      <Icon name="Trash2" size={16} className="text-destructive" />
                    </Button>
                  </div>
                  <div className="text-sm space-y-1">
                    <p>Мощность: {item.powerBefore} → {item.powerAfter} л.с.</p>
                    <p>Момент: {item.torqueBefore} → {item.torqueAfter} Нм</p>
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

export default PortfolioTab;
