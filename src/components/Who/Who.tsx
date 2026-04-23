import React from 'react';

const Who: React.FC = () => {
  const whoCards = [
    {
      icon: "🔄",
      title: "The Career Transitioner",
      description: "You're coming from marketing, admin, customer success, or any other field — and you've decided HR is where you want to build your career. Talent Factory gives you the knowledge, the credentials, and the work experience to make that transition stick permanently.",
      tag: "Career Switcher",
      dark: false
    },
    {
      icon: "🎓",
      title: "The University Student",
      description: "Studying HR Management, Personnel Management, or any related business program? We close the gap between what your textbooks teach and what the actual job demands — and we get you your first real internship before you graduate.",
      tag: "Undergraduate",
      dark: false
    },
    {
      icon: "🌱",
      title: "The Junior HR Professional",
      description: "0–3 years in and you're realising just how much you still have to learn. Talent Factory gives you the structured foundation, senior mentorship, and peer community to grow with intention and confidence — not just experience by accident.",
      tag: "0–3 Years Experience",
      dark: false
    },
    {
      icon: "🔍",
      title: "The Curious Explorer",
      description: "You've been drawn to HR for a while but haven't fully committed yet. Talent Factory is the best way to find out if it's truly the path for you — through real exposure, real practitioners, and real work experience that shows you what the job actually looks like.",
      tag: "Career Explorer",
      dark: false
    },
    {
      icon: "🏛️",
      title: "The HR Enthusiast",
      description: "HR is your thing — you read about it, think about it, and talk about it. You just haven't had a structured, high-quality environment to develop it properly. This is your community, your curriculum, and your launchpad.",
      tag: "Passionate About HR",
      dark: false
    },
    {
      icon: "✨",
      title: "Those Who Want the Very Best",
      description: "If your standard is high — if you want to learn from Nigeria's finest HR minds, build real skills, and graduate into a career you're proud of — then Talent Factory was built exactly for you. We teach HR at its highest level.",
      tag: "High Achievers",
      dark: true
    }
  ];

  return (
    <section className="who" id="who">
      <div className="who-inner">
        <div>
          <div className="eyebrow">
            Who This Is For
          </div>
          <h2 className="sec-h">
            Wherever You're<br />Starting From,<br />You Belong <em>Here.</em>
          </h2>
        </div>
        <div>
          <p className="sec-p mb-6">
            Talent Factory was built with a broad tent deliberately. The HR profession should be accessible to everyone who wants it — not just those who happened to study it at university or landed the right internship.
          </p>
          <p className="sec-p">
            Whether you are a fresh graduate, a career switcher, a junior professional trying to grow faster, or simply someone who finds HR endlessly fascinating — there is a place for you in the next cohort.
          </p>
        </div>
      </div>
      
      <div className="who-grid">
        {whoCards.map((card, index) => (
          <div
            key={index}
            className={`who-card ${card.dark ? 'dark' : ''}`}
          >
            <div className="who-icon">
              {card.icon}
            </div>
            <h3 className="who-title">
              {card.title}
            </h3>
            <p className="who-desc">
              {card.description}
            </p>
            <span className="who-tag">
              {card.tag}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Who;
