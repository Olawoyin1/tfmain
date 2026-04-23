import React from 'react';

const Pricing: React.FC = () => {
  const plans = [
    {
      name: "Full Payment",
      price: "₦150k",
      period: "one-time · all-inclusive",
      best: false,
      features: [
        "12-week live learning program",
        "All session recordings — lifetime access",
        "Templates, toolkits & resource library",
        "Weekly assignments & feedback",
        "Cohort community access",
        "Guaranteed internship placement",
        "Learning phase certificate",
        "Internship completion certificate"
      ],
      buttonText: "Apply & Pay in Full",
      buttonStyle: "ghost"
    },
    {
      name: "Instalment Plan",
      price: "₦50k",
      period: "× 3 monthly payments · same benefits",
      best: true,
      features: [
        "12-week live learning program",
        "All session recordings — lifetime access",
        "Templates, toolkits & resource library",
        "Weekly assignments & feedback",
        "Cohort community access",
        "Guaranteed internship placement",
        "Learning phase certificate",
        "Internship completion certificate"
      ],
      buttonText: "Apply & Pay in 3 Parts",
      buttonStyle: "solid"
    },
    {
      name: "Corporate / Sponsored",
      price: "Custom",
      period: "company-sponsored enrollment",
      best: false,
      features: [
        "Everything in Full Payment",
        "Group enrollment discounts (3+ staff)",
        "Bespoke company-cohort track (5+)",
        "Progress reporting to your L&D team",
        "Invoice & flexible payment terms",
        "Priority placement in relevant internships"
      ],
      buttonText: "Contact Us for Pricing",
      buttonStyle: "ghost"
    }
  ];

  return (
    <section className="pricing" id="pricing">
      <div className="pricing-intro">
        <div className="eyebrow">
          Tuition
        </div>
        <h2 className="sec-h">
          One Investment.<br />A Career That <em>Lasts Forever.</em>
        </h2>
        <p className="sec-p">
          Every tuition option includes the full 6-month program — learning, internship, both certificates,
          and community access. We also offer instalment plans because your financial situation should never be what stops
          you from starting.
        </p>
      </div>
      
      <div className="pricing-grid">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`pricing-card ${plan.best ? 'best' : ''}`}
          >
            {plan.best && (
              <div className="pricing-badge">
                Most Popular
              </div>
            )}
            
            <div className="pricing-name">
              {plan.name}
            </div>
            
            <div className="pricing-price">
              {plan.price}
            </div>
            
            <div className="pricing-period">
              {plan.period}
            </div>
            
            <ul className="pricing-features">
              {plan.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="pricing-feature">
                  <span className="pricing-check">✓</span>
                  {feature}
                </li>
              ))}
            </ul>
            
            <button
              className="pricing-btn"
              onClick={() => document.getElementById('apply')?.scrollIntoView({behavior: 'smooth'})}
            >
              {plan.buttonText}
            </button>
          </div>
        ))}
      </div>
      
      <p className="pricing-note">
        All plans give access to the <strong>complete 6-month program</strong>. First payment
        secures your cohort spot. No hidden fees. No surprises. Ever.
      </p>
    </section>
  );
};

export default Pricing;
