import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="hero-section">
      <div className="hero-noise"></div>
      <div className="hero-accent"></div>
      
      <div className="hero-left">
        <div className="hero-tag">
          <span className="hero-tag-dot"></span>
          Cohort 1 — Applications Open Now
        </div>
        
        <h1 className="hero-title">
          This Is Where<br />
          Nigeria's Best<br />
          <em>HR Careers</em><br />
          <u>Begin.</u>
        </h1>
        
        <p className="hero-body">
          Talent Factory is a <strong>6-month cohort program</strong> — 3 months of live, practitioner-led HR training and
          3 months of <strong>guaranteed internship placement</strong> at a real Nigerian company. Built for anyone who
          wants to enter, grow in, or transition into the HR profession. No recycled slides. No theory-only lectures. Just
          the real work.
        </p>
        
        <div className="hero-actions">
          <a href="#apply" className="btn-primary">
            Apply for Cohort 1
          </a>
          <a href="#program" className="btn-secondary">
            See the Program
          </a>
        </div>
        
        <div className="hero-numbers">
          <div>
            <div className="hero-number-value">
              6<span>mo</span>
            </div>
            <div className="hero-number-label">
              Full Program
            </div>
          </div>
          <div>
            <div className="hero-number-value">
              12<span>+</span>
            </div>
            <div className="hero-number-label">
              Expert Instructors
            </div>
          </div>
          <div>
            <div className="hero-number-value">
              100<span>%</span>
            </div>
            <div className="hero-number-label">
              Placement Goal
            </div>
          </div>
          <div>
            <div className="hero-number-value">
              2<span>x</span>
            </div>
            <div className="hero-number-label">
              Certificates
            </div>
          </div>
        </div>
      </div>
      
      <div className="hero-right">
        <div className="hero-float">
          <div className="hero-float-value">6</div>
          <div className="hero-float-sub">Months to<br />Career-Ready</div>
        </div>
        
        <div className="hero-big-card">
          <div className="hero-big-card-eyebrow">⚡ Your Cohort 1 Journey</div>
          <h3 className="hero-big-card-title">Two phases. One <em>complete</em> career transformation.</h3>
          
          <div className="phase-row">
            <div className="phase-pill active">
              <div className="phase-month">Months 1–3</div>
              <div className="phase-name">Learning</div>
              <div className="phase-sub">Live Online Classes</div>
            </div>
            <div className="phase-pill active">
              <div className="phase-month">Months 4–6</div>
              <div className="phase-name">Interning</div>
              <div className="phase-sub">Real Company Placement</div>
            </div>
          </div>
          
          <div className="hero-big-card-items">
            <div className="hero-big-card-item">
              <span className="hero-big-card-icon">📚</span>
              <div>
                <div className="hero-big-card-text">12 Live Weekly Modules</div>
                <div className="hero-big-card-sub">Evenings & weekends. All sessions recorded.</div>
              </div>
            </div>
            <div className="hero-big-card-item">
              <span className="hero-big-card-icon">🏢</span>
              <div>
                <div className="hero-big-card-text">Guaranteed Internship Placement</div>
                <div className="hero-big-card-sub">Matched & placed at a vetted partner company.</div>
              </div>
            </div>
            <div className="hero-big-card-item">
              <span className="hero-big-card-icon">🎓</span>
              <div>
                <div className="hero-big-card-text">Dual Certificate on Completion</div>
                <div className="hero-big-card-sub">PHRi-aligned. Shareable on LinkedIn.</div>
              </div>
            </div>
          </div>
          
          <button 
            className="hero-big-card-btn"
            onClick={() => document.getElementById('apply')?.scrollIntoView({behavior: 'smooth'})}
          >
            Apply Now — Cohort 1 Open
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
