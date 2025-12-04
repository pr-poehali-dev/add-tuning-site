import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';
import type {
  ServiceItem,
  Review,
  PortfolioItem,
  FAQItem,
  BlogPost,
  ContactInfo,
  SiteSettings,
} from './AdminTypes';

interface AdminActionsProps {
  services: ServiceItem[];
  reviews: Review[];
  portfolio: PortfolioItem[];
  faqItems: FAQItem[];
  blogPosts: BlogPost[];
  contactInfo: ContactInfo;
  siteSettings: SiteSettings;
  saveServices: (data: ServiceItem[]) => void;
  saveReviews: (data: Review[]) => void;
  savePortfolio: (data: PortfolioItem[]) => void;
  saveFAQ: (data: FAQItem[]) => void;
  saveBlog: (data: BlogPost[]) => void;
  setContactInfo: (data: ContactInfo) => void;
  setSiteSettings: (data: SiteSettings) => void;
  handleLogout: () => void;
}

const AdminActions = ({
  services,
  reviews,
  portfolio,
  faqItems,
  blogPosts,
  contactInfo,
  siteSettings,
  saveServices,
  saveReviews,
  savePortfolio,
  saveFAQ,
  saveBlog,
  setContactInfo,
  setSiteSettings,
  handleLogout,
}: AdminActionsProps) => {
  const { toast } = useToast();

  const exportData = () => {
    const data = {
      services,
      reviews,
      portfolio,
      faq: faqItems,
      blog: blogPosts,
      contacts: contactInfo,
      settings: siteSettings,
      exportDate: new Date().toISOString()
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `add-tuning-backup-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    toast({
      title: 'Экспорт завершен',
      description: 'Файл резервной копии загружен',
    });
  };

  const importData = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const data = JSON.parse(e.target?.result as string);
        if (data.services) saveServices(data.services);
        if (data.reviews) saveReviews(data.reviews);
        if (data.portfolio) savePortfolio(data.portfolio);
        if (data.faq) saveFAQ(data.faq);
        if (data.blog) saveBlog(data.blog);
        if (data.contacts) {
          setContactInfo(data.contacts);
          localStorage.setItem('admin_contacts', JSON.stringify(data.contacts));
        }
        if (data.settings) {
          setSiteSettings(data.settings);
          localStorage.setItem('admin_settings', JSON.stringify(data.settings));
        }
        toast({
          title: 'Импорт завершен',
          description: 'Данные успешно загружены',
        });
      } catch {
        toast({
          title: 'Ошибка импорта',
          description: 'Неверный формат файла',
          variant: 'destructive',
        });
      }
    };
    reader.readAsText(file);
  };

  return (
    <div className="flex gap-2 flex-wrap">
      <label htmlFor="import-file">
        <Button variant="outline" size="sm" asChild>
          <span className="cursor-pointer">
            <Icon name="Upload" size={16} className="mr-2" />
            Импорт
          </span>
        </Button>
      </label>
      <input
        id="import-file"
        type="file"
        accept=".json"
        onChange={importData}
        className="hidden"
      />
      <Button onClick={exportData} variant="outline" size="sm">
        <Icon name="Download" size={16} className="mr-2" />
        Экспорт
      </Button>
      <Button onClick={handleLogout} variant="outline" size="sm">
        <Icon name="LogOut" size={16} className="mr-2" />
        Выйти
      </Button>
    </div>
  );
};

export default AdminActions;
