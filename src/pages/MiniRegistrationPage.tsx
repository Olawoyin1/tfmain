import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiArrowLeft, FiArrowRight, FiFileText } from 'react-icons/fi';
import {
  Select, SelectContent, SelectItem,
  SelectTrigger, SelectValue,
} from '../components/UI/Select';

interface FormData {
  firstName: string; lastName: string; email: string; phone: string; linkedin: string;
  highestEducation: string; institution: string; graduationYear: string;
  currentRole: string; yearsExperience: string; resume: File | null;
}

const STEPS = ['Personal', 'Academic', 'Professional'];

const MiniRegistrationPage: React.FC = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [form, setForm] = useState<FormData>({
    firstName: '', lastName: '', email: '', phone: '', linkedin: '',
    highestEducation: '', institution: '', graduationYear: '',
    currentRole: '', yearsExperience: '', resume: null,
  });

  const set = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm(p => ({ ...p, [e.target.name]: e.target.value }));
  };

  const setFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) setForm(p => ({ ...p, resume: e.target.files![0] }));
  };

  // Input styles matching the screenshots — off-white bg, rounded-2xl, italic placeholder
  const inp = "w-full bg-off border-0 rounded-2xl px-5 py-4 text-[14px] font-medium italic text-black placeholder:text-muted/60 outline-none focus:ring-2 focus:ring-gold/30 transition-all";
  const lbl = "block text-[11px] font-bold uppercase tracking-widest text-muted mb-2";

  const tag = (text: string) => (
    <div className="inline-block border border-gold/40 text-gold text-[10px] font-bold uppercase tracking-[2px] px-4 py-2 rounded-sm mb-4">
      {text}
    </div>
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Nav */}
      <div className="bg-black px-10 py-4 flex items-center justify-between">
        <a href="/" className="nav-logo-link">
          <div className="logo-box">TF</div>
          <div className="logo-name" style={{ color: 'white' }}>Talent<span>Factory</span></div>
        </a>
        <button onClick={() => navigate('/apply/student')} className="text-[13px] font-semibold text-white/40 hover:text-gold transition-colors flex items-center gap-2">
          <FiArrowLeft size={14} /> Back
        </button>
      </div>

      {/* Hero strip with progress */}
      <div className="bg-black px-6 pt-12 pb-20 text-center relative overflow-hidden">
        <div className="text-[10px] font-bold uppercase tracking-[2.5px] text-gold/70 mb-4">Cohort 1 — Applications Open</div>
        <h1 className="text-[clamp(28px,4vw,44px)] font-black text-white leading-tight mb-4">
          Create Your <span className="text-gold italic">Account</span>
        </h1>
        <p className="text-[15px] text-white/50 max-w-md mx-auto leading-relaxed mb-10">
          Tell us about yourself. We'll use this to review your application and send your offer letter.
        </p>

        {/* Progress dots */}
        <div className="max-w-sm mx-auto px-4">
          <div className="flex items-start">
            {STEPS.map((label, i) => {
              const n = i + 1;
              const done = step > n;
              const active = step === n;
              return (
                <React.Fragment key={n}>
                  <div className="flex flex-col items-center flex-1">
                    <div
                      className="w-9 h-9 rounded-full border-2 flex items-center justify-center text-[13px] font-bold transition-all"
                      style={{
                        background: done ? '#1B4D3E' : active ? '#D4A017' : 'rgba(255,255,255,0.08)',
                        borderColor: done ? '#1B4D3E' : active ? '#D4A017' : 'rgba(255,255,255,0.15)',
                        color: done ? 'white' : active ? '#0A0A0A' : 'rgba(255,255,255,0.3)',
                      }}
                    >
                      {done ? '✓' : n}
                    </div>
                    <div className={`text-[10px] font-semibold uppercase tracking-[0.8px] mt-2 ${done || active ? 'text-white/60' : 'text-white/25'}`}>
                      {label}
                    </div>
                  </div>
                  {i < STEPS.length - 1 && (
                    <div className="h-[2px] flex-1 mt-[18px] transition-all" style={{ background: done ? '#1B4D3E' : 'rgba(255,255,255,0.08)' }} />
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>

        <div className="absolute bottom-[-1px] left-0 right-0 h-10 bg-white" style={{ clipPath: 'ellipse(55% 100% at 50% 100%)' }} />
      </div>

      {/* Form */}
      <div className="max-w-2xl mx-auto px-6 py-14 pb-24">
        <form onSubmit={e => { e.preventDefault(); navigate('/apply/payment'); }}>

          {/* ── Step 1: Personal ── */}
          {step === 1 && (
            <div>
              {tag('Identity Overview')}
              <h2 className="font-display text-[36px] font-black text-black leading-tight mb-10">
                Personal <em className="text-gold not-italic" style={{ fontStyle: 'italic' }}>Matrix</em>
              </h2>

              <div className="grid grid-cols-2 gap-5 mb-6">
                <div>
                  <label className={lbl}>First Name</label>
                  <input name="firstName" value={form.firstName} onChange={set} placeholder="e.g. Sarah" className={inp} required />
                </div>
                <div>
                  <label className={lbl}>Last Name</label>
                  <input name="lastName" value={form.lastName} onChange={set} placeholder="e.g. Johnson" className={inp} required />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-5 mb-6">
                <div>
                  <label className={lbl}>Email Address</label>
                  <input type="email" name="email" value={form.email} onChange={set} placeholder="sarah.j@example.com" className={inp} required />
                  <p className="text-[11px] text-muted mt-2 italic">* Official communication will be sent here.</p>
                </div>
                <div>
                  <label className={lbl}>Phone Number</label>
                  <input type="tel" name="phone" value={form.phone} onChange={set} placeholder="+234 800 000 0000" className={inp} required />
                </div>
              </div>

              <div className="mb-8">
                <label className={lbl}>LinkedIn Profile</label>
                <input type="url" name="linkedin" value={form.linkedin} onChange={set} placeholder="https://linkedin.com/in/username" className={inp} />
              </div>

              <p className="text-center text-[12px] text-muted mb-6">
                Already have an account?{' '}
                <a href="/portal" className="text-black font-bold underline underline-offset-2">Sign in</a>
              </p>

              <div className="flex justify-end">
                <button type="button" onClick={() => setStep(2)} className="btn-primary flex items-center gap-2 px-8 py-4">
                  Next Step <FiArrowRight size={14} />
                </button>
              </div>
            </div>
          )}

          {/* ── Step 2: Academic ── */}
          {step === 2 && (
            <div>
              {tag('Academic Background')}
              <h2 className="font-display text-[36px] font-black text-black leading-tight mb-10">
                Scholarly <em className="text-gold" style={{ fontStyle: 'italic' }}>History</em>
              </h2>

              <div className="mb-6">
                <label className={lbl}>Highest Qualification</label>
                <Select value={form.highestEducation} onValueChange={v => setForm(p => ({ ...p, highestEducation: v }))}>
                  <SelectTrigger><SelectValue placeholder="Select Level" /></SelectTrigger>
                  <SelectContent>
                    {['Secondary School (WAEC/NECO)','OND / NCE','HND',"Bachelor's Degree (B.Sc / B.A)",'Currently in University','Postgraduate (MBA / MSc / PhD)'].map(o => (
                      <SelectItem key={o} value={o}>{o}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="grid grid-cols-2 gap-5 mb-8">
                <div>
                  <label className={lbl}>Institution Name</label>
                  <input name="institution" value={form.institution} onChange={set} placeholder="e.g. University of Lagos" className={inp} required />
                </div>
                <div>
                  <label className={lbl}>Year of Graduation</label>
                  <input type="number" name="graduationYear" value={form.graduationYear} onChange={set} placeholder="2022" className={inp} required />
                </div>
              </div>

              <div className="flex justify-between">
                <button type="button" onClick={() => setStep(1)} className="flex items-center gap-2 text-[13px] font-semibold text-muted hover:text-black transition-colors">
                  <FiArrowLeft size={14} /> Move Back
                </button>
                <button type="button" onClick={() => setStep(3)} className="btn-primary flex items-center gap-2 px-8 py-4">
                  Next Step <FiArrowRight size={14} />
                </button>
              </div>
            </div>
          )}

          {/* ── Step 3: Professional ── */}
          {step === 3 && (
            <div>
              {tag('Professional Record')}
              <h2 className="font-display text-[36px] font-black text-black leading-tight mb-10">
                Career <em className="text-gold" style={{ fontStyle: 'italic' }}>Trajectory</em>
              </h2>

              <div className="grid grid-cols-2 gap-5 mb-6">
                <div>
                  <label className={lbl}>Current/Most Recent Role</label>
                  <input name="currentRole" value={form.currentRole} onChange={set} placeholder="e.g. Admin Executive" className={inp} required />
                </div>
                <div>
                  <label className={lbl}>Experience Level</label>
                  <Select value={form.yearsExperience} onValueChange={v => setForm(p => ({ ...p, yearsExperience: v }))}>
                    <SelectTrigger><SelectValue placeholder="Years of Experience" /></SelectTrigger>
                    <SelectContent>
                      {['Graduate Entry (0–1 Years)','Junior Officer (2–5 Years)','Experienced Professional (5+ Years)'].map(o => (
                        <SelectItem key={o} value={o}>{o}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="mb-8">
                <label className={lbl}>CV/Resume Upload</label>
                <div className="bg-off rounded-2xl p-10 flex flex-col items-center text-center hover:bg-gold/5 transition-all">
                  <FiFileText size={36} className="text-muted/40 mb-3" />
                  <p className="text-[11px] font-bold uppercase tracking-widest text-muted/60 mb-4 italic">
                    PDF Format Preferred (Max 5MB)
                  </p>
                  <input type="file" id="cv" onChange={setFile} className="hidden" accept=".pdf,.doc,.docx" />
                  <label htmlFor="cv" className="px-8 py-3 bg-white border border-gray-200 rounded-xl text-[11px] font-bold uppercase tracking-widest cursor-pointer hover:bg-black hover:text-white transition-all shadow-sm">
                    {form.resume ? form.resume.name : 'Select Document'}
                  </label>
                </div>
              </div>

              <div className="flex justify-between">
                <button type="button" onClick={() => setStep(2)} className="flex items-center gap-2 text-[13px] font-semibold text-muted hover:text-black transition-colors">
                  <FiArrowLeft size={14} /> Move Back
                </button>
                <button type="submit" className="btn-primary flex items-center gap-2 px-8 py-4">
                  Continue to Payment <FiArrowRight size={14} />
                </button>
              </div>
            </div>
          )}

        </form>
      </div>
    </div>
  );
};

export default MiniRegistrationPage;

