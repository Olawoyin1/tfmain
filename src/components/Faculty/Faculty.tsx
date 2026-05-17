import React, { useState } from 'react';
import { FiUser, FiBriefcase, FiDollarSign, FiTarget, FiX } from 'react-icons/fi';

const Faculty: React.FC = () => {
  const [selectedFaculty, setSelectedFaculty] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const facultyData = [
    {
      id: 1,
      role: "Founder & Program Director",
      name: "Elizabeth\nOdetokun, PHRi",
      org: "HR & Operations Lead, Mainstack Social Commerce",
      bio: "Elizabeth built Talent Factory because she lived through every gap it's designed to close. Six years ago, she started her own HR journey piecing things together—learning on the job, seeking out mentors, building systems from scratch in companies that were growing faster than anyone had anticipated. Today, she is the HR & Operations Lead at Mainstack, a strategic partner to the CEO, and one of the most respected people-first operators in Nigeria's startup ecosystem.\n\nShe served as founding HR at Zap Africa, scaling a team 50% in 60 days from zero. She helped bundle Africa reach 1 million customers and win LinkedIn's #1 Startup in 2022. She has built HR functions, playbooks, and internship programs from the ground up—and she wants to pass every lesson on to the next generation of HR professionals in Nigeria.",
      tags: ["PHRi Certified", "MBA Candidate · Lagos Business School", "Data Analytics · ALX Africa", "B.Sc. IPM · University of Lagos", "6+ Years in HR Operations", "Startup HR Specialist"]
    },
    {
      id: 2,
      role: "Senior Talent Acquisition Lead",
      name: "Adebayo\nOlumide, SHRM-CP",
      org: "Head of Talent, Flutterwave",
      bio: "Adebayo has been at the forefront of talent acquisition in Nigeria's fintech space for over 8 years. At Flutterwave, he has built and scaled recruitment processes that have supported the company's growth from 200 to over 1,000 employees across multiple markets. His expertise spans technical recruiting, executive search, and building inclusive hiring practices.\n\nPreviously, he led talent acquisition at Paystack (acquired by Stripe) and Interswitch, where he developed innovative sourcing strategies and candidate experience programs. Adebayo is passionate about creating equitable hiring processes and has mentored over 50 HR professionals in their recruitment journey.",
      tags: ["SHRM-CP Certified", "8+ Years in Talent Acquisition", "Fintech Specialist", "Executive Search Expert", "Diversity & Inclusion Advocate", "M.Sc. HRM · University of Lagos"]
    },
    {
      id: 3,
      role: "Compensation & Benefits Expert",
      name: "Funmi\nAdeyemi, CCP",
      org: "Total Rewards Manager, Andela",
      bio: "Funmi is a certified compensation professional with over 10 years of experience designing and implementing total rewards strategies across Africa. At Andela, she manages compensation frameworks for over 2,000 distributed team members across 15+ countries, ensuring pay equity and competitive positioning in global markets.\n\nShe has led major compensation reviews, designed variable pay programs, and implemented benefits packages that have improved employee retention by 40%. Funmi is recognized as one of the leading voices in compensation design for African tech companies and regularly speaks at HR conferences across the continent.",
      tags: ["CCP Certified", "10+ Years in Total Rewards", "Global Compensation Expert", "Pay Equity Specialist", "Benefits Design", "MBA · INSEAD"]
    },
    {
      id: 4,
      role: "Employee Relations Specialist",
      name: "Kemi\nOkafor, GPHR",
      org: "People Operations Director, Kuda Bank",
      bio: "Kemi specializes in employee relations, organizational development, and workplace culture transformation. At Kuda Bank, she has built comprehensive ER frameworks that have maintained employee satisfaction scores above 85% while navigating rapid scaling challenges in the competitive fintech landscape.\n\nWith experience spanning traditional banking and fintech startups, Kemi brings a unique perspective on managing complex employee relations cases, building performance management systems, and creating positive workplace cultures. She has successfully mediated over 200 workplace conflicts and designed training programs that have reduced ER incidents by 60%.",
      tags: ["GPHR Certified", "Employee Relations Expert", "Culture Transformation", "Performance Management", "Conflict Resolution", "B.Sc. Psychology · UI"]
    }
  ];

  const openModal = (faculty: any) => {
    setSelectedFaculty(faculty);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedFaculty(null);
  };
  return (
    <section className="faculty" id="faculty">
      <div className="faculty-intro">
        <div className="eyebrow">The Faculty</div>
        <h2 className="sec-h">
          Learn from the People<br />Who Are <em>Living</em> It.
        </h2>
        <p className="sec-p mx-auto max-w-4xl">
          Every instructor at Talent Factory is an active, senior HR or business professional working at a
          reputable Nigerian organisation. Not retired consultants. Not full-time academics. People who are doing the work
          right nowand sharing exactly how they do it.
        </p>
      </div>

      <div className="faculty-grid">
        {facultyData.map((faculty) => (
          <div key={faculty.id} className="faculty-card bg-black">
            <div className="faculty-avatar">
              <FiUser size={60} color="rgba(255,255,255,0.6)" />
            </div>
            <div className="faculty-content">
              <div className="faculty-role">{faculty.role}</div>
              <div className="faculty-name" style={{ whiteSpace: 'pre-line' }}>{faculty.name}</div>
              <div className="faculty-org">{faculty.org}</div>
              <p className="faculty-bio-preview">
                {faculty.bio.substring(0, 150)}...
              </p>
              <button 
                className="view-more-btn"
                onClick={() => openModal(faculty)}
              >
                View More
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && selectedFaculty && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content bg-black" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              <FiX size={24} />
            </button>
            <div className="modal-faculty">
              <div className="faculty-avatar">
                <FiUser size={80} color="rgba(255,255,255,0.6)" />
              </div>
              <div className="faculty-content">
                <div className="faculty-role">{selectedFaculty.role}</div>
                <div className="faculty-name" style={{ whiteSpace: 'pre-line' }}>{selectedFaculty.name}</div>
                <div className="faculty-org">{selectedFaculty.org}</div>
                <p className="faculty-bio" style={{ whiteSpace: 'pre-line' }}>
                  {selectedFaculty.bio}
                </p>
                <div className="faculty-tags">
                  {selectedFaculty.tags.map((tag: string, index: number) => (
                    <span key={index} className="faculty-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="faculty-promises">
        <div className="faculty-promise">
          <div className="w-fit mb-3 mx-auto text-center"><FiBriefcase size={36} /></div>
          <div className="faculty-promise-title">Active Practitioners Only</div>
          <p className="faculty-promise-desc">
            Every instructor is currently working in a senior HR or business role at a reputable Nigerian
            organisation. We don't book people who used to work in HR. We book people who are in HR right now.
          </p>
        </div>
        <div className="faculty-promise">
          <div className="w-fit mb-3 mx-auto text-center"><FiDollarSign size={36} /></div>
          <div className="faculty-promise-title">Paid Fairly for Their Time</div>
          <p className="faculty-promise-desc">
            Our instructors are compensated properly for every session they teach. This is how we attract
            the bestnot the most available. We respect their expertise with what it deserves: money.
          </p>
        </div>
        <div className="faculty-promise">
          <div className="w-fit mb-3 mx-auto text-center"><FiTarget size={36} /></div>
          <div className="faculty-promise-title">One Expert Per Topic</div>
          <p className="faculty-promise-desc">
            Each module is taught by the most qualified practitioner for that specific subjectwhether
            that's someone who has built 50 payroll structures or someone who has navigated complex ER cases for a decade.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Faculty;
