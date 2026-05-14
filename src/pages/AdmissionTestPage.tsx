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
    { id: 1, question: "Typically, what is the first formal stage in the standard recruitment lifecycle?", options: ["Candidate Interviewing", "Job Analysis & Requisition", "Onboarding & Induction", "Reference Checking"] },
    { id: 2, question: "According to the Nigerian Labour Act, what is the minimum statutory annual leave for an employee after 12 months of continuous service?", options: ["3 Working Days", "6 Working Days", "12 Working Days", "21 Working Days"] },
    { id: 3, question: "Which HR metric measures the likelihood of employees recommending their organisation as a great place to work?", options: ["Turnover Rate", "Cost Per Hire", "eNPS (Employee Net Promoter Score)", "Revenue Per Employee"] },
    { id: 4, question: "In performance management, what does a '360-degree feedback' system entail?", options: ["Feedback from the manager only", "A review conducted every 360 days", "Anonymized feedback from peers, subordinates, and supervisors", "A physical health assessment for employees"] },
  ],
  B: [
    { id: 5, question: "You discover an employee has accidentally shared sensitive payroll data with the team. What is your immediate priority as an HR officer?", options: ["Immediately terminate the employee", "Ignore it if no one complains", "Contain the breach, secure the data, and report to management", "Post the data on the notice board for transparency"] },
  ],
  C: [
    { id: 6, question: "In 2–3 sentences, explain why HR is shifting from a 'Support Function' to a 'Strategic Business Partner' in the modern Nigerian corporate space.", type: 'essay' },
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
            Assessment <span className="text-gold italic">submitted.</span>
          </h2>
          <p className="text-[15px] text-muted leading-relaxed mb-8">
            Your responses are being reviewed. An admissions decisionOffer, Waitlist, or Declinewill be issued within 5 business days.
          </p>
          <div className="p-4 bg-gold/10 border border-gold/20 rounded-xl text-[13px] font-semibold text-black mb-8">
            📧 Keep an eye on your inboxcheck spam too.
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


