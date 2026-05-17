import React from 'react';
import StudentSidebar from '../components/Navigation/StudentSidebar';
import { 
  FiPaperclip, 
  FiMic, 
  FiAward, 
  FiSettings, 
  FiArrowRight,
  FiBriefcase,
  FiMapPin
} from 'react-icons/fi';
import { FaBuildingColumns } from 'react-icons/fa6';

const InternshipPortalPage: React.FC = () => {
  
  const verifiedSkills = [
    { name: 'Talent Sourcing', level: 85 },
    { name: 'Employee Relations', level: 60 },
    { name: 'HR Compliance', level: 75 },
    { name: 'Onboarding Design', level: 90 }
  ];

  return (
    <StudentSidebar>
      <div className="animate-slideUp pb-24">
        {/* Header Section */}
        <div className="mb-20 flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
          <div className="space-y-4">
            <div className="hero-tag">
              <span className="hero-tag-dot bg-gold"></span>
              24/7 Corporate Residency Active
            </div>
            <h1 className="mb-2 leading-none">Studio Experience</h1>
            <p className="text-xl max-w-sm">Translating classroom theory into high-impact corporate human capital solutions.</p>
          </div>
          <div className="bg-white p-10 rounded-[40px] border border-gray-100 shadow-sm flex items-center gap-10 group hover:border-black transition-all">
            <div className="text-right border-r border-gray-100 pr-10">
              <div className="text-[10px] font-black text-muted uppercase tracking-[0.3em] mb-2">Residency Pulse</div>
              <div className="text-2xl font-black text-black tracking-tighter">Excellent • 4.9</div>
            </div>
            <div className="w-16 h-16 rounded-3xl bg-black text-gold flex items-center justify-center text-3xl shadow-xl group-hover:scale-105 transition-transform">
              <FaBuildingColumns size={28} />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Main Content Area */}
          <div className="lg:col-span-8 space-y-16">
            
            {/* Primary Placement Card */}
            <section>
              <div className="portal-card bg-black text-white p-16 overflow-hidden relative group border-none shadow-2xl">
                <div className="relative z-10">
                  <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-20">
                    <div>
                      <div className="text-gold font-black text-[10px] uppercase tracking-[0.4em] mb-8 inline-block border border-gold/30 py-2.5 px-8 rounded-full bg-gold/5 backdrop-blur-sm">Tier-1 Corporate Placement</div>
                      <h2 className="text-6xl font-black mb-6 leading-tight tracking-tighter">Sterling Bank</h2>
                      <div className="flex flex-wrap gap-8 text-white/40 text-[11px] font-black uppercase tracking-widest leading-relaxed">
                         <div className="flex items-center gap-3"><FiBriefcase className="text-gold" /> Human Capital Group</div>
                         <div className="flex items-center gap-3"><FiMapPin className="text-gold" /> HQ Victoria Island</div>
                      </div>
                    </div>
                    <div className="bg-white/5 backdrop-blur-xl p-10 rounded-[40px] border border-white/10 text-center min-w-[180px]">
                      <div className="text-7xl font-black text-gold leading-none tabular-nums">06</div>
                      <div className="text-[10px] uppercase font-black tracking-[0.3em] opacity-40 mt-6">Weeks Vetted</div>
                      <div className="w-full bg-white/10 h-1.5 mt-8 rounded-full overflow-hidden">
                        <div className="bg-gold h-full w-1/2"></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
                    <div className="p-12 bg-white/5 rounded-[44px] border border-white/10 backdrop-blur-2xl hover:bg-white/10 transition-all cursor-pointer group/card">
                      <div className="flex items-center gap-4 mb-8">
                        <span className="w-2.5 h-2.5 rounded-full bg-gold animate-ping"></span>
                        <h4 className="font-black text-[10px] uppercase tracking-[0.3em] text-gold">Strategic Mandate</h4>
                      </div>
                      <p className="text-white text-lg mb-12 font-bold leading-relaxed">"Lead the overhaul of the Q2 performance appraisal framework for the Digital Banking division."</p>
                      <button className="flex items-center gap-4 text-[10px] font-black text-white uppercase tracking-[0.4em] group-hover/card:gap-8 transition-all">Access Review Log <FiArrowRight className="text-gold" /></button>
                    </div>
                    
                    <div className="p-12 bg-white/5 rounded-[44px] border border-white/10 backdrop-blur-2xl transition-all flex items-center gap-10">
                       <div className="w-24 h-24 rounded-[32px] bg-white text-black flex items-center justify-center font-black text-3xl shadow-xl">FA</div>
                       <div>
                         <div className="text-[10px] text-white/40 font-black uppercase tracking-[0.3em] mb-3">Mentor-In-Charge</div>
                         <div className="text-2xl font-black">Funke Adeyemi</div>
                         <div className="text-[11px] text-gold font-black uppercase tracking-[0.2em] mt-3">Head, Org. Performance</div>
                       </div>
                    </div>
                  </div>
                </div>
                
                {/* Visual Background Elements */}
                <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_100%_0%,rgba(212,160,23,0.1),transparent_60%)] pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-3/4 h-3/4 bg-gold/5 blur-[160px] rounded-full translate-x-[-20%] translate-y-[20%] pointer-events-none"></div>
              </div>
            </section>

            {/* Residency Logbook Redesign */}
            <section>
              <div className="flex justify-between items-end mb-12 px-2">
                <div>
                  <h3 className="text-3xl font-black mb-3">Residency Logbook</h3>
                  <p className="text-[10px] text-muted font-black uppercase tracking-[0.2em]">Daily Intelligence Upload Required</p>
                </div>
              </div>
              <div className="portal-card p-16 bg-white border border-gray-100 relative overflow-hidden group shadow-sm">
                <div className="flex flex-col md:flex-row gap-16 items-start relative z-10">
                  <div className="flex md:flex-col items-center gap-6">
                    <div className="w-24 h-24 rounded-[36px] bg-black text-white flex flex-col items-center justify-center font-black shadow-xl">
                      <span className="text-[10px] opacity-40 uppercase tracking-widest mb-1">Feb</span>
                      <span className="text-3xl">17</span>
                    </div>
                    <div className="hidden md:block w-0.5 h-48 bg-off rounded-full"></div>
                  </div>
                  <div className="flex-1 space-y-12">
                    <div className="space-y-6">
                      <label className="text-[10px] font-black text-muted uppercase tracking-[0.4em] ml-2">Session Narrative #42</label>
                      <textarea 
                        className="w-full bg-off border-none rounded-[40px] p-12 text-sm font-bold leading-relaxed focus:ring-4 focus:ring-gold/10 outline-none transition-all placeholder:opacity-40 min-h-[250px]" 
                        placeholder="Analyze your contributions today. What friction did you encounter in the organizational design process?"
                      ></textarea>
                    </div>
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-12">
                       <div className="flex gap-6">
                         <button className="w-16 h-16 rounded-3xl bg-white border border-gray-100 flex items-center justify-center text-2xl hover:border-black transition-all shadow-sm">
                           <FiPaperclip size={20} />
                         </button>
                         <button className="w-16 h-16 rounded-3xl bg-white border border-gray-100 flex items-center justify-center text-2xl hover:border-black transition-all shadow-sm">
                           <FiMic size={20} />
                         </button>
                       </div>
                       <button className="w-full sm:w-auto bg-black text-white px-16 py-6 rounded-3xl text-[10px] font-black uppercase tracking-[0.4em] hover:bg-gold hover:text-black transition-all shadow-xl flex items-center gap-4 justify-center">
                          Transmit Entry <FiArrowRight />
                       </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar Area */}
          <div className="lg:col-span-4 space-y-16">
            
            {/* Skills Intelligence Matrix */}
            <section>
               <h3 className="text-xl font-black mb-10 flex items-center gap-4">
                <span className="w-2.5 h-2.5 rounded-full bg-gold"></span>
                Skills Matrix
              </h3>
              <div className="portal-card p-12 space-y-12 bg-white border-none shadow-sm">
                {verifiedSkills.map((skill, i) => (
                  <div key={i} className="group">
                    <div className="flex justify-between items-center mb-5">
                      <span className="text-sm font-black text-black group-hover:text-gold transition-colors">{skill.name}</span>
                      <span className="text-[11px] font-black text-muted tabular-nums">{skill.level}%</span>
                    </div>
                    <div className="w-full h-2 bg-off rounded-full overflow-hidden">
                      <div className="h-full bg-black transition-all duration-1000 ease-out shadow-sm" style={{ width: `${skill.level}%` }}></div>
                    </div>
                  </div>
                ))}
                <div className="pt-10 border-t border-gray-50">
                   <div className="flex items-center gap-5 p-6 bg-off/50 rounded-2xl border border-gray-100">
                     <FiAward className="text-2xl text-gold" />
                     <p className="text-[10px] font-black text-muted uppercase tracking-[0.1em] leading-relaxed">External Audit by Human Capital Board • Feb '26</p>
                   </div>
                </div>
              </div>
            </section>

            {/* Mentor Directives */}
            <section>
              <h3 className="text-xl font-black mb-10 flex items-center gap-4">
                <span className="w-2.5 h-2.5 rounded-full bg-gold"></span>
                Directives
              </h3>
              <div className="portal-card p-0 overflow-hidden bg-black text-white border-none shadow-2xl">
                <div className="p-12">
                   <div className="flex items-center gap-4 mb-10">
                     <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                     <span className="text-[10px] font-black text-white/40 uppercase tracking-[0.4em]">Secure Feed • Priority Alpha</span>
                   </div>
                   <p className="text-lg text-white font-bold leading-relaxed mb-12">"Review the talent pipeline analysis for the Lagos HQ. Your focus must remain on high-retention profiling."</p>
                   <div className="flex items-center gap-6">
                      <div className="w-14 h-14 rounded-2xl bg-gold text-black flex items-center justify-center font-black text-sm shadow-xl">FA</div>
                      <div>
                        <div className="text-[11px] font-black text-gold uppercase tracking-widest leading-none mb-2">Funke Adeyemi</div>
                        <div className="text-[9px] text-white/40 font-black uppercase tracking-[0.2em]">Sterling Bank • Yesterday</div>
                      </div>
                   </div>
                </div>
                <button className="w-full py-6 bg-white/10 hover:bg-white hover:text-black transition-all font-black text-[10px] uppercase tracking-[0.4em] flex items-center justify-center gap-3">
                   Respond <FiArrowRight />
                </button>
              </div>
            </section>

            {/* Institutional Support Hub */}
            <section>
               <div className="portal-card p-12 bg-off border-none space-y-10 group hover:bg-black hover:text-white transition-all duration-500">
                 <div className="w-16 h-16 rounded-[24px] bg-white group-hover:bg-gold flex items-center justify-center text-black shadow-sm group-hover:scale-110 transition-all">
                   <FiSettings size={28} />
                 </div>
                 <div>
                   <h4 className="text-2xl font-black mb-3">Institutional Hub</h4>
                   <p className="text-sm font-bold opacity-60 leading-relaxed">Encountering anomalies in your residency environment? Connect with your Liaison.</p>
                 </div>
                 <button className="w-full py-5 bg-black text-white group-hover:bg-white group-hover:text-black rounded-3xl font-black text-[10px] uppercase tracking-[0.3em] transition-all">Contact Academy Liaison</button>
               </div>
            </section>
          </div>
        </div>
      </div>
    </StudentSidebar>
  );
};

export default InternshipPortalPage;
