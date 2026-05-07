import React from 'react';
import { useNavigate } from 'react-router-dom';

const plans = [
  {
    name: "Full Payment",
    badge: "Best Value",
    price: "₦250,000",
    period: "One-time · due on acceptance",
    total: "₦250,000",
    note: "No interest. Spot secured immediately on payment.",
    best: false,
    features: [
      "12-week live learning program",
      "All session recordings — lifetime access",
      "Templates, toolkits & resource library",
      "Weekly assignments & feedback",
      "Cohort community access",
      "Guaranteed internship placement",
      "Learning phase certificate",
      "Internship completion certificate",
    ],
    cta: "Apply & Pay in Full",
  },
  {
    name: "3-Part Instalment",
    badge: "Most Popular",
    price: "₦87,500",
    period: "× 3 monthly payments",
    total: "₦262,500",
    note: "5% interest applied (₦12,500 surcharge). Same full access throughout.",
    best: true,
    features: [
      "12-week live learning program",
      "All session recordings — lifetime access",
      "Templates, toolkits & resource library",
      "Weekly assignments & feedback",
      "Cohort community access",
      "Guaranteed internship placement",
      "Learning phase certificate",
      "Internship completion certificate",
    ],
    cta: "Apply & Pay in 3 Parts",
  },
  {
    name: "Corporate / Sponsored",
    badge: null,
    price: "Custom",
    period: "invoice · per agreement",
    total: "₦250,000+",
    note: "Invoice to employer. Group discounts for 3+ from same organisation.",
    best: false,
    features: [
      "Everything in Full Payment",
      "Group enrollment discounts (3+ staff)",
      "Bespoke company-cohort track (5+)",
      "Progress reporting to your L&D team",
      "Invoice & flexible payment terms",
      "Priority placement in relevant internships",
    ],
    cta: "Contact Us for Pricing",
  },
];

const Pricing: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="pricing" id="pricing">
      <div className="pricing-intro">
        <div className="eyebrow">Tuition</div>
        <h2 className="sec-h">
          One Investment.<br />A Career That <em>Lasts Forever.</em>
        </h2>
        <p className="sec-p">
          Every tuition option includes the full 6-month program — learning, internship, both certificates,
          and community access. We offer instalment plans because your financial situation should never be
          what stops you from starting.
        </p>
      </div>

      <div className="pricing-grid">
        {plans.map((plan, i) => (
          <div key={i} className={`pricing-card ${plan.best ? 'best' : ''}`}>
            {plan.badge && (
              <div className="pricing-badge">{plan.badge}</div>
            )}

            <div className="pricing-name">{plan.name}</div>

            <div className="pricing-price">{plan.price}</div>

            <div className="pricing-period">{plan.period}</div>

            {/* Total + note */}
            <div className={`text-[12px] mb-6 pb-6 border-b ${plan.best ? 'border-white/10 text-white/40' : 'border-black/8 text-muted'}`}>
              <span className="font-bold" style={{ color: plan.best ? 'rgba(240,192,64,0.8)' : 'inherit' }}>
                Total: {plan.total}
              </span>
              {' · '}{plan.note}
            </div>

            <ul className="pricing-features">
              {plan.features.map((f, fi) => (
                <li key={fi} className="pricing-feature">
                  <span className="pricing-check">✓</span>
                  {f}
                </li>
              ))}
            </ul>

            <button
              className="pricing-btn"
              onClick={() => navigate('/apply')}
            >
              {plan.cta}
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
