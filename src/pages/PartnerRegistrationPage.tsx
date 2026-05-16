import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiArrowLeft, FiCheck, FiArrowRight, FiSend, FiInfo } from 'react-icons/fi';
import {
  Select, SelectContent, SelectItem,
  SelectTrigger, SelectValue,
} from '../components/UI/Select';

const NIGERIAN_STATES = [
  'Abia','Adamawa','Akwa Ibom','Anambra','Bauchi','Bayelsa','Benue','Borno',
  'Cross River','Delta','Ebonyi','Edo','Ekiti','Enugu','FCTAbuja','Gombe',
  'Imo','Jigawa','Kaduna','Kano','Katsina','Kebbi','Kogi','Kwara','Lagos',
  'Nasarawa','Niger','Ogun','Ondo','Osun','Oyo','Plateau','Rivers','Sokoto',
  'Taraba','Yobe','Zamfara','Outside Nigeria',
];

const PartnerRegistrationPage: React.FC = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  // Form State
  const [form, setForm] = useState({
    companyName: '', orgType: '', industry: '', website: '',
    location: '', size: '',
    firstName: '', lastName: '', jobTitle: '', email: '', phone: '', source: '',
    internCount: 1,
    depts: [] as string[],
    experienceLevel: '',
    specificSkills: '',
    startDate: '',
    duration: '',
    workArrangement: '',
    weeklyHours: '',
    stipend: '',
    supervisor: '',
    convertIntent: '',
    additionalInfo: '',
    comments: '',
    agreements: {
        supervisor: false,
        substantiveWork: false,
        feedback: false,
        authorized: false,
        usage: false
    }
  });

  const STEPS = ['Organisation', 'Intern Needs', 'Placement Setup', 'Agreement & Submit'];

  const set = (field: string, value: any) => {
    setForm(p => ({ ...p, [field]: value }));
  };

  const toggleDept = (dept: string) => {
    const list = [...form.depts];
    if (list.includes(dept)) {
      set('depts', list.filter(x => x !== dept));
    } else {
      set('depts', [...list, dept]);
    }
  };

  const next = () => setStep(s => Math.min(s + 1, 4));
  const back = () => setStep(s => Math.max(s - 1, 1));

  if (submitted) {
    return (
      <div className="min-h-screen bg-off flex flex-col items-center justify-center px-6 py-20 text-center">
        <div className="w-20 h-20 rounded-full bg-green-50 flex items-center justify-center mb-8 border border-green-100">
          <FiSend size={40} className="text-green-600" />
        </div>
        <h1 className="font-display text-[48px] font-black text-black leading-tight mb-4">
          Application <em className="text-gold italic">Received!</em>
        </h1>
        <p className="text-[18px] text-muted max-w-xl mx-auto mb-10 leading-relaxed">
          Thank you for applying to become a Talent Factory Internship Partner. Your organisation's application has been submitted successfully and our Partnerships team will be in touch within <strong>24 business hours</strong>.
        </p>
        <div className="bg-white p-10 rounded-2xl border border-black/5 max-w-lg w-full text-left shadow-xl shadow-black/5">
            <div className="text-[12px] font-bold text-gold uppercase tracking-widest mb-8 text-center border-b border-black/5 pb-4">What happens next</div>
            <div className="space-y-6">
                {[
                    { n: 1, t: 'Confirmation email', d: 'Sent to your registered address within the next few minutes.' },
                    { n: 2, t: 'TF Partnerships team', d: 'Will call or email you within 24 business hours to confirm your application.' },
                    { n: 3, t: 'Intern profile sharing', d: 'Begins approximately 2 weeks before your preferred start date.' },
                    { n: 4, t: 'MOU signing', d: 'Completes your onboarding as a TF partner simple, two-page document.' }
                ].map(s => (
                    <div key={s.n} className="flex gap-5">
                        <div className="w-7 h-7 rounded-full bg-black text-white text-[12px] font-bold flex items-center justify-center shrink-0">{s.n}</div>
                        <div>
                            <div className="text-[15px] font-bold text-black mb-1">{s.t}</div>
                            <div className="text-[13px] text-muted leading-relaxed">{s.d}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        <button onClick={() => navigate('/')} className="btn-primary mt-12 px-10 py-4 shadow-lg shadow-gold/20">
          Back to Website
        </button>
      </div>
    );
  }

  const lbl = "block text-[13px] font-bold text-black mb-1";
  const inp = "w-full px-5 py-4 rounded-xl border-2 border-black/5 bg-white text-[14px] font-medium transition-all focus:border-gold outline-none placeholder:text-muted/30";
  const hintTxt = "text-[12px] text-muted mb-3 leading-relaxed";

  return (
    <div className="min-h-screen bg-off flex flex-col">
      {/* Header Strip */}
      <div className="bg-black px-10 py-5 flex items-center justify-between shrink-0">
        <a href="/" className="nav-logo-link">
          <div className="logo-box">TF</div>
          <div className="logo-name" style={{ color: 'white' }}>Talent<span>Factory</span></div>
        </a>
        <div className="hidden md:block py-1.5 px-4 rounded-full bg-white/10 border border-white/20 text-[11px] font-bold text-white uppercase tracking-widest">
            Partner Application
        </div>
        <button onClick={() => navigate('/apply')} className="text-[13px] font-semibold text-white/40 hover:text-gold transition-colors flex items-center gap-2">
          <FiArrowLeft /> Back
        </button>
      </div>

      {/* Hero */}
      <div className="bg-black px-6 pt-16 pb-24 text-center relative overflow-hidden">
        <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gold/10 border border-gold/30 rounded-full text-gold text-[12px] font-bold mb-6">
            🤝 Open for Cohort 1 Partnerships
        </div>
        <h1 className="font-display text-[clamp(28px,4.5vw,52px)] font-black text-white leading-[1.1] mb-6">
            Partner with us. <em className="text-gold italic">Absorb exceptional</em><br />HR talent into your team.
        </h1>
        <p className="text-[16px] text-white/50 max-w-2xl mx-auto leading-relaxed mb-10">
            Complete this form to register your organisation as a Talent Factory Internship Partner. We'll match you with pre-trained, assessed HR interns for a structured 3-month placement.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto mb-16">
            {['Zero recruitment fee', 'Pre-screened & trained talent', '3 months, extendable', 'TF-supported throughout'].map(t => (
                <div key={t} className="flex items-center gap-2.5 px-5 py-2.5 bg-white/5 border border-white/10 rounded-full text-white/70 text-[12px] font-medium transition-all hover:bg-white/10">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold" /> {t}
                </div>
            ))}
        </div>

        {/* Progress Dots */}
        <div className="max-w-3xl mx-auto flex items-center px-4">
            {STEPS.map((label, i) => {
                const n = i + 1;
                const active = step === n;
                const done = step > n;
                return (
                    <React.Fragment key={label}>
                        <div className="flex flex-col items-center flex-1 relative">
                            <div className={`w-9 h-9 rounded-full flex items-center justify-center text-[13px] font-bold transition-all z-10 border-2 ${done ? 'bg-gold border-gold text-black' : active ? 'bg-white border-white text-black' : 'bg-white/10 border-white/20 text-white/40'}`}>
                                {done ? <FiCheck /> : n}
                            </div>
                            <div className={`hidden md:block text-[10px] font-bold uppercase tracking-wider mt-3 whitespace-nowrap ${active || done ? 'text-white/80' : 'text-white/30'}`}>{label}</div>
                        </div>
                        {i < STEPS.length - 1 && (
                            <div className={`h-[1px] flex-1 -mt-8 ${done ? 'bg-gold' : 'bg-white/10'}`} />
                        )}
                    </React.Fragment>
                );
            })}
        </div>
        
        <div className="absolute bottom-[-1px] left-0 right-0 h-10 bg-off" style={{ clipPath: 'ellipse(55% 100% at 50% 100%)' }} />
      </div>

      {/* Form Content */}
      <div className="max-w-4xl mx-auto w-full px-6 -mt-12 mb-32 z-20">
        <div className="bg-white rounded-2xl shadow-2xl shadow-black/5 overflow-hidden">
            <div className="px-8 py-12 md:px-16">
                
                {step === 1 && (
                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <div className="mb-12">
                            <div className="text-[11px] font-bold text-gold uppercase tracking-widest mb-2">Section 1 of 4</div>
                            <h2 className="text-3xl font-black text-black mb-2">Organisation details</h2>
                            <p className="text-muted leading-relaxed">Basic details to help us understand your company and ensure the right match for your team.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                            <div>
                                <label className={lbl}>Organisation / Company Name <span className="text-gold">*</span></label>
                                <input className={inp} placeholder="e.g. Acme Technologies Ltd" value={form.companyName} onChange={e => set('companyName', e.target.value)} />
                            </div>
                            <div>
                                <label className={lbl}>Organisation Type <span className="text-gold">*</span></label>
                                <Select value={form.orgType} onValueChange={v => set('orgType', v)}>
                                    <SelectTrigger className="rounded-xl border-2 py-6 outline-none shadow-none focus:ring-0"><SelectValue placeholder="Select type..." /></SelectTrigger>
                                    <SelectContent>
                                        {[
                                            'Corporate / Large Enterprise (200+ staff)',
                                            'Medium Business (51–200 staff)',
                                            'Small Business / SME (11–50 staff)',
                                            'Startup (1–10 staff)',
                                            'NGO / Non-profit',
                                            'Government / Public Sector',
                                            'Multinational / Subsidiary'
                                        ].map(t => (
                                            <SelectItem key={t} value={t}>{t}</SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>
                            <div>
                                <label className={lbl}>Industry / Sector <span className="text-gold">*</span></label>
                                <Select value={form.industry} onValueChange={v => set('industry', v)}>
                                    <SelectTrigger className="rounded-xl border-2 py-6"><SelectValue placeholder="Select sector..." /></SelectTrigger>
                                    <SelectContent>
                                        {[
                                            'Banking & Financial Services', 'Fintech & Payments', 'Technology & Software',
                                            'FMCG & Consumer Goods', 'Telecommunications', 'Healthcare & Pharmaceuticals',
                                            'Oil & Energy', 'Manufacturing', 'Retail & E-commerce',
                                            'Consulting & Professional Services', 'Media & Entertainment', 'Education',
                                            'Logistics & Supply Chain', 'Real Estate & Construction', 'NGO / Development', 'Other'
                                        ].map(i => (
                                            <SelectItem key={i} value={i}>{i}</SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>
                            <div>
                                <label className={lbl}>Company Website</label>
                                <input type="url" className={inp} placeholder="https://yourcompany.com" value={form.website} onChange={e => set('website', e.target.value)} />
                            </div>
                            <div>
                                <label className={lbl}>State of Operation <span className="text-gold">*</span></label>
                                <Select value={form.location} onValueChange={v => set('location', v)}>
                                    <SelectTrigger className="rounded-xl border-2 py-6"><SelectValue placeholder="Select state..." /></SelectTrigger>
                                    <SelectContent>
                                        {NIGERIAN_STATES.map(s => <SelectItem key={s} value={s}>{s}</SelectItem>)}
                                    </SelectContent>
                                </Select>
                            </div>
                            <div>
                                <label className={lbl}>Number of Employees <span className="text-gold">*</span></label>
                                <Select value={form.size} onValueChange={v => set('size', v)}>
                                    <SelectTrigger className="rounded-xl border-2 py-6"><SelectValue placeholder="Select headcount..." /></SelectTrigger>
                                    <SelectContent>
                                        {['1–10', '11–50', '51–200', '201–500', '500+'].map(s => <SelectItem key={s} value={s}>{s}</SelectItem>)}
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>

                        <div className="relative py-10">
                            <div className="absolute inset-0 flex items-center"><div className="w-full h-px bg-black/5" /></div>
                            <div className="relative flex justify-center"><span className="bg-white px-4 text-[11px] font-black text-muted uppercase tracking-widest">Primary Contact Person</span></div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                            <div>
                                <label className={lbl}>Contact First Name <span className="text-gold">*</span></label>
                                <input className={inp} placeholder="First name" value={form.firstName} onChange={e => set('firstName', e.target.value)} />
                            </div>
                            <div>
                                <label className={lbl}>Contact Last Name <span className="text-gold">*</span></label>
                                <input className={inp} placeholder="Last name" value={form.lastName} onChange={e => set('lastName', e.target.value)} />
                            </div>
                            <div>
                                <label className={lbl}>Job Title / Role <span className="text-gold">*</span></label>
                                <input className={inp} placeholder="e.g. Head of HR, CEO, Operations Manager" value={form.jobTitle} onChange={e => set('jobTitle', e.target.value)} />
                            </div>
                            <div>
                                <label className={lbl}>Work Email Address <span className="text-gold">*</span></label>
                                <input type="email" className={inp} placeholder="name@company.com" value={form.email} onChange={e => set('email', e.target.value)} />
                            </div>
                            <div>
                                <label className={lbl}>Phone Number <span className="text-gold">*</span></label>
                                <input type="tel" className={inp} placeholder="+234 800 000 0000" value={form.phone} onChange={e => set('phone', e.target.value)} />
                            </div>
                            <div>
                                <label className={lbl}>How did you hear about Talent Factory?</label>
                                <Select value={form.source} onValueChange={v => set('source', v)}>
                                    <SelectTrigger className="rounded-xl border-2 py-6"><SelectValue placeholder="Select..." /></SelectTrigger>
                                    <SelectContent>
                                        {[
                                            'LinkedIn / Social Media', 'Referral from a colleague', 'Email outreach from TF team',
                                            'TF website', 'Industry event', 'News / Press coverage', 'Other'
                                        ].map(s => <SelectItem key={s} value={s}>{s}</SelectItem>)}
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>

                        <div className="bg-gold/5 border-l-4 border-gold p-6 mb-10 rounded-r-2xl">
                            <div className="flex gap-4">
                                <FiInfo size={24} className="text-gold shrink-0" />
                                <p className="text-[13px] text-muted leading-relaxed">
                                    <strong>Your contact details are used only to coordinate your internship partnership.</strong> We do not share your information with third parties or use it for unrelated communications.
                                </p>
                            </div>
                        </div>

                        <div className="flex justify-end pt-6">
                            <button onClick={next} className="btn-primary px-10 py-4 flex items-center gap-2 shadow-xl shadow-gold/20 transition-all hover:-translate-y-0.5">
                                Continue to Intern Needs <FiArrowRight />
                            </button>
                        </div>
                    </div>
                )}

                {step === 2 && (
                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                         <div className="mb-12">
                            <div className="text-[11px] font-bold text-gold uppercase tracking-widest mb-2">Section 2 of 4</div>
                            <h2 className="text-3xl font-black text-black mb-2">Intern Requirements</h2>
                            <p className="text-muted leading-relaxed">Help us understand your intern requirements so we can match you with the most suitable TF candidates.</p>
                        </div>

                        <div className="mb-12">
                            <label className={lbl}>How many interns do you wish to absorb for this cohort? <span className="text-gold">*</span></label>
                            <p className={hintTxt}>You can request up to 5 interns per cohort. Availability is subject to cohort size.</p>
                            <div className="flex items-center gap-8 mt-6 px-10 py-10 bg-off rounded-3xl border-2 border-dashed border-black/10">
                                <input type="range" min="1" max="5" value={form.internCount} onChange={e => set('internCount', parseInt(e.target.value))} className="flex-1 h-3 rounded-full accent-gold bg-black/10 appearance-none cursor-pointer" />
                                <div className="text-5xl font-black text-black min-w-[100px] text-center bg-white w-20 h-20 rounded-2xl flex items-center justify-center shadow-lg shadow-black/5">{form.internCount}</div>
                            </div>
                        </div>

                        <div className="mb-12">
                            <label className={lbl}>Which HR department(s) would interns be placed in? <span className="text-gold">*</span></label>
                            <p className={hintTxt}>Select all that apply</p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {[
                                    { t: 'Talent Acquisition / Recruitment', s: 'Sourcing, screening, interview coordination' },
                                    { t: 'Learning & Development', s: 'Training design, facilitation support' },
                                    { t: 'HR Operations / Administration', s: 'HRIS, documentation, employee records' },
                                    { t: 'Compensation & Benefits', s: 'Payroll support, benefits admin' },
                                    { t: 'Employee Engagement & Culture', s: 'Surveys, events, culture initiatives' },
                                    { t: 'HR Business Partnering', s: 'Supporting HRBP with projects' },
                                    { t: 'Organisational Development', s: 'Change management, workforce planning' },
                                    { t: 'General HR (cross-functional)', s: 'Rotating across HR functions' }
                                ].map(d => (
                                    <button key={d.t} onClick={() => toggleDept(d.t)} className={`text-left p-5 rounded-2xl border-2 transition-all flex items-start gap-4 ${form.depts.includes(d.t) ? 'bg-gold/5 border-gold text-black' : 'bg-white border-black/5 hover:border-gold/30'}`}>
                                        <div className={`w-6 h-6 rounded border-2 shrink-0 flex items-center justify-center mt-1 transition-all ${form.depts.includes(d.t) ? 'bg-gold border-gold' : 'border-black/5'}`}>
                                            {form.depts.includes(d.t) && <FiCheck size={14} className="text-black" />}
                                        </div>
                                        <div>
                                            <div className="text-[14px] font-bold leading-tight mb-1">{d.t}</div>
                                            <div className="text-[11px] text-muted leading-tight">{d.s}</div>
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="mb-12">
                            <label className={lbl}>Preferred experience level of intern <span className="text-gold">*</span></label>
                            <div className="flex flex-col gap-3">
                                {[
                                    { v: 'Entry level', t: 'Entry level fresh graduate / career changer, no prior HR experience' },
                                    { v: 'Some exposure', t: 'Some exposure 1–2 years in an adjacent role (admin, operations, etc.)' },
                                    { v: 'No preference', t: 'No preference send your best match based on our department needs' }
                                ].map(a => (
                                    <button key={a.v} onClick={() => set('experienceLevel', a.v)} className={`text-left p-5 rounded-2xl border-2 transition-all flex items-start gap-4 ${form.experienceLevel === a.v ? 'bg-gold/5 border-gold text-black' : 'bg-white border-black/5 hover:border-gold/30'}`}>
                                        <div className={`w-6 h-6 rounded-full border-2 shrink-0 flex items-center justify-center mt-0.5 transition-all ${form.experienceLevel === a.v ? 'bg-gold border-gold' : 'border-black/5'}`}>
                                            {form.experienceLevel === a.v && <div className="w-2 h-2 rounded-full bg-black" />}
                                        </div>
                                        <span className="text-[14px] font-bold">{a.t}</span>
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="mb-10">
                            <label className={lbl}>Any specific skills or knowledge areas you'd like the intern to have?</label>
                            <p className={hintTxt}>Optional but helpful for matching</p>
                            <textarea className={inp + " min-h-[140px]"} placeholder="e.g. Proficiency in Excel, exposure to HRIS software, strong communication skills, experience with social media recruiting..." value={form.specificSkills} onChange={e => set('specificSkills', e.target.value)} />
                        </div>

                        <div className="bg-black text-white p-8 rounded-3xl mb-12 flex gap-5 items-start">
                            <div className="w-12 h-12 rounded-2xl bg-gold flex items-center justify-center shrink-0">🎯</div>
                            <div>
                                <div className="text-[14px] font-bold mb-2">TF's Commitment to Quality</div>
                                <p className="text-[13px] text-white/60 leading-relaxed">
                                    <strong>TF interns are pre-trained in HR fundamentals before placement.</strong> The more specific you are about your needs, the better we can match. We'll share candidate profiles for your review before confirming placements.
                                </p>
                            </div>
                        </div>

                        <div className="flex justify-between pt-6">
                            <button onClick={back} className="px-8 py-4 text-muted font-bold hover:text-black flex items-center gap-2">
                                <FiArrowLeft /> Back
                            </button>
                            <button onClick={next} className="btn-primary px-10 py-4 flex items-center gap-2">
                                Continue to Placement <FiArrowRight />
                            </button>
                        </div>
                    </div>
                )}

                {step === 3 && (
                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                         <div className="mb-12">
                            <div className="text-[11px] font-bold text-gold uppercase tracking-widest mb-2">Section 3 of 4</div>
                            <h2 className="text-3xl font-black text-black mb-2">Placement Setup</h2>
                            <p className="text-muted leading-relaxed">Help us understand how your organisation will structure the placement experience.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                            <div>
                                <label className={lbl}>Preferred internship start date <span className="text-gold">*</span></label>
                                <input type="date" className={inp} value={form.startDate} onChange={e => set('startDate', e.target.value)} />
                            </div>
                            <div>
                                <label className={lbl}>Intended placement duration <span className="text-gold">*</span></label>
                                <Select value={form.duration} onValueChange={v => set('duration', v)}>
                                    <SelectTrigger className="rounded-xl border-2 py-6"><SelectValue placeholder="Select duration..." /></SelectTrigger>
                                    <SelectContent>
                                        {[
                                            '3 months (standard)',
                                            '3 months with extension option',
                                            '6 months',
                                            'Flexible / to be discussed'
                                        ].map(d => <SelectItem key={d} value={d}>{d}</SelectItem>)}
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>

                        <div className="mb-10">
                            <label className={lbl}>Work arrangement <span className="text-gold">*</span></label>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                {[
                                    { v: 'On-site', s: 'Full time at your office' },
                                    { v: 'Hybrid', s: 'Mix of on-site & remote' },
                                    { v: 'Fully remote', s: 'All work done remotely' }
                                ].map(a => (
                                    <button key={a.v} onClick={() => set('workArrangement', a.v)} className={`text-left p-5 rounded-2xl border-2 transition-all flex flex-col gap-1 ${form.workArrangement === a.v ? 'bg-black border-black text-white' : 'bg-white border-black/5 hover:border-gold/30'}`}>
                                        <span className="font-bold text-[14px]">{a.v}</span>
                                        <span className={`text-[11px] ${form.workArrangement === a.v ? 'text-white/50' : 'text-muted'}`}>{a.s}</span>
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                            <div>
                                <label className={lbl}>Expected weekly hours <span className="text-gold">*</span></label>
                                <Select value={form.weeklyHours} onValueChange={v => set('weeklyHours', v)}>
                                    <SelectTrigger className="rounded-xl border-2 py-6"><SelectValue placeholder="Select..." /></SelectTrigger>
                                    <SelectContent>
                                        {[
                                            'Full time (40 hrs/week)',
                                            'Part time (20–25 hrs/week)',
                                            'Flexible (project-based hours)'
                                        ].map(h => <SelectItem key={h} value={h}>{h}</SelectItem>)}
                                    </SelectContent>
                                </Select>
                            </div>
                            <div>
                                <label className={lbl}>Will the intern receive a stipend? <span className="text-gold">*</span></label>
                                <Select value={form.stipend} onValueChange={v => set('stipend', v)}>
                                    <SelectTrigger className="rounded-xl border-2 py-6"><SelectValue placeholder="Select..." /></SelectTrigger>
                                    <SelectContent>
                                        {[
                                            'Yes we will provide a monthly stipend',
                                            'Yes we will provide transport/meal allowance only',
                                            'Under discussion / to be agreed',
                                            'No stipend at this time'
                                        ].map(s => <SelectItem key={s} value={s}>{s}</SelectItem>)}
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>

                        <div className="mb-10">
                             <label className={lbl}>Who will supervise the intern within your organisation? <span className="text-gold">*</span></label>
                             <input className={inp} placeholder="e.g. HR Manager, Head of People, Operations Lead" value={form.supervisor} onChange={e => set('supervisor', e.target.value)} />
                        </div>

                        <div className="h-px bg-black/5 my-10" />

                        <div className="mb-10">
                            <label className={lbl}>Are you open to converting a high-performing intern to a full-time role?</label>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                {[
                                    { v: 'Yes', s: 'Internship is a pipeline for us' },
                                    { v: 'Possibly', s: 'If performance is strong' },
                                    { v: 'Not at this time', s: 'Placement only for now' }
                                ].map(a => (
                                    <button key={a.v} onClick={() => set('convertIntent', a.v)} className={`text-left p-5 rounded-2xl border-2 transition-all flex flex-col gap-1 ${form.convertIntent === a.v ? 'bg-gold/5 border-gold text-black' : 'bg-white border-black/5 hover:border-gold/30'}`}>
                                        <span className="font-bold text-[14px]">{a.v}</span>
                                        <span className="text-[11px] text-muted">{a.s}</span>
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="mb-10">
                            <label className={lbl}>Any additional information about your team or environment?</label>
                            <textarea className={inp + " min-h-[120px]"} placeholder="Tell us anything that would help us make the perfect match..." value={form.additionalInfo} onChange={e => set('additionalInfo', e.target.value)} />
                        </div>

                        {/* <div className="bg-gold/10 border border-gold/20 p-8 rounded-3xl mb-12 flex gap-5 items-start">
                            <div className="w-12 h-12 rounded-2xl bg-gold flex items-center justify-center shrink-0">📋</div>
                            <div>
                                <div className="text-[14px] font-bold text-black mb-2">Our Guarantee</div>
                                <p className="text-[13px] text-muted leading-relaxed">
                                    We will share candidate profiles for your review before any placement is confirmed. You can request interviews. If a placement isn't working within the first 2 weeks, we will replace the intern within 48 hours at no disruption to you.
                                </p>
                            </div>
                        </div> */}

                        <div className="flex justify-between pt-6">
                            <button onClick={back} className="px-8 py-4 text-muted font-bold hover:text-black flex items-center gap-2">
                                <FiArrowLeft /> Back
                            </button>
                            <button onClick={next} className="btn-primary px-10 py-4 flex items-center gap-2">
                                Last Step: Agreement <FiArrowRight />
                            </button>
                        </div>
                    </div>
                )}

                {step === 4 && (
                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                         <div className="mb-12">
                            <div className="text-[11px] font-bold text-gold uppercase tracking-widest mb-2">Section 4 of 4</div>
                            <h2 className="text-3xl font-black text-black mb-2">Partnership Commitments</h2>
                            <p className="text-muted leading-relaxed">Almost done. Please review our partnership terms and confirm your organisation's commitments.</p>
                        </div>

                        <div className="bg-black/5 p-8 rounded-3xl mb-10 border border-black/5">
                            <div className="text-[12px] font-black text-gold uppercase tracking-widest mb-6">Partnership Key Terms</div>
                            <div className="space-y-6 text-[13px] text-black/70 leading-relaxed">
                                <div>
                                    <strong className="text-black block mb-1">TF's Obligations to You:</strong> 
                                    Pre-screened and trained intern candidates; profile sharing before placement; a named TF relationship manager for every placement; weekly check-ins; replacement within 48 hours if needed; post-placement performance report.
                                </div>
                                <div>
                                    <strong className="text-black block mb-1">Organisation's Obligations to TF:</strong>
                                    Provide a named supervisor; assign substantive HR-related work (not general errands); complete a 6-week mid-placement feedback form; complete an end-of-placement performance review; notify TF immediately of any concerns.
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                                    <div className="bg-white/50 p-4 rounded-xl">
                                        <strong className="text-black block text-[11px] uppercase mb-1">Placement Duration</strong>
                                        Standard 3-month engagement, extendable by mutual agreement.
                                    </div>
                                    <div className="bg-white/50 p-4 rounded-xl">
                                        <strong className="text-black block text-[11px] uppercase mb-1">Fees</strong>
                                        No fee charged for receiving TF interns under the standard programme.
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-3 mb-10">
                            <label className={lbl}>Please confirm the following commitments <span className="text-gold">*</span></label>
                            {[
                                { k: 'supervisor', t: 'I confirm that our organisation will assign a named supervisor to each TF intern placed with us' },
                                { k: 'substantiveWork', t: 'I confirm that interns will be given substantive, HR-relevant work during their placement' },
                                { k: 'feedback', t: 'I confirm that our organisation will complete TF\'s feedback forms at the 6-week and end-of-placement stages' },
                                { k: 'authorized', t: 'I confirm that I am authorised to submit this application on behalf of my organisation' },
                                { k: 'usage', t: 'I agree that Talent Factory may feature our company name as an internship partner on our website and communications' }
                            ].map(a => (
                                <label key={a.k} className={`flex items-start gap-4 p-5 rounded-2xl border-2 transition-all cursor-pointer ${(form.agreements as any)[a.k] ? 'bg-gold/5 border-gold shadow-sm' : 'border-black/5 hover:border-black/10'}`}>
                                    <div className={`w-7 h-7 rounded-lg border-2 shrink-0 flex items-center justify-center mt-0.5 transition-all ${(form.agreements as any)[a.k] ? 'bg-gold border-gold' : 'bg-white border-black/5'}`}>
                                        {(form.agreements as any)[a.k] && <FiCheck size={16} className="text-black" />}
                                    </div>
                                    <span className={`text-[14px] font-medium leading-relaxed ${(form.agreements as any)[a.k] ? 'text-black' : 'text-muted'}`}>{a.t}</span>
                                    <input type="checkbox" className="hidden" checked={(form.agreements as any)[a.k]} onChange={() => set('agreements', { ...form.agreements, [a.k]: !(form.agreements as any)[a.k] })} />
                                </label>
                            ))}
                        </div>

                        <div className="mb-10">
                            <label className={lbl}>Any final comments or special requests?</label>
                            <textarea className={inp + " min-h-[100px]"} placeholder="Anything else you'd like us to know before we reach out..." value={form.comments} onChange={e => set('comments', e.target.value)} />
                        </div>

                        {/* <div className="bg-black text-white p-8 rounded-3xl mb-12 flex gap-5 items-start">
                            <div className="w-12 h-12 rounded-2xl bg-gold flex items-center justify-center shrink-0">✅</div>
                            <div>
                                <div className="text-[14px] font-bold mb-1 uppercase tracking-widest text-gold">Ready to submit?</div>
                                <p className="text-[13px] text-white/50 leading-relaxed">
                                    A member of the TF Partnerships team will contact you within <strong>24 business hours</strong> to confirm receipt, answer questions, and outline next steps.
                                </p>
                            </div>
                        </div> */}

                        <div className="flex justify-between pt-6">
                            <button onClick={back} className="px-8 py-4 text-muted font-bold hover:text-black flex items-center gap-2">
                                <FiArrowLeft /> Back
                            </button>
                            <button 
                                onClick={() => setSubmitted(true)}
                                disabled={!Object.values(form.agreements).every(v => v)}
                                className="btn-primary px-12 py-5 text-[15px] flex items-center gap-3 disabled:opacity-50 shadow-2xl shadow-gold/30 transition-all hover:scale-[1.02]"
                            >
                                Submit Partner Application <FiCheck size={18} />
                            </button>
                        </div>
                    </div>
                )}

            </div>
        </div>
      </div>

      <div className="bg-black py-12 px-6 text-center border-t border-white/5">
        <p className="text-[11px] text-white/30 uppercase tracking-[2px]">
            Talent Factory · Nigeria's Premier HR Academy · Lagos, Nigeria · partnerships@talentfactory.ng
        </p>
      </div>

    </div>
  );
};

export default PartnerRegistrationPage;
