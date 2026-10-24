import React from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  FaArrowLeft,
  FaArrowRight,
  FaLightbulb,
  FaShieldAlt,
  FaPaintBrush,
  FaChartLine,
  FaRocket,
  FaCogs,
  FaHandshake,
  FaCheckCircle,
  FaCheckDouble,
  FaCompass,
  FaBullseye,
  FaLayerGroup,

} from "react-icons/fa";
import { useQuoteModal } from "../context/QuoteContext";
import ParticleBackground from "../components/ui/ParticleBackground";
import aboutTeamImg from "../assets/about_team.png";
import netronixImg from "../assets/Netronix.jpg";

export default function AboutPage() {
  const { openQuoteModal } = useQuoteModal();

  const focusPoints = [
    {
      icon: FaLightbulb,
      title: "Innovation",
      color: "text-amber-400",
      borderColor: "hover:border-amber-500/50",
      desc: "We continuously explore modern technologies and creative approaches to build better solutions.",
    },
    {
      icon: FaShieldAlt,
      title: "Reliability",
      color: "text-emerald-400",
      borderColor: "hover:border-emerald-500/50",
      desc: "We focus on secure, stable, and dependable technology that businesses can trust.",
    },
    {
      icon: FaPaintBrush,
      title: "Creativity",
      color: "text-pink-400",
      borderColor: "hover:border-pink-500/50",
      desc: "We combine technology with creative thinking to produce experiences that stand out.",
    },
    {
      icon: FaChartLine,
      title: "Growth",
      color: "text-cyan-400",
      borderColor: "hover:border-cyan-500/50",
      desc: "We create scalable solutions that can grow alongside your business.",
    },
  ];

  const statNumbers = [
    { num: "6+", label: "Core Technology Services", color: "text-[#1C9773]" },
    { num: "100%", label: "Client-Focused Approach", color: "text-[#FF9112]" },
    { num: "24/7", label: "Technology Mindset", color: "text-cyan-400" },
    { num: "∞", label: "Ideas We Can Transform", color: "text-pink-400" },
  ];

  const uniquePillars = [
    {
      icon: FaLayerGroup,
      title: "One Company. Multiple Technology Solutions.",
      desc: "Instead of working with different providers for your website, software, hosting, network, IT support, and design, Netronix Innovation brings these essential services together.",
    },
    {
      icon: FaPaintBrush,
      title: "Technology + Creativity",
      desc: "We combine technical expertise with creative design to build solutions that are not only functional but also attractive and engaging.",
    },
    {
      icon: FaCogs,
      title: "Client-Centered Approach",
      desc: "Your requirements come first. We listen, understand, plan, and develop solutions based on your actual needs rather than forcing you into predefined packages.",
    },
    {
      icon: FaRocket,
      title: "Modern & Scalable Solutions",
      desc: "We use modern technologies and development practices to create solutions that can adapt as your business grows.",
    },
    {
      icon: FaHandshake,
      title: "Long-Term Partnership",
      desc: "Our relationship doesn't end when a project is delivered. We provide ongoing support, maintenance, improvements, and guidance whenever you need us.",
    },
  ];

  const promiseValues = [
    { title: "Integrity", desc: "Honest communication and transparent work." },
    { title: "Innovation", desc: "Modern ideas and technology-driven solutions." },
    { title: "Quality", desc: "Attention to detail and professional execution." },
    { title: "Support", desc: "Assistance beyond project delivery." },
    { title: "Growth", desc: "Solutions designed with your future in mind." },
  ];

  return (
    <div className="pt-24 bg-[#070B16] text-white min-h-screen">
      {/* Recommended Hero Section */}
      <section className="relative py-20 lg:py-28 overflow-hidden border-b border-slate-800/80">
        <ParticleBackground className="opacity-40" />

        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-gradient-to-b from-[#1C9773]/20 via-[#FF9112]/15 to-transparent rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="mb-6">
            <RouterLink
              to="/"
              className="inline-flex items-center gap-2 text-[#FF9112] hover:text-orange-400 font-semibold text-sm transition"
            >
              <FaArrowLeft /> Home
            </RouterLink>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/90 border border-teal-500/40 text-teal-400 text-xs md:text-sm font-bold shadow-lg shadow-teal-500/10 backdrop-blur-xl">
                <span className="w-2.5 h-2.5 rounded-full bg-teal-400 animate-ping" />
                Innovate. Connect. Transform.
              </div>

              <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight text-white">
                We Don't Just Build Technology. <br />
                <span className="bg-gradient-to-r from-[#FF9112] via-[#1C9773] to-amber-400 bg-clip-text text-transparent">
                  We Build Possibilities.
                </span>
              </h1>

              <p className="text-slate-300 text-base md:text-xl leading-relaxed">
                Netronix Innovation is a technology and digital solutions company delivering innovative web, software, cloud, networking, IT support, and creative design solutions for businesses and organizations.
              </p>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <RouterLink
                  to="/services"
                  className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#1C9773] to-[#15795C] hover:from-[#15795C] hover:to-[#1C9773] text-white font-bold text-base transition duration-300 shadow-xl shadow-teal-500/20 flex items-center gap-2 cursor-pointer hover:scale-105"
                >
                  Explore Our Services <FaArrowRight className="text-sm" />
                </RouterLink>

                <button
                  onClick={() => openQuoteModal("About Us Consultation")}
                  className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#FF9112] to-[#E57D06] hover:from-[#E57D06] hover:to-[#FF9112] text-white font-bold text-base transition duration-300 shadow-xl shadow-amber-500/20 cursor-pointer hover:scale-105"
                >
                  Let's Work Together
                </button>
              </div>
            </div>

            {/* Right Hero Image Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden border border-slate-800 shadow-2xl group">
                <img
                  src={aboutTeamImg}
                  alt="Netronix Innovation Technology Team"
                  className="w-full h-[420px] object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070B16] via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-slate-900/90 border border-slate-800 backdrop-blur-md">
                  <h4 className="text-sm font-bold text-white flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#1C9773]" /> Netronix Innovation Team
                  </h4>
                  <p className="text-xs text-slate-400 mt-1">
                    Turning ideas into reliable technology & digital experiences.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 border-b border-slate-800/80">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="rounded-3xl overflow-hidden border border-slate-800 shadow-2xl relative">
              <img
                src={netronixImg}
                alt="Netronix Innovation Operations"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070B16]/80 via-transparent to-transparent" />
            </div>
          </div>

          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#15795C]/10 text-[#1C9773] border border-[#15795C]/30 uppercase text-xs font-semibold tracking-widest">
              What We Do
            </span>

            <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">
              Technology Solutions <span className="text-[#FF9112]">Designed Around Real-World Needs</span>
            </h2>

            <p className="text-slate-300 text-base md:text-lg leading-relaxed">
              Netronix Innovation is a technology and digital solutions company focused on helping businesses, organizations, and individuals succeed in an increasingly digital world.
            </p>

            <p className="text-slate-400 text-sm md:text-base leading-relaxed">
              We bring together software development, web development, cloud hosting, networking, IT support, and graphic design under one roof. Our goal is to make technology simpler, more accessible, and more valuable for our clients.
            </p>

            <p className="text-slate-400 text-sm md:text-base leading-relaxed">
              From building modern websites and custom software to setting up reliable networks, managing cloud infrastructure, solving IT problems, and creating powerful visual identities, we provide practical solutions designed around real-world needs.
            </p>

            {/* Service Tags */}
            <div className="pt-2 flex flex-wrap gap-2 text-xs font-semibold text-[#1C9773]">
              {[
                "Web Development",
                "Software Development",
                "Networking & Hosting",
                "Mobile App Development",
                "UI/UX, Branding & Marketing",
                "IT consulting & Support",
              ].map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-slate-300 hover:border-[#1C9773] transition"
                >
                  • {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="max-w-7xl mx-auto px-6 py-20 border-b border-slate-800/80">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#FF9112]/10 text-[#FF9112] border border-[#FF9112]/30 uppercase text-xs font-semibold tracking-widest">
            Who We Are
          </span>
          <h2 className="mt-4 text-3xl md:text-5xl font-extrabold text-white">
            We Build Technology That <span className="text-[#1C9773]">Moves Businesses Forward</span>
          </h2>
          <p className="mt-6 text-slate-300 text-base md:text-lg leading-relaxed">
            At Netronix Innovation, we believe technology should do more than simply exist — it should create opportunities, solve problems, and help businesses grow.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-8 backdrop-blur-xl">
            <h3 className="text-xl font-bold text-white mb-3 text-[#FF9112]">
              01. Listen & Understand
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              We work closely with our clients to understand their goals, challenges, and ideas before developing solutions that fit their specific requirements.
            </p>
          </div>

          <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-8 backdrop-blur-xl">
            <h3 className="text-xl font-bold text-white mb-3 text-[#1C9773]">
              02. Tailored Execution
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Whether you're a startup building its first digital presence or an established business upgrading tech, we turn ideas into practical digital solutions.
            </p>
          </div>

          <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-8 backdrop-blur-xl">
            <h3 className="text-xl font-bold text-white mb-3 text-cyan-400">
              03. Long-Term Value
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Our engineering focus ensures stable performance, security, and continuous support that keeps your infrastructure moving smoothly.
            </p>
          </div>
        </div>
      </section>

      {/* Our Focus Grid */}
      <section className="max-w-7xl mx-auto px-6 py-20 border-b border-slate-800/80">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 uppercase text-xs font-semibold tracking-widest">
            Core Philosophy
          </span>
          <h2 className="mt-4 text-3xl md:text-5xl font-extrabold text-white">
            Our <span className="text-[#FF9112]">Focus</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {focusPoints.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className={`bg-slate-900/90 border border-slate-800 rounded-3xl p-8 transition duration-300 backdrop-blur-xl shadow-xl flex flex-col justify-between ${item.borderColor} group`}
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center mb-6 group-hover:bg-[#FF9112] transition duration-300">
                    <Icon className={`text-2xl ${item.color} group-hover:text-white transition duration-300`} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#FF9112] transition duration-300">
                    {item.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Our Numbers Grid */}
      <section className="max-w-7xl mx-auto px-6 py-20 border-b border-slate-800/80">
        <div className="bg-gradient-to-r from-slate-900 via-[#0D1527] to-slate-900 border border-slate-800 rounded-3xl p-10 md:p-14 shadow-2xl">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 uppercase text-xs font-semibold tracking-widest mb-3">
              Impact & Scale
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white">
              Our <span className="text-[#FF9112]">Numbers</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {statNumbers.map((stat, idx) => (
              <div key={idx} className="p-6 bg-slate-950/60 border border-slate-800 rounded-2xl">
                <div className={`text-4xl md:text-5xl font-extrabold ${stat.color} mb-2`}>
                  {stat.num}
                </div>
                <div className="text-xs md:text-sm font-semibold text-slate-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Fundamentals (Vision, Mission, Motto) */}
      <section className="max-w-7xl mx-auto px-6 py-20 border-b border-slate-800/80">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/30 uppercase text-xs font-semibold tracking-widest">
            Foundational Guiding Pillars
          </span>
          <h2 className="mt-4 text-3xl md:text-5xl font-extrabold text-white">
            Our <span className="text-[#1C9773]">Fundamentals</span>
          </h2>
          <p className="mt-4 text-slate-300 text-base leading-relaxed">
            The principles that define Netronix Innovation and guide everything we do.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Vision */}
          <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-8 backdrop-blur-xl hover:border-indigo-500/50 transition duration-300">
            <div className="w-12 h-12 rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center text-indigo-400 text-2xl mb-6">
              <FaCompass />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Vision</h3>
            <p className="text-slate-300 text-sm leading-relaxed mb-4">
              To become a trusted technology partner that empowers businesses and communities through innovation, creativity, and accessible digital solutions.
            </p>
            <p className="text-slate-400 text-xs leading-relaxed">
              We envision a future where technology is not a barrier but a powerful tool that enables businesses and individuals to achieve more.
            </p>
          </div>

          {/* Mission */}
          <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-8 backdrop-blur-xl hover:border-[#1C9773]/50 transition duration-300">
            <div className="w-12 h-12 rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center text-[#1C9773] text-2xl mb-6">
              <FaBullseye />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Mission</h3>
            <p className="text-slate-300 text-sm leading-relaxed mb-4">
              Our mission is to deliver innovative, reliable, and practical technology solutions that improve productivity, simplify processes, strengthen digital presence, and create sustainable value for our clients.
            </p>
            <p className="text-slate-400 text-xs leading-relaxed">
              We aim to combine technical expertise with creativity to solve real-world problems and help our clients move confidently into the digital future.
            </p>
          </div>

          {/* Motto */}
          <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-8 backdrop-blur-xl hover:border-[#FF9112]/50 transition duration-300 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center text-[#FF9112] text-2xl mb-6">
                <FaRocket />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Motto</h3>
              <div className="inline-block px-4 py-2 rounded-xl bg-[#FF9112]/10 text-[#FF9112] border border-[#FF9112]/30 font-extrabold text-base mb-4">
                Innovate. Connect. Transform.
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                We don't just provide technology — we create solutions that transform ideas into possibilities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different? */}
      <section className="max-w-7xl mx-auto px-6 py-20 border-b border-slate-800/80">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <span className="inline-block px-4 py-1.5 rounded-full bg-rose-500/10 text-rose-400 border border-rose-500/30 uppercase text-xs font-semibold tracking-widest mb-3">
            Competitive Edge
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white">
            What Makes Us <span className="text-[#FF9112]">Different?</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {uniquePillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="bg-slate-900/80 border border-slate-800 rounded-3xl p-8 backdrop-blur-xl hover:border-[#1C9773]/50 transition duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center mb-6 group-hover:bg-[#1C9773] transition duration-300">
                    <Icon className="text-2xl text-[#1C9773] group-hover:text-white transition duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#FF9112] transition duration-300">
                    {pillar.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Our Commitment & Promise */}
      <section className="max-w-7xl mx-auto px-6 py-20 border-b border-slate-800/80">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="inline-block px-4 py-1.5 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/30 uppercase text-xs font-semibold tracking-widest">
              Continuous Evolution
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">
              Our <span className="text-[#1C9773]">Commitment</span>
            </h2>
            <p className="text-slate-300 text-base leading-relaxed">
              At Netronix Innovation, we understand that technology is constantly changing. New tools, platforms, security challenges, and digital trends are continuously shaping the way businesses operate.
            </p>
            <p className="text-slate-400 text-sm leading-relaxed">
              That's why we are committed to continuous learning, innovation, and improvement. We don't simply want to complete projects. We want to build long-term relationships with our clients and become a technology partner they can depend on.
            </p>
            <p className="text-slate-400 text-sm leading-relaxed">
              From your first idea to deployment and beyond, we're committed to providing the technical expertise, creative thinking, and support required to keep your digital presence moving forward.
            </p>
          </div>

          <div className="lg:col-span-6 bg-slate-900/90 border border-slate-800 rounded-3xl p-8 backdrop-blur-xl shadow-2xl">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <FaCheckDouble className="text-[#FF9112]" /> Our Promise To You
            </h3>
            <p className="text-slate-400 text-xs mb-6">
              Your Vision. Our Innovation. One Digital Future. We promise to approach every project with:
            </p>

            <div className="space-y-4">
              {promiseValues.map((pv, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 rounded-2xl bg-slate-950/60 border border-slate-800/80">
                  <FaCheckCircle className="text-[#1C9773] text-lg mt-0.5 shrink-0" />
                  <div>
                    <h4 className="text-sm font-bold text-white">{pv.title}</h4>
                    <p className="text-xs text-slate-400">{pv.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final Callout Banner */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="bg-gradient-to-br from-slate-900 via-[#0A1828] to-slate-900 border border-slate-800 rounded-3xl p-10 md:p-14 relative overflow-hidden shadow-2xl text-center">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#1C9773]/10 blur-[130px] pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#FF9112]/10 text-[#FF9112] border border-[#FF9112]/30 uppercase text-xs font-semibold tracking-widest">
              Ready to Transform Your Ideas?
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">
              Let's Build Something <span className="text-[#1C9773]">Innovative Together.</span>
            </h2>
            <p className="text-slate-300 text-base md:text-lg leading-relaxed">
              Whether you need a professional website, custom software, cloud hosting, network infrastructure, IT support, or creative graphic design, Netronix Innovation is ready to help.
            </p>
            <p className="text-slate-300 text-base font-semibold">
              Have an idea? Let's turn it into reality.
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={() => openQuoteModal("Get Started - About Us")}
                className="bg-[#FF9112] hover:bg-[#E57D06] text-white px-9 py-4 rounded-xl font-bold transition shadow-lg shadow-[#FF9112]/20 cursor-pointer hover:scale-105 duration-300 flex items-center gap-2"
              >
                Get Started <FaArrowRight className="text-sm" />
              </button>

              <RouterLink
                to="/services"
                className="px-9 py-4 rounded-xl border border-slate-700 bg-slate-900/80 hover:bg-slate-800 text-slate-300 font-semibold text-base transition backdrop-blur-md hover:text-white"
              >
                Explore Our Services →
              </RouterLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
