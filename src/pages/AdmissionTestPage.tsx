import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiCheck, FiArrowRight, FiArrowLeft } from 'react-icons/fi';

interface Question {
  id: number;
  question: string;
  options?: string[];
  type?: 'essay';
}

const SECTIONS = [
  { key: 'A' as const, label: 'Knowledge', desc: 'Theoretical HR Knowledge', points: 20 },
  { key: 'B' as const, label: 'Judgement', desc: 'Situational Judgement', points: 20 },
  { key: 'C' as const, label: 'Thinking', desc: 'Critical Thinking', points: 10 },
];

const QUESTIONS: Record<'A' | 'B' | 'C', Question[]> = {
  A: [
    { id: 1, question: "What does the abbreviation 'HR' stand for?", options: ["Human Rights", "Human Resources", "Human Relations", "Humanistic Research"] },
    { id: 2, question: "Which of the following is NOT a core function of the HR department?", options: ["Recruitment and selection", "Managing accounts payable", "Performance management", "Learning and development"] },
    { id: 3, question: "A job description (JD) is BEST described as:", options: ["A list of candidates who applied for a role", "A document outlining the duties, responsibilities, and requirements of a specific role", "A contract signed between an employer and employee", "A record of an employee's performance history"] },
    { id: 4, question: "What does 'onboarding' mean in an HR context?", options: ["The process of dismissing an underperforming employee", "The process of integrating a new employee into the organisation", "A training programme for senior managers", "The process of collecting payroll information"] },
    { id: 5, question: "Which Nigerian government body is responsible for overseeing employee pensions?", options: ["NSITF", "PenCom", "NHF", "ITF"] },
    { id: 6, question: "The Labour Act in Nigeria primarily governs:", options: ["Corporate taxation and business registration", "The terms and conditions of employment and employee rights", "The registration of trade unions only", "Import and export of goods and services"] },
    { id: 7, question: "An employee's 'Key Performance Indicators' (KPIs) are best described as:", options: ["Personal details recorded in their HR file", "Measurable targets linked to their role's goals", "The benefits they receive on top of their salary", "Their attendance record for the year"] },
    { id: 8, question: "What is a 'probation period' in employment?", options: ["A period during which a new employee can earn double pay", "A defined initial period during which both employer and employee assess the fit before confirming permanent employment", "A disciplinary process for underperforming staff", "The notice period required before an employee resigns"] },
    { id: 9, question: "Which of the following best describes 'employee turnover'?", options: ["The number of promotions given in a year", "The rate at which employees leave an organisation and are replaced", "The process of rotating staff between departments", "The total number of employees in a company"] },
    { id: 10, question: "What does 'EVP' stand for in an HR context?", options: ["Employee Value Proposition", "External Vacancy Pool", "Executive Verification Process", "Employee Verification Protocol"] },
  ],
  B: [
    { id: 11, question: "A manager tells you an employee has been 'lazy' and wants to fire them immediately. As an HR professional, what should you do FIRST?", options: ["Agree with the manager and send a termination letter", "Ask the manager to document specific performance concerns and check if a Performance Improvement Plan has been attempted", "Tell the employee they are being fired", "Do nothing \u2014 it is the manager's decision"] },
    { id: 12, question: "An employee approaches you in confidence to say they are being harassed by a colleague. You are required to:", options: ["Keep it completely confidential and take no action unless the employee files a formal complaint", "Document the conversation and follow the company's grievance policy, explaining to the employee what will happen next", "Tell the employee to resolve it directly with the colleague", "Report it immediately to the CEO before speaking further with the employee"] },
    { id: 13, question: "A department head wants to post a job advert specifying 'female applicants only'. What do you advise?", options: ["Allow it \u2014 the department head knows best", "Refuse and explain that it is discriminatory under Nigerian Labour Law unless there is a legally valid exception", "Allow it as long as it is not published externally", "Approve it and review the applications before making any changes"] },
    { id: 14, question: "You notice that the same employee has been absent every Monday for the past 6 weeks. What is the appropriate HR response?", options: ["Immediately issue a query letter", "Have an informal, empathetic conversation with the employee first to understand the pattern, then follow up formally if needed", "Deduct pay immediately without discussion", "Send an email to their manager without speaking to the employee"] },
    { id: 15, question: "A new employee completes their 3-month probation and their manager wants to extend it without giving any reasons. What should you advise?", options: ["Approve the extension \u2014 probation can be extended at any time for any reason", "Advise that an extension requires documented, specific performance concerns communicated to the employee, with clear targets and a timeline", "Tell the employee their probation is extended and move on", "Confirm the employee's employment without telling the manager"] },
    { id: 16, question: "An employee is made redundant from their role. Under Nigerian law, what are they typically entitled to?", options: ["Nothing \u2014 redundancy is entirely at the employer's discretion", "A minimum of one month's notice or pay in lieu, and severance pay based on years of service", "Only their remaining salary \u2014 no additional entitlements", "Three months' notice regardless of how long they have worked"] },
    { id: 17, question: "A hiring manager wants to hire a candidate they met at a networking event without posting the job publicly. Your recommended approach is:", options: ["Approve it \u2014 if the manager is confident, the process is not necessary", "Advise that a competitive process should still be followed or at minimum documented to protect against claims of unfair hiring", "Refuse to process the hire entirely", "Tell the manager to post the job, review applications, but then still hire their contact"] },
    { id: 18, question: "An employee resigns and threatens to share negative information about the company on social media. What is the correct HR response?", options: ["Threaten legal action immediately", "Conduct a calm, professional exit conversation. Address legitimate grievances. Do not make threats. Ensure final pay is processed correctly.", "Immediately withhold their final paycheck", "Ignore the threat completely"] },
    { id: 19, question: "You are reviewing CVs for a role and notice an applicant's name suggests a particular ethnicity. You should:", options: ["Remove the application from consideration", "Consider the CV purely on qualifications and experience \u2014 ethnicity is irrelevant to role fitness", "Ask the hiring manager if they have a preference", "Flag the application as high-risk"] },
    { id: 20, question: "An employee asks for a copy of their personal data held by the company. Under the NDPR, you should:", options: ["Refuse \u2014 HR files are confidential", "Comply with the request within a reasonable timeframe (typically 30 days) by providing access to the data the company holds on them", "Ask the CEO before responding", "Only provide payroll data, nothing else"] },
  ],
  C: [
    { id: 21, question: "In your own words, describe one challenge facing HR professionals in Nigerian organisations today.", type: 'essay' },
    { id: 22, question: "What do you think is the most important quality an HR professional must have, and why?", type: 'essay' },
    { id: 23, question: "A company you have just joined has no HR policies at all. What would be the FIRST three policies you would write and why?", type: 'essay' },
    { id: 24, question: "If an employee told you they were being underpaid compared to a colleague in the same role, how would you handle the situation?", type: 'essay' },
    { id: 25, question: "Why do you want to build a career in Human Resources?", type: 'essay' },
  ],
};

const AdmissionTestPage: React.FC = () => {
  const [section, setSection] = useState<'A' | 'B' | 'C'>('A');
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30 * 60);

  useEffect(() => {
    if (timeLeft > 0 && !submitted) {
      const t = setTimeout(() => setTimeLeft(s => s - 1), 1000);
      return () => clearTimeout(t);
    }
  }, [timeLeft, submitted]);

  const fmt = (s: number) => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`;
  const sectionIdx = SECTIONS.findIndex(s => s.key === section);
  const isLast = section === 'C';

  const handleSubmit = async () => {
    setSubmitting(true);
    await new Promise(r => setTimeout(r, 1500));
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-off flex items-center justify-center px-6">
        <div className="text-center max-w-md">
          <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
            <FiCheck size={28} className="text-green-600" />
          </div>
          <h2 className="font-display text-[36px] font-black text-black leading-tight mb-4">
           Congratulations! Assessment <span className="text-gold italic">submitted.</span>
          </h2>
          <p className="text-[15px] text-muted leading-relaxed mb-8">
            Your responses are being reviewed. An admissions decision Offer, Waitlist, or Decline will be issued within 5 business days.
          </p>
          <div className="p-4 bg-gold/10 border border-gold/20 rounded-xl text-[13px] font-semibold text-black mb-8">
            📧 Keep an eye on your inbox. Check spam too.
          </div>
          <Link to="/portal" className="btn-primary w-full flex items-center justify-center gap-2 py-4">
            Proceed to Portal <FiArrowRight />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-off">
      {/* Nav */}
      <div className="bg-black px-6 sm:px-10 py-4 flex items-center justify-between">
        <a href="/" className="nav-logo-link">
          <div className="logo-box">TF</div>
          <div className="logo-name" style={{ color: 'white' }}>Talent<span>Factory</span></div>
        </a>
        <div className="flex items-center gap-2 sm:gap-4">
          {/* Timer */}
          <div className="flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg border border-white/10 bg-white/5">
            <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            <span className={`text-sm sm:text-[15px] font-black tabular-nums ${timeLeft < 300 ? 'text-red-400' : 'text-white'}`}>
              {fmt(timeLeft)}
            </span>
          </div>
          <button
            onClick={handleSubmit}
            disabled={submitting}
            className="px-4 sm:px-5 py-2 rounded-lg bg-gold text-black text-[11px] sm:text-[13px] font-bold hover:bg-gold-l transition-all disabled:opacity-50 flex items-center gap-1"
          >
            {submitting ? 'Submitting...' : <>{'Submit'} <FiArrowRight /></>}
          </button>
        </div>
      </div>

      {/* Hero strip with section progress */}
      <div className="bg-black px-6 pt-10 pb-20 text-center relative overflow-hidden">
        <div className="text-[10px] font-bold uppercase tracking-[2.5px] text-gold/70 mb-4">
          Pre-Admission Assessment · 30 Minutes
        </div>
        <h1 className="text-[clamp(24px,3.5vw,40px)] font-black text-white leading-tight mb-3">
          Section {section}: <span className="text-gold italic">{SECTIONS[sectionIdx].desc}</span>
        </h1>
        <p className="text-[13px] text-white/40 mb-10">
          {SECTIONS[sectionIdx].points} points · {QUESTIONS[section].length} question{QUESTIONS[section].length > 1 ? 's' : ''}
        </p>

        {/* Section progress dots */}
        <div className="max-w-2xl mx-auto px-4">
          <div className="flex items-start">
            {SECTIONS.map((s, i) => {
              const done = sectionIdx > i;
              const active = sectionIdx === i;
              return (
                <React.Fragment key={s.key}>
                  <div className="flex flex-col items-center flex-1">
                    <button
                      onClick={() => setSection(s.key)}
                      className="w-9 h-9 rounded-full border-2 flex items-center justify-center text-[13px] font-bold transition-all"
                      style={{
                        background: done ? '#1B4D3E' : active ? '#D4A017' : 'rgba(255,255,255,0.08)',
                        borderColor: done ? '#1B4D3E' : active ? '#D4A017' : 'rgba(255,255,255,0.15)',
                        color: done ? 'white' : active ? '#0A0A0A' : 'rgba(255,255,255,0.3)',
                      }}
                    >
                      {done ? <FiCheck /> : s.key}
                    </button>
                    <div className={`text-[10px] font-semibold uppercase tracking-[0.8px] mt-2 ${done || active ? 'text-white/60' : 'text-white/25'}`}>
                      {s.label}
                    </div>
                  </div>
                  {i < SECTIONS.length - 1 && (
                    <div className="h-[2px] flex-1 mt-[18px] transition-all" style={{ background: done ? '#1B4D3E' : 'rgba(255,255,255,0.08)' }} />
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>

        <div className="absolute bottom-[-1px] left-0 right-0 h-10 bg-off" style={{ clipPath: 'ellipse(55% 100% at 50% 100%)' }} />
      </div>

      {/* Questions */}
      <div className="max-w-2xl mx-auto px-5 py-12 pb-24">
        <div className="flex flex-col gap-8">
          {QUESTIONS[section].map((q, idx) => (
            <div key={q.id} className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
              {/* Question header */}
              <div className="px-7 py-5 border-b border-gray-100 flex items-start gap-4">
                <div className="w-7 h-7 rounded-full bg-off border border-gray-200 flex items-center justify-center text-[12px] font-bold text-muted shrink-0 mt-0.5">
                  {idx + 1}
                </div>
                <p className="text-[15px] font-semibold text-black leading-relaxed">{q.question}</p>
              </div>

              {/* Answer area */}
              <div className="px-7 py-6">
                {q.type === 'essay' ? (
                  <div>
                    <textarea
                      value={answers[q.id] || ''}
                      onChange={e => setAnswers(p => ({ ...p, [q.id]: e.target.value }))}
                      placeholder="Write your response here. Prioritise clarity over length."
                      className="w-full bg-off border-0 rounded-xl px-5 py-4 text-[14px] outline-none focus:ring-2 focus:ring-gold/30 transition-all min-h-[160px] resize-none leading-relaxed"
                    />
                    <p className="text-[11px] text-muted mt-2">No word limit. Be concise and specific.</p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {q.options!.map((opt, i) => {
                      const selected = answers[q.id] === opt;
                      return (
                        <button
                          key={i}
                          onClick={() => setAnswers(p => ({ ...p, [q.id]: opt }))}
                          className={`flex items-center gap-3 p-4 rounded-xl border-2 text-left transition-all ${selected ? 'border-gold bg-gold/5' : 'border-gray-100 bg-off hover:border-gold/30'}`}
                        >
                          <div className={`w-7 h-7 rounded-full border-2 flex items-center justify-center text-[11px] font-bold shrink-0 transition-all ${selected ? 'bg-gold border-gold text-black' : 'bg-white border-gray-200 text-muted'}`}>
                            {String.fromCharCode(65 + i)}
                          </div>
                          <span className="text-[13px] font-medium text-black leading-snug">{opt}</span>
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center mt-10 pt-8 border-t border-gray-100">
          <button
            onClick={() => setSection(section === 'C' ? 'B' : 'A')}
            disabled={section === 'A'}
            className="text-[13px] font-semibold text-muted hover:text-black transition-colors disabled:opacity-0 flex items-center gap-2"
          >
            <FiArrowLeft /> Previous Section
          </button>

          {!isLast ? (
            <button
              onClick={() => setSection(section === 'A' ? 'B' : 'C')}
              className="btn-primary flex items-center gap-2 px-8 py-4"
            >
              Next Section <FiArrowRight />
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              disabled={submitting}
              className="px-8 py-4 rounded-md font-bold text-[14px] transition-all disabled:opacity-50 flex items-center gap-2"
              style={{ background: '#1B4D3E', color: 'white' }}
            >
              {submitting ? 'Submitting...' : <>{'Submit Assessment'} <FiCheck /></>}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdmissionTestPage;


