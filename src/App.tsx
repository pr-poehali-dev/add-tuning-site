
import { useEffect, lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation, Navigate } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import Home from "./pages/Home";

const Services = lazy(() => import("./pages/Services"));
const Price = lazy(() => import("./pages/Price"));
const Portfolio = lazy(() => import("./pages/Portfolio"));
const Reviews = lazy(() => import("./pages/Reviews"));
const FAQ = lazy(() => import("./pages/FAQ"));
const Contacts = lazy(() => import("./pages/Contacts"));
const Myths = lazy(() => import("./pages/Myths"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const NotFound = lazy(() => import("./pages/NotFound"));
const CookieConsent = lazy(() => import("./components/CookieConsent"));

const queryClient = new QueryClient();

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
};

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div></div>}>
          <CookieConsent />
        </Suspense>
        <BrowserRouter>
          <ScrollToTop />
          <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div></div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/price" element={<Price />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/reviews" element={<Reviews />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/myths" element={<Myths />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              <Route path="/contacts" element={<Contacts />} />
              
              {/* SEO redirects */}
              <Route path="/service" element={<Navigate to="/services" replace />} />
              <Route path="/service/*" element={<Navigate to="/services" replace />} />
              <Route path="/pricing" element={<Navigate to="/price" replace />} />
              <Route path="/contact" element={<Navigate to="/contacts" replace />} />
              <Route path="/about" element={<Navigate to="/" replace />} />
              
              {/* 404 */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;