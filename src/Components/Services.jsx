import React from "react";
import { motion } from "framer-motion";
import { FaHotel, FaPlaneDeparture, FaBriefcase, FaBuilding,
         FaChartLine, FaPlug, FaUserCheck, FaBolt,
         FaCheckCircle, FaArrowRight } from "react-icons/fa";

const services = [
  {
    id: "01",
    icon: <FaHotel className="text-3xl text-blue-600" />,
    title: "Hotel Booking Platform",
    description: "Build a complete online hotel booking platform with real-time availability, secure payments, and guest dashboards.",
    features: ["Real-Time Availability", "Booking Engine", "Secure Payments", "Guest Dashboard", "Reviews"],
  },
  {
    id: "02",
    icon: <FaPlaneDeparture className="text-3xl text-indigo-600" />,
    title: "Travel Booking System",
    description: "Enterprise travel platforms supporting hotels, flights, tours, holiday packages, and multi-destination itineraries.",
    features: ["Tour Packages", "Flight Booking", "Dynamic Pricing", "Travel Itinerary", "Search Engine"],
  },
  {
    id: "03",
    icon: <FaBriefcase className="text-3xl text-cyan-600" />,
    title: "B2B Travel Portal",
    description: "Scalable B2B portals where agents manage bookings, commissions, mark-ups, wallets, and invoices.",
    features: ["Agent Dashboard", "Commission", "Wallet System", "Corporate Accounts", "Markup Rules"],
  },
  {
    id: "04",
    icon: <FaBuilding className="text-3xl text-emerald-600" />,
    title: "Hotel Management (PMS)",
    description: "Digitalize hotel operations – reservations, housekeeping, billing, staff management and analytics.",
    features: ["Reservations", "Room Management", "Staff Management", "Housekeeping", "Billing"],
  },
  {
    id: "05",
    icon: <FaChartLine className="text-3xl text-purple-600" />,
    title: "Enterprise Dashboard",
    description: "Powerful admin UI to monitor bookings, revenue, hotels, users and business analytics from one central hub.",
    features: ["Revenue Dashboard", "Analytics", "Hotel Management", "User Roles", "CMS"],
  },
  {
    id: "06",
    icon: <FaPlug className="text-3xl text-pink-600" />,
    title: "Travel API Integration",
    description: "Plug-in third-party travel APIs, payment gateways, maps, auth, notifications and external services.",
    features: ["Hotel APIs", "Flight APIs", "Payment Gateway", "Google Maps", "WhatsApp API"],
  },
  {
    id: "07",
    icon: <FaUserCheck className="text-3xl text-orange-600" />,
    title: "Travel CRM Solutions",
    description: "Custom CRM to manage leads, customers, bookings, sales pipelines, marketing campaigns and relationships.",
    features: ["Lead Management", "Sales Dashboard", "Booking Pipeline", "Email Automation"],
  },
  {
    id: "08",
    icon: <FaBolt className="text-3xl text-amber-500" />,
    title: "Performance & SEO",
    description: "Blazing-fast platforms optimized for SEO, Core Web Vitals, mobile devices and high conversion rates.",
    features: ["SEO Ready", "Mobile Optimized", "Lightning Fast", "Responsive", "Secure"],
  }
];

const techStack = [
  "React.js", "Node.js", "Express.js", "MongoDB", "PostgreSQL",
  "Tailwind CSS", "TypeScript", "REST API", "JWT",
  "Firebase", "AWS", "Docker", "Redis", "Stripe"
];

const whyChooseMe = [
  "Travel Industry Expertise", "Enterprise-Level Architecture",
  "Secure Authentication", "High Performance & SEO", "Clean & Maintainable Code", "API Integration Expertise"
];

export default function Services() {
  return (
    <>
      <style>{`
        .bg-3d-grid {
          background-color: #ffffff;
          background-image:
            radial-gradient(at 20% 20%, #f1f5f9 0.5px, transparent 0.5px),
            radial-gradient(at 80% 80%, #f1f5f9 0.5px, transparent 0.5px),
            linear-gradient(45deg, #f8fafc 25%, transparent 25%) repeat,
            linear-gradient(45deg, transparent 75%, #f8fafc 75%) repeat;
          background-size: 20px 20px, 20px 20px, 40px 40px, 40px 40px;
          position: relative;
          overflow: hidden;
        }
        .bg-3d-grid::before {
          content: "";
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at center, #f0f9ff 0%, #eef2ff 33%, #f0fdf4 66%, transparent 100%);
          mix-blend-mode: multiply;
          animation: mesh 15s infinite linear;
          pointer-events: none;
        }
        @keyframes mesh {
          0%   { transform: translate(-5%, -5%) scale(1.1); }
          50%  { transform: translate(5%, 5%) scale(1.2); }
          100% { transform: translate(-5%, -5%) scale(1.1); }
        }
      `}</style>
      
      {/* Reduced py-24 to py-12 to minimize gaps */}
      <section id="SERVICES" className="bg-3d-grid text-gray-900 py-12 relative">
        {/* ---------- HEADER ---------- */}
        {/* Reduced mb-16 to mb-10 */}
        <div className="max-w-6xl mx-auto px-4 text-center relative z-10 mb-10">
          <motion.h1
            className="text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Enterprise <span className="text-blue-600">Travel Solutions</span>
          </motion.h1>
          <motion.p
            className="text-lg text-slate-500 max-w-3xl mx-auto font-medium"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            I design and develop powerful travel technology solutions that help hospitality businesses automate operations and increase direct bookings.
          </motion.p>
        </div>

        {/* ---------- SERVICE CARDS ---------- */}
        {/* Reduced mb-20 to mb-12 */}
        <div className="max-w-7xl mx-auto grid gap-6 px-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 relative z-10 mb-12">
          {services.map((svc, idx) => (
            <motion.div
              key={svc.id}
              className="group bg-white rounded-3xl p-6 flex flex-col relative overflow-hidden border border-slate-100 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-300 cursor-pointer"
              whileHover={{ y: -8 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
            >
              {/* Premium Top Gradient Line */}
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-blue-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Icon Container */}
              <div className="mb-5 bg-slate-50 w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm border border-slate-100 group-hover:scale-110 transition-transform duration-300">
                {svc.icon}
              </div>
              
              <h3 className="text-lg font-bold text-slate-800 mb-2 leading-tight group-hover:text-blue-600 transition-colors">{svc.title}</h3>
              <p className="text-sm text-slate-500 flex-grow leading-relaxed mb-5">{svc.description}</p>
              
              {/* Features Pills */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {svc.features.map((f) => (
                  <span
                    key={f}
                    className="px-2.5 py-1 text-[10px] font-bold tracking-wide rounded-md bg-slate-50 text-slate-600 border border-slate-200 group-hover:border-blue-200 group-hover:bg-blue-50 group-hover:text-blue-700 transition-colors"
                  >
                    {f}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* ---------- TECH STACK & WHY CHOOSE ---------- */}
        {/* Reduced mb-24 to mb-12 */}
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 px-4 relative z-10 mb-12">
          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl p-8 border border-slate-100 shadow-[0_4px_20px_rgb(0,0,0,0.03)]"
          >
            <h2 className="text-xl font-bold text-slate-800 mb-5 flex items-center">
              <FaBolt className="text-amber-500 mr-3" /> Technology Stack
            </h2>
            <div className="flex flex-wrap gap-2.5">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3.5 py-1.5 bg-white text-slate-700 rounded-lg text-xs font-bold shadow-sm border border-slate-200 hover:border-blue-400 hover:text-blue-600 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Why Choose Me */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl p-8 border border-slate-100 shadow-[0_4px_20px_rgb(0,0,0,0.03)]"
          >
            <h2 className="text-xl font-bold text-slate-800 mb-5 flex items-center">
              <FaUserCheck className="text-blue-600 mr-3" /> Why Choose Me
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {whyChooseMe.map((item) => (
                <li key={item} className="flex items-center text-slate-600 font-medium text-xs">
                  <FaCheckCircle className="text-emerald-500 mr-2 flex-shrink-0 text-sm" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* ---------- BOTTOM CTA ---------- */}
        <div className="max-w-5xl mx-auto px-4 relative z-10">
          <motion.div
            className="bg-slate-900 rounded-[2.5rem] p-10 text-center shadow-[0_20px_50px_rgba(0,0,0,0.2)] relative overflow-hidden group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-600/30 blur-[100px] rounded-full pointer-events-none group-hover:bg-blue-500/40 transition-colors duration-700"></div>

            <div className="relative z-10">
              <h3 className="text-3xl font-black text-white mb-4 tracking-tight">Let's Build Your Travel Platform</h3>
              <p className="mb-8 text-slate-300 max-w-2xl mx-auto text-base">
                Whether you're launching a hotel booking platform, B2B travel portal, or an enterprise booking engine,
                I can transform your vision into a scalable, high-performance digital product.
              </p>
              <div className="flex justify-center">
                <a
                  href="#CONTACT"
                  className="group/btn inline-flex items-center bg-white text-slate-900 font-bold py-3.5 px-8 rounded-2xl shadow-lg hover:shadow-blue-500/20 hover:-translate-y-1 transition-all"
                >
                  Start Your Project
                  <FaArrowRight className="ml-3 text-blue-600 transition-transform transform group-hover/btn:translate-x-1" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}