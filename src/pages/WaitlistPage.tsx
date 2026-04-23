import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const WaitlistPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitted(true);
    setIsSubmitting(false);
  };

  if (isSubmitted) {
    return (
      <div className="flow-page-container flex items-center justify-center px-6">
        <div className="form-card status-card max-w-lg w-full">
          <div className="status-icon">🎉</div>
          <h2 className="sec-h text-4xl mb-4">You're on the list!</h2>
          <p className="sec-p mx-auto mb-8">
            We've received your email. You are now part of the exclusive group that will be notified the moment Cohort 1 applications open.
          </p>
          <Link 
            to="/"
            className="btn-primary"
          >
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-off">
      {/* Premium Navigation */}
      <nav className="nav-fixed">
        <Link to="/" className="nav-logo-link">
          <div className="logo-box">TF</div>
          <div className="logo-name">Talent<span>Factory</span></div>
        </Link>
        <Link to="/" className="nav-link">← Back to Home</Link>
      </nav>

      <div className="flow-page-container px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side: Content */}
          <div>
            <div className="hero-tag">
              <span className="hero-tag-dot"></span>
              Join the Waitlist
            </div>
            <h1 className="sec-h text-5xl mb-6">
              Be the first to know when <em>applications</em> open.
            </h1>
            <p className="sec-p mb-8">
              Join 500+ aspiring HR professionals. Our waitlist members get 48-hour early access to the application portal and exclusive program insights.
            </p>
            
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-gold-pale flex items-center justify-center text-gold flex-shrink-0">📧</div>
                <div>
                  <h4 className="font-bold text-sm">7-Day Nurture Sequence</h4>
                  <p className="text-xs text-muted">Get a deep dive into what to expect from the program.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-gold-pale flex items-center justify-center text-gold flex-shrink-0">🎯</div>
                <div>
                  <h4 className="font-bold text-sm">Early Access</h4>
                  <p className="text-xs text-muted">Secure your spot before the general public.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="form-card">
            <form onSubmit={handleSubmit} className="space-y-2">
              <div className="input-group">
                <label className="input-label">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="input-field"
                  placeholder="Enter your full name"
                />
              </div>

              <div className="input-group">
                <label className="input-label">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="input-field"
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="input-group">
                <label className="input-label">I am a...</label>
                <select
                  name="role"
                  value={formData.role}
                  onChange={handleInputChange}
                  required
                  className="select-field"
                >
                  <option value="">Select your current role</option>
                  <option value="student">Student</option>
                  <option value="graduate">Recent Graduate</option>
                  <option value="professional">HR Professional</option>
                  <option value="career-changer">Career Changer</option>
                </select>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full mt-4"
              >
                {isSubmitting ? 'Joining...' : 'Join Waitlist →'}
              </button>
            </form>
            
            <p className="text-center text-[10px] text-muted mt-6 uppercase tracking-widest">
              Limited spots available for Cohort 1
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WaitlistPage;

