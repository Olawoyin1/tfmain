import React, { useState } from 'react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "Do I need HR experience to apply?",
      answer: "Not at all. Talent Factory is designed to welcome people at every stage — from total beginners to those with a few years of experience looking to level up. Our curriculum starts from the fundamentals and builds through to strategic, advanced practice. If you're motivated and committed, you're qualified to apply."
    },
    {
      question: "When and how are the classes held?",
      answer: "Classes are held on weekday evenings (7PM–9PM) and Saturday mornings — so you can attend without leaving your current job or pausing your degree. Every session is recorded and available in your resource folder within 24 hours. Rewatch as many times as you need. The schedule is designed for real working people, not full-time students."
    },
    {
      question: "Is the internship placement really guaranteed?",
      answer: "Yes. This is one of our core commitments and not something we treat lightly. Before every cohort opens, we secure internship slots from our partner companies — enough for every student who completes the learning phase in good standing. We match you based on your background, location, and goals. The only way you don't get placed is if you don't complete the learning phase."
    },
    {
      question: "Will the internship be paid?",
      answer: "We advocate for paid internships and prioritise partners who provide at least a monthly stipend. However, we cannot uniformly guarantee payment across all placements — this varies by company. What we can guarantee is a structured, high-quality learning environment with a real role, a real supervisor, and real HR work to do. We communicate compensation details before any placement is confirmed so you can make an informed decision."
    },
    {
      question: "What makes the certificate valuable?",
      answer: "Two things: the curriculum it represents, and the network behind it. Your Talent Factory certificate signifies that you completed a rigorous, practitioner-taught program aligned with PHRi learning objectives — and that you have 12 weeks of supervised internship experience to back it up. As our partner company network grows and our alumni move into hiring positions, the weight of this credential will only increase."
    },
    {
      question: "Can I apply to become an instructor?",
      answer: "Yes. If you are a senior HR or business professional with 7+ years of experience at a reputable organisation, we'd love to hear from you. Instructors are compensated per session, gain visibility within a growing HR community, and contribute to shaping the next generation of practitioners. Apply via the Instructor Application link in the footer."
    },
    {
      question: "What happens if I miss a class?",
      answer: "Every live session is recorded and uploaded to your cohort resource folder within 24 hours. We understand you have jobs, studies, and lives — missing a session is not a failure. You'll have access to the recording and the materials. What matters is that you catch up, submit your assignments, and stay engaged with your cohort."
    },
    {
      question: "How many students are in a cohort?",
      answer: "We keep cohorts intentionally small — 30 to 50 students per cohort. This is a deliberate decision. A smaller group means more meaningful interactions with instructors, better peer relationships, more personalised internship matching, and a tighter community that actually supports each other. Quality over volume, always."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="faq" id="faq">
      <div className="faq-inner">
        <div className="faq-left-sticky">
          <div className="eyebrow">
            FAQ
          </div>
          <h2 className="sec-h">
            Questions We<br />Hear <em>Most Often.</em>
          </h2>
          <p className="sec-p mb-8">
            We've tried to answer everything that matters below. If you have a question that isn't here, reach out directly. We respond to everyone.
          </p>
          <a href="mailto:hello@talentfactory.ng" className="btn-primary">
            Email Us →
          </a>
        </div>
        
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-item ${openIndex === index ? 'open' : ''}`}
            >
              <button
                className="faq-q"
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                <span className="faq-icon">+</span>
              </button>
              <div className="faq-a">
                <div className="faq-a-inner">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
