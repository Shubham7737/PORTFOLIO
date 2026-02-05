import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.target);
    // Ensuring your ssh_Root preference is maintained if needed
    formData.append("access_key", "b489ce40-9100-42b2-aad9-5ee6fe7a57af");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setShowPopup(true);
      e.target.reset();
      setTimeout(() => setShowPopup(false), 5000); // 5 sec baad popup hide hoga
    } else {
      alert("Something went wrong!");
    }
    setIsSubmitting(false);
  };

  return (
    <section id="CONTACT" className="bg-zinc-950 py-20 px-6 relative overflow-hidden">
      {/* Dynamic Background Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] -z-0"></div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-5xl font-black text-white mb-4 italic">Get In <span className="text-blue-500">Touch</span></h2>
          <p className="text-zinc-400 text-lg">Let's build something amazing together!</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-8 md:p-12 shadow-2xl"
        >
          <form onSubmit={handleSubmit} className="space-y-6 text-left">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="text-zinc-400 text-xs font-bold uppercase ml-1">Name</label>
                <input type="text" name="name" required placeholder="Shubham Danu"
                  className="w-full mt-2 px-6 py-4 rounded-2xl bg-zinc-900 border border-zinc-800 text-white focus:border-blue-500 outline-none transition-all" />
              </div>
              <div>
                <label className="text-zinc-400 text-xs font-bold uppercase ml-1">Email</label>
                <input type="email" name="email" required placeholder="shubham@example.com"
                  className="w-full mt-2 px-6 py-4 rounded-2xl bg-zinc-900 border border-zinc-800 text-white focus:border-blue-500 outline-none transition-all" />
              </div>
            </div>

            <div>
              <label className="text-zinc-400 text-xs font-bold uppercase ml-1">Message</label>
              <textarea name="message" required placeholder="Write your ideas here..."
                className="w-full mt-2 px-6 py-4 h-40 rounded-2xl bg-zinc-900 border border-zinc-800 text-white focus:border-blue-500 outline-none resize-none transition-all"></textarea>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              disabled={isSubmitting}
              type="submit"
              className="w-full py-5 bg-blue-600 hover:bg-blue-500 text-white font-black rounded-2xl shadow-xl transition-all uppercase tracking-widest"
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
            className="fixed bottom-10 right-10 z-50 bg-blue-600 text-white p-6 rounded-3xl shadow-[0_20px_50px_rgba(37,99,235,0.4)] flex items-center gap-4 border border-blue-400"
          >
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-2xl">✓</div>
            <div>
              <h4 className="font-bold text-lg">Awesome!</h4>
              <p className="text-blue-100 text-sm">Thanks, Shubham will reply soon!</p>
            </div>
            <button onClick={() => setShowPopup(false)} className="ml-4 opacity-50 hover:opacity-100">✕</button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}