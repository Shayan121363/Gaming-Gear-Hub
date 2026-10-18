import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Gamepad2, ShoppingBag, Star, ChevronDown, ChevronUp } from 'lucide-react';

const Home = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const testimonials = [
    { name: "Alex Chen", role: "Pro Gamer", content: "The gear I got from Gaming Hub completely elevated my gameplay. The shipping was fast and the quality is unmatched." },
    { name: "Sarah Jenkins", role: "Twitch Streamer", content: "Finally, a store that understands what streamers need. I highly recommend their selection of peripherals." },
    { name: "David Miller", role: "Casual Player", content: "Love the free games library feature. It's so convenient having a trusted store and game discovery platform in one place." }
  ];

  const faqs = [
    { question: "How long does shipping take?", answer: "Standard shipping takes 3-5 business days. Express options are available at checkout." },
    { question: "Do you ship internationally?", answer: "Yes, we ship to over 50 countries worldwide. Shipping costs will apply and will be added at checkout." },
    { question: "What is your return policy?", answer: "We offer a 30-day money-back guarantee for all unopened and unused products. Defective items can be replaced within warranty." },
    { question: "Are the games really free?", answer: "Yes! We curate the best free-to-play games available across various platforms through our partnership with FreeToGame." }
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg"></div>
        <div className="container">
          <motion.div 
            className="hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="hero-subtitle">Welcome to the Next Level</span>
            <h1 className="hero-title">
              The Ultimate <span style={{ color: 'var(--color-accent-primary)' }}>Gaming Hub</span>
            </h1>
            <p className="hero-desc">
              Discover top-rated free-to-play games and gear up with premium esports peripherals. Everything a gamer needs in one place.
            </p>
            <div className="hero-buttons">
              <Link to="/games" className="btn-primary">
                <Gamepad2 size={20} /> Explore Games
              </Link>
              <Link to="/gear" className="btn-outline">
                <ShoppingBag size={20} /> Shop Gear
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="section" style={{ background: 'var(--color-bg-secondary)' }}>
         <div className="container" style={{ textAlign: 'center' }}>
            <motion.h2 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              style={{ marginBottom: '2rem' }}
            >
              Industry Focused. <span style={{ color: 'var(--color-accent-primary)' }}>Player Approved.</span>
            </motion.h2>
            <motion.p
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               style={{ color: 'var(--color-text-secondary)', maxWidth: '700px', margin: '0 auto', fontSize: '1.1rem' }}
            >
              We combine an expansive library of free games with top-tier hardware tailored for competitive and casual gamers alike. Experience seamless integration, premium design, and lightning-fast performance.
            </motion.p>
         </div>
      </section>

      {/* Testimonials Section */}
      <section className="section">
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>What Gamers Say</h2>
          <div className="grid grid-cols-3">
            {testimonials.map((testimonial, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                style={{ background: 'var(--color-bg-secondary)', padding: '2rem', borderRadius: '12px', border: '1px solid var(--color-border)' }}
              >
                <div style={{ display: 'flex', color: '#fbbf24', marginBottom: '1rem' }}>
                  {[...Array(5)].map((_, idx) => <Star key={idx} size={18} fill="currentColor" />)}
                </div>
                <p style={{ fontStyle: 'italic', color: 'var(--color-text-secondary)', marginBottom: '1.5rem', lineHeight: '1.6' }}>"{testimonial.content}"</p>
                <div>
                  <h4 style={{ margin: 0, color: 'var(--color-text-primary)' }}>{testimonial.name}</h4>
                  <span style={{ fontSize: '0.85rem', color: 'var(--color-accent-primary)' }}>{testimonial.role}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section" style={{ background: 'var(--color-bg-secondary)' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Frequently Asked Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {faqs.map((faq, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                style={{ background: 'var(--color-bg-primary)', border: '1px solid var(--color-border)', borderRadius: '8px', overflow: 'hidden' }}
              >
                <button 
                  onClick={() => toggleFaq(i)}
                  style={{ width: '100%', padding: '1.5rem', background: 'transparent', border: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', color: 'var(--color-text-primary)', fontSize: '1.1rem', fontWeight: 'bold' }}
                >
                  {faq.question}
                  {openFaq === i ? <ChevronUp size={20} color="var(--color-accent-primary)"/> : <ChevronDown size={20} />}
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      style={{ padding: '0 1.5rem 1.5rem', color: 'var(--color-text-secondary)' }}
                    >
                      <p>{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
