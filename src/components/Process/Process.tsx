import React from 'react';

const Process: React.FC = () => {
  const steps = [
    {
      number: 1,
      title: "Apply Online",
      description: "Fill out a straightforward application form — your background, your motivation, and what you're hoping to get out of Talent Factory. Takes about 15 minutes.",
      note: "⏱ Response within 7 days"
    },
    {
      number: 2,
      title: "Receive Your Offer",
      description: "Accepted students receive an offer letter within 7 days. Secure your place by paying your tuition in full or starting your instalment plan via Paystack.",
      note: "💳 Instalment plans available"
    },
    {
      number: 3,
      title: "Join the Cohort Community",
      description: "Get added to your cohort's private community, receive your class schedule, and meet your peers at Orientation. This is where it gets real.",
      note: "👥 Cohort group + orientation day"
    },
    {
      number: 4,
      title: "12 Weeks of Live Learning",
      description: "One live module per week. One expert per module. Assignments, group projects, a mid-cohort review, and a capstone presentation to finish. All recorded.",
      note: "📚 All sessions recorded for replay"
    },
    {
      number: 5,
      title: "Get Matched & Placed",
      description: "We match you to a partner company based on your profile, preferences, and the company's needs. You receive your placement details before the learning phase ends so you can prepare.",
      note: "🏢 Placed with a vetted partner company"
    },
    {
      number: 6,
      title: "Graduate, Certified, and Career-Ready",
      description: "After 12 weeks of interning, you receive your second certificate and join the Talent Factory alumni network. Many of our partner companies actively look to hire their outstanding interns.",
      note: "🎓 Dual certificate issued"
    }
  ];

  const timeline = [
    {
      label: "Week 1",
      text: "<strong>Orientation & Kickoff</strong> — Meet your cohort, faculty, and program roadmap. Set intentions."
    },
    {
      label: "Weeks 2–11",
      text: "<strong>Core Modules</strong> — One practitioner. One topic. One week. Twelve transformative sessions covering every dimension of the HR function."
    },
    {
      label: "Week 12",
      text: "<strong>Capstone & Graduation</strong> — Present your final project to a panel. Receive your Learning Certificate. Celebrate."
    },
    {
      label: "Month 4",
      text: "<strong>Internship Begins</strong> — You've been matched and placed. Your role, your supervisor, your mission starts now.",
      special: true
    },
    {
      label: "Months 4–6",
      text: "<strong>Weekly Check-Ins</strong> — Our team supports you every step through the internship. You're never left to figure it out alone.",
      special: true
    },
    {
      label: "Month 6",
      text: "<strong>Internship Certificate & Alumni</strong> — You're done. You're certified. You're career-ready. Welcome to the alumni network."
    }
  ];

  return (
    <section className="process">
      <div className="process-inner">
        <div>
          <div className="eyebrow">
            How It Works
          </div>
          <h2 className="sec-h">
            From Application<br />to <em>Career-Ready</em> —<br />Here's the Path.
          </h2>
          <p className="sec-p">
            Every step is clear, managed, and designed to remove friction. You focus on growing. We handle the rest.
          </p>
          
          <div className="proc-timeline">
            {steps.map((step, index) => (
              <div key={index} className="proc-step">
                <div className="flex flex-col items-center gap-0">
                  <div className="proc-num">
                    {step.number}
                  </div>
                  {index < steps.length - 1 && (
                    <div className="proc-line"></div>
                  )}
                </div>
                <div className="proc-content">
                  <div className="proc-title">
                    {step.title}
                  </div>
                  <p className="proc-desc">
                    {step.description}
                  </p>
                  <span className="proc-note">
                    {step.note}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="proc-timeline-dark">
          <div className="timeline-title">
            Your 6-Month Timeline
          </div>
          <div className="timeline-items">
            {timeline.map((item, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-dot-container">
                  <div className={`timeline-dot ${item.special ? 'special' : ''}`}></div>
                  {index < timeline.length - 1 && (
                    <div className="timeline-line"></div>
                  )}
                </div>
                <div className="timeline-content">
                  <div className="timeline-label">
                    {item.label}
                  </div>
                  <div 
                    className="timeline-text"
                    dangerouslySetInnerHTML={{ __html: item.text }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
