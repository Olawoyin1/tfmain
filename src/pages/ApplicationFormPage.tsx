import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  highestEducation: string;
  institution: string;
  graduationYear: string;
  currentRole: string;
  company: string;
  yearsExperience: string;
  motivation: string;
  goals: string;
}

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  linkedin: string;
  highestEducation: string;
  institution: string;
  graduationYear: string;
  currentRole: string;
  company: string;
  yearsExperience: string;
  motivation: string;
  goals: string;
  resume: File | null;
}

const ApplicationFormPage: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    linkedin: '',
    highestEducation: '',
    institution: '',
    graduationYear: '',
    currentRole: '',
    company: '',
    yearsExperience: '',
    motivation: '',
    goals: '',
    resume: null
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({ ...prev, resume: e.target.files![0] }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 3000));
    setIsSubmitted(true);
    setIsSubmitting(false);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-off flex items-center justify-center p-6 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]">
        <div className="bg-white/80 backdrop-blur-xl p-16 rounded-[40px] shadow-3xl text-center max-w-xl w-full border border-white relative overflow-hidden animate-slide-up">
          <div className="text-6xl mb-8 animate-bounce">📋</div>
          <h2 className="sec-h text-4xl mb-4 italic">Profile <em>Indexed</em></h2>
          <p className="sec-p mx-auto mb-10 text-black/60 italic font-medium leading-relaxed">
            Your application data has been successfully securely stored. To finalize your candidacy, you must now complete the 30-minute Pre-Admission Assessment.
          </p>
          <div className="bg-gold/10 border border-gold/20 p-6 rounded-3xl mb-10 text-left">
            <div className="text-[10px] font-bold text-gold uppercase tracking-widest mb-2">Next Phase: Assessment</div>
            <div className="text-sm font-bold text-black italic">Admission Test • 3 Sections • 30 Minutes</div>
          </div>
          <Link 
            to="/apply/test"
            className="btn-primary w-full py-5 block text-center shadow-xl shadow-gold/30"
          >
            Start Assessment Centre →
          </Link>
          <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 blur-3xl rounded-full"></div>
        </div>
      </div>
    );
  }

  const steps = [
    { id: 1, name: 'Identity' },
    { id: 2, name: 'Academic' },
    { id: 3, name: 'Professional' },
    { id: 4, name: 'Thesis' }
  ];

  return (
    <div className="min-h-screen bg-off overflow-x-hidden pb-20">
      <nav className="nav-fixed px-12 h-24 flex items-center justify-between border-b border-gray-100/50 bg-white/50 backdrop-blur-md">
        <Link to="/" className="nav-logo-link">
          <div className="logo-box bg-gold text-black border-none font-fraunces">TF</div>
          <div className="logo-name font-fraunces text-black">Talent<span>Factory</span></div>
        </Link>
        <Link to="/apply/payment" className="text-[10px] font-extrabold uppercase tracking-widest text-black/40 hover:text-black">Terms of Admission</Link>
      </nav>

      <div className="pt-28 px-6">
        <div className="max-w-3xl mx-auto">
          {/* Progress Indicator */}
          <div className="mb-12">
            <div className="flex justify-between items-center relative">
              <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gray-200 -translate-y-1/2 z-0"></div>
              <div className="absolute top-1/2 left-0 h-[1px] bg-black -translate-y-1/2 z-0 transition-all duration-700" style={{width: `${((currentStep - 1) / (steps.length - 1)) * 100}%`}}></div>
              
              {steps.map((s) => (
                <div key={s.id} className="relative z-10 flex flex-col items-center">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center font-bold text-xs transition-all duration-500 border ${currentStep >= s.id ? 'bg-black text-white border-black shadow-xl shadow-black/10' : 'bg-white border-gray-100 text-muted grayscale'}`}>
                    {s.id.toString().padStart(2, '0')}
                  </div>
                  <span className={`absolute -bottom-8 text-[9px] uppercase font-bold tracking-[0.2em] whitespace-nowrap transition-all duration-500 ${currentStep >= s.id ? 'text-black' : 'text-black/20'}`}>{s.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-12 md:p-16 rounded-[40px] shadow-3xl border border-gray-100 relative overflow-hidden">
            <form onSubmit={handleSubmit} className="relative z-10">
              {currentStep === 1 && (
                <div className="animate-slide-up space-y-3">
                  <div className="mb-8">
                    <div className="hero-tag mb-4">Identity Overview</div>
                    <h3 className="sec-h text-4xl italic">Personal <em>Matrix</em></h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="input-group">
                      <label className="text-[10px] uppercase font-bold text-muted tracking-widest mb-3 block">First Name</label>
                      <input type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} placeholder="e.g. Sarah" className="w-full bg-off border border-gray-100 rounded-2xl p-4 text-sm focus:ring-2 focus:ring-gold/20 outline-none transition-all font-medium italic" required />
                    </div>
                    <div className="input-group">
                      <label className="text-[10px] uppercase font-bold text-muted tracking-widest mb-3 block">Last Name</label>
                      <input type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} placeholder="e.g. Johnson" className="w-full bg-off border border-gray-100 rounded-2xl p-4 text-sm focus:ring-2 focus:ring-gold/20 outline-none transition-all font-medium italic" required />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="input-group">
                      <label className="text-[10px] uppercase font-bold text-muted tracking-widest mb-3 block">Email Address</label>
                      <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="sarah.j@example.com" className="w-full bg-off border border-gray-100 rounded-2xl p-4 text-sm focus:ring-2 focus:ring-gold/20 outline-none transition-all font-medium italic" required />
                      <p className="text-[9px] text-muted font-medium mt-2 italic">* Official communication will be sent here.</p>
                    </div>
                    <div className="input-group">
                      <label className="text-[10px] uppercase font-bold text-muted tracking-widest mb-3 block">Phone Number</label>
                      <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="+234 800 000 0000" className="w-full bg-off border border-gray-100 rounded-2xl p-4 text-sm focus:ring-2 focus:ring-gold/20 outline-none transition-all font-medium italic" required />
                    </div>
                  </div>
                  <div className="input-group pt-4">
                    <label className="text-[10px] uppercase font-bold text-muted tracking-widest mb-3 block">LinkedIn Profile</label>
                    <input type="url" name="linkedin" value={formData.linkedin} onChange={handleInputChange} placeholder="https://linkedin.com/in/username" className="w-full bg-off border border-gray-100 rounded-2xl p-4 text-sm focus:ring-2 focus:ring-gold/20 outline-none transition-all font-medium italic" />
                  </div>
                </div>
              )}

              {currentStep === 2 && (
                <div className="animate-slide-up space-y-3">
                  <div className="mb-4">
                    <div className="hero-tag mb-4">Academic Background</div>
                    <h3 className="sec-h text-4xl italic">Scholarly <em>History</em></h3>
                  </div>
                  <div className="input-group">
                    <label className="text-[10px] uppercase font-bold text-muted tracking-widest mb-3 block">Highest Qualification</label>
                    <select name="highestEducation" value={formData.highestEducation} onChange={handleInputChange} className="w-full bg-off border border-gray-100 rounded-2xl p-4 text-sm focus:ring-2 focus:ring-gold/20 outline-none transition-all font-bold appearance-none italic" required>
                      <option value="">Select Level</option>
                      <option value="bachelors">Bachelor's Degree (B.Sc/B.A)</option>
                      <option value="masters">Master's Degree (M.Sc/M.A)</option>
                      <option value="hnd">HND / OND</option>
                      <option value="doctorate">Doctorate (Ph.D)</option>
                    </select>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="input-group">
                      <label className="text-[10px] uppercase font-bold text-muted tracking-widest mb-3 block">Institution Name</label>
                      <input type="text" name="institution" value={formData.institution} onChange={handleInputChange} placeholder="e.g. University of Lagos" className="w-full bg-off border border-gray-100 rounded-2xl p-4 text-sm focus:ring-2 focus:ring-gold/20 outline-none transition-all font-medium italic" required />
                    </div>
                    <div className="input-group">
                      <label className="text-[10px] uppercase font-bold text-muted tracking-widest mb-3 block">Year of Graduation</label>
                      <input type="number" name="graduationYear" value={formData.graduationYear} onChange={handleInputChange} placeholder="2022" className="w-full bg-off border border-gray-100 rounded-2xl p-4 text-sm focus:ring-2 focus:ring-gold/20 outline-none transition-all font-medium italic" required />
                    </div>
                  </div>
                </div>
              )}

              {currentStep === 3 && (
                <div className="animate-slide-up space-y-8">
                  <div className="mb-8">
                    <div className="hero-tag mb-4">Professional Record</div>
                    <h3 className="sec-h text-4xl italic">Career <em>Trajectory</em></h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="input-group">
                      <label className="text-[10px] uppercase font-bold text-muted tracking-widest mb-3 block">Current/Most Recent Role</label>
                      <input type="text" name="currentRole" value={formData.currentRole} onChange={handleInputChange} placeholder="e.g. Admin Executive" className="w-full bg-off border border-gray-100 rounded-2xl p-4 text-sm focus:ring-2 focus:ring-gold/20 outline-none transition-all font-medium italic" required />
                    </div>
                    <div className="input-group">
                      <label className="text-[10px] uppercase font-bold text-muted tracking-widest mb-3 block">Experience Level</label>
                      <select name="yearsExperience" value={formData.yearsExperience} onChange={handleInputChange} className="w-full bg-off border border-gray-100 rounded-2xl p-4 text-sm focus:ring-2 focus:ring-gold/20 outline-none transition-all font-bold italic" required>
                        <option value="">Years of Experience</option>
                        <option value="0-1">Graduate Entry (0-1 Years)</option>
                        <option value="2-5">Junior Officer (2-5 Years)</option>
                        <option value="5+">Experienced Professional (5+ Years)</option>
                      </select>
                    </div>
                  </div>
                  <div className="input-group">
                    <label className="text-[10px] uppercase font-bold text-muted tracking-widest mb-3 block">CV/Resume Upload</label>
                    <div className="border-2 border-dashed border-gray-100 rounded-[32px] p-12 text-center bg-off hover:bg-gold/5 hover:border-gold/30 transition-all group flex flex-col items-center">
                      <div className="text-4xl mb-4 grayscale group-hover:grayscale-0 transition-all">📄</div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-muted mb-4 italic">PDF format preferred (Max 5MB)</p>
                      <input type="file" onChange={handleFileChange} className="hidden" id="cv-upload" accept=".pdf,.doc,.docx" />
                      <label htmlFor="cv-upload" className="px-8 py-3 bg-white border border-gray-200 rounded-xl font-bold text-[10px] uppercase tracking-widest cursor-pointer hover:bg-black hover:text-white transition-all shadow-sm">
                        {formData.resume ? formData.resume.name : 'Select Document'}
                      </label>
                    </div>
                  </div>
                </div>
              )}

              {currentStep === 4 && (
                <div className="animate-slide-up space-y-8">
                  <div className="mb-8">
                    <div className="hero-tag mb-4">Motivation Statement</div>
                    <h3 className="sec-h text-4xl italic">Candidate <em>Thesis</em></h3>
                  </div>
                  <div className="input-group">
                    <label className="text-[10px] uppercase font-bold text-muted tracking-widest mb-3 block">Why are you a fit for Talent Factory?</label>
                    <textarea name="motivation" value={formData.motivation} onChange={handleInputChange} className="w-full bg-off border border-gray-100 rounded-[32px] p-8 text-sm focus:ring-2 focus:ring-gold/20 outline-none transition-all min-h-[150px] font-medium leading-relaxed italic" placeholder="Provide a concise 2-3 sentence statement on your professional drive." required />
                    <div className="flex justify-between items-center mt-3">
                       <p className="text-[9px] text-muted font-medium italic">Motivation carries 30% of your initial score.</p>
                       <span className="text-[9px] font-bold text-gold uppercase tracking-widest">{formData.motivation.length} / 300 Characters</span>
                    </div>
                  </div>
                  <div className="input-group">
                    <label className="text-[10px] uppercase font-bold text-muted tracking-widest mb-3 block">Career Aspirations</label>
                    <textarea name="goals" value={formData.goals} onChange={handleInputChange} className="w-full bg-off border border-gray-100 rounded-[32px] p-8 text-sm focus:ring-2 focus:ring-gold/20 outline-none transition-all min-h-[150px] font-medium leading-relaxed italic" placeholder="Where do you see yourself professionally after Talent Factory?" required />
                  </div>
                </div>
              )}

              <div className="flex justify-between items-center pt-16 mt-16 border-t border-gray-50">
                <button
                  type="button"
                  onClick={() => setCurrentStep(prev => prev - 1)}
                  disabled={currentStep === 1}
                  className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-muted hover:text-black transition-all disabled:opacity-0"
                >
                  ← Move Back
                </button>
                
                {currentStep < 4 ? (
                  <button
                    type="button"
                    onClick={() => setCurrentStep(prev => prev + 1)}
                    className="btn-primary py-4 px-10 text-xs font-extrabold uppercase tracking-[0.2em] shadow-xl shadow-gold/20"
                  >
                    Next Step →
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary py-4 px-10 text-xs font-extrabold uppercase tracking-[0.2em] shadow-xl shadow-gold/20"
                  >
                    {isSubmitting ? 'Verifying...' : 'Submit Now →'}
                  </button>
                )}
              </div>
            </form>

            <div className="absolute bottom-0 right-0 w-64 h-64 bg-gold/5 blur-3xl rounded-full translate-x-1/2 translate-y-1/2 pointer-events-none"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationFormPage;

