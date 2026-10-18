import { Link, useLocation } from 'react-router-dom';
import { Gamepad2, ShoppingCart, User } from 'lucide-react';
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";

const Navbar = () => {
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/games', label: 'Free Games' },
    { path: '/gear', label: 'Gear Store' }
  ];

  return (
    <nav className="navbar">
      <div className="container nav-container">
        <Link to="/" className="logo">
          <Gamepad2 size={28} color="var(--color-accent-primary)" />
          Gaming<span>Hub</span>
        </Link>
        
        <div className="nav-links">
          {navLinks.map(link => (
            <Link 
              key={link.path} 
              to={link.path}
              className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
            >
              {link.label}
            </Link>
          ))}
          
          <Link to="/checkout" className="nav-link" style={{ position: 'relative' }}>
            <ShoppingCart size={20} />
          </Link>

          <SignedOut>
            <SignInButton mode="modal">
              <button className="btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>
                <User size={16} /> Sign In
              </button>
            </SignInButton>
          </SignedOut>
          
          <SignedIn>
            <Link to="/admin" className="nav-link" style={{ fontSize: '0.9rem', color: 'var(--color-accent-primary)' }}>Admin</Link>
            <UserButton />
          </SignedIn>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
