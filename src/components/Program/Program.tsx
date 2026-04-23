import React from 'react';

const Program: React.FC = () => {
  return (
    <section className="program" id="program">
      <div className="prog-intro">
        <div className="eyebrow">
          The Program
        </div>
        <h2 className="sec-h">
          Six Months. Two Phases.<br /><em>One Complete Career Transformation.</em>
        </h2>
        <p className="sec-p">
          Talent Factory is not a course. It is not a workshop. It is a full career development program —
          the most structured and complete pathway into the HR profession that exists in Nigeria today.
        </p>
      </div>

      <div className="phases-wrap">
        <div className="ph ph1">
          <div className="ph-n">01</div>
          <div className="ph-tag">Phase 1 · Months 1–3</div>
          <h3 className="ph-h">
            The Learning Phase — Where You Build Your Foundation
          </h3>
          <p className="ph-desc">
            Twelve weeks of live, online instruction from senior HR practitioners across Nigeria's best companies. One
            expert per topic. Every session is held on weekday evenings or weekends so you can attend without quitting
            your job or pausing your studies. Every session is recorded and uploaded within 24 hours — so missing one is
            never a crisis.
            <br /><br />
            This isn't passive watching. You'll submit assignments, tackle case studies, engage in peer discussions, and
            complete a capstone project that you'll present to a panel of working HR professionals.
          </p>
          <div className="ph-facts">
            <div>
              <div className="phf-v">12</div>
              <div className="phf-l">Live Modules</div>
            </div>
            <div>
              <div className="phf-v">Live</div>
              <div className="phf-l">Online Format</div>
            </div>
            <div>
              <div className="phf-v">All</div>
              <div className="phf-l">Sessions Recorded</div>
            </div>
            <div>
              <div className="phf-v">1</div>
              <div className="phf-l">Certificate Issued</div>
            </div>
          </div>
        </div>
        
        <div className="ph ph2">
          <div className="ph-n">02</div>
          <div className="ph-tag">Phase 2 · Months 4–6</div>
          <h3 className="ph-h">
            The Internship Phase — Where You Use What You've Learned
          </h3>
          <p className="ph-desc">
            The learning phase builds your knowledge. The internship phase tests it — in a real company, with real people,
            doing real HR work. Every student who completes the learning phase is placed with a Talent
            Factory partner company.
            <br /><br />
            This isn't observational. You'll have a role, a supervisor, weekly check-ins with our team, and structured
            performance evaluations. Many of our partners actively look to convert outstanding interns into full-time
            hires.
          </p>
          <div className="ph-facts">
            <div>
              <div className="phf-v">12</div>
              <div className="phf-l">Weeks of Interning</div>
            </div>
            <div>
              <div className="phf-v">Real</div>
              <div className="phf-l">Nigerian Company</div>
            </div>
            <div>
              <div className="phf-v">Guided</div>
              <div className="phf-l">Supervised Role</div>
            </div>
            <div>
              <div className="phf-v">1</div>
              <div className="phf-l">Certificate Issued</div>
            </div>
          </div>
        </div>
      </div>

      <h3 className="cur-head">The 12-Week Curriculum</h3>
      <div className="cur-grid">
        {[
          { week: "Week 1", title: "The HR Landscape & Career Paths in Nigeria" },
          { week: "Week 2", title: "Talent Acquisition, Sourcing & Interview Design" },
          { week: "Week 3", title: "Onboarding, EVP & Employee Experience" },
          { week: "Week 4", title: "HR Operations, Policies & Labour Law Compliance" },
          { week: "Week 5", title: "Performance Management Frameworks & Feedback Culture" },
          { week: "Week 6", title: "Compensation, Benefits & Total Rewards Design" },
          { week: "Week 7", title: "Learning & Development Strategy" },
          { week: "Week 8", title: "Employee Relations & Conflict Resolution" },
          { week: "Week 9", title: "People Analytics, HR Metrics & Data Storytelling" },
          { week: "Week 10", title: "Strategic HR Business Partnering" },
          { week: "Week 11", title: "Scaling HR in Startups & Growing Organisations" },
          { week: "Week 12", title: "Capstone Presentation & Cohort Graduation" },
        ].map((item, index) => (
          <div key={index} className="cur-card">
            <div className="cur-week">{item.week}</div>
            <div className="cur-title">{item.title}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Program;
