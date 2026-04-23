import React from 'react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      stars: "★★★★★",
      quote: "I've been in HR for 2 years and felt completely lost. No mentors, no structure, just figuring things out alone. Talent Factory is exactly what I needed — I signed up the day I found out about it.",
      author: "Taiwo Ogundimu",
      role: "Waitlist Applicant · Junior HR Analyst",
      avatar: "TO",
      avatarClass: "bg-gradient-to-br from-[#0F2B5B] to-[#2D5F8A]"
    },
    {
      stars: "★★★★★",
      quote: "As a 300-level HRM student, the biggest thing holding me back was not having real experience. The guaranteed internship placement is what made me apply immediately. That's a first in Nigeria.",
      author: "Amina Fawaz",
      role: "Waitlist Applicant · HRM Undergraduate, UNILAG",
      avatar: "AF",
      avatarClass: "bg-gradient-to-br from-[#5A3015] to-[#D4A017]"
    },
    {
      stars: "★★★★★",
      quote: "I've been wanting to move from Customer Success into HR for over a year. I didn't know where to start. Talent Factory gave me a clear, credible, affordable path to actually do it. This is it.",
      author: "Chisom Uzoma",
      role: "Waitlist Applicant · Career Transitioner",
      avatar: "CU",
      avatarClass: "bg-gradient-to-br from-[#1A4731] to-[#2D8A5F]"
    }
  ];

  return (
    <section className="testi" id="testi">
      <div className="testi-intro">
        <div className="eyebrow">
          Early Community Voices
        </div>
        <h2 className="sec-h">
          People Have Been Waiting<br /><em>For This.</em>
        </h2>
        <p className="sec-p">
          We're still building Cohort 1 — but our community is already talking. Here's what people who've
          seen what Talent Factory is doing have to say.
        </p>
      </div>
      
      <div className="testi-grid">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="testi-card"
          >
            <div className="testi-stars">
              {testimonial.stars}
            </div>
            <p className="testi-quote">
              {testimonial.quote}
            </p>
            <div className="testi-author">
              <div className={`testi-avatar ${testimonial.avatarClass}`}>
                {testimonial.avatar}
              </div>
              <div className="testi-info">
                <div className="testi-name">
                  {testimonial.author}
                </div>
                <div className="testi-role">
                  {testimonial.role}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
