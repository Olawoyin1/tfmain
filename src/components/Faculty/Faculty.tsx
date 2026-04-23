import React from 'react';

const Faculty: React.FC = () => {
  return (
    <section className="faculty" id="faculty">
      <div className="faculty-intro">
        <div className="eyebrow">
          The Faculty
        </div>
        <h2 className="sec-h">
          Learn from the People<br />Who Are <em>Living</em> It.
        </h2>
        <p className="sec-p">
          Every instructor at Talent Factory is an active, senior HR or business professional working at a
          reputable Nigerian organisation. Not retired consultants. Not full-time academics. People who are doing the work
          right now — and sharing exactly how they do it.
        </p>
      </div>

      <div className="faculty-main">
        <div className="faculty-avatar">
          👩🏾‍💼
        </div>
        <div className="faculty-content">
          <div className="faculty-role">
            Founder & Program Director
          </div>
          <div className="faculty-name">
            Elizabeth<br />Odetokun, PHRi
          </div>
          <div className="faculty-org">
            HR & Operations Lead, Mainstack Social Commerce
          </div>
          <p className="faculty-bio">
            Elizabeth built Talent Factory because she lived through every gap it's designed to close. Six years ago, she
            started her own HR journey piecing things together — learning on the job, seeking out mentors, building
            systems from scratch in companies that were growing faster than anyone had anticipated. Today, she is the HR &
            Operations Lead at Mainstack, a strategic partner to the CEO, and one of the most respected people-first
            operators in Nigeria's startup ecosystem.
            <br /><br />
            She served as founding HR at Zap Africa, scaling a team 50% in 60 days from zero. She helped bundle Africa
            reach 1 million customers and win LinkedIn's #1 Startup in 2022. She has built HR functions, playbooks, and
            internship programs from the ground up — and she wants to pass every lesson on to the next generation of HR
            professionals in Nigeria.
          </p>
          <div className="faculty-tags">
            <span className="faculty-tag">
              PHRi Certified
            </span>
            <span className="faculty-tag">
              MBA Candidate · Lagos Business School
            </span>
            <span className="faculty-tag">
              Data Analytics · ALX Africa
            </span>
            <span className="faculty-tag">
              B.Sc. IPM · University of Lagos
            </span>
            <span className="faculty-tag">
              6+ Years in HR Operations
            </span>
            <span className="faculty-tag">
              Startup HR Specialist
            </span>
          </div>
        </div>
      </div>

      <div className="faculty-promises">
        <div className="faculty-promise">
          <div className="faculty-promise-icon">🏢</div>
          <div className="faculty-promise-title">
            Active Practitioners Only
          </div>
          <p className="faculty-promise-desc">
            Every instructor is currently working in a senior HR or business role at a reputable Nigerian
            organisation. We don't book people who used to work in HR. We book people who are in HR right now.
          </p>
        </div>
        <div className="faculty-promise">
          <div className="faculty-promise-icon">💰</div>
          <div className="faculty-promise-title">
            Paid Fairly for Their Time
          </div>
          <p className="faculty-promise-desc">
            Our instructors are compensated properly for every session they teach. This is how we attract
            the best — not the most available. We respect their expertise with what it deserves: money.
          </p>
        </div>
        <div className="faculty-promise">
          <div className="faculty-promise-icon">🎯</div>
          <div className="faculty-promise-title">
            One Expert Per Topic
          </div>
          <p className="faculty-promise-desc">
            Each module is taught by the most qualified practitioner for that specific subject — whether
            that's someone who has built 50 payroll structures or someone who has navigated complex ER cases for a decade.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Faculty;
