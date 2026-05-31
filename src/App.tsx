import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { AuthProvider } from "@/contexts/AuthContext";
import ProtectedRoute from "@/components/auth/ProtectedRoute";

// Public pages
import Index from "./pages/Index";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import EquipeDirecteante from "./pages/EquipeDirecteante";
import EtudesDeCas from "./pages/EtudesDeCas";
import Insights from "./pages/Insights";
import MedicamentArticle from "./pages/MedicamentArticle";
import NotFound from "./pages/NotFound";

// Auth pages
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import ForgotPassword from "./pages/auth/ForgotPassword";

// Back-office pages
import AdminDashboard from "./pages/admin/AdminDashboard";
import ContactRequests from "./pages/admin/ContactRequests";
import LinkedInManager from "./pages/admin/LinkedInManager";
import Collaborateurs from "./pages/collaborateurs/Collaborateurs";
import PortailClient from "./pages/client/PortailClient";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <LanguageProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              {/* Public site */}
              <Route path="/" element={<Index />} />
              <Route path="/domaines-expertise" element={<Services />} />
              <Route path="/about" element={<About />} />
              <Route path="/a-propos" element={<About />} />
              <Route path="/equipe-dirigeante" element={<EquipeDirecteante />} />
              <Route path="/perspectives-mondiales" element={<Insights />} />
              <Route path="/perspectives-mondiales/cout-medicaments-maroc" element={<MedicamentArticle />} />
              <Route path="/etudes-de-cas" element={<EtudesDeCas />} />
              <Route path="/contact" element={<Contact />} />

              {/* Auth */}
              <Route path="/auth/login" element={<Login />} />
              <Route path="/auth/signup" element={<Signup />} />
              <Route path="/auth/forgot" element={<ForgotPassword />} />

              {/* Admin + Collaborator area */}
              <Route
                path="/admin"
                element={
                  <ProtectedRoute allowedRoles={['admin', 'collaborator']}>
                    <AdminDashboard />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/admin/contacts"
                element={
                  <ProtectedRoute allowedRoles={['admin', 'collaborator']}>
                    <ContactRequests />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/admin/linkedin"
                element={
                  <ProtectedRoute allowedRoles={['admin', 'collaborator']}>
                    <LinkedInManager />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/collaborateurs"
                element={
                  <ProtectedRoute allowedRoles={['admin', 'collaborator']}>
                    <Collaborateurs />
                  </ProtectedRoute>
                }
              />

              {/* Client portal */}
              <Route
                path="/portail-client"
                element={
                  <ProtectedRoute allowedRoles={['client', 'admin', 'collaborator']}>
                    <PortailClient />
                  </ProtectedRoute>
                }
              />

              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </LanguageProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
