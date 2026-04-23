import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="footer-top">
        <div className="footer-brand">
          <div className="logo-name">
            Talent<span>Factory</span>
          </div>
          <p>
            Building Nigeria's next generation of HR professionals through structured learning, real experience, and community support.
          </p>
          <div className="footer-social">
            <a href="#" className="fsoc">
              𝕏
            </a>
            <a href="#" className="fsoc">
              in
            </a>
            <a href="#" className="fsoc">
              𝕏
            </a>
          </div>
        </div>
        
        <div className="footer-col">
          <h4>
            Program
          </h4>
          <a href="#program">
            Overview
          </a>
          <a href="#program">
            Curriculum
          </a>
          <a href="#program">
            Instructors
          </a>
          <a href="#program">
            Internship
          </a>
        </div>
        
        <div className="footer-col">
          <h4>
            Company
          </h4>
          <a href="#about">
            About Us
          </a>
          <a href="#partners">
            Partner With Us
          </a>
          <a href="#testi">
            Community Voices
          </a>
          <a href="#faq">
            FAQs
          </a>
        </div>
        
        <div className="footer-col">
          <h4>
            Apply
          </h4>
          <a href="#apply">
            Student Application
          </a>
          <a href="#apply">
            Instructor Application
          </a>
          <a href="#apply">
            Company Registration
          </a>
          <a href="#pricing">
            Tuition
          </a>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div>
          © 2024 Talent Factory. All rights reserved.
        </div>
        <div className="flex gap-6">
          <a href="#">
            Privacy Policy
          </a>
          <a href="#">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
