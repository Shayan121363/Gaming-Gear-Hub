import { Gamepad2, Globe, Mail, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: 'var(--color-bg-secondary)', borderTop: '1px solid var(--color-border)', padding: '3rem 0', marginTop: 'auto' }}>
      <div className="container">
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '2rem' }}>
          
          <div style={{ flex: '1 1 300px' }}>
            <Link to="/" className="logo" style={{ marginBottom: '1rem', display: 'inline-flex' }}>
              <Gamepad2 size={28} color="var(--color-accent-primary)" />
              Gaming<span>Hub</span>
            </Link>
            <p style={{ color: 'var(--color-text-secondary)', marginBottom: '1.5rem', maxWidth: '300px' }}>
              Your ultimate destination for top-tier free games and professional gaming peripherals.
            </p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <a href="#" style={{ color: 'var(--color-text-secondary)' }}><Globe size={20} /></a>
              <a href="#" style={{ color: 'var(--color-text-secondary)' }}><MessageSquare size={20} /></a>
              <a href="#" style={{ color: 'var(--color-text-secondary)' }}><Mail size={20} /></a>
            </div>
          </div>

          <div style={{ flex: '1 1 150px' }}>
            <h4 style={{ marginBottom: '1rem' }}>Quick Links</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li><Link to="/games" style={{ color: 'var(--color-text-secondary)' }}>Free Games</Link></li>
              <li><Link to="/gear" style={{ color: 'var(--color-text-secondary)' }}>Gear Store</Link></li>
              <li><Link to="/checkout" style={{ color: 'var(--color-text-secondary)' }}>Checkout</Link></li>
            </ul>
          </div>

          <div style={{ flex: '1 1 150px' }}>
            <h4 style={{ marginBottom: '1rem' }}>Support</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li><a href="#" style={{ color: 'var(--color-text-secondary)' }}>Contact Us</a></li>
              <li><a href="#" style={{ color: 'var(--color-text-secondary)' }}>FAQs</a></li>
              <li><a href="#" style={{ color: 'var(--color-text-secondary)' }}>Shipping & Returns</a></li>
            </ul>
          </div>
          
        </div>
        
        <div style={{ marginTop: '3rem', paddingTop: '1.5rem', borderTop: '1px solid var(--color-border)', textAlign: 'center', color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
          &copy; {new Date().getFullYear()} Gaming Hub. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
