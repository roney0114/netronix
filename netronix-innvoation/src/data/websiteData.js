/**
 * Netronix Innovation - Centralized Website Dataset
 * 
 * All content for the website is stored here in a clear, easy-to-read format.
 * You can modify any text, service, portfolio project, or skill here directly.
 */

export const websiteData = {
  company: {
    name: "Netronix Innovation",
    brandDot: ".",
    tagline: "Empowering Businesses Through Next-Gen Tech & Digital Solutions",
    description:
      "Netronix Innovation delivers high-performance web development, enterprise software, MikroTik networking, cloud hosting, IT support, and visual brand identity solutions across Nepal and globally.",
    email: "contact@netronixinnovation.com",
    phone: "+977-9767468934",
    location: "Chitwan, Nepal",
    address: "Bharatpur-10, Chitwan, Bagmati Province, Nepal",
    supportHours: "24/7 Remote & Emergency Tech Support",
    officeHours: "Sun - Fri: 9:00 AM - 6:00 PM",
    availability: "Available for New Projects & Enterprise Partnerships",
    logoUrl: "/logo.png",
    hero: {
      badgeText: "Available for Work",
      headlinePrefix: "Architecting the Future of",
      headlineHighlight: "Digital & IT Infrastructure",
      subtitle:
        "We engineer high-performance web applications, enterprise software, MikroTik network systems, cloud hosting, and creative brand designs built for modern business growth.",
      primaryCtaText: "⚡ Explore Services",
      primaryCtaLink: "#services",
      secondaryCtaText: "Get Free Quote",
      secondaryCtaLink: "#contact",
      stats: [
        { label: "Projects Completed", value: "35+" },
        { label: "Happy Clients", value: "25+" },
        { label: "Uptime Support", value: "99.9%" },
        { label: "Client Rating", value: "5.0 ★" },
      ],
      floatingBadges: [
        { icon: "🚀", title: "35+ Delivered", subtitle: "Web & IT Solutions" },
        { icon: "⭐", title: "5.0 Rating", subtitle: "Client Satisfaction" },
        { icon: "⚡", title: "24/7 Support", subtitle: "Instant Assistance" },
      ],
      clientLogos: [
        "Footstep Nepal",
        "Ashakapaila",
        "Ankuram Academy",
        "A&B Hospital",
        "Royal King",
        "Bagaincha Resort",
        "Kalika Tech",
        "Nava Jiban",
      ],
    },
    socialLinks: {
      facebook: "https://facebook.com",
      linkedin: "https://linkedin.com",
      github: "https://github.com/git07Sandesh",
      instagram: "https://instagram.com",
      whatsapp: "https://wa.me/9779767468934",
    },
  },

  about: {
    badgeText: "ABOUT NETRONIX INNOVATION",
    headlineMain: "We Don't Just Build Technology.",
    headlineHighlight: "We Build Possibilities.",
    subtitle:
      "Netronix Innovation is a premier technology & IT consulting company in Nepal. We combine web engineering, enterprise networking, cloud deployment, IT support, and creative design into seamless digital experiences.",
    story:
      "Founded with a passion for digital excellence, Netronix Innovation has grown into a trusted technology partner for corporations, healthcare providers, educational institutions, and emerging startups.",
    yearsExperience: "5+",
    experienceText: "Years of Tech Excellence",
    mission: "To empower organizations with reliable, scalable, and cutting-edge digital infrastructure and software solutions.",
    vision: "To be the most trusted technology innovation partner for growing enterprises in Nepal and globally.",
    focusPoints: [
      {
        id: "fp-1",
        icon: "FaLightbulb",
        title: "Innovation",
        desc: "Modern technology stacks and forward-thinking system architectures.",
      },
      {
        id: "fp-2",
        icon: "FaShieldAlt",
        title: "Reliability",
        desc: "Secure, stable, and battle-tested IT and networking solutions.",
      },
      {
        id: "fp-3",
        icon: "FaPaintBrush",
        title: "Creativity",
        desc: "Human-centered UI/UX design and captivating brand identities.",
      },
      {
        id: "fp-4",
        icon: "FaChartLine",
        title: "Scalable Growth",
        desc: "Architectures engineered to scale seamlessly as your business expands.",
      },
    ],
    highlights: [
      "Custom Full-Stack Web Development",
      "Enterprise MikroTik & Fiber Networking",
      "High-Performance Cloud & VPS Hosting",
      "24/7 Managed IT Infrastructure Support",
      "Strategic Visual Branding & UI/UX",
    ],
  },

  skills: {
    badgeText: "OUR TECHNICAL CAPABILITIES",
    headlineMain: "Mastery Across Modern",
    headlineHighlight: "Technologies & Infrastructure",
    subtitle:
      "Our team brings together expertise in full-stack web platforms, network engineering, cloud hosting, and design systems.",
    categories: [
      {
        name: "Full-Stack Web Development",
        icon: "FaCode",
        level: "95%",
        desc: "React, Next.js, Node.js, Express, JavaScript/TypeScript, REST APIs, Tailwind CSS.",
        progress: 95,
        tags: ["React", "Vite", "Node.js", "Express", "REST API", "Tailwind CSS", "MongoDB"],
      },
      {
        name: "Networking & System Security",
        icon: "FaNetworkWired",
        level: "90%",
        desc: "MikroTik RouterOS, VLANs, VPN Server Setup, Fiber Optic Networks, Firewall Configuration.",
        progress: 90,
        tags: ["MikroTik", "VLAN", "IPsec VPN", "Cisco", "Firewall", "Fiber Optic", "Bandwidth Management"],
      },
      {
        name: "Cloud Hosting & DevOps",
        icon: "FaCloud",
        level: "88%",
        desc: "Linux Server Administration (Ubuntu/Debian), Nginx, VPS Hosting, SSL Security, DNS Management.",
        progress: 88,
        tags: ["Ubuntu Linux", "Nginx", "VPS", "Cloudflare", "SSL/TLS", "cPanel", "Docker"],
      },
      {
        name: "UI/UX & Graphic Branding",
        icon: "FaPalette",
        level: "92%",
        desc: "Figma UI Prototypes, Brand Identity, Logo Design, Corporate Collaterals, Social Media Graphics.",
        progress: 92,
        tags: ["Figma", "Photoshop", "Illustrator", "Brand Guides", "UI/UX Design", "Vector Graphics"],
      },
    ],
  },

  services: [
    {
      id: "web-development",
      category: "Web Development",
      categorySlug: "web",
      title: "Custom Web Application & Portal Development",
      shortDesc: "High-speed, SEO-optimized, responsive web applications built with modern frontend & backend technologies.",
      icon: "FaCode",
      badge: "Popular",
      deliverables: [
        "Modern Responsive React / Vite Frontend Design",
        "SEO Optimization & Fast Load Speed",
        "Interactive Admin Dashboards & Content Management",
        "E-Commerce & Payment Gateway Integration",
        "API Development & Database Integration",
      ],
      fullDesc:
        "Netronix Innovation creates custom websites and complex web applications tailored precisely to your business objectives. From corporate web portals to high-traffic web applications, our web development services ensure security, speed, and exceptional user experience.",
    },
    {
      id: "software-development",
      category: "Software Solutions",
      categorySlug: "software",
      title: "Enterprise Software & ERP Solutions",
      shortDesc: "Bespoke desktop and enterprise web software built for automation, workflow management, and scalability.",
      icon: "FaLaptopCode",
      badge: "Enterprise",
      deliverables: [
        "Custom ERP & CRM Management Systems",
        "Automated Business Workflow Tools",
        "Database Architecture & Data Management",
        "Secure Role-Based Access Control",
        "System Maintenance & Continuous Support",
      ],
      fullDesc:
        "Streamline your operations with our custom software solutions. We build enterprise management systems, inventory software, and client relationship portals designed to digitize manual processes and drive productivity.",
    },
    {
      id: "networking",
      category: "Network Engineering",
      categorySlug: "networking",
      title: "MikroTik Networking & Fiber Infrastructure",
      shortDesc: "Complete network topology setup, MikroTik RouterOS configuration, VLAN segmentation, and enterprise WiFi.",
      icon: "FaNetworkWired",
      badge: "Infrastructure",
      deliverables: [
        "MikroTik RouterOS Setup & Bandwidth Management",
        "Enterprise Fiber Optic & LAN Network Cabling",
        "VLAN Isolation & Security Firewall Rules",
        "Site-to-Site VPN & Remote Access Configuration",
        "Network Traffic Monitoring & Maintenance",
      ],
      fullDesc:
        "We design and deploy robust, high-speed network infrastructures for offices, hospitals, resorts, and campuses. Our certified network engineers ensure 99.9% network uptime and secure data transmission.",
    },
    {
      id: "cloud-hosting",
      category: "Cloud Solutions",
      categorySlug: "cloud",
      title: "Cloud Server Hosting & Managed Migration",
      shortDesc: "Reliable Linux VPS hosting, domain management, SSL security certificates, and automated cloud backups.",
      icon: "FaCloud",
      badge: "Cloud Tech",
      deliverables: [
        "Linux VPS Setup (Ubuntu / Debian / AlmaLinux)",
        "Nginx / Apache Server Optimization",
        "Free SSL Certificates & Security Hardening",
        "Corporate Business Email Server Setup",
        "24/7 Server Monitoring & Daily Backups",
      ],
      fullDesc:
        "Keep your web applications fast, safe, and online 24/7. Our cloud hosting services provide dedicated server environments with automated backup routines, DDoS protection, and SSL encryption.",
    },
    {
      id: "graphic-design",
      category: "Creative Branding",
      categorySlug: "design",
      title: "Brand Identity & UI/UX Graphic Design",
      shortDesc: "Stunning corporate brand logos, UI/UX designs, marketing banners, and visual design assets.",
      icon: "FaPalette",
      badge: "Creative",
      deliverables: [
        "Official Logo Design & Brand Identity Kits",
        "Figma Web & Mobile App UI/UX Mockups",
        "Social Media Banners & Marketing Collaterals",
        "Print Media (Business Cards, Brochures, Flyers)",
        "Vector Graphics & Motion Assets",
      ],
      fullDesc:
        "Make a powerful first impression with Netronix's graphic design services. We craft cohesive visual identities that resonate with your target audience and reflect your brand's core values.",
    },
    {
      id: "it-support",
      category: "IT Support",
      categorySlug: "support",
      title: "24/7 Managed IT Support & Infrastructure Maintenance",
      shortDesc: "Round-the-clock technical troubleshooting, hardware/software maintenance, and emergency IT consultation.",
      icon: "FaHeadset",
      badge: "Support 24/7",
      deliverables: [
        "Remote & On-Site Technical Troubleshooting",
        "Hardware & Computer System Maintenance",
        "Data Backup & Disaster Recovery Solutions",
        "Antivirus & Endpoint Security Management",
        "Dedicated Monthly IT Helpdesk Contracts",
      ],
      fullDesc:
        "Never worry about IT downtime again. Our managed IT support team acts as your in-house technical support unit, offering immediate assistance for hardware, software, and network issues.",
    },
  ],

  portfolio: [
    {
      id: "proj-1",
      title: "Footstep Nepal Educational Portal",
      category: "Web Application",
      categorySlug: "web",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
      description: "A comprehensive web portal for educational consultation and student application tracking in Nepal.",
      tags: ["React", "Tailwind CSS", "Node.js", "MongoDB"],
      liveUrl: "#",
      featured: true,
    },
    {
      id: "proj-2",
      title: "A&B Hospital Enterprise Network",
      category: "Networking & Security",
      categorySlug: "networking",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
      description: "High-speed multi-floor hospital network setup with VLAN isolation, MikroTik bandwidth control, and secure VoIP.",
      tags: ["MikroTik", "VLAN", "Fiber Optic", "Firewall"],
      liveUrl: "#",
      featured: true,
    },
    {
      id: "proj-3",
      title: "Bagaincha Resort Booking Engine",
      category: "Web & Cloud Hosting",
      categorySlug: "web",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
      description: "Modern resort website featuring real-time room availability, online reservation, and cloud server deployment.",
      tags: ["React", "Nginx Cloud VPS", "SSL", "Tailwind CSS"],
      liveUrl: "#",
      featured: true,
    },
    {
      id: "proj-4",
      title: " Platform",
      category: "Software & Web",
      categorySlug: "software",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80",
      description: "Online preparation portal with timed mock tests, result analytics, and automated certificate generation.",
      tags: ["React", "Express API", "PostgreSQL", "Cloudflare"],
      liveUrl: "#",
      featured: false,
    },
    {
      id: "proj-5",
      title: "Kalika Tech Corporate Branding",
      category: "Brand Identity",
      categorySlug: "design",
      image: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=800&q=80",
      description: "Complete visual identity design package including vector logo, color guidelines, typography, and stationery.",
      tags: ["Figma", "Illustrator", "Photoshop", "Brand Guide"],
      liveUrl: "#",
      featured: false,
    },
    {
      id: "proj-6",
      title: "Nava Jiban Health IT Infrastructure",
      category: "IT Support & Cloud",
      categorySlug: "support",
      image: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=800&q=80",
      description: "Managed IT support contract, server maintenance, endpoint security installation, and automated remote backups.",
      tags: ["Linux Server", "IT Helpdesk", "Endpoint Security", "Backups"],
      liveUrl: "#",
      featured: false,
    },
  ],

  testimonials: [
    {
      quote:
        "Netronix Innovation transformed our hospital's network setup completely. Their MikroTik configuration solved our multi-floor connection drops instantly. 100% recommended!",
      author: "Dr. A. Sharma",
      role: "Director",
      company: "A&B Hospital, Chitwan",
      rating: 5,
    },
    {
      quote:
        "The team built our web platform faster than expected with top-tier user experience. Their post-launch support and cloud hosting management have been exceptional.",
      author: "Sandesh Bhattarai",
      role: "Lead Tech Consultant",
      company: "Footstep Nepal",
      rating: 5,
    },
    {
      quote:
        "Professional, creative, and reliable. Netronix handles our branding, graphic design, and website updates seamlessly. They are our go-to IT partner in Nepal.",
      author: "Raman Shrestha",
      role: "Managing Director",
      company: "Bagaincha Resort",
      rating: 5,
    },
  ],

  faqs: [
    {
      question: "What services does Netronix Innovation provide?",
      answer:
        "We specialize in Custom Web Development, Enterprise Software Solutions, MikroTik Networking & Fiber Setup, Linux Cloud VPS Hosting, Graphic Design & Branding, and 24/7 Managed IT Support.",
    },
    {
      question: "Where is Netronix Innovation located?",
      answer:
        "Our head office is located in Bharatpur-10, Chitwan, Nepal. However, we serve clients remotely across all 7 provinces of Nepal as well as international clients.",
    },
    {
      question: "Can I request a custom web application or software?",
      answer:
        "Yes! We build fully customized software and web applications tailored specifically to your workflow, database requirements, and target audience.",
    },
    {
      question: "How do you handle ongoing support after project launch?",
      answer:
        "We offer dedicated maintenance plans and 24/7 technical support for servers, websites, networks, and software applications to ensure maximum uptime.",
    },
  ],
};

export default websiteData;
