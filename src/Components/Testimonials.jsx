import React from 'react';
import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa';

const testimonials = [
  {
    name: 'Alex Johnson',
    company: 'Luxury Resorts Inc.',
    country: 'USA',
    rating: 5,
    feedback: 'Shubham delivered a flawless booking platform that boosted our conversion rate by 30%. The performance and UI are top‑tier.',
    photo: '/placeholder-client-1.png',
    logo: '/placeholder-logo-1.png',
  },
  {
    name: 'Maria García',
    company: 'Viajes Global',
    country: 'Spain',
    rating: 5,
    feedback: 'The B2B portal transformed our agency operations – real‑time commissions and wallet management are perfect.',
    photo: '/placeholder-client-2.png',
    logo: '/placeholder-logo-2.png',
  },
  {
    name: 'Li Wei',
    company: 'TravelTech Solutions',
    country: 'China',
    rating: 5,
    feedback: 'Exceptional technical support and scalable architecture. Our traffic grew without latency issues.',
    photo: '/placeholder-client-3.png',
    logo: '/placeholder-logo-3.png',
  },
];

const TestimonialCard = ({ testimonial }) => (
  <motion.div
    className="bg-white/30 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-shadow"
    whileHover={{ scale: 1.03 }}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
  >
    <div className="flex items-center mb-4">
      <div>
        <p className="font-semibold text-slate-800">{testimonial.name}</p>
        <p className="text-sm text-slate-600">{testimonial.company} – {testimonial.country}</p>
      </div>
    </div>
    <p className="text-slate-700 mb-4">"{testimonial.feedback}"</p>
    <div className="flex items-center">
      {[...Array(testimonial.rating)].map((_, i) => (
        <FaStar key={i} className="text-yellow-400 mr-1" />
      ))}
    </div>
  </motion.div>
);

const Testimonials = () => (
  <section className="py-20 bg-3d-grid" id="testimonials">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-800 mb-8">
        What Clients Say
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((t, idx) => (
          <TestimonialCard key={idx} testimonial={t} />
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
