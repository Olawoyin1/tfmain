import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import StudentSidebar from '../components/Navigation/StudentSidebar';

const StudentPortalPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'orientation' | 'payment'>('overview');

  return (
    <StudentSidebar>
      <div className="inline-flex gap-1 p-1 bg-off rounded-2xl mb-12 border border-gray-100 shadow-sm">
        <button 
          onClick={() => setActiveTab('overview')}
          className={`px-8 py-3 text-[10px] font-extrabold uppercase tracking-widest transition-all rounded-xl ${activeTab === 'overview' ? 'bg-black text-white shadow-lg' : 'text-muted hover:text-black'}`}
        >
          Overview
        </button>
        <button 
          onClick={() => setActiveTab('orientation')}
          className={`px-8 py-3 text-[10px] font-extrabold uppercase tracking-widest transition-all rounded-xl ${activeTab === 'orientation' ? 'bg-black text-white shadow-lg' : 'text-muted hover:text-black'}`}
        >
          Orientation
        </button>
        <button 
          onClick={() => setActiveTab('payment')}
          className={`px-8 py-3 text-[10px] font-extrabold uppercase tracking-widest transition-all rounded-xl ${activeTab === 'payment' ? 'bg-black text-white shadow-lg' : 'text-muted hover:text-black'}`}
        >
          Tuition
        </button>
      </div>

      {activeTab === 'overview' && (
        <div className="animate-slide-up">
          <div className="mb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
            <div>
              <div className="hero-tag mb-4 shadow-sm inline-flex items-center">
                <span className="hero-tag-dot bg-gold"></span>
                Active Learning Batch • Cohort 1
              </div>
              <h1 className="sec-h text-6xl italic leading-tight">Welcome Back, <em>Sarah.</em></h1>
            </div>
            <div className="flex items-center gap-4 bg-white p-4 rounded-3xl border border-gray-100 shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-black text-white flex flex-col items-center justify-center font-bold">
                <span className="text-[8px] opacity-40 uppercase">Day</span>
                <span className="text-lg">42</span>
              </div>
              <div>
                <div className="text-[10px] font-bold text-muted uppercase tracking-widest">Streak</div>
                <div className="text-sm font-bold text-black italic">Consistent Learner</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-4">
            {/* Main Progress Card */}
            <div className="lg:col-span-8 space-y-8">
              <div className="portal-card bg-black text-white p-12 relative overflow-hidden group min-h-[400px] flex flex-col justify-between">
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-12">
                    <div>
                      <div className="text-[10px] uppercase font-bold tracking-[0.3em] text-gold/60 mb-4 border border-gold/20 py-1.5 px-4 rounded-full inline-block">Human Capital Specialization</div>
                      <h4 className="text-5xl font-bold italic leading-tight">Mastering Corporate <br/><em>Organizational Design</em></h4>
                    </div>
                    <div className="text-right">
                      <div className="text-6xl font-bold text-gold italic leading-none">40<span className="text-2xl not-italic opacity-40 ml-1">%</span></div>
                      <div className="text-[9px] uppercase font-bold tracking-[0.2em] text-white/40 mt-3">Course Completion</div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                      { label: 'Admissions', status: 'Completed', icon: '✓', active: false },
                      { label: 'Specialization', status: 'In Progress', icon: '⚡', active: true },
                      { label: 'Residency', status: 'Locked', icon: '🔒', active: false }
                    ].map((phase, i) => (
                      <div key={i} className={`p-6 rounded-[32px] border transition-all ${phase.active ? 'bg-white/10 border-white/20 shadow-xl' : 'bg-white/5 border-white/5 opacity-40'}`}>
                        <div className={`w-10 h-10 rounded-2xl flex items-center justify-center text-xs font-bold mb-6 ${phase.active ? 'bg-gold text-black animate-pulse' : 'bg-white/10 text-white'}`}>
                          {phase.icon}
                        </div>
                        <div className="text-[9px] font-bold uppercase tracking-widest text-white/40 mb-1">{phase.status}</div>
                        <div className="text-sm font-bold italic">{phase.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_100%_0%,rgba(255,215,0,0.1),transparent_70%)] pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gold/5 blur-[120px] rounded-full translate-x-[-20%] translate-y-[20%] pointer-events-none"></div>
              </div>

              {/* Bento Grid Bottom */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Link to="/portal/learning" className="portal-card p-10 bg-off/50 hover:bg-gold/5 transition-all group border-2 border-transparent hover:border-gold/20">
                  <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-2xl mb-8 shadow-sm group-hover:scale-110 transition-transform">📚</div>
                  <h4 className="text-2xl font-bold mb-3 italic">Digital Classroom</h4>
                  <p className="text-sm text-muted mb-8 leading-relaxed italic">Access course modules, submitted assignments, and peer reviews.</p>
                  <div className="text-xs font-extrabold text-gold uppercase tracking-[0.2em] flex items-center gap-2">Enter Learning Hub <span className="group-hover:translate-x-2 transition-transform">→</span></div>
                </Link>

                <div className="portal-card p-10 group bg-white shadow-xl shadow-black/[0.02]">
                  <div className="w-14 h-14 bg-off rounded-2xl flex items-center justify-center text-2xl mb-8 shadow-sm">💬</div>
                  <h4 className="text-2xl font-bold mb-3 italic">Cohort Community</h4>
                  <p className="text-sm text-muted mb-8 leading-relaxed italic">Collaboratively solve challenges with fellow HR practitioners.</p>
                  <button className="flex items-center gap-4 bg-[#25D366] text-white px-8 py-3 rounded-full text-[10px] font-bold uppercase tracking-widest hover:scale-105 transition-all shadow-lg shadow-[#25D366]/20">Join WhatsApp Hub</button>
                </div>
              </div>
            </div>

            {/* Right Sidebar Widgets */}
            <div className="lg:col-span-4 space-y-8">
              <section>
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-lg font-bold italic">Latest Materials</h3>
                  <Link to="/portal/learning" className="text-[9px] font-bold text-gold uppercase tracking-widest border-b border-gold/30 pb-0.5">Explore All</Link>
                </div>
                <div className="portal-card p-0 overflow-hidden border-gray-100/50">
                  <div className="divide-y divide-gray-50">
                    {[
                      { title: 'Talent Acquisition Handbook', type: 'PDF', size: '2.4MB', icon: '📎' },
                      { title: 'HR Process Mapping Template', type: 'XLSX', size: '1.2MB', icon: '📊' },
                      { title: 'Corporate Culture Slides', type: 'PPTX', size: '6.8MB', icon: '🎞️' }
                    ].map((material, i) => (
                      <div key={i} className="p-6 flex items-center justify-between group hover:bg-off transition-all cursor-pointer">
                        <div className="flex items-center gap-5">
                          <div className="w-12 h-12 rounded-2xl bg-off border border-gray-100 flex items-center justify-center text-xl grayscale group-hover:grayscale-0 transition-all shadow-sm">{material.icon}</div>
                          <div>
                            <div className="text-sm font-bold text-black italic truncate max-w-[140px]">{material.title}</div>
                            <div className="text-[9px] font-bold text-muted uppercase tracking-widest mt-1 opacity-50">{material.type} • {material.size}</div>
                          </div>
                        </div>
                        <div className="w-8 h-8 rounded-full border border-gray-100 flex items-center justify-center text-[10px] opacity-0 group-hover:opacity-100 transition-all hover:bg-black hover:text-white">↓</div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              <section>
                <div className="portal-card bg-gold/5 border-gold/20 p-8 relative overflow-hidden group">
                  <div className="relative z-10">
                    <h3 className="text-sm font-bold uppercase tracking-widest text-gold mb-6 border-b border-gold/10 pb-4">Faculty Broadcast</h3>
                    <p className="text-sm font-medium leading-relaxed italic text-black mb-8">"Your analysis of the organizational design framework was exceptional. Focus on the ESG metrics for next week."</p>
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-2xl bg-black text-white flex items-center justify-center font-bold text-[10px]">MO</div>
                      <div>
                        <div className="text-[10px] font-bold text-black uppercase tracking-widest">Dr. Michael O.</div>
                        <div className="text-[8px] text-muted font-bold uppercase tracking-widest">Program Director • 4h ago</div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gold/20 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2"></div>
                </div>
              </section>

              <Link to="/portal/certificates" className="portal-card p-10 flex flex-col items-center justify-center text-center opacity-40 hover:opacity-100 transition-all group grayscale hover:grayscale-0 border-dashed border-2">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">🎓</div>
                <h4 className="text-sm font-bold uppercase tracking-widest mb-1">Credential Vault</h4>
                <p className="text-[10px] font-medium italic text-muted">Awaiting Completion of Module 08</p>
              </Link>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'orientation' && (
        <div className="animate-slide-up max-w-4xl">
          <h2 className="sec-h text-5xl mb-12">Orientation <em>Schedule</em></h2>
          <div className="portal-card border-l-4 border-l-gold bg-white p-12">
            <div className="flex justify-between items-start mb-12">
              <div>
                <div className="text-gold font-bold text-[10px] uppercase tracking-widest mb-2">Notice • Virtual Event</div>
                <h3 className="text-4xl font-bold mb-1 italic">Jan 15, 2026</h3>
                <p className="text-muted">7:00 PM West Africa Time</p>
              </div>
              <button className="btn-primary py-4 px-10 text-xs">Add to Calendar</button>
            </div>

            <div className="space-y-12">
              {[
                { time: '19:00', title: 'Welcome & Vision Casting', host: 'Program Director' },
                { time: '19:30', title: 'Curriculum Deep Dive', host: 'Academic Dean' },
                { time: '20:00', title: 'Platform Onboarding', host: 'Operations Lead' },
                { time: '20:30', title: 'Q&A Session', host: 'Admissions Team' }
              ].map((item, i) => (
                <div key={i} className="flex gap-10 items-start border-l border-gray-100 pl-10 relative">
                  <div className="absolute left-[-5px] top-1.5 w-2.5 h-2.5 rounded-full bg-gold border-2 border-white shadow-sm"></div>
                  <div className="min-w-[70px] text-xs font-bold text-muted uppercase tracking-widest pt-1">{item.time}</div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold mb-1">{item.title}</h4>
                    <p className="text-xs text-muted font-medium italic">Facilitated by {item.host}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 p-10 bg-off rounded-2xl flex items-center justify-between border border-gray-100 italic">
              <div>
                <h4 className="font-bold text-black mb-1 not-italic">Connection Hub</h4>
                <p className="text-xs text-muted">Secure Zoom link will be enabled 15 mins prior.</p>
              </div>
              <button className="px-8 py-4 bg-black text-white rounded-xl font-bold text-xs opacity-30 cursor-not-allowed">Join Session</button>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'payment' && (
        <div className="animate-slide-up max-w-5xl">
          <h2 className="sec-h text-5xl mb-12">Tuition <em>Hub</em></h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="portal-card border-2 border-gold bg-gold-pale relative overflow-hidden group">
              <div className="absolute top-4 right-4 bg-gold text-black text-[9px] font-extrabold px-3 py-1.5 rounded-sm uppercase tracking-widest">Recommended</div>
              <h4 className="font-bold mb-4 opacity-50 uppercase text-[10px] tracking-widest">Professional Pass (Full)</h4>
              <div className="text-6xl font-bold mb-2 italic">₦250k</div>
              <p className="text-sm text-muted mb-10 leading-relaxed italic">Single payment settlement. Includes full curriculum access and priority early-bird internship placement.</p>
              <ul className="space-y-4 mb-10 text-xs font-bold">
                <li className="flex gap-3 items-center"><span className="text-gold">✓</span> Save ₦30k on total tuition</li>
                <li className="flex gap-3 items-center"><span className="text-gold">✓</span> Verified Faculty Priority access</li>
                <li className="flex gap-3 items-center"><span className="text-gold">✓</span> Exclusive Alumni Networking</li>
              </ul>
              <button className="btn-primary w-full py-5">Complete Settlement</button>
            </div>

            <div className="portal-card group">
              <h4 className="font-bold mb-4 opacity-50 uppercase text-[10px] tracking-widest">Flexi-Pay (Installment)</h4>
              <div className="text-6xl font-bold mb-2 italic">₦280k</div>
              <p className="text-sm text-muted mb-10 leading-relaxed italic">Split your tuition across a 90-day window. Initial deposit required to secure seat.</p>
              <div className="space-y-4 mb-10">
                <div className="flex justify-between p-5 bg-off rounded-xl border border-gray-100">
                  <span className="text-xs font-bold uppercase tracking-widest text-muted">Initial Deposit</span>
                  <span className="font-bold text-black">₦100,000</span>
                </div>
                <div className="flex justify-between p-5 bg-off rounded-xl border border-gray-100">
                  <span className="text-xs font-bold uppercase tracking-widest text-muted">Monthly (x2)</span>
                  <span className="font-bold text-black">₦90,000</span>
                </div>
              </div>
              <button className="w-full py-5 rounded-xl border-2 border-black font-extrabold text-xs hover:bg-black hover:text-white transition-all">Start Installment Plan</button>
            </div>
          </div>

          <div className="portal-card bg-white border border-gray-100 flex items-center gap-6 p-8">
            <div className="w-14 h-14 rounded-2xl bg-green-50 text-green-600 flex items-center justify-center text-2xl shadow-sm border border-green-100">✓</div>
            <div className="flex-1">
              <h4 className="font-bold text-xl mb-1">Application Fee Verified</h4>
              <p className="text-xs text-muted italic font-medium">₦10,000 settlement processed on 14 Dec 2026. Ref: TF-88901-SEC</p>
            </div>
            <button className="text-[10px] font-bold uppercase tracking-widest text-muted hover:text-gold transition-all underline underline-offset-8">Receipt Details</button>
          </div>
        </div>
      )}
    </StudentSidebar>
  );
};

export default StudentPortalPage;

