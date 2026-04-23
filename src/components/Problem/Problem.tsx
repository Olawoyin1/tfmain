import React from 'react';

const Problem: React.FC = () => {
  const painPoints = [
    {
      icon: "🎓",
      title: "University programs that teach theory, not practice",
      description: "Nigerian universities teach Labour Law and Management Theory. They don't teach you how to run an actual performance review, build a payroll structure, or handle a disciplinary hearing. We do."
    },
    {
      icon: "🚧",
      title: "No credible pathway for career transitioners",
      description: "If you're moving from operations, admin, customer success, or marketing into HR, there's no structured bridge to help you make that move credibly. Talent Factory is that bridge."
    },
    {
      icon: "🔇",
      title: "No access to senior HR mentors or practitioners",
      description: "Most junior HR professionals have no real exposure to how experienced practitioners think and work. Our instructor model puts them in your classroom every week."
    },
    {
      icon: "🔍",
      title: "Internships that are hard to get and teach nothing",
      description: "The internship experience in Nigeria is broken — unstructured, often unpaid, and largely unguided. We give you a placement with purpose: a structured role, weekly check-ins, and a real supervisor who's accountable to us."
    },
    {
      icon: "🌍",
      title: "Generic online courses built for a different context",
      description: "Most HR courses are built for Western workplaces. They don't mention NSITF, ITF contributions, or navigating HR in a Nigerian startup. We teach HR for where you actually work."
    }
  ];

  return (
    <section className="problem">
      <div className="problem-inner">
        <div>
          <div className="eyebrow">
            Why Talent Factory Exists
          </div>
          <div className="prob-quote">
            "The problem isn't the talent. It's the pathway that was never built for them."
          </div>
          <p className="prob-body">
            We know exactly what it feels like to want an HR career and not know how to build one the right way. To apply
            for jobs and get told you need experience. To get the internship and not know what you're doing. To sit in
            online courses that have nothing to do with the Nigerian workplace.
            <br /><br />
            Five specific problems have been holding aspiring HR professionals back in Nigeria. Talent Factory was
            designed to solve all five — at once.
          </p>
        </div>
        
        <div className="pain-list">
          {painPoints.map((point, index) => (
            <div
              key={index}
              className="pain-item"
            >
              <span className="pain-icon">
                {point.icon}
              </span>
              <div>
                <div className="pain-title">
                  {point.title}
                </div>
                <div className="pain-desc">
                  {point.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problem;
