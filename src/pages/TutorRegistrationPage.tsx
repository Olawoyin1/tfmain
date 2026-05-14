import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiArrowLeft, FiCheck, FiArrowRight, FiAward, FiShield, FiLock, FiPhone, FiMail, FiUser, FiLinkedin, FiMapPin, FiInfo } from 'react-icons/fi';
import {
  Select, SelectContent, SelectItem,
  SelectTrigger, SelectValue,
} from '../components/UI/Select';

const TutorRegistrationPage: React.FC = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  // Form State
  const [form, setForm] = useState({
    firstName: '', lastName: '', email: '', phone: '',
    proTitle: '', employer: '', industry: '', linkedin: '',
    state: '', referral: '',
    totalYears: '', hrYears: '', seniority: '',
    notableOrgs: '', certs: [] as string[],
    achievement: '',
    teachModules: [] as string[], topModule: '',
    taughtBefore: '', teachingApproach: '', confidence: '',
    timeSlots: [] as string[], sessionCount: '', backup: '', cancelPolicy: '',
    whyTeach: '', wishKnown: '', bio: '', additionalInfo: '',
    consent: false
  });

  const STEPS = ['Profile', 'Experience', 'Teaching', 'Availability', 'Final'];

  const set = (field: string, value: any) => {
    setForm(p => ({ ...p, [field]: value }));
  };

  const toggleList = (field: 'certs' | 'teachModules' | 'timeSlots', val: string) => {
    const list = [...(form[field] as string[])];
    if (list.includes(val)) {
      set(field, list.filter(x => x !== val));
    } else {
      set(field, [...list, val]);
    }
  };

  const next = () => setStep(s => Math.min(s + 1, 5));
  const back = () => setStep(s => Math.max(s - 1, 1));

  if (submitted) {
    return (
      <div className="min-h-screen bg-off flex flex-col items-center justify-center px-6 py-20 text-center">
        <div className="w-20 h-20 rounded-full bg-gold/10 flex items-center justify-center mb-8">
          <FiAward size={40} className="text-gold" />
        </div>
        <h1 className="font-display text-[48px] font-black text-black leading-tight mb-4">
          Application <em className="text-gold italic">Submitted!</em>
        </h1>
        <p className="text-[18px] text-muted max-w-xl mx-auto mb-10 leading-relaxed">
          Thank you for your interest in teaching at Talent Factory. We are honoured that you want to invest your time and expertise in the next generation of Nigerian HR professionals. Our team will review your application and reach out within <strong>10 working days</strong>.
        </p>
        <div className="inline-block px-6 py-4 bg-gold/10 border border-gold/30 rounded-lg text-[13px] font-semibold text-black mb-8">
            📧 We'll be in touch at the email address you provided. Check your spam folder too!
        </div>
        <div>
            <button onClick={() => navigate('/')} className="btn-primary px-10 py-4">
            Back to Website
            </button>
        </div>
      </div>
    );
  }

  const lbl = "block text-[13px] font-bold text-black mb-1";
  const hint = "text-[12px] text-muted mb-3 leading-relaxed";
  const inp = "w-full px-5 py-4 rounded-xl border-2 border-black/5 bg-white text-[14px] font-medium transition-all focus:border-gold outline-none placeholder:text-muted/40";

  return (
    <div className="min-h-screen bg-off flex flex-col">
      {/* Nav */}
      <div className="bg-black px-10 py-5 flex items-center justify-between shrink-0">
        <a href="/" className="nav-logo-link">
          <div className="logo-box">TF</div>
          <div className="logo-name" style={{ color: 'white' }}>Talent<span>Factory</span></div>
        </a>
        <button onClick={() => navigate('/apply')} className="text-[13px] font-semibold text-white/40 hover:text-gold transition-colors flex items-center gap-2">
          <FiArrowLeft /> Back to role selection
        </button>
      </div>

      {/* Hero */}
      <div className="bg-black px-6 pt-12 pb-24 text-center relative overflow-hidden">
        <div className="text-[10px] font-bold uppercase tracking-[3px] text-gold/70 mb-4">Instructor Applications — Cohort 1</div>
        <h1 className="font-display text-[clamp(28px,5vw,52px)] font-black text-white leading-[1.1] mb-6">
          Teach at Talent <em className="text-gold italic">Factory</em>
        </h1>
        <p className="text-[15px] text-white/50 max-w-2xl mx-auto leading-relaxed">
          We're looking for Nigeria's finest HR practitioners to shape the next generation. If you have the experience, the passion, and the desire to teach — we want to hear from you.
        </p>

        {/* Progress */}
        <div className="max-w-3xl mx-auto mt-12 px-4">
          <div className="flex items-start">
            {STEPS.map((label, i) => {
              const n = i + 1;
              const active = step === n;
              const done = step > n;
              return (
                <React.Fragment key={label}>
                  <div className="flex flex-col items-center flex-1">
                    <div className={`w-9 h-9 rounded-full flex items-center justify-center text-[13px] font-bold transition-all border-2 ${done ? 'bg-gold border-gold text-black' : active ? 'bg-white border-white text-black' : 'bg-white/5 border-white/20 text-white/30'}`}>
                      {done ? <FiCheck /> : n}
                    </div>
                    <div className={`text-[10px] font-bold uppercase tracking-wider mt-2 ${active || done ? 'text-white/70' : 'text-white/25'}`}>{label}</div>
                  </div>
                  {i < STEPS.length - 1 && (
                    <div className={`h-[2px] flex-1 mt-[18px] ${done ? 'bg-gold' : 'bg-white/10'}`} />
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>

        <div className="absolute bottom-[-1px] left-0 right-0 h-10 bg-off" style={{ clipPath: 'ellipse(55% 100% at 50% 100%)' }} />
      </div>

      <div className="max-w-3xl mx-auto w-full px-6 py-16 pb-32">
        {/* Section 1: Profile */}
        {step === 1 && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="mb-10">
              <div className="text-[11px] font-bold text-gold uppercase tracking-widest mb-2">Section 1 of 5</div>
              <h2 className="text-3xl font-black text-black mb-2">Your Professional Profile</h2>
              <p className="text-muted leading-relaxed">Start with the basics. This is what we'll use to build your instructor profile on the Talent Factory platform.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
              <div>
                <label className={lbl}>First Name <span className="text-gold">*</span></label>
                <input className={inp} placeholder="e.g. Chidi" value={form.firstName} onChange={e => set('firstName', e.target.value)} />
              </div>
              <div>
                <label className={lbl}>Last Name <span className="text-gold">*</span></label>
                <input className={inp} placeholder="e.g. Nwosu" value={form.lastName} onChange={e => set('lastName', e.target.value)} />
              </div>
            </div>

            <div className="mb-6">
              <label className={lbl}>Email Address <span className="text-gold">*</span></label>
              <p className={hint}>We'll use this for all communications and payment processing.</p>
              <input type="email" className={inp} placeholder="e.g. chidi@company.com" value={form.email} onChange={e => set('email', e.target.value)} />
            </div>

            <div className="mb-6">
              <label className={lbl}>Phone Number <span className="text-gold">*</span></label>
              <input type="tel" className={inp} placeholder="+234 810 000 0000" value={form.phone} onChange={e => set('phone', e.target.value)} />
            </div>

            <div className="mb-6">
              <label className={lbl}>Professional Title / Designation <span className="text-gold">*</span></label>
              <p className={hint}>As it appears on your LinkedIn or email signature.</p>
              <input className={inp} placeholder="e.g. Head of People, Flutterwave" value={form.proTitle} onChange={e => set('proTitle', e.target.value)} />
            </div>

            <div className="mb-6">
              <label className={lbl}>Current Employer / Organisation <span className="text-gold">*</span></label>
              <input className={inp} placeholder="e.g. Kuda Bank, Deloitte Nigeria, MTN Nigeria" value={form.employer} onChange={e => set('employer', e.target.value)} />
            </div>

            <div className="mb-6">
              <label className={lbl}>Industry / Sector <span className="text-gold">*</span></label>
              <Select value={form.industry} onValueChange={v => set('industry', v)}>
                <SelectTrigger className="rounded-xl border-2 py-6"><SelectValue placeholder="Select your industry" /></SelectTrigger>
                <SelectContent>
                  {[
                    'Banking & Financial Services', 'Fintech', 'Technology / Software', 'eCommerce / Retail',
                    'FMCG / Consumer Goods', 'Oil & Gas / Energy', 'Healthcare / Pharmaceuticals',
                    'Consulting / Professional Services', 'Telecommunications', 'Education / EdTech',
                    'Media & Entertainment', 'Government / Public Sector', 'NGO / Non-profit',
                    'Real Estate', 'Manufacturing', 'Legal', 'Logistics & Supply Chain', 'Other'
                  ].map(i => (
                    <SelectItem key={i} value={i}>{i}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="mb-6">
              <label className={lbl}>LinkedIn Profile URL <span className="text-gold">*</span></label>
              <p className={hint}>Required — we use this to verify your professional background before reviewing your application.</p>
              <input type="url" className={inp} placeholder="https://linkedin.com/in/yourname" value={form.linkedin} onChange={e => set('linkedin', e.target.value)} />
            </div>

            <div className="mb-6">
              <label className={lbl}>State / Location <span className="text-gold">*</span></label>
              <Select value={form.state} onValueChange={v => set('state', v)}>
                <SelectTrigger className="rounded-xl border-2 py-6"><SelectValue placeholder="Select your state" /></SelectTrigger>
                <SelectContent>
                  {[
                    'FCT — Abuja', 'Lagos', 'Rivers', 'Oyo', 'Kano', 'Kaduna', 'Delta', 'Ogun', 'Enugu', 'Anambra', 'Edo', 'Imo', 'Abia', 'Outside Nigeria'
                  ].map(s => (
                    <SelectItem key={s} value={s}>{s}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="mb-10">
              <label className={lbl}>How did you hear about Talent Factory? <span className="text-gold">*</span></label>
              <Select value={form.referral} onValueChange={v => set('referral', v)}>
                <SelectTrigger className="rounded-xl border-2 py-6"><SelectValue placeholder="Select one" /></SelectTrigger>
                <SelectContent>
                  {['LinkedIn', 'Instagram', 'A colleague or friend', 'Invitation from Talent Factory team', 'WhatsApp (forwarded)', 'Event or webinar', 'Other'].map(r => (
                    <SelectItem key={r} value={r}>{r}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="flex justify-end">
              <button onClick={next} className="btn-primary px-10 py-4 flex items-center gap-2 shadow-lg shadow-gold/20">
                Next: Your Experience <FiArrowRight />
              </button>
            </div>
          </div>
        )}

        {/* Section 2: Experience */}
        {step === 2 && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="mb-10">
              <div className="text-[11px] font-bold text-gold uppercase tracking-widest mb-2">Section 2 of 5</div>
              <h2 className="text-3xl font-black text-black mb-2">Professional Experience</h2>
              <p className="text-muted leading-relaxed">We require a minimum of 7 years of active HR or senior business experience. Help us understand the depth and breadth of your career.</p>
            </div>

            <div className="mb-8">
              <label className={lbl}>Total Years of Professional Experience <span className="text-gold">*</span></label>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
                {['5–7 years', '8–10 years', '11–15 years', '15+ years'].map(v => (
                  <button key={v} onClick={() => set('totalYears', v)} className={`px-4 py-4 rounded-xl border-2 text-[14px] font-bold transition-all ${form.totalYears === v ? 'bg-gold border-gold text-black' : 'bg-white border-black/5 hover:border-gold/30'}`}>{v}</button>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <label className={lbl}>Total Years Specifically in HR <span className="text-gold">*</span></label>
              <div className="flex flex-col gap-2">
                {['3–5 years', '6–8 years', '9–12 years', '12+ years', 'Not HR-specific but highly relevant'].map(v => (
                  <button key={v} onClick={() => set('hrYears', v)} className={`text-left px-5 py-4 rounded-xl border-2 text-[14px] font-bold transition-all ${form.hrYears === v ? 'bg-gold border-gold text-black' : 'bg-white border-black/5 hover:border-gold/30'}`}>{v}</button>
                ))}
              </div>
            </div>

            <div className="mb-10">
              <label className={lbl}>Seniority Level of Your Current Role <span className="text-gold">*</span></label>
              <div className="flex flex-col gap-3">
                {[
                  { v: 'Senior Manager', sub: 'e.g. Senior HR Manager, Senior HRBP' },
                  { v: 'Head of Department / Function', sub: 'e.g. Head of HR, Head of Talent, Head of People' },
                  { v: 'Director', sub: 'e.g. HR Director, People Director' },
                  { v: 'VP / Chief People Officer / CHRO', sub: '' },
                  { v: 'C-Suite (CEO / COO / MD)', sub: '' },
                  { v: 'Consultant / Independent HR Practitioner', sub: '' }
                ].map(r => (
                  <button key={r.v} onClick={() => set('seniority', r.v)} className={`text-left p-5 rounded-xl border-2 transition-all ${form.seniority === r.v ? 'bg-gold/5 border-gold text-black' : 'bg-white border-black/5 hover:border-gold/30'}`}>
                    <div className="font-bold text-[15px]">{r.v}</div>
                    {r.sub && <div className="text-[12px] text-muted mt-1">{r.sub}</div>}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <label className={lbl}>List up to 3 notable organisations you've worked at <span className="text-gold">*</span></label>
              <p className={hint}>Include your most recognisable employers — this helps students connect with your credibility.</p>
              <textarea className={inp + " min-h-[140px]"} placeholder="e.g.&#10;1. Flutterwave — Head of People (2021–2023)&#10;2. Access Bank — Senior HR Business Partner (2018–2021)&#10;3. PwC Nigeria — HR Consultant (2015–2018)" value={form.notableOrgs} onChange={e => set('notableOrgs', e.target.value)} />
            </div>

            <div className="mb-8">
              <label className={lbl}>HR Certifications or Qualifications (if any)</label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  'PHRi (Professional in Human Resources — International)',
                  'SPHR / PHR (HRCI Certified)',
                  'SHRM-CP / SHRM-SCP',
                  'CIPM (Chartered Institute of Personnel Management Nigeria)',
                  'CIPD (Chartered Institute of Personnel and Development)',
                  'MBA with HR focus',
                  'Other relevant certification',
                  'No formal certification — experience-based expertise'
                ].map(c => (
                  <button key={c} onClick={() => toggleList('certs', c)} className={`text-left p-4 rounded-xl border-2 transition-all flex items-start gap-3 ${form.certs.includes(c) ? 'bg-gold/5 border-gold text-black' : 'bg-white border-black/5'}`}>
                    <div className={`w-5 h-5 rounded border-2 shrink-0 flex items-center justify-center mt-0.5 ${form.certs.includes(c) ? 'bg-gold border-gold' : 'border-black/10'}`}>
                      {form.certs.includes(c) && <FiCheck size={12} className="text-black" />}
                    </div>
                    <span className="text-[13px] font-medium leading-tight">{c}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-10">
              <label className={lbl}>Briefly describe your biggest professional achievement in HR <span className="text-gold">*</span></label>
              <p className={hint}>This is your chance to give us a flavour of what you've actually built or changed.</p>
              <textarea className={inp + " min-h-[140px]"} placeholder="e.g. Built the HR function from scratch at a fintech startup..." value={form.achievement} onChange={e => set('achievement', e.target.value)} />
            </div>

            <div className="flex justify-between">
              <button onClick={back} className="px-8 py-4 text-muted font-bold hover:text-black flex items-center gap-2">
                <FiArrowLeft /> Back
              </button>
              <button onClick={next} className="btn-primary px-10 py-4 flex items-center gap-2">
                Next: Teaching <FiArrowRight />
              </button>
            </div>
          </div>
        )}

        {/* Section 3: Teaching */}
        {step === 3 && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="mb-10">
              <div className="text-[11px] font-bold text-gold uppercase tracking-widest mb-2">Section 3 of 5</div>
              <h2 className="text-3xl font-black text-black mb-2">Your Teaching Preferences</h2>
              <p className="text-muted leading-relaxed">Tell us what you want to teach and how confident you are. One expert per module — we'll match you to the topic you can teach best.</p>
            </div>

            <div className="mb-8">
              <label className={lbl}>Which modules would you be best qualified to teach? <span className="text-gold">*</span></label>
              <p className={hint}>Select all that genuinely match your deep expertise — not just areas you're familiar with.</p>
              <div className="grid grid-cols-1 gap-3">
                {[
                  { t: 'The HR Landscape & Career Paths in Nigeria', s: 'Week 1 — Overview & orientation' },
                  { t: 'Recruitment, Talent Acquisition & Interviewing', s: 'Week 2 — Sourcing, JDs, interview design' },
                  { t: 'Onboarding, EVP & Employee Experience Design', s: 'Week 3 — 30/60/90 plans, experience mapping' },
                  { t: 'HR Operations, Policies & Labour Law Compliance', s: 'Week 4 — NSITF, ITF, Nigerian Labour Act' },
                  { t: 'Performance Management Frameworks', s: 'Week 5 — Goal setting, KPIs, feedback cultures, PIPs' },
                  { t: 'Compensation, Benefits & Total Rewards Design', s: 'Week 6 — Pay structures, benchmarking, benefits' },
                  { t: 'Learning & Development Strategy', s: 'Week 7 — TNA, L&D frameworks, LMS tools' },
                  { t: 'Employee Relations & Conflict Resolution', s: 'Week 8 — Grievances, disciplinary, difficult conversations' },
                  { t: 'People Analytics & HR Metrics', s: 'Week 9 — Dashboards, data storytelling, KPIs' },
                  { t: 'Strategic HR Business Partnering', s: 'Week 10 — HRBP mindset, CEO partnership, OKRs' },
                  { t: 'Scaling HR in Startups & Growing Companies', s: 'Week 11 — Building from zero, playbooks, SOPs' }
                ].map(m => (
                  <button key={m.t} onClick={() => toggleList('teachModules', m.t)} className={`text-left p-5 rounded-xl border-2 transition-all flex items-start gap-4 ${form.teachModules.includes(m.t) ? 'bg-gold/5 border-gold text-black' : 'bg-white border-black/5 hover:border-gold/30'}`}>
                    <div className={`w-6 h-6 rounded border-2 shrink-0 flex items-center justify-center mt-1 ${form.teachModules.includes(m.t) ? 'bg-gold border-gold' : 'border-black/10'}`}>
                      {form.teachModules.includes(m.t) && <FiCheck size={14} className="text-black" />}
                    </div>
                    <div>
                        <div className="font-bold text-[15px]">{m.t}</div>
                        <div className="text-[12px] text-muted mt-0.5">{m.s}</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <label className={lbl}>Which single module would you most want to teach? <span className="text-gold">*</span></label>
              <p className={hint}>If you could only teach one — which would it be? This helps us make the best match.</p>
              <input className={inp} placeholder="e.g. Compensation & Benefits Design" value={form.topModule} onChange={e => set('topModule', e.target.value)} />
            </div>

            <div className="mb-8">
              <label className={lbl}>Have you taught, trained, or facilitated before? <span className="text-gold">*</span></label>
              <div className="flex flex-col gap-3">
                {[
                  { v: 'Yes — frequently (workshops, training, speaking)', s: 'I regularly run workshops, training sessions, or speak at events' },
                  { v: 'Yes — occasionally', s: 'I\'ve done it before but not as a regular activity' },
                  { v: 'Internally only — to my team or colleagues', s: '' },
                  { v: 'Not formally, but comfortable doing so', s: 'Not formally, but I\'m confident I can' }
                ].map(r => (
                  <button key={r.v} onClick={() => set('taughtBefore', r.v)} className={`text-left p-5 rounded-xl border-2 transition-all ${form.taughtBefore === r.v ? 'bg-gold/5 border-gold text-black' : 'bg-white border-black/5 hover:border-gold/30'}`}>
                    <div className="font-bold text-[14px]">{r.v}</div>
                    {r.s && <div className="text-[12px] text-muted mt-1">{r.s}</div>}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <label className={lbl}>Briefly describe your proposed approach to teaching your module <span className="text-gold">*</span></label>
              <p className={hint}>How would you structure a 2-hour session? What would students walk away able to do?</p>
              <textarea className={inp + " min-h-[160px]"} placeholder="e.g. I would open with a real case study..." value={form.teachingApproach} onChange={e => set('teachingApproach', e.target.value)} />
            </div>

            <div className="mb-10">
              <label className={lbl}>Rate your confidence as a facilitator / trainer <span className="text-gold">*</span></label>
              <p className={hint}>1 = Very nervous about it, 10 = Highly experienced and comfortable</p>
              <div className="grid grid-cols-5 md:grid-cols-10 gap-2">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(n => (
                  <button key={n} onClick={() => set('confidence', String(n))} className={`w-full aspect-square rounded-xl border-2 font-bold transition-all ${form.confidence === String(n) ? 'bg-black border-black text-white' : 'bg-white border-black/5 hover:border-gold'}`}>{n}</button>
                ))}
              </div>
            </div>

            <div className="flex justify-between">
              <button onClick={back} className="px-8 py-4 text-muted font-bold hover:text-black flex items-center gap-2">
                <FiArrowLeft /> Back
              </button>
              <button onClick={next} className="btn-primary px-10 py-4 flex items-center gap-2">
                Next: Availability <FiArrowRight />
              </button>
            </div>
          </div>
        )}

        {/* Section 4: Availability */}
        {step === 4 && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="mb-10">
              <div className="text-[11px] font-bold text-gold uppercase tracking-widest mb-2">Section 4 of 5</div>
              <h2 className="text-3xl font-black text-black mb-2">Availability & Logistics</h2>
              <p className="text-muted leading-relaxed">Help us plan the cohort schedule around you. Classes are held online via Zoom — so no travel required.</p>
            </div>

            <div className="bg-gold/5 border-2 border-gold/20 p-8 mb-10 rounded-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10"><FiInfo size={80} /></div>
                <div className="relative z-10">
                    <p className="text-[14px] text-black font-medium leading-relaxed mb-4">
                        📋 <strong>Format reminder:</strong> All Talent Factory classes are delivered online via Zoom. Sessions are 2 hours long. Each instructor typically teaches 1–2 sessions per cohort. All sessions are recorded for students to rewatch.
                    </p>
                    <p className="text-[14px] text-black font-bold leading-relaxed">
                        💰 <strong>Pay Model:</strong> Talent Factory pays every instructor fairly for every session they deliver. No "exposure" arrangements. Every faculty member receives payment within 5 working days of their session.
                    </p>
                </div>
            </div>

            <div className="mb-10">
              <label className={lbl}>Which time slots work best for you? <span className="text-gold">*</span></label>
              <p className={hint}>Select all that apply — we'll match you to available slots.</p>
              <div className="grid grid-cols-1 gap-3">
                {[
                  'Weekday evenings — 7:00PM to 9:00PM',
                  'Saturday mornings — 9:00AM to 12:00PM',
                  'Saturday afternoons — 12:00PM to 3:00PM',
                  'Sunday mornings',
                  'Flexible — any of the above works for me'
                ].map(t => (
                   <button key={t} onClick={() => toggleList('timeSlots', t)} className={`text-left p-5 rounded-xl border-2 transition-all flex items-center justify-between ${form.timeSlots.includes(t) ? 'bg-gold/5 border-gold text-black' : 'bg-white border-black/5 hover:border-gold/30'}`}>
                   <span className="font-bold text-[14px]">{t}</span>
                   {form.timeSlots.includes(t) && <FiCheck className="text-gold" />}
                 </button>
                ))}
              </div>
            </div>

            <div className="mb-10">
              <label className={lbl}>How many sessions are you willing to teach per cohort? <span className="text-gold">*</span></label>
              <div className="flex flex-col gap-3">
                {[
                  { v: '1 session only', s: 'A single 2-hour class' },
                  { v: '1–2 sessions', s: 'Flexible based on need' },
                  { v: '2–3 sessions across the cohort', s: '' },
                  { v: 'Open to more — whatever the program needs', s: '' }
                ].map(r => (
                  <button key={r.v} onClick={() => set('sessionCount', r.v)} className={`text-left p-5 rounded-xl border-2 transition-all ${form.sessionCount === r.v ? 'bg-gold/5 border-gold text-black' : 'bg-white border-black/5 hover:border-gold/30'}`}>
                    <div className="font-bold text-[14px]">{r.v}</div>
                    {r.s && <div className="text-[12px] text-muted mt-1">{r.s}</div>}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-10">
              <label className={lbl}>Are you willing to be on call as a backup instructor if another is unavailable?</label>
              <div className="flex flex-col gap-3">
                {['Yes — I\'m happy to serve as a backup', 'Maybe — depends on the topic and notice given', 'No — I can only commit to my assigned sessions'].map(r => (
                  <button key={r} onClick={() => set('backup', r)} className={`text-left p-5 rounded-xl border-2 transition-all ${form.backup === r ? 'bg-gold/5 border-gold text-black' : 'bg-white border-black/5 hover:border-gold/30'}`}>
                    <div className="font-bold text-[14px]">{r}</div>
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-10">
              <label className={lbl}>Cancellation Policy Acknowledgement <span className="text-gold">*</span></label>
              <p className={hint}>We require a minimum of 14 days notice if you need to cancel a confirmed session.</p>
              <div className="flex flex-col gap-3">
                {['Yes — I understand and agree to the 14-day cancellation policy', 'I may need some flexibility — I\'d like to discuss'].map(r => (
                  <button key={r} onClick={() => set('cancelPolicy', r)} className={`text-left p-5 rounded-xl border-2 transition-all ${form.cancelPolicy === r ? 'bg-gold/5 border-gold text-black' : 'bg-white border-black/5 hover:border-gold/30'}`}>
                    <div className="font-bold text-[14px]">{r}</div>
                  </button>
                ))}
              </div>
            </div>

            <div className="flex justify-between">
              <button onClick={back} className="px-8 py-4 text-muted font-bold hover:text-black flex items-center gap-2">
                <FiArrowLeft /> Back
              </button>
              <button onClick={next} className="btn-primary px-10 py-4 flex items-center gap-2">
                Next: Final Step <FiArrowRight />
              </button>
            </div>
          </div>
        )}

        {/* Section 5: Final */}
        {step === 5 && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="mb-10">
              <div className="text-[11px] font-bold text-gold uppercase tracking-widest mb-2">Section 5 of 5</div>
              <h2 className="text-3xl font-black text-black mb-2">Your Motivation & Final Submission</h2>
              <p className="text-muted leading-relaxed">Last section — and the most personal one. Tell us why you want to teach.</p>
            </div>

            <div className="mb-8">
              <label className={lbl}>Why do you want to teach at Talent Factory? <span className="text-gold">*</span></label>
              <p className={hint}>Be genuine. We want to understand what drives your desire to invest your time in the next generation of HR professionals.</p>
              <textarea className={inp + " min-h-[160px]"} placeholder="Tell us what excites you..." value={form.whyTeach} onChange={e => set('whyTeach', e.target.value)} />
            </div>

            <div className="mb-8">
              <label className={lbl}>What is one thing you wish someone had taught you earlier in your HR career? (Optional)</label>
              <p className={hint}>We love this question. It often becomes a powerful part of how our instructors teach.</p>
              <textarea className={inp + " min-h-[120px]"} placeholder="e.g. I wish someone had told me earlier that HR's power comes from..." value={form.wishKnown} onChange={e => set('wishKnown', e.target.value)} />
            </div>

            <div className="mb-8">
              <label className={lbl}>Do you have a short bio (2–3 sentences) we could use? (Optional)</label>
              <p className={hint}>Optional — we'll write one for you if not. But yours is always better.</p>
              <textarea className={inp + " min-h-[120px]"} placeholder="e.g. Chidi Nwosu is the Head of People at Kuda Bank..." value={form.bio} onChange={e => set('bio', e.target.value)} />
            </div>

            <div className="mb-10">
              <label className={lbl}>Anything else you'd like us to know? (Optional)</label>
              <textarea className={inp + " min-h-[100px]"} placeholder="Additional context or questions..." value={form.additionalInfo} onChange={e => set('additionalInfo', e.target.value)} />
            </div>

            <div className="h-px bg-black/5 my-10" />

            <div className="mb-10">
              <label className="flex items-start gap-4 cursor-pointer group">
                <div onClick={() => set('consent', !form.consent)} className={`w-7 h-7 rounded-lg border-2 shrink-0 flex items-center justify-center transition-all mt-1 ${form.consent ? 'bg-gold border-gold' : 'border-black/10 group-hover:border-gold'}`}>
                  {form.consent && <FiCheck size={16} className="text-black" />}
                </div>
                <span className="text-[14px] text-muted leading-relaxed">
                   I confirm that all information provided in this application is accurate. I understand that Talent Factory will contact me using the details above and that my session fee will be communicated and agreed upon before any teaching commitment is confirmed. <span className="text-gold">*</span>
                </span>
              </label>
            </div>

            <div className="flex justify-between items-center">
              <button onClick={back} className="px-8 py-4 text-muted font-bold hover:text-black flex items-center gap-2">
                <FiArrowLeft /> Back
              </button>
              <button 
                onClick={() => setSubmitted(true)}
                disabled={!form.consent}
                className="btn-primary px-12 py-5 text-[15px] flex items-center gap-2 disabled:opacity-50 shadow-2xl shadow-gold/30 animate-pulse"
              >
                Submit Instructor Application ✓
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default TutorRegistrationPage;
