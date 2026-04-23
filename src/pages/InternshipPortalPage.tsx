import React from 'react';
import StudentSidebar from '../components/Navigation/StudentSidebar';

const InternshipPortalPage: React.FC = () => {
  const currentWeek = 6;
  
  const verifiedSkills = [
    { name: 'Talent Sourcing', level: 85 },
    { name: 'Employee Relations', level: 60 },
    { name: 'HR Compliance', level: 75 },
    { name: 'Onboarding Design', level: 90 }
  ];

  return (
    <StudentSidebar>
      <div className="animate-slide-up pb-20">
        <div className="mb-14 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
          <div className="space-y-4">
            <div className="hero-tag shadow-sm inline-flex items-center">
              <span className="hero-tag-dot bg-gold animate-pulse"></span>
              24/7 Corporate Residency Active
            </div>
            <h1 className="sec-h text-7xl italic leading-none tracking-tight">The <em>Studio</em> Experience.</h1>
            <p className="text-sm text-muted font-medium italic max-w-sm">Translating classroom theory into high-impact corporate human capital solutions.</p>
          </div>
          <div className="bg-white p-8 rounded-[40px] border border-gray-100 shadow-xl flex items-center gap-8 group hover:border-gold/20 transition-all">
            <div className="text-right border-r border-gray-100 pr-8">
              <div className="text-[10px] font-bold text-muted uppercase tracking-widest mb-2">Residency Pulse</div>
              <div className="text-2xl font-bold text-black italic">Excellent • 4.9</div>
            </div>
            <div className="w-16 h-16 rounded-3xl bg-black text-white flex items-center justify-center text-3xl shadow-2xl group-hover:bg-gold group-hover:text-black transition-all">🏦</div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Content Area */}
          <div className="lg:col-span-8 space-y-14">
            {/* Immersive Placement Card */}
            <section>
              <div className="portal-card bg-black text-white p-14 overflow-hidden relative min-h-[480px] flex flex-col justify-between group">
                <div className="relative z-10">
                  <div className="flex flex-col md:flex-row justify-between items-start gap-10 mb-20">
                    <div>
                      <div className="text-gold font-bold text-[10px] uppercase tracking-[0.4em] mb-6 inline-block border border-gold/30 py-2 px-6 rounded-full bg-gold/5 backdrop-blur-sm">Tier-1 Corporate Placement</div>
                      <h2 className="text-7xl font-bold mb-4 italic leading-tight group-hover:tracking-tight transition-all">Sterling Bank</h2>
                      <p className="text-white/40 text-xl italic font-medium max-w-md leading-relaxed">Human Capital Group • Core Operations Unit • HQ Victoria Island</p>
                    </div>
                    <div className="bg-white/5 backdrop-blur-xl p-8 rounded-[40px] border border-white/10 text-center min-w-[160px]">
                      <div className="text-7xl font-bold text-gold italic leading-none">06</div>
                      <div className="text-[9px] uppercase font-bold tracking-[0.3em] opacity-40 mt-4">Weeks Vetted</div>
                      <div className="w-full bg-white/10 h-0.5 mt-6 rounded-full overflow-hidden">
                        <div className="bg-gold h-full w-1/2"></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10 relative z-10">
                    <div className="p-10 bg-white/5 rounded-[44px] border border-white/10 backdrop-blur-2xl hover:bg-white/10 transition-all cursor-pointer">
                      <div className="flex items-center gap-4 mb-6">
                        <span className="w-2.5 h-2.5 rounded-full bg-gold animate-ping"></span>
                        <h4 className="font-bold text-[10px] uppercase tracking-[0.3em] text-gold">Strategic Mandate</h4>
                      </div>
                      <p className="text-white/80 mb-12 text-sm font-medium leading-relaxed italic">"Lead the overhaul of the Q2 performance appraisal framework for the Digital Banking division."</p>
                      <button className="flex items-center gap-4 text-[10px] font-bold text-white uppercase tracking-[0.4em] hover:gap-8 transition-all">Access Review Log <span className="text-gold text-lg">→</span></button>
                    </div>
                    
                    <div className="p-10 bg-white/5 rounded-[44px] border border-white/10 backdrop-blur-2xl transition-all flex items-center gap-8">
                       <div className="w-24 h-24 rounded-[32px] bg-white text-black flex items-center justify-center font-bold text-3xl font-fraunces shadow-2xl">FA</div>
                       <div>
                         <div className="text-[9px] text-white/40 font-bold uppercase tracking-[0.3em] mb-2">Mentor-In-Charge</div>
                         <div className="text-2xl font-bold italic">Funke Adeyemi</div>
                         <div className="text-[10px] text-gold font-bold uppercase tracking-[0.2em] mt-2">Head, Org. Performance</div>
                       </div>
                    </div>
                  </div>
                </div>
                
                {/* Visual Flair */}
                <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_100%_0%,rgba(255,215,0,0.15),transparent_60%)] pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-3/4 h-3/4 bg-gold/5 blur-[160px] rounded-full translate-x-[-20%] translate-y-[20%] pointer-events-none"></div>
              </div>
            </section>

            {/* Daily Journal / Logbook */}
            <section>
              <div className="flex justify-between items-end mb-10">
                <div>
                  <h3 className="text-3xl font-bold italic mb-2">Residency Logbook</h3>
                  <p className="text-xs text-muted font-bold uppercase tracking-widest italic opacity-60">Verified Daily Journaling Required</p>
                </div>
                <button className="text-[9px] font-bold text-gold uppercase tracking-[0.3em] border-b border-gold/30 pb-1.5 hover:text-black transition-all">Audit Previous Logs</button>
              </div>
              <div className="portal-card p-14 bg-white border-2 border-dashed border-gray-100 relative overflow-hidden group">
                <div className="flex gap-14 items-start relative z-10">
                  <div className="flex flex-col items-center gap-4">
                    <div className="w-20 h-20 rounded-[30px] bg-black text-white flex flex-col items-center justify-center font-bold shadow-2xl">
                      <span className="text-[9px] opacity-40 uppercase tracking-widest">Feb</span>
                      <span className="text-2xl italic">14</span>
                    </div>
                    <div className="w-[2px] h-32 bg-off rounded-full"></div>
                  </div>
                  <div className="flex-1 space-y-10">
                    <div className="space-y-4">
                      <label className="text-[10px] font-bold text-muted uppercase tracking-[0.3em] block">Journal Entry #42</label>
                      <textarea className="w-full bg-off border border-gray-50 rounded-[40px] p-10 text-base italic font-medium focus:ring-4 focus:ring-gold/5 outline-none transition-all placeholder:opacity-30 min-h-[220px] shadow-inner" placeholder="Analyze your strategic contributions today. What friction did you encounter in the organizational design process?"></textarea>
                    </div>
                    <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                       <div className="flex gap-4">
                         <button className="w-14 h-14 rounded-2xl bg-white border border-gray-100 flex items-center justify-center text-xl hover:border-black transition-all shadow-sm">📎</button>
                         <button className="w-14 h-14 rounded-2xl bg-white border border-gray-100 flex items-center justify-center text-xl hover:border-black transition-all shadow-sm">🎙️</button>
                       </div>
                       <button className="bg-black text-white px-12 py-5 rounded-2xl text-[10px] font-extrabold uppercase tracking-[0.3em] hover:bg-gold hover:text-black transition-all shadow-2xl shadow-black/20">Sign & Authorize Entry →</button>
                    </div>
                  </div>
                </div>
                <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-off/50 rounded-full blur-3xl pointer-events-none group-hover:bg-gold/5 transition-all"></div>
              </div>
            </section>

            {/* Journey Milestone Map */}
            <section>
              <h3 className="text-3xl font-bold mb-12 italic">Studio Progression</h3>
              <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {[...Array(12)].map((_, i) => (
                  <div key={i} className={`group relative h-36 rounded-[36px] border-2 flex flex-col items-center justify-center transition-all duration-700 overflow-hidden ${i + 1 < currentWeek ? 'bg-black border-black text-white shadow-2xl scale-95 opacity-80' : i + 1 === currentWeek ? 'border-gold bg-white scale-105 shadow-[0_30px_60px_-15px_rgba(255,215,0,0.3)] z-10 border-4 pt-4' : 'border-gray-50 text-gray-200 italic'}`}>
                    <div className="text-[9px] font-bold uppercase tracking-widest mb-2 opacity-40">Phase</div>
                    <div className="text-4xl font-bold italic">{(i + 1).toString().padStart(2, '0')}</div>
                    {i + 1 < currentWeek && <div className="absolute top-4 right-4 text-xs opacity-60">Verified</div>}
                    {i + 1 === currentWeek && <div className="mt-4 px-4 py-1.5 bg-gold text-black rounded-full font-bold text-[8px] uppercase tracking-widest animate-pulse">Live Site</div>}
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar Area */}
          <div className="lg:col-span-4 space-y-12">
            {/* Verified Skills Matrix */}
            <section>
               <h3 className="text-xl font-bold mb-8 flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-gold"></span>
                Skills Intelligence
              </h3>
              <div className="portal-card p-12 space-y-10 bg-white">
                {verifiedSkills.map((skill, i) => (
                  <div key={i} className="group">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-sm font-bold text-black italic group-hover:text-gold transition-colors">{skill.name}</span>
                      <span className="text-[10px] font-bold text-muted tabular-nums">{skill.level}%</span>
                    </div>
                    <div className="w-full h-2 bg-off rounded-full overflow-hidden">
                      <div className="h-full bg-black transition-all duration-1000 ease-out shadow-[0_0_20px_rgba(0,0,0,0.1)]" style={{ width: `${skill.level}%` }}></div>
                    </div>
                  </div>
                ))}
                <div className="pt-8 border-t border-gray-50">
                   <div className="flex items-center gap-4 p-4 bg-off/50 rounded-2xl italic">
                     <span className="text-xl">🎓</span>
                     <p className="text-[9px] font-bold text-muted uppercase tracking-wider leading-relaxed">External Audit by Human Capital Board • Feb '26</p>
                   </div>
                </div>
              </div>
            </section>

            {/* Encrypted Supervisor Directives */}
            <section>
              <h3 className="text-xl font-bold mb-8 flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-gold"></span>
                Mentor Directives
              </h3>
              <div className="portal-card p-0 overflow-hidden bg-black text-white border-none shadow-2xl">
                <div className="p-10 italic bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]">
                   <div className="flex items-center gap-3 mb-8">
                     <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                     <span className="text-[9px] font-bold text-white/40 uppercase tracking-[0.3em]">Encrypted Feed • Priority Alpha</span>
                   </div>
                   <p className="text-base text-white/90 leading-relaxed mb-10 font-medium">"Review the talent pipeline analysis for the Lagos HQ. Your focus must remain on high-retention profiling for executive roles."</p>
                   <div className="flex items-center gap-5">
                      <div className="w-12 h-12 rounded-2xl bg-gold text-black flex items-center justify-center font-bold text-sm">FA</div>
                      <div>
                        <div className="text-[10px] font-bold uppercase tracking-widest text-gold leading-none mb-1">Funke Adeyemi</div>
                        <div className="text-[8px] text-white/40 font-bold uppercase tracking-widest">Sterling Bank • Yesterday</div>
                      </div>
                   </div>
                </div>
                <button className="w-full py-6 bg-white/10 hover:bg-gold hover:text-black transition-all font-bold text-[10px] uppercase tracking-[0.3em] backdrop-blur-xl">Initiate Response Terminal →</button>
              </div>
            </section>

            {/* Official Support Hub */}
            <section>
               <div className="portal-card p-12 bg-off border-gray-100 space-y-8">
                 <div className="w-14 h-14 rounded-3xl bg-white flex items-center justify-center text-2xl shadow-sm border border-gray-50">⚙️</div>
                 <div>
                   <h4 className="text-xl font-bold mb-2 italic">Institutional Support</h4>
                   <p className="text-sm text-muted italic leading-relaxed">Connect with your TF Program Liaison for corporate environment issues.</p>
                 </div>
                 <button className="w-full py-5 bg-white border-2 border-black rounded-2xl font-extrabold text-[10px] uppercase tracking-widest hover:bg-black hover:text-white transition-all">Contact Academy Liaison</button>
               </div>
            </section>
          </div>
        </div>
      </div>
    </StudentSidebar>
  );
};


export default InternshipPortalPage;
