import React, { useState } from 'react';
import {
  Select, SelectContent, SelectItem,
  SelectTrigger, SelectValue,
} from '../components/UI/Select';
import { FiCheck, FiArrowRight, FiArrowLeft } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

// ── Types ──────────────────────────────────────────────────────────────────
interface FormState {
  // S1
  firstName: string; lastName: string; email: string; phone: string;
  state: string; gender: string; ageRange: string; referral: string;
  // S2
  education: string; fieldOfStudy: string; employment: string;
  jobTitle: string; industry: string; hrExp: string; linkedin: string;
  // S3
  applyReason: string; whyJoin: string; twoYears: string; biggestChallenge: string;
  // S4
  schedule: string; modules: string[]; internIndustry: string;
  hrKnowledge: string; referredBy: string;
  // S5
  payment: string; techAccess: string; additionalInfo: string; consent: boolean;
}

const STEPS = ['Personal', 'Background', 'Motivation', 'Program', 'Final'];

const NIGERIAN_STATES = [
  'Abia','Adamawa','Akwa Ibom','Anambra','Bauchi','Bayelsa','Benue','Borno',
  'Cross River','Delta','Ebonyi','Edo','Ekiti','Enugu','FCTAbuja','Gombe',
  'Imo','Jigawa','Kaduna','Kano','Katsina','Kebbi','Kogi','Kwara','Lagos',
  'Nasarawa','Niger','Ogun','Ondo','Osun','Oyo','Plateau','Rivers','Sokoto',
  'Taraba','Yobe','Zamfara','Outside Nigeria',
];

const MODULES = [
  'Recruitment & Talent Acquisition','Onboarding & Employee Experience',
  'HR Operations & Labour Law Compliance','Performance Management',
  'Compensation & Total Rewards','Learning & Development Strategy',
  'People Analytics & HR Metrics','Strategic HR Business Partnering',
  'Scaling HR in Startups','Employee Relations & Conflict Resolution',
];

// ── Sub-components ─────────────────────────────────────────────────────────
const RadioOpt: React.FC<{ label: string; sub?: string; selected: boolean; onClick: () => void }> = ({ label, sub, selected, onClick }) => (
  <div onClick={onClick} className={`flex items-start gap-3 p-4 rounded-lg border-2 cursor-pointer transition-all select-none ${selected ? 'border-gold bg-gold/5' : 'border-black/10 bg-white hover:border-gold/40 hover:bg-gold/5'}`}>
    <div className={`w-[18px] h-[18px] rounded-full border-2 shrink-0 mt-0.5 flex items-center justify-center transition-all ${selected ? 'border-gold bg-gold' : 'border-black/20'}`}>
      {selected && <div className="w-[7px] h-[7px] rounded-full bg-white" />}
    </div>
    <div>
      <div className="text-[14px] font-semibold text-black leading-snug">{label}</div>
      {sub && <div className="text-[12px] text-muted mt-0.5">{sub}</div>}
    </div>
  </div>
);

const CheckOpt: React.FC<{ label: string; selected: boolean; onClick: () => void }> = ({ label, selected, onClick }) => (
  <div onClick={onClick} className={`flex items-center gap-3 p-4 rounded-lg border-2 cursor-pointer transition-all select-none ${selected ? 'border-gold bg-gold/5' : 'border-black/10 bg-white hover:border-gold/40 hover:bg-gold/5'}`}>
    <div className={`w-[18px] h-[18px] rounded-[4px] border-2 shrink-0 flex items-center justify-center transition-all ${selected ? 'border-gold bg-gold' : 'border-black/20'}`}>
      {selected && <FiCheck className="text-white text-[11px] font-bold" />}
    </div>
    <span className="text-[14px] font-semibold text-black">{label}</span>
  </div>
);

const Field: React.FC<{ label: string; hint?: string; req?: boolean; error?: string; children: React.ReactNode }> = ({ label, hint, req, error, children }) => (
  <div className="mb-7">
    <label className="block text-[14px] font-bold text-black mb-1">
      {label}{req && <span className="text-gold ml-1">*</span>}
    </label>
    {hint && <p className="text-[12px] text-muted mb-2">{hint}</p>}
    {children}
    {error && <p className="text-[12px] text-red-500 font-semibold mt-1.5">{error}</p>}
  </div>
);

const inputCls = "w-full px-[18px] py-[14px] rounded-md border-2 border-black/12 bg-white text-[14px] font-sans text-black outline-none focus:border-gold focus:shadow-[0_0_0_4px_rgba(212,160,23,0.1)] transition-all";
const textareaCls = `${inputCls} min-h-[110px] resize-y leading-relaxed`;

// ── Main Component ─────────────────────────────────────────────────────────
const ApplicationFormPage: React.FC = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});

  const [form, setForm] = useState<FormState>({
    firstName: '', lastName: '', email: '', phone: '',
    state: '', gender: '', ageRange: '', referral: '',
    education: '', fieldOfStudy: '', employment: '',
    jobTitle: '', industry: '', hrExp: '', linkedin: '',
    applyReason: '', whyJoin: '', twoYears: '', biggestChallenge: '',
    schedule: '', modules: [], internIndustry: '', hrKnowledge: '', referredBy: '',
    payment: '', techAccess: '', additionalInfo: '', consent: false,
  });

  const set = (field: keyof FormState, value: string | boolean | string[]) => {
    setForm(p => ({ ...p, [field]: value }));
    setErrors(p => ({ ...p, [field]: undefined }));
  };

  const toggleModule = (m: string) => {
    set('modules', form.modules.includes(m) ? form.modules.filter(x => x !== m) : [...form.modules, m]);
  };

  const validate = (s: number): boolean => {
    const e: Partial<Record<keyof FormState, string>> = {};
    if (s === 1) {
      if (!form.firstName.trim()) e.firstName = 'Required';
      if (!form.lastName.trim()) e.lastName = 'Required';
      if (!form.email.includes('@')) e.email = 'Enter a valid email';
      if (!form.phone.trim()) e.phone = 'Required';
      if (!form.state) e.state = 'Required';
      if (!form.gender) e.gender = 'Required';
      if (!form.ageRange) e.ageRange = 'Please select your age range';
      if (!form.referral) e.referral = 'Required';
    }
    if (s === 2) {
      if (!form.education) e.education = 'Required';
      if (!form.employment) e.employment = 'Required';
      if (!form.hrExp) e.hrExp = 'Required';
    }
    if (s === 3) {
      if (!form.applyReason) e.applyReason = 'Required';
      if (form.whyJoin.trim().length < 50) e.whyJoin = 'Please write at least 50 characters';
      if (!form.twoYears.trim()) e.twoYears = 'Required';
    }
    if (s === 4) {
      if (!form.schedule) e.schedule = 'Required';
      if (form.modules.length === 0) e.modules = 'Select at least one module';
      if (!form.internIndustry) e.internIndustry = 'Required';
      if (!form.hrKnowledge) e.hrKnowledge = 'Please rate your HR knowledge';
    }
    if (s === 5) {
      if (!form.payment) e.payment = 'Required';
      if (!form.techAccess) e.techAccess = 'Required';
      if (!form.consent) e.consent = 'You must confirm this to submit';
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const goTo = (n: number) => {
    if (n > step && !validate(step)) { window.scrollTo({ top: 0, behavior: 'smooth' }); return; }
    setStep(n);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubmit = async () => {
    if (!validate(5)) return;
    setSubmitting(true);
    // Simulate API call
    await new Promise(r => setTimeout(r, 1500));
    setSubmitting(false);
    navigate('/apply/test');
  };

  return (
    <div className="min-h-screen bg-off">
      {/* ── Top nav ── */}
      <div className="bg-black px-10 py-4 flex items-center justify-between">
        <a href="/" className="nav-logo-link">
          <div className="logo-box">TF</div>
          <div className="logo-name" style={{ color: 'white' }}>Talent<span>Factory</span></div>
        </a>
        <button onClick={() => navigate('/apply/payment')} className="text-[13px] font-semibold text-white/40 hover:text-gold transition-colors flex items-center gap-2 bg-transparent border-0 cursor-pointer">
          <FiArrowLeft /> Back to payment
        </button>
      </div>

      {/* ── Hero strip with progress ── */}
      <div className="bg-black px-6 pt-12 pb-20 text-center relative overflow-hidden">
        <div className="text-[10px] font-bold uppercase tracking-[2.5px] text-gold/70 mb-4">Cohort 1Applications Open</div>
        <h1 className="text-[clamp(28px,4vw,48px)] font-black text-white leading-tight mb-4">
          Complete Your <span className="text-gold italic">Profile</span>
        </h1>
        <p className="text-[15px] text-white/50 max-w-lg mx-auto leading-relaxed mb-10">
          Complete all sections honestly and thoughtfully. We review every application personally. You'll hear from us within 7 working days.
        </p>

        {/* Progress dots */}
        <div className="max-w-xl mx-auto px-4">
          <div className="flex items-start">
            {STEPS.map((label, i) => {
              const n = i + 1;
              const done = step > n;
              const active = step === n;
              return (
                <React.Fragment key={n}>
                  <div className="flex flex-col items-center flex-1">
                    <div className={`w-9 h-9 rounded-full border-2 flex items-center justify-center text-[13px] font-bold transition-all ${done ? 'bg-green border-green text-white' : active ? 'bg-gold border-gold text-black' : 'bg-white/8 border-white/15 text-white/30'}`}
                      style={{ background: done ? '#1B4D3E' : active ? '#D4A017' : 'rgba(255,255,255,0.08)', borderColor: done ? '#1B4D3E' : active ? '#D4A017' : 'rgba(255,255,255,0.15)' }}>
                      {done ? <FiCheck /> : n}
                    </div>
                    <div className={`text-[10px] font-semibold uppercase tracking-[0.8px] mt-2 text-center ${done || active ? 'text-white/60' : 'text-white/25'}`}>{label}</div>
                  </div>
                  {i < STEPS.length - 1 && (
                    <div className="h-[2px] flex-1 mt-[18px] transition-all" style={{ background: done ? '#1B4D3E' : 'rgba(255,255,255,0.08)' }} />
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>

        {/* curved bottom */}
        <div className="absolute bottom-[-1px] left-0 right-0 h-10 bg-off" style={{ clipPath: 'ellipse(55% 100% at 50% 100%)' }} />
      </div>

      {/* ── Form shell ── */}
      <div className="max-w-2xl mx-auto px-5 py-12 pb-20">

        {/* ── Section 1: Personal ── */}
        {step === 1 && (
          <div>
            <div className="mb-9">
              <div className="text-[11px] font-bold uppercase tracking-[2px] text-gold mb-2">Section 1 of 5</div>
              <h2 className="text-[28px] font-black text-black mb-2">Personal Information</h2>
              <p className="text-[14px] text-muted leading-relaxed">Tell us the basics about you. All information is kept confidential and used only for application review.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <Field label="First Name" req error={errors.firstName}><input className={inputCls} value={form.firstName} onChange={e => set('firstName', e.target.value)} placeholder="e.g. Amina" /></Field>
              <Field label="Last Name" req error={errors.lastName}><input className={inputCls} value={form.lastName} onChange={e => set('lastName', e.target.value)} placeholder="e.g. Fawaz" /></Field>
            </div>
            <Field label="Email Address" req hint="This is the email we'll use to contact you about your application." error={errors.email}>
              <input type="email" className={inputCls} value={form.email} onChange={e => set('email', e.target.value)} placeholder="e.g. amina@gmail.com" />
            </Field>
            <Field label="Phone Number" req hint="Include your country code. e.g. +234 810 000 0000" error={errors.phone}>
              <input type="tel" className={inputCls} value={form.phone} onChange={e => set('phone', e.target.value)} placeholder="+234 810 000 0000" />
            </Field>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <Field label="State of Residence" req error={errors.state}>
                <Select value={form.state} onValueChange={v => set('state', v)}>
                  <SelectTrigger><SelectValue placeholder="Select your state" /></SelectTrigger>
                  <SelectContent>
                    {NIGERIAN_STATES.map(s => <SelectItem key={s} value={s}>{s}</SelectItem>)}
                  </SelectContent>
                </Select>
              </Field>
              <Field label="Gender" req error={errors.gender}>
                <Select value={form.gender} onValueChange={v => set('gender', v)}>
                  <SelectTrigger><SelectValue placeholder="Select" /></SelectTrigger>
                  <SelectContent>
                    {['Female','Male','Prefer not to say'].map(o => <SelectItem key={o} value={o}>{o}</SelectItem>)}
                  </SelectContent>
                </Select>
              </Field>
            </div>
            <Field label="Age Range" req error={errors.ageRange}>
              <div className="flex flex-wrap gap-2">
                {['18–24','25–30','31–35','36–40','40+'].map(v => (
                  <div key={v} onClick={() => set('ageRange', v)} className={`px-5 py-3 rounded-lg border-2 cursor-pointer text-[14px] font-semibold transition-all ${form.ageRange === v ? 'border-gold bg-gold/5 text-black' : 'border-black/10 bg-white text-muted hover:border-gold/40'}`}>{v}</div>
                ))}
              </div>
            </Field>
            <Field label="How did you hear about Talent Factory?" req error={errors.referral}>
              <Select value={form.referral} onValueChange={v => set('referral', v)}>
                <SelectTrigger><SelectValue placeholder="Select one" /></SelectTrigger>
                <SelectContent>
                  {['LinkedIn','Instagram','Twitter / X','Facebook','WhatsApp (forwarded)','A friend or colleague','Google Search','Email Newsletter','Event or webinar','Other'].map(o => (
                    <SelectItem key={o} value={o}>{o}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </Field>
            <div className="flex justify-end mt-8">
              <button onClick={() => goTo(2)} className="btn-primary px-9 py-4 flex items-center gap-2">
                Next: Background <FiArrowRight />
              </button>
            </div>
          </div>
        )}

        {/* ── Section 2: Background ── */}
        {step === 2 && (
          <div>
            <div className="mb-9">
              <div className="text-[11px] font-bold uppercase tracking-[2px] text-gold mb-2">Section 2 of 5</div>
              <h2 className="text-[28px] font-black text-black mb-2">Educational & Professional Background</h2>
              <p className="text-[14px] text-muted leading-relaxed">Help us understand where you're coming from. There's no wrong answerwe welcome all starting points.</p>
            </div>
            <Field label="Highest Level of Education Completed" req error={errors.education}>
              <div className="flex flex-col gap-2">
                {['Secondary School (WAEC/NECO)','OND / NCE','HND',"Bachelor's Degree (B.Sc / B.A / B.Ed)",'Currently in University (undergraduate)','Postgraduate (MBA / MSc / PhD)'].map(v => (
                  <RadioOpt key={v} label={v} selected={form.education === v} onClick={() => set('education', v)} />
                ))}
              </div>
            </Field>
            <Field label="Field of Study or Degree (if applicable)">
              <input className={inputCls} value={form.fieldOfStudy} onChange={e => set('fieldOfStudy', e.target.value)} placeholder="e.g. Human Resource Management, Business Admin, Law" />
            </Field>
            <Field label="Current Employment Status" req error={errors.employment}>
              <div className="flex flex-col gap-2">
                {[
                  { v: 'Employed full-time', s: 'Working in a company or organisation' },
                  { v: 'Employed part-time', s: 'Working but not full-time' },
                  { v: 'Self-employed / Freelance' },
                  { v: 'Student (full-time)' },
                  { v: 'Unemployedactively job searching' },
                  { v: 'Unemployednot currently searching' },
                ].map(({ v, s }) => (
                  <RadioOpt key={v} label={v} sub={s} selected={form.employment === v} onClick={() => set('employment', v)} />
                ))}
              </div>
            </Field>
            <Field label="Current or Most Recent Job Title" hint="Leave blank if not applicable.">
              <input className={inputCls} value={form.jobTitle} onChange={e => set('jobTitle', e.target.value)} placeholder="e.g. Customer Success Associate, Admin Officer" />
            </Field>
            <Field label="Current or Most Recent Industry">
              <Select value={form.industry} onValueChange={v => set('industry', v)}>
                <SelectTrigger><SelectValue placeholder="Select if applicable" /></SelectTrigger>
                <SelectContent>
                  {['Banking & Finance','Fintech','Technology / Software','eCommerce / Retail','Human Resources','Marketing & Advertising','Oil & Gas / Energy','Healthcare / Pharmaceuticals','Education','Consulting','FMCG / Consumer Goods','Telecommunications','Legal','Government / Public Sector','Media & Entertainment','Real Estate','Logistics & Supply Chain','NGO / Non-profit','Other','Not applicable (student / unemployed)'].map(o => (
                    <SelectItem key={o} value={o}>{o}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </Field>
            <Field label="Do you have any prior HR experience?" req error={errors.hrExp}>
              <div className="flex flex-col gap-2">
                {[
                  { v: 'No HR experience at all', s: "I'm completely new to HR" },
                  { v: 'Less than 1 year', s: 'Some exposure but very limited' },
                  { v: '1–2 years' }, { v: '3–5 years' }, { v: '5+ years' },
                ].map(({ v, s }) => (
                  <RadioOpt key={v} label={v} sub={s} selected={form.hrExp === v} onClick={() => set('hrExp', v)} />
                ))}
              </div>
            </Field>
            <Field label="LinkedIn Profile URL" hint="Optional but recommendedhelps us learn more about your background.">
              <input type="url" className={inputCls} value={form.linkedin} onChange={e => set('linkedin', e.target.value)} placeholder="https://linkedin.com/in/yourname" />
            </Field>
            <div className="flex justify-between mt-8">
              <button onClick={() => goTo(1)} className="px-7 py-4 border-2 border-black/15 rounded-md text-[14px] font-bold text-muted hover:border-black hover:text-black transition-all flex items-center gap-2">
                <FiArrowLeft /> Back
              </button>
              <button onClick={() => goTo(3)} className="btn-primary px-9 py-4 flex items-center gap-2">
                Next: Motivation <FiArrowRight />
              </button>
            </div>
          </div>
        )}

        {/* ── Section 3: Motivation ── */}
        {step === 3 && (
          <div>
            <div className="mb-9">
              <div className="text-[11px] font-bold uppercase tracking-[2px] text-gold mb-2">Section 3 of 5</div>
              <h2 className="text-[28px] font-black text-black mb-2">Your Motivation</h2>
              <p className="text-[14px] text-muted leading-relaxed">This is the most important section. We want to understand why you want this, not just what you want. Be genuinewe read every answer.</p>
            </div>
            <Field label="Which best describes your reason for applying?" req error={errors.applyReason}>
              <div className="flex flex-col gap-2">
                {['I want to transition into HR from another field',"I'm a student wanting practical HR experience","I'm already in HR and want to level up fast","I'm exploring HR as a possible career path",'I want structured mentorship from senior practitioners','I need the internship placement to build my CV'].map(v => (
                  <RadioOpt key={v} label={v} selected={form.applyReason === v} onClick={() => set('applyReason', v)} />
                ))}
              </div>
            </Field>
            <Field label="In your own words, why do you want to join Talent Factory?" req hint="Minimum 100 words. Tell us your storywhat brought you here, what you're hoping for, and what you're committed to putting in." error={errors.whyJoin}>
              <textarea className={textareaCls} value={form.whyJoin} onChange={e => set('whyJoin', e.target.value)} placeholder="Write your answer here. Be honest, be specific, and be yourself..." />
              <p className="text-[11px] text-muted mt-1">{form.whyJoin.length} characters</p>
            </Field>
            <Field label="Where do you see yourself in HR in 2 years?" req hint="This helps us understand your ambition and how Talent Factory fits into your bigger career picture." error={errors.twoYears}>
              <textarea className={textareaCls} value={form.twoYears} onChange={e => set('twoYears', e.target.value)} placeholder="Describe the role, level, or impact you want to have in HR within 2 years..." />
            </Field>
            <Field label="What is the biggest challenge you've faced in building your HR career so far?" hint="Optionalbut very helpful for us to understand.">
              <textarea className={textareaCls} value={form.biggestChallenge} onChange={e => set('biggestChallenge', e.target.value)} placeholder="e.g. No clear pathway, lack of mentors, couldn't get internships..." />
            </Field>
            <div className="flex justify-between mt-8">
              <button onClick={() => goTo(2)} className="px-7 py-4 border-2 border-black/15 rounded-md text-[14px] font-bold text-muted hover:border-black hover:text-black transition-all flex items-center gap-2">
                <FiArrowLeft /> Back
              </button>
              <button onClick={() => goTo(4)} className="btn-primary px-9 py-4 flex items-center gap-2">
                Next: Program Details <FiArrowRight />
              </button>
            </div>
          </div>
        )}

        {/* ── Section 4: Program ── */}
        {step === 4 && (
          <div>
            <div className="mb-9">
              <div className="text-[11px] font-bold uppercase tracking-[2px] text-gold mb-2">Section 4 of 5</div>
              <h2 className="text-[28px] font-black text-black mb-2">Program & Scheduling Preferences</h2>
              <p className="text-[14px] text-muted leading-relaxed">Help us understand your availability and what you're hoping to get out of the program.</p>
            </div>
            <Field label="Which class schedule works best for you?" req error={errors.schedule}>
              <div className="flex flex-col gap-2">
                {['Weekday evenings (7PM–9PM)','Saturday mornings (9AM–12PM)','Either works for me','I can only do weekday evenings','I can only do weekends'].map(v => (
                  <RadioOpt key={v} label={v} selected={form.schedule === v} onClick={() => set('schedule', v)} />
                ))}
              </div>
            </Field>
            <Field label="Which modules are you most excited about?" req hint="Select all that apply." error={errors.modules}>
              <div className="flex flex-col gap-2">
                {MODULES.map(m => (
                  <CheckOpt key={m} label={m} selected={form.modules.includes(m)} onClick={() => toggleModule(m)} />
                ))}
              </div>
            </Field>
            <Field label="For the internship placement, do you have a preferred industry?" req error={errors.internIndustry}>
              <Select value={form.internIndustry} onValueChange={v => set('internIndustry', v)}>
                <SelectTrigger><SelectValue placeholder="Select a preference" /></SelectTrigger>
                <SelectContent>
                  {["No preferenceplace me where it's the best fit",'Fintech / Financial Services','Technology / Software','eCommerce / Retail','Healthcare / Pharmaceuticals','FMCG / Consumer Goods','Education / EdTech','Media & Entertainment','NGO / Non-profit','Consulting','Manufacturing','Other'].map(o => (
                    <SelectItem key={o} value={o}>{o}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </Field>
            <Field label="How would you rate your current HR knowledge?" req hint="1 = Complete beginner, 10 = Advanced practitioner" error={errors.hrKnowledge}>
              <div className="flex gap-2 flex-wrap">
                {[1,2,3,4,5,6,7,8,9,10].map(n => (
                  <button key={n} type="button" onClick={() => set('hrKnowledge', String(n))}
                    className={`w-11 h-11 rounded-md border-2 text-[14px] font-bold transition-all ${form.hrKnowledge === String(n) ? 'bg-gold border-gold text-black' : 'bg-white border-black/12 text-muted hover:border-gold hover:text-gold'}`}>
                    {n}
                  </button>
                ))}
              </div>
            </Field>
            <Field label="How did you hear about this program? Any specific person who referred you?">
              <input className={inputCls} value={form.referredBy} onChange={e => set('referredBy', e.target.value)} placeholder="e.g. Referred by Taiwo Ogundimu, saw a LinkedIn post by Elizabeth Odetokun" />
            </Field>
            <div className="flex justify-between mt-8">
              <button onClick={() => goTo(3)} className="px-7 py-4 border-2 border-black/15 rounded-md text-[14px] font-bold text-muted hover:border-black hover:text-black transition-all flex items-center gap-2">
                <FiArrowLeft /> Back
              </button>
              <button onClick={() => goTo(5)} className="btn-primary px-9 py-4 flex items-center gap-2">
                Next: Final Step <FiArrowRight />
              </button>
            </div>
          </div>
        )}

        {/* ── Section 5: Final ── */}
        {step === 5 && (
          <div>
            <div className="mb-9">
              <div className="text-[11px] font-bold uppercase tracking-[2px] text-gold mb-2">Section 5 of 5</div>
              <h2 className="text-[28px] font-black text-black mb-2">Almost ThereFinal Details</h2>
              <p className="text-[14px] text-muted leading-relaxed">Last few questions. You're doing great.</p>
            </div>
            <Field label="Payment Preference" req hint="This does not commit you to anythingit helps us plan cohort payment schedules." error={errors.payment}>
              <div className="flex flex-col gap-3">
                {[
                  {
                    v: 'Full Payment₦250,000',
                    badge: 'Best Value',
                    badgeStyle: 'bg-green-100 text-green-700',
                    price: '₦250,000',
                    timing: 'Due on admission offer acceptance',
                    total: '₦250,000',
                    note: 'No interest. Spot secured immediately on payment.',
                  },
                  {
                    v: '3-Part Instalment₦87,500 × 3',
                    badge: 'Most Popular',
                    badgeStyle: 'bg-gold/15 text-gold',
                    price: '₦87,500 × 3 months',
                    timing: 'Month 1, 2, 3',
                    total: '₦262,500',
                    note: '5% interest applied (₦12,500 surcharge on base fee). Same full access throughout.',
                  },
                  {
                    v: 'Corporate / Sponsored',
                    badge: null,
                    badgeStyle: '',
                    price: 'Custom invoice',
                    timing: 'Per agreement',
                    total: '₦250,000+',
                    note: 'Invoice to employer. Group discounts for 3+ from same organisation.',
                  },
                ].map(({ v, badge, badgeStyle, price, timing, total, note }) => {
                  const selected = form.payment === v;
                  return (
                    <div
                      key={v}
                      onClick={() => set('payment', v)}
                      className={`p-5 rounded-xl border-2 cursor-pointer transition-all select-none ${selected ? 'border-gold bg-gold/5' : 'border-black/10 bg-white hover:border-gold/30'}`}
                    >
                      {/* Header row */}
                      <div className="flex items-start justify-between gap-3 mb-3">
                        <div className="flex items-center gap-2 flex-wrap">
                          <div className={`w-[18px] h-[18px] rounded-full border-2 shrink-0 flex items-center justify-center transition-all ${selected ? 'border-gold bg-gold' : 'border-black/20'}`}>
                            {selected && <div className="w-[7px] h-[7px] rounded-full bg-white" />}
                          </div>
                          <span className="text-[14px] font-bold text-black">{v}</span>
                          {badge && (
                            <span className={`text-[10px] font-bold uppercase tracking-wide px-2 py-0.5 rounded-full ${badgeStyle}`}>{badge}</span>
                          )}
                        </div>
                        <div className="text-right shrink-0">
                          <div className="text-[15px] font-black text-black">{total}</div>
                          <div className="text-[11px] text-muted">total</div>
                        </div>
                      </div>

                      {/* Price breakdown */}
                      <div className="flex items-center gap-3 mb-2 pl-7">
                        <div className="text-[13px] font-semibold text-black">{price}</div>
                        <div className="w-px h-3 bg-black/10" />
                        <div className="text-[12px] text-muted">{timing}</div>
                      </div>

                      {/* Note */}
                      <p className="text-[12px] text-muted leading-relaxed pl-7">{note}</p>
                    </div>
                  );
                })}
              </div>
            </Field>
            <Field label="Do you have a laptop/computer with stable internet access?" req error={errors.techAccess}>
              <div className="flex flex-col gap-2">
                {[
                  { v: 'Yesreliable laptop and internet' },
                  { v: 'Laptop yes, internet sometimes unstable' },
                  { v: 'I use my phone primarily' },
                  { v: 'Limited accesswould need support' },
                ].map(({ v }) => (
                  <RadioOpt key={v} label={v} selected={form.techAccess === v} onClick={() => set('techAccess', v)} />
                ))}
              </div>
            </Field>
            <Field label="Is there anything else you'd like us to know?" hint="Additional context, special circumstances, or anything that didn't fit elsewhere.">
              <textarea className={textareaCls} value={form.additionalInfo} onChange={e => set('additionalInfo', e.target.value)} placeholder="Optionalbut we read everything you write..." />
            </Field>
            <div className="h-px bg-black/8 my-8" />
            <Field label="" error={errors.consent}>
              <div onClick={() => set('consent', !form.consent)} className={`flex items-start gap-3 p-4 rounded-lg border-2 cursor-pointer transition-all ${form.consent ? 'border-gold bg-gold/5' : 'border-black/10 bg-white hover:border-gold/40'}`}>
                <div className={`w-[18px] h-[18px] rounded-[4px] border-2 shrink-0 mt-0.5 flex items-center justify-center transition-all ${form.consent ? 'border-gold bg-gold' : 'border-black/20'}`}>
                  {form.consent && <FiCheck className="text-white text-[11px] font-bold" />}
                </div>
                <span className="text-[13px] font-semibold text-black leading-relaxed">
                  I confirm that the information I have provided is accurate and truthful. I understand that Talent Factory will contact me via the email and phone number I've provided to discuss my application. <span className="text-gold">*</span>
                </span>
              </div>
            </Field>
            <div className="flex justify-between mt-8">
              <button onClick={() => goTo(4)} className="px-7 py-4 border-2 border-black/15 rounded-md text-[14px] font-bold text-muted hover:border-black hover:text-black transition-all flex items-center gap-2">
                <FiArrowLeft /> Back
              </button>
              <button onClick={handleSubmit} disabled={submitting} className="px-10 py-4 rounded-md bg-green text-white text-[15px] font-bold hover:bg-green-l transition-all disabled:opacity-50 flex items-center gap-2" style={{ background: '#1B4D3E' }}>
                {submitting ? 'Submitting...' : <>{'Submit Application'} <FiCheck /></>}
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default ApplicationFormPage;

