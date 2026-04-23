import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Apply: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      alert('Please enter a valid email address.');
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      setIsSubmitted(true);
    } catch (error) {
      alert('An error occurred. Please try again later.');
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <section className="apply" id="apply">
        <div className="apply-success-message">
          <h3 className="apply-success-title">
            You're on the list! ✓
          </h3>
          <p className="text-[14px] opacity-[0.8]">
            We've received your email. We'll be in touch with updates on Cohort 1 very soon.
          </p>
          <div className="mt-8">
            <Link to="/waitlist" className="apply-link">View Full Waitlist Details →</Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="apply" id="apply">
      <div className="eyebrow">
        Ready?
      </div>
      <h2 className="sec-h">
        Your HR Career<br />Starts <em>Right Here.</em>
      </h2>
      <p className="sec-p">
        Cohort 1 applications are open now. Spots are intentionally limited. If you've been waiting for something like this — this is it. Apply today, and we'll be in touch within 7 days.
      </p>
      
      <form onSubmit={handleSubmit} className="apply-form">
        <input
          type="email"
          placeholder="Your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="apply-form-input"
          required
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className="apply-submit"
        >
          {isSubmitting ? 'Joining...' : 'Join the Waitlist →'}
        </button>
      </form>
      
      <div className="apply-links">
        <Link to="/apply/payment" className="apply-link">
          Student Application →
        </Link>
        <Link to="/waitlist" className="apply-link">
          Waitlist Details →
        </Link>
        <a href="#partners" className="apply-link">
          Partner Company Registration →
        </a>
      </div>
    </section>
  );
};

export default Apply;

