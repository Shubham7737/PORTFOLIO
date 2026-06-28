import React from 'react';
import { motion } from 'framer-motion';
import { FaChartBar, FaDollarSign, FaHotel, FaBed, FaUserFriends, FaTicketAlt, FaFileInvoiceDollar, FaRegCalendarAlt, FaCog, FaBell, FaCogs } from 'react-icons/fa';

const items = [
  { icon: <FaChartBar className="text-3xl text-blue-500" />, title: "Dashboard Overview" },
  { icon: <FaDollarSign className="text-3xl text-green-500" />, title: "Revenue Reports" },
  { icon: <FaHotel className="text-3xl text-indigo-500" />, title: "Hotel Management" },
  { icon: <FaBed className="text-3xl text-purple-500" />, title: "Room Management" },
  { icon: <FaUserFriends className="text-3xl text-pink-500" />, title: "Customer Management" },
  { icon: <FaTicketAlt className="text-3xl text-orange-500" />, title: "Payments & Coupons" },
  { icon: <FaFileInvoiceDollar className="text-3xl text-red-500" />, title: "Invoices" },
  { icon: <FaRegCalendarAlt className="text-3xl text-teal-500" />, title: "Bookings Calendar" },
  { icon: <FaCog className="text-3xl text-gray-500" />, title: "Settings & Notifications" },
];

export default function AdminDashboardShowcase() {
  return (
    <section id="admin-dashboard" className="bg-3d-grid py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-slate-800 mb-6"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Enterprise Admin Dashboard Showcase
        </motion.h2>
        <motion.p
          className="text-lg text-slate-600 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          A modern SaaS admin panel with animated charts, KPI cards and intuitive UI for managing hotels, bookings and revenue.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, i) => (
            <motion.div
              key={i}
              className="bg-white/70 backdrop-blur-xl border border-white/30 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <div className="flex flex-col items-center">
                <div className="p-4 bg-white/30 rounded-full mb-4 drop-shadow-md">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600">Placeholder description</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
