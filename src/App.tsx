import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import AdminRoute from "@/components/auth/AdminRoute";
import SeoManager from "@/components/SeoManager";
import ConversionTracker from "@/components/ConversionTracker";

// Public pages
import Index from "./pages/Index";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import EquipeDirecteante from "./pages/EquipeDirecteante";
import EtudesDeCas from "./pages/EtudesDeCas";
import Insights from "./pages/Insights";
import MedicamentArticle from "./pages/MedicamentArticle";
import InsightArticle from "./pages/InsightArticle";
import EnServiceLanding from "./pages/EnServiceLanding";
import NotFound from "./pages/NotFound";
import ThankYou from "./pages/ThankYou";
import ServiceLanding from "./pages/ServiceLanding";

// Auth pages
import Login from "./pages/auth/Login";

// Back-office pages
import AdminDashboard from "./pages/admin/AdminDashboard";
import ContactRequests from "./pages/admin/ContactRequests";
import LinkedInManager from "./pages/admin/LinkedInManager";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <SeoManager />
            <ConversionTracker />
            <Routes>
              {/* Public site */}
              <Route path="/" element={<Index />} />
              <Route path="/domaines-expertise" element={<Services />} />
              <Route path="/about" element={<About />} />
              <Route path="/a-propos" element={<About />} />
              <Route path="/equipe-dirigeante" element={<EquipeDirecteante />} />
              <Route path="/perspectives-mondiales" element={<Insights />} />
              <Route path="/perspectives-mondiales/cout-medicaments-maroc" element={<MedicamentArticle />} />
              <Route path="/perspectives-mondiales/:slug" element={<InsightArticle />} />
              <Route path="/en/:slug" element={<EnServiceLanding />} />
              <Route path="/etudes-de-cas" element={<EtudesDeCas />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/merci" element={<ThankYou />} />
              <Route path="/:slug" element={<ServiceLanding />} />

              {/* Back-office (Netlify Functions + Blobs, mono-utilisateur) */}
              <Route path="/admin/login" element={<Login />} />
              <Route path="/auth/login" element={<Navigate to="/admin/login" replace />} />
              <Route path="/admin" element={<AdminRoute><AdminDashboard /></AdminRoute>} />
              <Route path="/admin/contacts" element={<AdminRoute><ContactRequests /></AdminRoute>} />
              <Route path="/admin/linkedin" element={<AdminRoute><LinkedInManager /></AdminRoute>} />
              <Route path="/collaborateurs" element={<Navigate to="/admin" replace />} />
              <Route path="/portail-client" element={<Navigate to="/admin" replace />} />

              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </LanguageProvider>
  </QueryClientProvider>
);

export default App;
