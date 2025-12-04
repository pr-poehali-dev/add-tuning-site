import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import type { SiteSettings } from '../AdminTypes';

interface SettingsTabProps {
  siteSettings: SiteSettings;
  setSiteSettings: (value: SiteSettings) => void;
  saveSettings: () => void;
}

const SettingsTab = ({
  siteSettings,
  setSiteSettings,
  saveSettings,
}: SettingsTabProps) => {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Настройки сайта</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="text-sm font-medium mb-2 block">Название сайта</label>
            <Input
              value={siteSettings.siteName}
              onChange={(e) => setSiteSettings({ ...siteSettings, siteName: e.target.value })}
            />
          </div>
          <div>
            <label className="text-sm font-medium mb-2 block">Описание сайта</label>
            <Textarea
              value={siteSettings.siteDescription}
              onChange={(e) => setSiteSettings({ ...siteSettings, siteDescription: e.target.value })}
              rows={2}
            />
          </div>
          <div>
            <label className="text-sm font-medium mb-2 block">Главный заголовок</label>
            <Input
              value={siteSettings.mainTitle}
              onChange={(e) => setSiteSettings({ ...siteSettings, mainTitle: e.target.value })}
            />
          </div>
          <div>
            <label className="text-sm font-medium mb-2 block">Подзаголовок</label>
            <Input
              value={siteSettings.mainSubtitle}
              onChange={(e) => setSiteSettings({ ...siteSettings, mainSubtitle: e.target.value })}
            />
          </div>
          <div className="grid sm:grid-cols-3 gap-4">
            <div>
              <label className="text-sm font-medium mb-2 block">Опыт</label>
              <Input
                value={siteSettings.experience}
                onChange={(e) => setSiteSettings({ ...siteSettings, experience: e.target.value })}
              />
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Кол-во авто</label>
              <Input
                value={siteSettings.carsCount}
                onChange={(e) => setSiteSettings({ ...siteSettings, carsCount: e.target.value })}
              />
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Гарантия</label>
              <Input
                value={siteSettings.warranty}
                onChange={(e) => setSiteSettings({ ...siteSettings, warranty: e.target.value })}
              />
            </div>
          </div>
          <Button onClick={saveSettings} className="w-full">
            <Icon name="Save" size={16} className="mr-2" />
            Сохранить настройки
          </Button>
        </CardContent>
      </Card>

      <Card className="bg-primary/5">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Icon name="Info" size={20} className="text-primary" />
            Информация
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 text-sm">
          <p><strong>Управление данными:</strong> Все изменения сохраняются локально в браузере.</p>
          <p><strong>Экспорт/Импорт:</strong> Регулярно сохраняйте резервные копии через кнопку «Экспорт».</p>
          <p><strong>Безопасность:</strong> Пароль: addtuning2024</p>
          <p><strong>Данные:</strong> При очистке кэша браузера все данные будут удалены.</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default SettingsTab;
