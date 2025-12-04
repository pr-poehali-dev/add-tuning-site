import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet-async';
import AdminLogin from '@/components/admin/AdminLogin';
import AdminTabs from '@/components/admin/AdminTabs';
import AdminActions from '@/components/admin/AdminActions';
import { useAdminAuth } from '@/hooks/useAdminAuth';
import { useAdminData } from '@/hooks/useAdminData';

const Admin = () => {
  const {
    password,
    setPassword,
    isAuthenticated,
    loginAttempts,
    isBlocked,
    handleLogin,
    handleLogout,
  } = useAdminAuth();

  const {
    services,
    reviews,
    portfolio,
    faqItems,
    blogPosts,
    contactInfo,
    siteSettings,
    newService,
    newReview,
    newPortfolio,
    newFAQ,
    newBlogPost,
    setNewService,
    setNewReview,
    setNewPortfolio,
    setNewFAQ,
    setNewBlogPost,
    setContactInfo,
    setSiteSettings,
    addService,
    deleteService,
    updateService,
    addReview,
    deleteReview,
    updateReview,
    addPortfolio,
    deletePortfolio,
    updatePortfolio,
    addFAQ,
    deleteFAQ,
    updateFAQ,
    addBlogPost,
    deleteBlogPost,
    updateBlogPost,
    saveContacts,
    saveSettings,
    saveServices,
    saveReviews,
    savePortfolio,
    saveFAQ,
    saveBlog,
  } = useAdminData(isAuthenticated);

  if (!isAuthenticated) {
    return (
      <>
        <Helmet>
          <title>Вход в админ-панель — ADD Tuning</title>
          <meta name="robots" content="noindex, nofollow, noarchive, nosnippet, noodp, noydir" />
          <meta name="googlebot" content="noindex, nofollow" />
          <meta name="bingbot" content="noindex, nofollow" />
          <meta name="yandex" content="noindex, nofollow" />
          <meta httpEquiv="X-Robots-Tag" content="noindex, nofollow" />
        </Helmet>
        <AdminLogin 
          password={password} 
          setPassword={setPassword} 
          handleLogin={handleLogin}
          isBlocked={isBlocked}
          attemptsLeft={5 - loginAttempts}
        />
      </>
    );
  }

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Админ-панель — ADD Tuning</title>
        <meta name="robots" content="noindex, nofollow, noarchive, nosnippet, noodp, noydir" />
        <meta name="googlebot" content="noindex, nofollow" />
        <meta name="bingbot" content="noindex, nofollow" />
        <meta name="yandex" content="noindex, nofollow" />
        <meta httpEquiv="X-Robots-Tag" content="noindex, nofollow" />
      </Helmet>
      <Header />
      
      <section className="pt-24 sm:pt-32 pb-12 sm:pb-20 px-4 bg-gradient-to-br from-background via-background to-primary/5">
        <div className="container mx-auto max-w-7xl">
          <div className="flex justify-between items-center mb-8 flex-wrap gap-4">
            <h1 className="text-3xl sm:text-4xl font-bold">Админ-панель</h1>
            <AdminActions
              services={services}
              reviews={reviews}
              portfolio={portfolio}
              faqItems={faqItems}
              blogPosts={blogPosts}
              contactInfo={contactInfo}
              siteSettings={siteSettings}
              saveServices={saveServices}
              saveReviews={saveReviews}
              savePortfolio={savePortfolio}
              saveFAQ={saveFAQ}
              saveBlog={saveBlog}
              setContactInfo={setContactInfo}
              setSiteSettings={setSiteSettings}
              handleLogout={handleLogout}
            />
          </div>

          <AdminTabs
            services={services}
            newService={newService}
            setNewService={setNewService}
            addService={addService}
            deleteService={deleteService}
            updateService={updateService}
            reviews={reviews}
            newReview={newReview}
            setNewReview={setNewReview}
            addReview={addReview}
            deleteReview={deleteReview}
            updateReview={updateReview}
            portfolio={portfolio}
            newPortfolio={newPortfolio}
            setNewPortfolio={setNewPortfolio}
            addPortfolio={addPortfolio}
            deletePortfolio={deletePortfolio}
            updatePortfolio={updatePortfolio}
            faqItems={faqItems}
            newFAQ={newFAQ}
            setNewFAQ={setNewFAQ}
            addFAQ={addFAQ}
            deleteFAQ={deleteFAQ}
            updateFAQ={updateFAQ}
            blogPosts={blogPosts}
            newBlogPost={newBlogPost}
            setNewBlogPost={setNewBlogPost}
            addBlogPost={addBlogPost}
            deleteBlogPost={deleteBlogPost}
            updateBlogPost={updateBlogPost}
            contactInfo={contactInfo}
            setContactInfo={setContactInfo}
            saveContacts={saveContacts}
            siteSettings={siteSettings}
            setSiteSettings={setSiteSettings}
            saveSettings={saveSettings}
          />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Admin;
