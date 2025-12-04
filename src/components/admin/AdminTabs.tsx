import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ServicesTab from './tabs/ServicesTab';
import ReviewsTab from './tabs/ReviewsTab';
import PortfolioTab from './tabs/PortfolioTab';
import FAQTab from './tabs/FAQTab';
import BlogTab from './tabs/BlogTab';
import ContactsTab from './tabs/ContactsTab';
import SettingsTab from './tabs/SettingsTab';
import type { ServiceItem, Review, PortfolioItem, FAQItem, BlogPost, ContactInfo, SiteSettings } from './AdminTypes';

interface AdminTabsProps {
  services: ServiceItem[];
  newService: ServiceItem;
  setNewService: (value: ServiceItem) => void;
  addService: () => void;
  deleteService: (index: number) => void;
  updateService: (index: number, service: ServiceItem) => void;
  
  reviews: Review[];
  newReview: Review;
  setNewReview: (value: Review) => void;
  addReview: () => void;
  deleteReview: (index: number) => void;
  updateReview: (index: number, review: Review) => void;
  
  portfolio: PortfolioItem[];
  newPortfolio: PortfolioItem;
  setNewPortfolio: (value: PortfolioItem) => void;
  addPortfolio: () => void;
  deletePortfolio: (index: number) => void;
  updatePortfolio: (index: number, item: PortfolioItem) => void;
  
  faqItems: FAQItem[];
  newFAQ: FAQItem;
  setNewFAQ: (value: FAQItem) => void;
  addFAQ: () => void;
  deleteFAQ: (index: number) => void;
  updateFAQ: (index: number, item: FAQItem) => void;
  
  blogPosts: BlogPost[];
  newBlogPost: BlogPost;
  setNewBlogPost: (value: BlogPost) => void;
  addBlogPost: () => void;
  deleteBlogPost: (index: number) => void;
  updateBlogPost: (index: number, post: BlogPost) => void;
  
  contactInfo: ContactInfo;
  setContactInfo: (value: ContactInfo) => void;
  saveContacts: () => void;
  
  siteSettings: SiteSettings;
  setSiteSettings: (value: SiteSettings) => void;
  saveSettings: () => void;
}

const AdminTabs = ({
  services,
  newService,
  setNewService,
  addService,
  deleteService,
  updateService,
  reviews,
  newReview,
  setNewReview,
  addReview,
  deleteReview,
  updateReview,
  portfolio,
  newPortfolio,
  setNewPortfolio,
  addPortfolio,
  deletePortfolio,
  updatePortfolio,
  faqItems,
  newFAQ,
  setNewFAQ,
  addFAQ,
  deleteFAQ,
  updateFAQ,
  blogPosts,
  newBlogPost,
  setNewBlogPost,
  addBlogPost,
  deleteBlogPost,
  updateBlogPost,
  contactInfo,
  setContactInfo,
  saveContacts,
  siteSettings,
  setSiteSettings,
  saveSettings,
}: AdminTabsProps) => {
  return (
    <Tabs defaultValue="services" className="space-y-6">
      <TabsList className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-2">
        <TabsTrigger value="services">Услуги</TabsTrigger>
        <TabsTrigger value="reviews">Отзывы</TabsTrigger>
        <TabsTrigger value="portfolio">Портфолио</TabsTrigger>
        <TabsTrigger value="faq">FAQ</TabsTrigger>
        <TabsTrigger value="blog">Блог</TabsTrigger>
        <TabsTrigger value="contacts">Контакты</TabsTrigger>
        <TabsTrigger value="settings">Настройки</TabsTrigger>
      </TabsList>

      <TabsContent value="services">
        <ServicesTab
          services={services}
          newService={newService}
          setNewService={setNewService}
          addService={addService}
          deleteService={deleteService}
          updateService={updateService}
        />
      </TabsContent>

      <TabsContent value="reviews">
        <ReviewsTab
          reviews={reviews}
          newReview={newReview}
          setNewReview={setNewReview}
          addReview={addReview}
          deleteReview={deleteReview}
          updateReview={updateReview}
        />
      </TabsContent>

      <TabsContent value="portfolio">
        <PortfolioTab
          portfolio={portfolio}
          newPortfolio={newPortfolio}
          setNewPortfolio={setNewPortfolio}
          addPortfolio={addPortfolio}
          deletePortfolio={deletePortfolio}
          updatePortfolio={updatePortfolio}
        />
      </TabsContent>

      <TabsContent value="faq">
        <FAQTab
          faqItems={faqItems}
          newFAQ={newFAQ}
          setNewFAQ={setNewFAQ}
          addFAQ={addFAQ}
          deleteFAQ={deleteFAQ}
          updateFAQ={updateFAQ}
        />
      </TabsContent>

      <TabsContent value="blog">
        <BlogTab
          blogPosts={blogPosts}
          newBlogPost={newBlogPost}
          setNewBlogPost={setNewBlogPost}
          addBlogPost={addBlogPost}
          deleteBlogPost={deleteBlogPost}
          updateBlogPost={updateBlogPost}
        />
      </TabsContent>

      <TabsContent value="contacts">
        <ContactsTab
          contactInfo={contactInfo}
          setContactInfo={setContactInfo}
          saveContacts={saveContacts}
        />
      </TabsContent>

      <TabsContent value="settings">
        <SettingsTab
          siteSettings={siteSettings}
          setSiteSettings={setSiteSettings}
          saveSettings={saveSettings}
        />
      </TabsContent>
    </Tabs>
  );
};

export default AdminTabs;