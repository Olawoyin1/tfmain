import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import StudentSidebar from '../components/Navigation/StudentSidebar';

const StudentPortalPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'orientation' | 'payment'>('overview');

  return (
    <StudentSidebar>
      <div className="flex gap-8 mb-12 border-b border-gray-100 pb-2">
        <button 
          onClick={() => setActiveTab('overview')}
          className={`text-xs font-bold uppercase tracking-widest pb-4 transition-all border-b-2 ${activeTab === 'overview' ? 'border-gold text-black' : 'border-transparent text-muted'}`}
        >
          Overview
        </button>
        <button 
          onClick={() => setActiveTab('orientation')}
          className={`text-xs font-bold uppercase tracking-widest pb-4 transition-all border-b-2 ${activeTab === 'orientation' ? 'border-gold text-black' : 'border-transparent text-muted'}`}
        >
          Orientation
        </button>
        <button 
          onClick={() => setActiveTab('payment')}
          className={`text-xs font-bold uppercase tracking-widest pb-4 transition-all border-b-2 ${activeTab === 'payment' ? 'border-gold text-black' : 'border-transparent text-muted'}`}
        >
          Tuition
        </button>
      </div>

      {activeTab === 'overview' && (
        <div className="animate-slide-up">
          <div className="mb-12">
            <div className="hero-tag mb-4">
              <span className="hero-tag-dot"></span>
              Welcome Back, Sarah
            </div>
            <h1 className="sec-h text-5xl">Your <em>Learning</em> Journey</h1>
          </div>

          <div className="portal-grid">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 pt-8">
              <section>
                <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-gold"></span>
                  Journey Progression
                </h3>
                <div className="portal-card p-12 bg-black text-white relative overflow-hidden h-full">
                  <div className="relative z-10">
                    <div className="flex justify-between items-start mb-10">
                      <div>
                        <div className="text-[10px] uppercase font-bold tracking-[0.2em] text-white/40 mb-2">Current Phase</div>
                        <h4 className="text-3xl font-bold italic">Human Capital <br/><em>Specialization</em></h4>
                      </div>
                      <div className="text-right">
                        <div className="text-4xl font-bold text-gold italic">40%</div>
                        <div className="text-[9px] uppercase font-bold tracking-widest text-white/40">Overall Completion</div>
                      </div>
                    </div>
                    
                    <div className="space-y-6">
                      <div className="flex items-center gap-4">
                        <div className="w-8 h-8 rounded-full bg-gold text-black flex items-center justify-center text-[10px] font-bold">✓</div>
                        <span className="text-sm font-medium italic opacity-60">Admissions & Onboarding</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="w-8 h-8 rounded-full bg-white/20 text-white flex items-center justify-center text-[10px] font-bold animate-pulse">⚡</div>
                        <span className="text-sm font-bold italic">Specialization Training</span>
                      </div>
                      <div className="flex items-center gap-4 opacity-30">
                        <div className="w-8 h-8 rounded-full bg-white/10 text-white flex items-center justify-center text-[10px] font-bold text-center">🔒</div>
                        <span className="text-sm font-medium italic">Professional Residency</span>
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2"></div>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-gold"></span>
                  Latest Resources
                </h3>
                <div className="portal-card p-0 overflow-hidden h-full">
                  <div className="divide-y divide-gray-50">
                    {[
                      { title: 'Talent Acquisition Handbook', type: 'PDF', size: '2.4MB' },
                      { title: 'HR Process Mapping Template', type: 'XLSX', size: '1.2MB' },
                      { title: 'Q1 Performance Matrix', type: 'DOCX', size: '0.8MB' }
                    ].map((material, i) => (
                      <div key={i} className="p-6 flex items-center justify-between group hover:bg-off transition-all">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-xl bg-off border border-gray-100 flex items-center justify-center text-lg">📎</div>
                          <div>
                            <div className="text-sm font-bold text-black italic truncate max-w-[150px]">{material.title}</div>
                            <div className="text-[9px] font-bold text-muted uppercase tracking-widest">{material.type} • {material.size}</div>
                          </div>
                        </div>
                        <button className="w-10 h-10 rounded-xl bg-black text-white flex items-center justify-center text-sm opacity-0 group-hover:opacity-100 transition-all">↓</button>
                      </div>
                    ))}
                  </div>
                  <Link to="/portal/learning" className="block w-full py-4 bg-off text-center text-[10px] font-bold uppercase tracking-widest text-black hover:bg-gold transition-all">View All Materials →</Link>
                </div>
              </section>
            </div>

            <Link to="/portal/learning" className="portal-card hover:border-gold group">
              <div className="text-3xl mb-6 group-hover:scale-110 transition-transform">📚</div>
              <h4 className="text-xl font-bold mb-2">Classroom</h4>
              <p className="text-sm text-muted mb-6">Access your course modules, assignments, and curriculum updates.</p>
              <div className="text-xs font-bold text-gold uppercase tracking-widest">Enter Hub →</div>
            </Link>

            <div className="portal-card">
              <div className="text-3xl mb-6">📋</div>
              <h4 className="text-xl font-bold mb-2">Student Handbook</h4>
              <p className="text-sm text-muted mb-6">Download the official guide for Talent Factory procedures and policies.</p>
              <button className="text-xs font-bold text-black uppercase tracking-widest underline decoration-gold underline-offset-4">Download PDF</button>
            </div>

            <div className="portal-card">
              <div className="text-3xl mb-6">💬</div>
              <h4 className="text-xl font-bold mb-2">Cohort Community</h4>
              <p className="text-sm text-muted mb-6">Connect with fellow learners and instructors in our private WhatsApp channel.</p>
              <button className="px-6 py-2 bg-[#25D366] text-white rounded-full text-xs font-bold">Join Community</button>
            </div>

            <div className="portal-card opacity-50">
              <div className="text-3xl mb-6">🎓</div>
              <h4 className="text-xl font-bold mb-2">Certificate Vault</h4>
              <p className="text-sm text-muted mb-6">Your professional accreditation will appear here upon program completion.</p>
              <div className="text-[10px] font-bold text-muted uppercase tracking-widest">Available April '26</div>
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

