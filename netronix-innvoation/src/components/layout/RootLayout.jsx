import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { QuoteProvider } from "../../context/QuoteContext";
import { SiteProvider } from "../../context/SiteContext";
import Navbar from "./Navbar";
import Footer from "./Footer";
import QuoteModal from "../common/QuoteModal";
import ScrollToTop from "../common/ScrollToTop";

const routeTitles = {
  "/": "Netronix Innovation | #1 IT & Tech Solutions Company in Nepal",
  "/about": "About Netronix Innovation | We Build Possibilities",
  "/services": "Services & Solutions Portal | Netronix Innovation",
  "/services/web-development": "Website & Web Application Development | Netronix Innovation",
  "/web-development": "Website & Web Application Development | Netronix Innovation",
  "/services/software-development": "Enterprise Software & ERP Development | Netronix Innovation",
  "/software-development": "Enterprise Software & ERP Development | Netronix Innovation",
  "/services/mobile-app": "Mobile Application Development (iOS & Android) | Netronix Innovation",
  "/services/mobile-app-development": "Mobile Application Development | Netronix Innovation",
  "/mobile-app": "Mobile Application Development | Netronix Innovation",
  "/services/ui-ux-design": "Marketing & UI/UX Design | Netronix Innovation",
  "/services/marketing-ui-ux": "Marketing & UI/UX Design | Netronix Innovation",
  "/services/graphic-design": "Marketing & UI/UX Design | Netronix Innovation",
  "/services/digital-marketing": "Marketing & UI/UX Design | Netronix Innovation",
  "/services/networking": "Networking Solutions & Hosting | Netronix Innovation",
  "/services/networking-hosting": "Networking Solutions & Hosting | Netronix Innovation",
  "/services/cloud-hosting": "Networking Solutions & Cloud Hosting | Netronix Innovation",
  "/services/consulting": "Strategic IT Consulting & Support | Netronix Innovation",
  "/services/it-support": "Strategic IT Consulting & Support | Netronix Innovation",
  "/portfolio": "Our Portfolio & Works | Netronix Innovation",
  "/team": "Our Leadership & Engineering Team | Netronix Innovation",
  "/contact": "Contact Us | Netronix Innovation",
  "/privacy-policy": "Privacy Policy & Compliance | Netronix Innovation",
  "/admin": "Admin Dashboard | Netronix Innovation",
};

export default function RootLayout() {
  const location = useLocation();

  useEffect(() => {
    const title = routeTitles[location.pathname] || "Netronix Innovation | Smart IT Solutions";
    document.title = title;
  }, [location.pathname]);

  return (
    <SiteProvider>
      <QuoteProvider>
        <div className="bg-[#070B16] text-white min-h-screen flex flex-col font-sans selection:bg-[#1C9773] selection:text-white">
          <ScrollToTop />
          <Navbar />
          <main className="flex-grow">
            <Outlet />
          </main>
          <Footer />
          <QuoteModal />
        </div>
      </QuoteProvider>
    </SiteProvider>
  );
}
