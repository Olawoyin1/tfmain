import React from 'react';
import { FiCheck, FiArrowRight } from 'react-icons/fi';

const Partners: React.FC = () => {
  const benefits = [
    "Pre-screened interns matched to your team's specific function and requirements.",
    "Interns who have completed 12 weeks of structured HR training before they arrive.",
    "Weekly check-ins and ongoing support from the Talent Factory team throughout the placement.",
    "Structured mid-term and end-of-term evaluations to track and share performance feedback.",
    "First right to extend outstanding interns into full-time employment.",
    "Recognition as a Talent Factory Partner Companyvisible to our growing HR community.",
    "Ability to request specific cohort tracks or custom internship profiles for future cohorts."
  ];

  return (
    <section className="partners" id="partners">
      <div className="partners-inner">
        <div>
          <div className="eyebrow">
            For Companies
          </div>
          <h2 className="sec-h">
            Be the Company<br />That Shapes<br /><em className="italic">Nigeria's HR Future.</em>
          </h2>
          <p className="sec-p mb-8">
            Partner companies get access to the most well-prepared, trained, and motivated HR interns in Nigeria. These aren't students who just finished watching slides. They've completed 12 weeks of intensive, practitioner-led instruction specifically designed to make them useful from their first day.
          </p>
          <p className="sec-p mb-10">
            We do the screening, matching, and onboarding. You get the talent. And if you find someone exceptional, we make it easy to convert them into a full-time hire.
          </p>
          <a href="#apply" className="btn-primary">
            Register as a Partner Company
          </a>
        </div>
        
        <div className="partner-card">
          <div className="partner-title">
            What You Get as a Partner
          </div>
          <p className="partner-desc mb-7">
            Hosting a Talent Factory intern is not a charity exercise. It's smart talent strategygetting
            trained, motivated HR hands at a fraction of the cost, with zero scouting effort on your part.
          </p>
          <div className="partner-benefits mb-9">
            {benefits.map((benefit, index) => (
              <div key={index} className="partner-benefit flex items-start gap-3">
                <span className="partner-benefit-check shrink-0 mt-1">
                  <FiCheck size={14} />
                </span>
                {benefit}
              </div>
            ))}
          </div>
          <a href="#apply" className="partner-cta flex items-center justify-center gap-2">
            Partner With Talent Factory <FiArrowRight />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Partners;

