import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiArrowLeft, FiArrowRight, FiLock, FiMail, FiUser, FiPhone } from 'react-icons/fi';

const MiniRegistrationPage: React.FC = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm(p => ({ ...p, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate registration logic
    navigate('/apply/payment');
  };

  const inp = "w-full bg-off border-0 rounded-2xl px-12 py-4 text-[14px] font-medium text-black placeholder:text-muted/60 outline-none focus:ring-2 focus:ring-gold/30 transition-all";
  const lbl = "block text-[11px] font-bold uppercase tracking-widest text-muted mb-2 ml-1";

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Nav */}
      <div className="bg-black px-10 py-4 flex items-center justify-between shrink-0">
        <a href="/" className="nav-logo-link">
          <div className="logo-box">TF</div>
          <div className="logo-name" style={{ color: 'white' }}>Talent<span>Factory</span></div>
        </a>
        <button onClick={() => navigate('/apply/student')} className="text-[13px] font-semibold text-white/40 hover:text-gold transition-colors flex items-center gap-2">
          <FiArrowLeft size={14} /> Back
        </button>
      </div>

      <div className="flex-1 flex flex-col lg:flex-row overflow-hidden">
        {/* Left: Content */}
        <div className="lg:w-1/2 bg-black flex flex-col justify-center px-10 py-16 lg:px-20 relative overflow-hidden">
          <div className="relative z-10">
            <div className="inline-block border border-gold/40 text-gold text-[10px] font-bold uppercase tracking-[2px] px-4 py-2 rounded-sm mb-6">
              Cohort 1 Applications Open
            </div>
            <h1 className="text-[clamp(32px,5vw,56px)] font-black text-white leading-[1.1] mb-6">
              Start Your <br /><span className="text-gold italic">HR Legacy</span> Today.
            </h1>
            <p className="text-[16px] text-white/50 max-w-md leading-relaxed mb-10 italic">
              "The best way to predict the future is to create it. Talent Factory gives you the tools, the network, and the placement to build the career you've always wanted."
            </p>
            
            <div className="flex items-center gap-4 text-white/30 text-[11px] uppercase tracking-widest font-bold">
              <div className="flex -space-x-2">
                {[1,2,3].map(i => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-black bg-gray-800" />
                ))}
              </div>
              Join 500+ applicants
            </div>
          </div>
          
          {/* Noise/Glow stuff */}
          <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gold/5 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gold/10 blur-[100px] rounded-full -translate-x-1/2 translate-y-1/2" />
        </div>

        {/* Right: Simple Form */}
        <div className="lg:w-1/2 bg-white flex flex-col justify-center px-10 py-16 lg:px-20 overflow-y-auto">
          <div className="max-w-md w-full mx-auto">
            <div className="mb-10">
              <h2 className="text-3xl font-black text-black mb-2">Create Account</h2>
              <p className="text-[14px] text-muted italic">Enter your basic details to begin your application.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative">
                <label className={lbl}>Full Name</label>
                <div className="relative">
                  <FiUser className="absolute left-5 top-1/2 -translate-y-1/2 text-muted" />
                  <input 
                    name="fullName"
                    value={form.fullName}
                    onChange={handleChange}
                    placeholder="e.g. Sarah Johnson" 
                    className={inp} 
                    required 
                  />
                </div>
              </div>

              <div className="relative">
                <label className={lbl}>Email Address</label>
                <div className="relative">
                  <FiMail className="absolute left-5 top-1/2 -translate-y-1/2 text-muted" />
                  <input 
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="sarah.j@example.com" 
                    className={inp} 
                    required 
                  />
                </div>
              </div>

              <div className="relative">
                <label className={lbl}>Telephone</label>
                <div className="relative">
                  <FiPhone className="absolute left-5 top-1/2 -translate-y-1/2 text-muted" />
                  <input 
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+234 800 000 0000" 
                    className={inp} 
                    required 
                  />
                </div>
              </div>

              <div className="relative">
                <label className={lbl}>Create Password</label>
                <div className="relative">
                  <FiLock className="absolute left-5 top-1/2 -translate-y-1/2 text-muted" />
                  <input 
                    type="password"
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                    placeholder="••••••••" 
                    className={inp} 
                    required 
                  />
                </div>
              </div>

              <button type="submit" className="btn-primary w-full py-5 flex items-center justify-center gap-3">
                Create Account & Continue <FiArrowRight />
              </button>
            </form>

            <p className="text-center text-[12px] text-muted mt-8">
              Already have an account?{' '}
              <a href="/portal" className="text-black font-bold underline underline-offset-4 hover:text-gold transition-colors">Sign in</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiniRegistrationPage;
