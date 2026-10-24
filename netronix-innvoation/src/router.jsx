import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./components/layout/RootLayout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import PortfolioPage from "./pages/PortfolioPage";
import TeamPage from "./pages/TeamPage";
import ContactPage from "./pages/ContactPage";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import AdminDashboard from "./pages/admin/AdminDashboard";

// Dedicated Service Pages
import WebDevelopment from "./pages/services/WebDevelopment";
import SoftwareDevelopment from "./pages/services/SoftwareDevelopment";
import MobileApp from "./pages/services/MobileApp";
import MarketingDesign from "./pages/services/MarketingDesign";
import NetworkingHosting from "./pages/services/NetworkingHosting";
import Consulting from "./pages/services/Consulting";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
      {
        path: "/portfolio",
        element: <PortfolioPage />,
      },
      {
        path: "/team",
        element: <TeamPage />,
      },
      {
        path: "/privacy-policy",
        element: <PrivacyPolicy />,
      },
      {
        path: "/admin",
        element: <AdminDashboard />,
      },

      // Services Hub & Portal
      {
        path: "/services",
        element: <ServicesPage />,
      },

      // 1. Web Development
      {
        path: "/services/web-development",
        element: <WebDevelopment />,
      },
      {
        path: "/web-development",
        element: <WebDevelopment />,
      },

      // 2. Software Development
      {
        path: "/services/software-development",
        element: <SoftwareDevelopment />,
      },
      {
        path: "/software-development",
        element: <SoftwareDevelopment />,
      },

      // 3. Mobile App Development
      {
        path: "/services/mobile-app",
        element: <MobileApp />,
      },
      {
        path: "/services/mobile-app-development",
        element: <MobileApp />,
      },
      {
        path: "/mobile-app",
        element: <MobileApp />,
      },

      // 4. Marketing & UI/UX Design
      {
        path: "/services/ui-ux-design",
        element: <MarketingDesign />,
      },
      {
        path: "/services/marketing-design",
        element: <MarketingDesign />,
      },
      {
        path: "/services/design-marketing",
        element: <MarketingDesign />,
      },
      {
        path: "/services/marketing-ui-ux",
        element: <MarketingDesign />,
      },
      {
        path: "/services/graphic-design",
        element: <MarketingDesign />,
      },
      {
        path: "/services/digital-marketing",
        element: <MarketingDesign />,
      },
      {
        path: "/services/branding-logo",
        element: <MarketingDesign />,
      },

      // 5. Networking and Hosting
      {
        path: "/services/networking",
        element: <NetworkingHosting />,
      },
      {
        path: "/services/networking-hosting",
        element: <NetworkingHosting />,
      },
      {
        path: "/services/networking-hosting-cctv",
        element: <NetworkingHosting />,
      },
      {
        path: "/services/cloud-hosting",
        element: <NetworkingHosting />,
      },
      {
        path: "/services/domain-email-hosting",
        element: <NetworkingHosting />,
      },
      {
        path: "/services/cctv-installation",
        element: <NetworkingHosting />,
      },

      // 6. Consulting & Support
      {
        path: "/services/consulting",
        element: <Consulting />,
      },
      {
        path: "/services/it-support",
        element: <Consulting />,
      },
      {
        path: "/services/it-consulting-support",
        element: <Consulting />,
      },

      // Dynamic sub-service fallback
      {
        path: "/services/:serviceId",
        element: <ServicesPage />,
      },
    ],
  },
]);

export default router;