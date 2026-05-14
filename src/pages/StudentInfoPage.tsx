import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';

const StudentInfoPage: React.FC = () => {
  const navigate = useNavigate();

  const appSteps = [
    { n: 1, label: 'Create your account', sub: 'Basic details · secure your portal access' },
    { n: 2, label: 'Pay ₦10,000 application fee', sub: 'Non-refundable · secures your assessment slot' },
    { n: 3, label: 'Complete your full profile', sub: '5 sections · personal, background, motivation' },
    { n: 4, label: 'Take the admission test', sub: '30 minutes · 3 sections · auto-scored' },
    { n: 5, label: 'Receive your offer', sub: 'Decision within 7 working days' },
  ];

  const phases = [
    {
      num: '01',
      tag: 'Phase 1 · Months 1–3',
      title: 'The Learning Phase',
      subtitle: 'Where You Build Your Foundation',
      body: 'Twelve weeks of live, online instruction from senior HR practitioners across Nigeria\'s best companies. One expert per topic. Every session is held on weekday evenings or weekends so you can attend without quitting your job or pausing your studies. Every session is recorded and uploaded within 24 hours.',
      stats: [
        { val: '12', label: 'Live Modules' },
        { val: 'Live', label: 'Online Format' },
        { val: 'All', label: 'Sessions Recorded' },
        { val: '1', label: 'Certificate Issued' },
      ],
    },
    {
      num: '02',
      tag: 'Phase 2 · Months 4–6',
      title: 'The Internship Phase',
      subtitle: 'Where You Use What You\'ve Learned',
      body: 'The learning phase builds your knowledge. The internship phase tests itin a real company, with real people, doing real HR work. Every student who completes the learning phase is placed with a Talent Factory partner company. You\'ll have a role, a supervisor, weekly check-ins, and structured performance evaluations.',
      stats: [
        { val: '12', label: 'Weeks of Interning' },
        { val: 'Real', label: 'Nigerian Company' },
        { val: 'Guided', label: 'Supervised Role' },
        { val: '1', label: 'Certificate Issued' },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-off flex flex-col">
      {/* Nav */}
      <div className="bg-black px-10 py-4 flex items-center justify-between shrink-0">
        <a href="/" className="nav-logo-link">
          <div className="logo-box">TF</div>
          <div className="logo-name" style={{ color: 'white' }}>Talent<span>Factory</span></div>
        </a>
        <button
          onClick={() => navigate('/apply')}
          className="flex items-center gap-2 text-[13px] font-semibold text-white/40 hover:text-gold transition-colors"
        >
          <FiArrowLeft size={14} /> Change role
        </button>
      </div>

      {/* Hero */}
      <div className="bg-black px-6 pt-14 pb-24 text-center relative overflow-hidden">
        <div className="text-[10px] font-bold uppercase tracking-[3px] text-gold/70 mb-4">
          Cohort 1 · Student Application
        </div>
        <h1 className="font-display text-[clamp(32px,4.5vw,56px)] font-black text-white leading-[1.1] mb-5">
          Six Months. Two Phases.<br /><em className="text-gold">One Complete Career Transformation.</em>
        </h1>
        <p className="text-[15px] text-white/50 max-w-xl mx-auto leading-relaxed">
          Talent Factory is not a course. It is not a workshop. It is a full career development program, the most structured and complete pathway into the HR profession that exists in Nigeria today.
        </p>
        <div className="absolute bottom-[-1px] left-0 right-0 h-10 bg-off" style={{ clipPath: 'ellipse(55% 100% at 50% 100%)' }} />
      </div>

      {/* Body */}
      <div className="flex-1 max-w-5xl mx-auto w-full px-6 py-14 grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-12 items-start">

        {/* ── Left: program phases ── */}
        <div>
          <div className="text-[11px] font-bold uppercase tracking-[2.5px] text-muted mb-6">The Program</div>

          <div className="flex flex-col gap-5">
            {phases.map((p) => (
              <div key={p.num} className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
                {/* Phase header */}
                <div className="bg-black px-7 py-6">
                  <div className="flex items-start gap-4">
                    <div className="font-display text-[56px] font-black text-white/5 leading-none select-none -mt-2">
                      {p.num}
                    </div>
                    <div>
                      <div className="text-[10px] font-bold uppercase tracking-[2px] text-gold/70 mb-1">{p.tag}</div>
                      <div className="text-[18px] font-black text-white leading-tight">{p.title}</div>
                      <div className="text-[14px] text-gold italic">{p.subtitle}</div>
                    </div>
                  </div>
                </div>

                {/* Phase body */}
                <div className="px-7 py-5">
                  <p className="text-[13px] text-muted leading-relaxed mb-5">{p.body}</p>

                  {/* Stats row */}
                  <div className="grid grid-cols-4 gap-2">
                    {p.stats.map((s, i) => (
                      <div key={i} className="bg-off rounded-lg p-3 text-center">
                        <div className="font-display text-[18px] font-black text-black">{s.val}</div>
                        <div className="text-[10px] text-muted mt-0.5 leading-tight">{s.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          
        </div>

        {/* ── Right: application steps + CTA ── */}
        <div className="lg:sticky lg:top-8">
          {/* Fee notice */}
          <div className="flex gap-3 items-start p-4 rounded-xl border border-gold/30 bg-black text-white mb-7">
            <div className="w-5 h-5 rounded-full bg-gold/20 flex items-center justify-center shrink-0 mt-0.5">
              <span className="text-gold text-[11px] text-white">!</span>
            </div>
            <div>
              <div className="text-[13px] font-bold text-white">₦10,000 non-refundable application fee</div>
              <p className="text-[12px] text-white mt-0.5 leading-relaxed">
                This fee is an administrative processing fee and is separate from tuition.. <strong>Not</strong> deducted from tuition.
              </p>
            </div>
          </div>

          {/* Steps */}
          <div className="text-[11px] font-bold uppercase tracking-[2.5px] text-muted mb-5">Application process</div>
          <div className="flex flex-col mb-7">
            {appSteps.map((s, i) => (
              <div key={i} className="flex gap-3 items-start pb-5 relative">
                {i < appSteps.length - 1 && (
                  <div className="absolute left-[14px] top-7 bottom-0 w-px bg-gray-200" />
                )}
                <div className="w-7 h-7 rounded-full bg-white border border-gray-200 flex items-center justify-center shrink-0 z-10">
                  <span className="text-[11px] font-bold text-muted">{s.n}</span>
                </div>
                <div className="pt-0.5">
                  <div className="text-[13px] font-semibold text-black">{s.label}</div>
                  <div className="text-[11px] text-muted mt-0.5">{s.sub}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Time + trust */}
          



          {/* Program stats */}
          <div className="grid grid-cols-3 gap-2 my-5">
            {[
              { val: '6', label: 'Month program', sub: 'Learning + internship' },
              { val: '30–50', label: 'Per cohort', sub: 'Intentionally small' },
              { val: '100%', label: 'Placement goal', sub: 'Every graduate' },
            ].map((s, i) => (
              <div key={i} className="bg-white rounded-xl border border-gray-100 p-3 text-center">
                <div className="font-display text-[23px] font-black text-black">{s.val}</div>
                <div className="text-[12px] font-bold text-black mt-0.5">{s.label}</div>
                <div className="text-[11px] text-muted">{s.sub}</div>
              </div>
            ))}
          </div>
         

          <button
            onClick={() => navigate('/apply/register')}
            className="btn-primary w-full flex items-center justify-center gap-2 py-4"
          >
            Start My Application <FiArrowRight size={15} />
          </button>

          <p className="text-center text-[11px] text-muted mt-4">
            Already applied?{' '}
            <a href="/portal" className="text-black font-bold underline underline-offset-2 inline-flex items-center gap-1">
              Sign in <FiArrowRight size={12} />
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default StudentInfoPage;
