import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="nav-fixed">
      <Link to="/" className="nav-logo-link">
        <div className="logo-box">
          TF
        </div>
        <div className="logo-name">
          Talent<span>Factory</span>
        </div>
      </Link>
      
      <div className="nav-center">
        <a href="#program" className="nav-link">
          Program
        </a>
        <a href="#who" className="nav-link">
          Who It's For
        </a>
        <a href="#faculty" className="nav-link">
          Faculty
        </a>
        <a href="#pricing" className="nav-link">
          Tuition
        </a>
        <a href="#faq" className="nav-link">
          FAQ
        </a>
      </div>
      
      <div className="nav-actions">
        <Link to="/portal" className="nav-link">
          Portal
        </Link>
        <Link to="/tutor" className="nav-link">
          Tutor
        </Link>
        <a href="#partners" className="nav-ghost">
          Partner With Us
        </a>

        <Link to="/apply/payment" className="nav-solid">
          Apply Now →
        </Link>
      </div>

    </nav>
  );
};

export default Navbar;

