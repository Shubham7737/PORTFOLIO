import React from "react";

export default function Contact() {
  return (
    <section id="CONTACT" className="bg-zinc-950 py-10 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-6">Get in Touch</h2>
        <p className="text-gray-400 mb-10">
          We'd love to hear from you. Fill out the form below and we'll get back to you soon.
        </p>
        <div className="bg-white/5 backdrop-blur-lg shadow-2xl border border-white/10 rounded-2xl p-8 md:p-10">
          <form
            action="https://api.web3forms.com/submit"
            method="POST"
            className="space-y-6 text-left"
          >
            {/* Access Key */}
            <input
              type="hidden"
              name="access_key"
              value="b489ce40-9100-42b2-aad9-5ee6fe7a57af"
            />

            {/* Name */}
            <div>
              <label className="text-white text-sm font-medium">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="mt-2 w-full px-4 py-3 rounded-lg bg-white/10 text-white placeholder:text-gray-400 border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Email */}
            <div>
              <label className="text-white text-sm font-medium">Email</label>
              <input
                type="email"
                name="email"
                placeholder="your@email.com"
                required
                className="mt-2 w-full px-4 py-3 rounded-lg bg-white/10 text-white placeholder:text-gray-400 border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Message */}
            <div>
              <label className="text-white text-sm font-medium">Message</label>
              <textarea
                name="message"
                placeholder="Write your message..."
                required
                className="mt-2 w-full px-4 py-3 h-32 rounded-lg bg-white/10 text-white placeholder:text-gray-400 border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              ></textarea>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 transition duration-300 text-white py-3 rounded-lg font-semibold shadow-lg"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
