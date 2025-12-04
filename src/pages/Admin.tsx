import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useToast } from '@/hooks/use-toast';

interface ServiceItem {
  name: string;
  minPrice: number;
  maxPrice: number;
  category: string;
}

const Admin = () => {
  const { toast } = useToast();
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeTab, setActiveTab] = useState<'services' | 'contacts' | 'info'>('services');
  
  const [services, setServices] = useState<ServiceItem[]>([]);
  const [newService, setNewService] = useState<ServiceItem>({
    name: '',
    minPrice: 0,
    maxPrice: 0,
    category: 'Диагностика'
  });

  const [contactInfo, setContactInfo] = useState({
    phone: '+79372134547',
    telegram: 'Add_Tuning',
    vk: 'https://vk.com/addtuning',
    address: 'проспект Степана Разина, д. 50, Тольятті'
  });

  useEffect(() => {
    const savedAuth = localStorage.getItem('admin_auth');
    if (savedAuth === 'true') {
      setIsAuthenticated(true);
      loadServices();
    }
  }, []);

  const handleLogin = () => {
    if (password === 'addtuning2024') {
      setIsAuthenticated(true);
      localStorage.setItem('admin_auth', 'true');
      loadServices();
      toast({
        title: 'Успешный вход',
        description: 'Добро пожаловать в админ-панель',
      });
    } else {
      toast({
        title: 'Ошибка',
        description: 'Неверный пароль',
        variant: 'destructive',
      });
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('admin_auth');
    setPassword('');
  };

  const loadServices = () => {
    const saved = localStorage.getItem('admin_services');
    if (saved) {
      setServices(JSON.parse(saved));
    }
  };

  const saveServices = (updatedServices: ServiceItem[]) => {
    localStorage.setItem('admin_services', JSON.stringify(updatedServices));
    setServices(updatedServices);
    toast({
      title: 'Сохранено',
      description: 'Изменения успешно сохранены',
    });
  };

  const addService = () => {
    if (!newService.name) {
      toast({
        title: 'Ошибка',
        description: 'Укажите название услуги',
        variant: 'destructive',
      });
      return;
    }
    const updated = [...services, newService];
    saveServices(updated);
    setNewService({ name: '', minPrice: 0, maxPrice: 0, category: 'Диагностика' });
  };

  const deleteService = (index: number) => {
    const updated = services.filter((_, i) => i !== index);
    saveServices(updated);
  };

  const saveContacts = () => {
    localStorage.setItem('admin_contacts', JSON.stringify(contactInfo));
    toast({
      title: 'Сохранено',
      description: 'Контактная информация обновлена',
    });
  };

  const exportData = () => {
    const data = {
      services,
      contacts: contactInfo,
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `add-tuning-backup-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-primary/5 p-4">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Админ-панель ADD Tuning</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Input
                type="password"
                placeholder="Введите пароль"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleLogin()}
              />
            </div>
            <Button onClick={handleLogin} className="w-full">
              <Icon name="LogIn" size={18} className="mr-2" />
              Войти
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="pt-24 sm:pt-32 pb-12 sm:pb-20 px-4 bg-gradient-to-br from-background via-background to-primary/5">
        <div className="container mx-auto max-w-6xl">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold">Админ-панель</h1>
            <div className="flex gap-2">
              <Button onClick={exportData} variant="outline" size="sm">
                <Icon name="Download" size={16} className="mr-2" />
                Экспорт
              </Button>
              <Button onClick={handleLogout} variant="outline" size="sm">
                <Icon name="LogOut" size={16} className="mr-2" />
                Выйти
              </Button>
            </div>
          </div>

          <div className="flex gap-2 mb-6 overflow-x-auto">
            <Button
              onClick={() => setActiveTab('services')}
              variant={activeTab === 'services' ? 'default' : 'outline'}
            >
              <Icon name="Settings" size={16} className="mr-2" />
              Услуги
            </Button>
            <Button
              onClick={() => setActiveTab('contacts')}
              variant={activeTab === 'contacts' ? 'default' : 'outline'}
            >
              <Icon name="Phone" size={16} className="mr-2" />
              Контакты
            </Button>
            <Button
              onClick={() => setActiveTab('info')}
              variant={activeTab === 'info' ? 'default' : 'outline'}
            >
              <Icon name="Info" size={16} className="mr-2" />
              Информация
            </Button>
          </div>

          {activeTab === 'services' && (
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Добавить услугу</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Input
                    placeholder="Название услуги"
                    value={newService.name}
                    onChange={(e) => setNewService({ ...newService, name: e.target.value })}
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <Input
                      type="number"
                      placeholder="Мин. цена"
                      value={newService.minPrice}
                      onChange={(e) => setNewService({ ...newService, minPrice: Number(e.target.value) })}
                    />
                    <Input
                      type="number"
                      placeholder="Макс. цена"
                      value={newService.maxPrice}
                      onChange={(e) => setNewService({ ...newService, maxPrice: Number(e.target.value) })}
                    />
                  </div>
                  <select
                    className="w-full p-2 border rounded-md"
                    value={newService.category}
                    onChange={(e) => setNewService({ ...newService, category: e.target.value })}
                  >
                    <option>Чип-тюнинг</option>
                    <option>Программное отключение (бензин)</option>
                    <option>Программное отключение (дизель)</option>
                    <option>Коробки передач</option>
                    <option>Диагностика</option>
                  </select>
                  <Button onClick={addService} className="w-full">
                    <Icon name="Plus" size={16} className="mr-2" />
                    Добавить услугу
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Список услуг ({services.length})</CardTitle>
                </CardHeader>
                <CardContent>
                  {services.length === 0 ? (
                    <p className="text-muted-foreground text-center py-8">
                      Услуги еще не добавлены. Используйте форму выше для добавления.
                    </p>
                  ) : (
                    <div className="space-y-2">
                      {services.map((service, index) => (
                        <div key={index} className="flex justify-between items-center p-3 border rounded-lg">
                          <div className="flex-1">
                            <p className="font-medium">{service.name}</p>
                            <p className="text-sm text-muted-foreground">
                              {service.category} • {service.minPrice.toLocaleString()} - {service.maxPrice.toLocaleString()} ₽
                            </p>
                          </div>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => deleteService(index)}
                          >
                            <Icon name="Trash2" size={16} className="text-destructive" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          )}

          {activeTab === 'contacts' && (
            <Card>
              <CardHeader>
                <CardTitle>Контактная информация</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Телефон</label>
                  <Input
                    placeholder="+79372134547"
                    value={contactInfo.phone}
                    onChange={(e) => setContactInfo({ ...contactInfo, phone: e.target.value })}
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Telegram</label>
                  <Input
                    placeholder="Add_Tuning"
                    value={contactInfo.telegram}
                    onChange={(e) => setContactInfo({ ...contactInfo, telegram: e.target.value })}
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">VK</label>
                  <Input
                    placeholder="https://vk.com/addtuning"
                    value={contactInfo.vk}
                    onChange={(e) => setContactInfo({ ...contactInfo, vk: e.target.value })}
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Адрес</label>
                  <Textarea
                    placeholder="проспект Степана Разина, д. 50"
                    value={contactInfo.address}
                    onChange={(e) => setContactInfo({ ...contactInfo, address: e.target.value })}
                  />
                </div>
                <Button onClick={saveContacts} className="w-full">
                  <Icon name="Save" size={16} className="mr-2" />
                  Сохранить контакты
                </Button>
              </CardContent>
            </Card>
          )}

          {activeTab === 'info' && (
            <Card>
              <CardHeader>
                <CardTitle>Информация о системе</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-primary/5 rounded-lg">
                  <h3 className="font-medium mb-2">Как использовать админ-панель:</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• <strong>Услуги:</strong> Добавляйте и удаляйте услуги. Изменения сохраняются в браузере.</li>
                    <li>• <strong>Контакты:</strong> Обновляйте контактную информацию для сайта.</li>
                    <li>• <strong>Экспорт:</strong> Скачивайте резервную копию всех данных в JSON формате.</li>
                    <li>• <strong>Пароль по умолчанию:</strong> addtuning2024</li>
                  </ul>
                </div>
                <div className="p-4 border border-yellow-500/20 bg-yellow-500/5 rounded-lg">
                  <h3 className="font-medium mb-2 flex items-center gap-2">
                    <Icon name="AlertTriangle" size={18} className="text-yellow-500" />
                    Важно:
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Данные хранятся в браузере (localStorage). При очистке кэша браузера данные будут удалены. 
                    Регулярно делайте экспорт данных для резервного копирования.
                  </p>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Admin;
