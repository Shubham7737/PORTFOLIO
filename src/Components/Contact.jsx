import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.target);
    const dataObj = {
      name: formData.get("name"),
      email: formData.get("email"),
      serviceType: formData.get("serviceType"),
      message: formData.get("message")
    };

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dataObj)
      });

      const data = await response.json();

      if (data.success) {
        setShowPopup(true);
        e.target.reset();
        setTimeout(() => setShowPopup(false), 5000);
      } else {
        alert("Something went wrong! Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert("Cannot connect to server. Ensure your backend is running.");
    }
    
    setIsSubmitting(false);
  };

  return (
    <section id="CONTACT" className="bg-white text-gray-900 py-12 px-6 relative overflow-hidden">
      {/* Dynamic Background Glow */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], rotate: [0, -90, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute top-0 right-0 w-96 h-96 bg-blue-50 rounded-full blur-[100px] z-0" 
      />
      <motion.div 
        animate={{ scale: [1, 1.1, 1], rotate: [0, 90, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-50 rounded-full blur-[100px] z-0" 
      />
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-5xl font-extrabold text-slate-900 mb-4">Get In <span className="text-blue-600">Touch</span></h2>
          <p className="text-slate-600 text-lg font-medium">Let's build something amazing together!</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          whileHover={{ rotateY: 2, rotateX: -2, y: -5 }}
          className="bg-white/80 backdrop-blur-2xl border border-slate-200 rounded-[2.5rem] p-8 md:p-12 shadow-[0_20px_50px_rgb(0,0,0,0.05)] transition-transform duration-300 perspective-1000"
        >
          <form onSubmit={handleSubmit} className="space-y-6 text-left">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="text-slate-600 text-xs font-bold uppercase ml-1 tracking-wider">Name</label>
                <input type="text" name="name" required placeholder="Shubham Danu"
                  className="w-full mt-2 px-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100 outline-none transition-all shadow-sm" />
              </div>
              <div>
                <label className="text-slate-600 text-xs font-bold uppercase ml-1 tracking-wider">Email</label>
                <input type="email" name="email" required placeholder="shubham@example.com"
                  className="w-full mt-2 px-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100 outline-none transition-all shadow-sm" />
              </div>
            </div>

            <div>
              <label className="text-slate-600 text-xs font-bold uppercase ml-1 tracking-wider">Service Interested In</label>
              <div className="relative w-full mt-2">
                <select name="serviceType" required defaultValue=""
                  className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100 outline-none transition-all shadow-sm appearance-none cursor-pointer truncate pr-12">
                  <option value="" disabled>Select a service...</option>
                  <option value="Hotel Booking Platform">Hotel Booking Platform</option>
                  <option value="Travel Booking System">Travel Booking System</option>
                  <option value="B2B Travel Portal">B2B Travel Portal</option>
                  <option value="Hotel Management (PMS)">Hotel Management (PMS)</option>
                  <option value="Enterprise Dashboard">Enterprise Dashboard</option>
                  <option value="Travel API Integration">Travel API Integration</option>
                  <option value="Travel CRM Solutions">Travel CRM Solutions</option>
                  <option value="Performance & SEO">Performance & SEO Optimization</option>
                  <option value="Other">Other / General Inquiry</option>
                </select>
                {/* Custom Dropdown Arrow */}
                <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-slate-500">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </div>
              </div>
            </div>

            <div>
              <label className="text-slate-600 text-xs font-bold uppercase ml-1 tracking-wider">Message</label>
              <textarea name="message" required placeholder="Write your ideas here..."
                className="w-full mt-2 px-6 py-4 h-40 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100 outline-none resize-none transition-all shadow-sm"></textarea>
            </div>

            <motion.button
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              disabled={isSubmitting}
              type="submit"
              className="w-full py-5 bg-blue-600 hover:bg-blue-700 text-white font-black rounded-2xl shadow-lg shadow-blue-600/30 transition-all uppercase tracking-widest text-sm"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </motion.button>
          </form>
        </motion.div>
      </div>

      {/* Modern Success Popup */}
      <AnimatePresence>
        {showPopup && (
          <motion.div 
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="fixed bottom-10 right-10 z-50 bg-white text-slate-900 p-6 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] flex items-center gap-4 border border-slate-200"
          >
            <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-2xl font-bold shadow-sm">✓</div>
            <div>
              <h4 className="font-bold text-lg text-slate-800">Awesome!</h4>
              <p className="text-slate-600 text-sm">Thanks, Shubham will reply soon!</p>
            </div>
            <button onClick={() => setShowPopup(false)} className="ml-4 text-slate-400 hover:text-slate-700 transition-colors">✕</button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}