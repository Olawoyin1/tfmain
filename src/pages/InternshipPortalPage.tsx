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
        <div className="mb-12 flex justify-between items-end">
          <div>
            <div className="hero-tag mb-4 shadow-[0_4px_15px_-5px_rgba(0,0,0,0.1)]">
              <span className="hero-tag-dot bg-gold"></span>
              Professional Residency
            </div>
            <h1 className="sec-h text-6xl leading-[1.1]">The <em>Studio</em> Experience.</h1>
          </div>
          <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex items-center gap-6">
            <div className="text-right">
              <div className="text-[10px] font-bold text-muted uppercase tracking-widest mb-1">Company Rating</div>
              <div className="text-lg font-bold text-black italic">Excellent • 4.8</div>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-off border border-gray-100 flex items-center justify-center text-xl">🌟</div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            <section>
              <div className="portal-card bg-black text-white p-12 overflow-hidden relative min-h-[400px] flex flex-col justify-between">
                <div className="relative z-10">
                  <div className="text-gold font-bold text-[10px] uppercase tracking-[0.3em] mb-6 inline-block border border-gold/20 py-1.5 px-4 rounded-full">Active Corporate Placement</div>
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-16">
                    <div>
                      <h2 className="text-6xl font-bold mb-3 italic">Sterling Bank Plc</h2>
                      <p className="text-white/40 text-lg italic font-medium max-w-sm">Human Capital Group • Organizational Design Unit • Victoria Island, Lagos</p>
                    </div>
                    <div className="text-right">
                      <div className="text-6xl font-bold text-gold italic leading-none">06<span className="text-2xl not-italic opacity-40 ml-2">/12</span></div>
                      <div className="text-[10px] uppercase font-bold tracking-[0.3em] opacity-40 mt-3">Completed Weeks</div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
                    <div className="p-10 bg-white/5 rounded-[32px] border border-white/10 backdrop-blur-xl group hover:bg-white/10 transition-all cursor-pointer">
                      <h4 className="font-bold mb-6 flex items-center gap-4 text-sm uppercase tracking-widest text-gold">
                        <span className="w-2 h-2 rounded-full bg-gold animate-pulse"></span>
                        Strategic Priority
                      </h4>
                      <p className="text-white/80 mb-10 text-sm font-medium leading-relaxed italic">"Lead the overhaul of the Q2 performance appraisal framework for the Digital Banking division, focusing on KPI alignment with new ESG targets."</p>
                      <button className="flex items-center gap-4 text-[10px] font-bold text-white uppercase tracking-[0.3em] group-hover:gap-6 transition-all">Submit Review Log <span className="text-gold">→</span></button>
                    </div>
                    <div className="p-10 bg-white/5 rounded-[32px] border border-white/10 backdrop-blur-xl grayscale hover:grayscale-0 transition-all">
                      <h4 className="font-bold mb-6 uppercase text-[10px] tracking-[0.3em] text-white/40">Residency Supervisor</h4>
                      <div className="flex items-center gap-6">
                        <div className="w-20 h-20 rounded-[24px] bg-white text-black flex items-center justify-center font-bold text-2xl font-fraunces shadow-2xl">FA</div>
                        <div>
                          <div className="text-xl font-bold italic">Funke Adeyemi</div>
                          <div className="text-[10px] text-white/40 font-bold uppercase tracking-[0.2em] mt-2">Head, Org. Performance</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_100%_0%,rgba(255,215,0,0.15),transparent_60%)] pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-3/4 h-3/4 bg-gold/5 blur-[150px] rounded-full translate-x-[-20%] translate-y-[20%] pointer-events-none"></div>
              </div>
            </section>

            <section>
              <div className="flex justify-between items-end mb-8">
                <h3 className="text-2xl font-bold italic">Daily Residency Log</h3>
                <button className="text-xs font-bold text-gold uppercase tracking-widest border-b border-gold pb-1 hover:opacity-60 transition-all">Download Historical Logs</button>
              </div>
              <div className="portal-card p-12 bg-off/50 border-dashed border-2">
                <div className="space-y-8">
                  <div className="flex gap-10 items-start">
                    <div className="w-16 h-16 rounded-2xl bg-black text-white flex flex-col items-center justify-center font-bold">
                      <span className="text-[10px] opacity-40 uppercase">Feb</span>
                      <span className="text-xl">14</span>
                    </div>
                    <div className="flex-1">
                      <div className="text-[10px] font-bold text-gold uppercase tracking-[0.2em] mb-3">Today's Summary Required</div>
                      <textarea className="w-full bg-white border border-gray-100 rounded-3xl p-6 text-sm italic font-medium focus:ring-2 focus:ring-gold/20 outline-none transition-all placeholder:opacity-30" rows={4} placeholder="Describe your key learnings, challenges tackled, and professional observations from today's work..."></textarea>
                      <div className="flex justify-between items-center mt-6">
                        <div className="flex gap-4">
                          <button className="w-10 h-10 rounded-xl bg-white border border-gray-100 flex items-center justify-center text-lg hover:border-black transition-all">📎</button>
                          <button className="w-10 h-10 rounded-xl bg-white border border-gray-100 flex items-center justify-center text-lg hover:border-black transition-all">📸</button>
                        </div>
                        <button className="btn-primary py-4 px-12 text-xs font-extrabold uppercase tracking-widest">Sign Logbook →</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-2xl font-bold mb-10 italic">Journey Progression</h3>
              <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-4">
                {[...Array(12)].map((_, i) => (
                  <div key={i} className={`group relative h-24 rounded-[20px] border-2 flex flex-col items-center justify-center transition-all duration-500 overflow-hidden ${i + 1 < currentWeek ? 'bg-black border-black text-white shadow-xl translate-y-[-4px]' : i + 1 === currentWeek ? 'border-gold bg-white scale-110 shadow-2xl z-10 border-4' : 'border-gray-100 text-gray-300 italic'}`}>
                    <div className="text-[8px] font-bold uppercase tracking-widest mb-1 opacity-40">Week</div>
                    <div className="text-2xl font-bold italic">{(i + 1).toString().padStart(2, '0')}</div>
                    {i + 1 < currentWeek && <div className="absolute bottom-1 right-1 text-[8px]">✔️</div>}
                    {i + 1 === currentWeek && <div className="absolute top-1 right-2 text-[12px] animate-pulse">🎯</div>}
                  </div>
                ))}
              </div>
            </section>
          </div>

          <div className="space-y-12">
            <section>
              <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-gold"></span>
                Verified Skills
              </h3>
              <div className="portal-card p-10 space-y-8">
                {verifiedSkills.map((skill, i) => (
                  <div key={i}>
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-xs font-bold text-black italic">{skill.name}</span>
                      <span className="text-[10px] font-bold text-gold">{skill.level}%</span>
                    </div>
                    <div className="w-full h-1.5 bg-gray-50 rounded-full overflow-hidden">
                      <div className="h-full bg-black transition-all duration-1000" style={{ width: `${skill.level}%` }}></div>
                    </div>
                  </div>
                ))}
                <p className="text-[10px] text-muted font-bold uppercase tracking-widest text-center pt-4 italic border-t border-gray-50">Authorized by Sterling Bank Unit</p>
              </div>
            </section>

            <section>
              <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-gold"></span>
                Supervisor's Feed
              </h3>
              <div className="portal-card p-0 overflow-hidden">
                <div className="p-8 bg-off/30 italic">
                  <p className="text-xs text-black leading-relaxed mb-6 font-medium">"Your analysis of the digital banking silos was insightful. Next week, I want you to present these findings to the HR Director. Dress corporate-formal."</p>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-gold flex items-center justify-center font-bold text-[10px]">FA</div>
                    <span className="text-[10px] font-bold uppercase tracking-widest">Funke Adeyemi • Yesterday</span>
                  </div>
                </div>
                <button className="w-full py-5 bg-black text-white text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-gold hover:text-black transition-all">Reply to Supervisor →</button>
              </div>
            </section>

            <section>
              <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-gold"></span>
                Official Help
              </h3>
              <div className="portal-card p-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]">
                <p className="text-xs text-muted mb-8 italic leading-relaxed">Having issues with your corporate login or work environment?</p>
                <button className="w-full py-4 rounded-xl border border-black text-xs font-bold hover:bg-black hover:text-white transition-all uppercase tracking-widest">Contact TF Liaison</button>
              </div>
            </section>
          </div>
        </div>
      </div>
    </StudentSidebar>
  );
};


export default InternshipPortalPage;
