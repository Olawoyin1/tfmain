import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FiUser, FiBookOpen, FiArrowRight, FiArrowLeft, FiBriefcase } from 'react-icons/fi';

const RoleSelectionPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-off flex flex-col">
      {/* Nav */}
      <nav className="nav-fixed">
        <a href="/" className="nav-logo-link">
          <div className="logo-box">TF</div>
          <div className="logo-name">Talent<span>Factory</span></div>
        </a>
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-[12px] font-semibold text-muted hover:text-black transition-colors"
        >
          <FiArrowLeft size={14} /> Back
        </button>
      </nav>

      <div className="flex-1 flex flex-col items-center justify-center px-6 pt-24 pb-16">
        {/* Header */}
        <div className="text-center mb-14 max-w-xl">
          <div className="eyebrow mb-4">Applications OpenCohort 1</div>
          <h1 className="section-title mb-4">
            Who are you<br />applying <em>as?</em>
          </h1>
          <p className="sec-p mx-auto">
            Select your role below so we can take you through the right process.
          </p>
        </div>

        {/* Role Cards3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full max-w-5xl">

          {/* Student */}
          <button
            onClick={() => navigate('/apply/student')}
            className="group text-left p-8 rounded-2xl border-2 bg-black border-black hover:border-gold transition-all duration-200 cursor-pointer"
          >
            <div className="w-14 h-14 rounded-xl bg-gold flex items-center justify-center mb-6">
              <FiBookOpen size={28} className="text-black" />
            </div>
            <div className="text-[10px] font-bold uppercase tracking-widest text-gold mb-3">Most Common</div>
            <h3 className="text-xl font-bold text-white mb-3 leading-snug">Student / Applicant</h3>
            <p className="text-sm text-white/60 leading-relaxed mb-8">
              I want to join the Talent Factory cohort program, build my HR career, and get placed at a real company.
            </p>
            <div className="flex items-center gap-2 text-[12px] font-bold text-gold group-hover:gap-3 transition-all">
              Continue <FiArrowRight size={14} />
            </div>
          </button>

          {/* Instructor */}
          <button
            onClick={() => navigate('/apply/tutor')}
            className="group text-left p-8 rounded-2xl border-2 bg-white border-transparent hover:border-black shadow-sm transition-all duration-200 cursor-pointer"
          >
            <div className="w-14 h-14 rounded-xl bg-off flex items-center justify-center mb-6">
              <FiUser size={28} className="text-black" />
            </div>
            <div className="text-[10px] font-bold uppercase tracking-widest text-gold mb-3">For Practitioners</div>
            <h3 className="text-xl font-bold text-black mb-3 leading-snug">Instructor / Faculty</h3>
            <p className="text-sm text-muted leading-relaxed mb-8">
              I am a senior HR professional interested in teaching a module in the next cohort.
            </p>
            <div className="flex items-center gap-2 text-[12px] font-bold text-black group-hover:gap-3 transition-all">
              Continue <FiArrowRight size={14} />
            </div>
          </button>

          {/* Partner */}
          <button
            onClick={() => navigate('/apply/partner')}
            className="group text-left p-8 rounded-2xl border-2 bg-white border-transparent hover:border-black shadow-sm transition-all duration-200 cursor-pointer"
          >
            <div className="w-14 h-14 rounded-xl bg-off flex items-center justify-center mb-6">
              <FiBriefcase size={28} className="text-black" />
            </div>
            <div className="text-[10px] font-bold uppercase tracking-widest text-gold mb-3">For Organisations</div>
            <h3 className="text-xl font-bold text-black mb-3 leading-snug">Internship Partner</h3>
            <p className="text-sm text-muted leading-relaxed mb-8">
              I want to list my company as an internship partner and absorb pre-screened HR talent.
            </p>
            <div className="flex items-center gap-2 text-[12px] font-bold text-black group-hover:gap-3 transition-all">
              Continue <FiArrowRight size={14} />
            </div>
          </button>
        </div>

        <p className="mt-10 text-[12px] text-muted">
          Already applied?{' '}
          <a href="/portal" className="text-black font-semibold inline-flex items-center gap-1 hover:text-gold transition-colors">
            Sign in to your portal <FiArrowRight size={14} />
          </a>
        </p>
      </div>
    </div>
  );
};

export default RoleSelectionPage;
