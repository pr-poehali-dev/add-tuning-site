import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';

interface AdminLoginProps {
  password: string;
  setPassword: (value: string) => void;
  handleLogin: () => void;
  isBlocked?: boolean;
  attemptsLeft?: number;
}

const AdminLogin = ({ password, setPassword, handleLogin, isBlocked, attemptsLeft }: AdminLoginProps) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-primary/5 p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl text-center flex items-center justify-center gap-2">
            <Icon name="Lock" size={24} className="text-primary" />
            Админ-панель ADD Tuning
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {isBlocked ? (
            <div className="p-4 border border-destructive/50 rounded-lg bg-destructive/10">
              <div className="flex items-start gap-3">
                <Icon name="ShieldAlert" size={20} className="text-destructive mt-0.5" />
                <div>
                  <p className="font-medium text-destructive">Доступ заблокирован</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Слишком много неудачных попыток входа. Попробуйте через 15 минут.
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <>
              <div>
                <Input
                  type="password"
                  placeholder="Введите пароль"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleLogin()}
                />
                {attemptsLeft !== undefined && attemptsLeft < 5 && (
                  <p className="text-xs text-muted-foreground mt-2">
                    Осталось попыток: {attemptsLeft}
                  </p>
                )}
              </div>
              <Button onClick={handleLogin} className="w-full">
                <Icon name="LogIn" size={18} className="mr-2" />
                Войти
              </Button>
            </>
          )}
          <div className="pt-4 border-t">
            <div className="flex items-start gap-2 text-xs text-muted-foreground">
              <Icon name="Info" size={14} className="mt-0.5 flex-shrink-0" />
              <p>
                Эта страница защищена от несанкционированного доступа. 
                Все попытки входа записываются.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminLogin;