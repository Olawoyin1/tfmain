import React from 'react';
import { useParams } from 'react-router-dom';
import { 
  FiActivity, 
  FiCheckCircle, 
  FiClock, 
  FiArrowRight, 
  FiBook, 
  FiMessageCircle,
  FiFileText,
  FiTarget,
  FiShield
} from 'react-icons/fi';
import StudentSidebar from '../components/Navigation/StudentSidebar';

const StudentPortalPage: React.FC = () => {
  const { tab } = useParams<{ tab?: string }>();
  const activeTab = tab || 'overview';

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-16">
            <div>
              <div className="hero-tag">
                <span className="hero-tag-dot"></span>
                Command Center
              </div>
              <h1 className="mb-2">Operational Overview</h1>
              <p className="text-xl">Welcome back, Sarah. Your strategic learning pulse is at 94%.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { label: 'Assessments Passed', value: '4', icon: <FiFileText />, trend: '+2' },
                { label: 'Module Completion', value: '78%', icon: <FiCheckCircle />, trend: 'On Track' },
                { label: 'Studio Hours', value: '164h', icon: <FiClock />, trend: '+12h' },
                { label: 'Peer Ranking', value: '#12', icon: <FiTarget />, trend: 'Top 5%' }
              ].map((stat, i) => (
                <div key={i} className="portal-card h-48 flex flex-col justify-between group hover:border-black transition-all">
                  <div className="flex justify-between items-start">
                    <div className="w-14 h-14 rounded-2xl bg-off flex items-center justify-center text-black group-hover:bg-black group-hover:text-gold transition-colors">
                      {stat.icon}
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-muted">{stat.trend}</span>
                  </div>
                  <div>
                    <div className="text-[10px] uppercase font-black text-muted tracking-[0.3em] mb-2">{stat.label}</div>
                    <div className="text-3xl font-black text-black">{stat.value}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-8 space-y-12">
                <section>
                   <h3 className="text-2xl font-black mb-8 border-b border-gray-100 pb-6">Current Sprint</h3>
                   <div className="portal-card bg-black text-white p-12 overflow-hidden relative group border-none">
                      <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-12 text-center md:text-left">
                         <div>
                            <div className="text-gold font-black text-[10px] uppercase tracking-[0.4em] mb-6">Module 04: Active Now</div>
                            <h2 className="text-4xl font-black mb-4 leading-tight">Advanced Talent <br/>Architectures</h2>
                            <p className="text-white/40 text-sm leading-relaxed max-w-sm">Designing scalable human capital frameworks for the next generation of tech unicorns.</p>
                         </div>
                         <button className="btn-primary bg-gold text-black border-none shadow-gold/20 hover:bg-white px-12 py-5">Jump to Case Study</button>
                      </div>
                      <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
                   </div>
                </section>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                   <div className="portal-card bg-white p-12 space-y-8">
                      <div className="w-16 h-16 bg-off text-black rounded-2xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform"><FiBook /></div>
                      <div>
                         <h4 className="text-xl font-black mb-2">Curriculum Progress</h4>
                         <p className="text-sm text-muted font-bold leading-relaxed mb-8">You are currently 4 days ahead of the global average participation rate.</p>
                         <div className="w-full bg-off h-2 rounded-full overflow-hidden">
                            <div className="bg-black h-full w-[78%]"></div>
                         </div>
                      </div>
                   </div>
                   <div className="portal-card bg-white p-12 space-y-8">
                      <div className="w-16 h-16 bg-white border border-gray-100 text-black rounded-2xl flex items-center justify-center text-2xl mb-8 group-hover:scale-110 transition-transform"><FiMessageCircle /></div>
                      <div>
                         <h4 className="text-xl font-black mb-2">Peer Feedback</h4>
                         <p className="text-sm text-muted font-bold leading-relaxed mb-6">4 colleagues reviewed your last architecture design. Insight score: 9.2/10.</p>
                         <button className="text-[10px] font-black uppercase tracking-widest text-gold flex items-center gap-2">Read Reviews <FiArrowRight /></button>
                      </div>
                   </div>
                </div>
              </div>

              <div className="lg:col-span-4 space-y-12">
                 <section className="portal-card bg-white p-12 space-y-10">
                    <h3 className="text-xl font-black border-b border-gray-50 pb-6">Scheduled Events</h3>
                    <div className="space-y-8">
                       {[
                         { date: 'MAY 18', time: '14:00', title: 'Live Workshop' },
                         { date: 'MAY 20', time: '10:00', title: 'Advisory Sync' },
                         { date: 'MAY 24', time: '16:00', title: 'Sprint Review' }
                       ].map((event, i) => (
                         <div key={i} className="flex gap-6 items-start group cursor-pointer">
                            <div className="bg-off rounded-2xl p-4 text-center min-w-[70px] group-hover:bg-black group-hover:text-gold transition-all">
                               <div className="text-[9px] font-black">{event.date.split(' ')[0]}</div>
                               <div className="text-lg font-black">{event.date.split(' ')[1]}</div>
                            </div>
                            <div>
                               <div className="text-sm font-black text-black group-hover:text-gold transition-colors">{event.title}</div>
                               <div className="text-[10px] text-muted font-bold uppercase tracking-widest mt-1">{event.time} WAT</div>
                            </div>
                         </div>
                       ))}
                    </div>
                    <button className="w-full py-5 bg-off rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-black hover:text-white transition-all">View Full Calendar</button>
                 </section>
              </div>
            </div>
          </div>
        );
      case 'profile':
        return (
          <div className="space-y-16 max-w-5xl">
            <div>
              <div className="hero-tag">
                <span className="hero-tag-dot"></span>
                Active Candidate Profile
              </div>
              <h1 className="mb-2">Sarah Johnson</h1>
              <p className="text-xl">Managing your institutional credentials and application audit trail.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
               <div className="md:col-span-4 space-y-12">
                  <div className="portal-card p-12 flex flex-col items-center text-center space-y-8 border-none bg-white">
                      <div className="w-40 h-40 bg-black text-gold rounded-[40%] flex items-center justify-center font-black text-5xl border-8 border-off shadow-2xl">SJ</div>
                      <div>
                         <h3 className="text-2xl font-black mb-2">Sarah Johnson</h3>
                         <div className="px-6 py-2 bg-green-50 text-green-600 rounded-full text-[10px] font-black uppercase tracking-widest inline-block">Verified Student</div>
                      </div>
                      <div className="w-full pt-8 border-t border-gray-50 flex justify-around">
                         <div>
                            <div className="text-[10px] font-black text-muted uppercase tracking-widest">Cohort</div>
                            <div className="text-lg font-black">C.08</div>
                         </div>
                         <div>
                            <div className="text-[10px] font-black text-muted uppercase tracking-widest">Assessments</div>
                            <div className="text-lg font-black">4</div>
                         </div>
                      </div>
                  </div>

                  <div className="portal-card p-12 space-y-8 border-none bg-black text-white">
                     <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-gold">Admission Intelligence</h4>
                     <div className="space-y-10">
                        <div>
                           <div className="text-[9px] font-black uppercase tracking-widest opacity-40 mb-2">Assessment Score</div>
                           <div className="flex items-center gap-4">
                              <div className="text-4xl font-black text-gold">94<span className="text-sm opacity-60">/100</span></div>
                              <div className="text-xs font-bold leading-tight opacity-80">Top 3% of Applicants</div>
                           </div>
                        </div>
                        <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                           <div className="text-[10px] font-black uppercase tracking-widest opacity-40 mb-3">Admission Path</div>
                           <div className="flex items-center gap-4 text-xs font-bold">
                              <FiCheckCircle className="text-green-400" /> Strategic Leadership Track
                           </div>
                        </div>
                     </div>
                  </div>
               </div>

               <div className="md:col-span-8 space-y-12">
                  <section className="portal-card p-12 space-y-10 border-none bg-white">
                     <h3 className="text-2xl font-black border-b border-gray-50 pb-6 flex items-center gap-4">
                       <FiFileText className="text-gold" /> Personal Taxonomy
                     </h3>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {[
                          { label: 'Full Legal Name', val: 'Sarah Elizabeth Johnson' },
                          { label: 'Professional ID', val: 'TF-2026-0812' },
                          { label: 'Primary Node', val: 'Lagos, Nigeria' },
                          { label: 'Learning Specialization', val: 'Talent Architecture' },
                          { label: 'Digital Contact', val: 'sarah.j@talentfactory.com' },
                          { label: 'Candidate Bio', val: 'HR Specialist focused on technological integration in human capital.' }
                        ].map((item, i) => (
                           <div key={i} className="space-y-2">
                              <div className="text-[10px] font-black text-muted uppercase tracking-[0.2em]">{item.label}</div>
                              <div className="text-sm font-bold text-black border-l-4 border-off pl-4 py-1">{item.val}</div>
                           </div>
                        ))}
                     </div>
                  </section>

                  <section className="portal-card p-12 space-y-10 border-none bg-white">
                     <h3 className="text-2xl font-black border-b border-gray-50 pb-6 flex items-center gap-4">
                       <FiShield className="text-gold" /> Application Flow Registry
                     </h3>
                     <div className="space-y-8">
                        {[
                          { step: 'Initial Registration', status: 'Completed', date: 'APR 12, 2026' },
                          { step: 'Aptitude & Logic Test', status: 'Passed (94%)', date: 'APR 15, 2026' },
                          { step: 'Tuition Verification', status: 'Verified', date: 'APR 20, 2026' },
                          { step: 'Final Admissions Letter', status: 'Issued', date: 'APR 25, 2026' }
                        ].map((s, i) => (
                          <div key={i} className="flex justify-between items-center bg-off/50 p-6 rounded-2xl hover:bg-off transition-all">
                             <div className="flex items-center gap-6">
                                <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-black border border-gray-100"><FiCheckCircle /></div>
                                <div>
                                   <div className="text-sm font-black text-black">{s.step}</div>
                                   <div className="text-[10px] text-muted font-bold uppercase tracking-widest">{s.date}</div>
                                </div>
                             </div>
                             <div className="text-[9px] font-black bg-black text-white px-4 py-2 rounded-full uppercase tracking-widest">{s.status}</div>
                          </div>
                        ))}
                     </div>
                  </section>
               </div>
            </div>
          </div>
        );
      case 'finance':
        return (
          <div className="space-y-16 max-w-5xl pb-24">
            <div>
              <div className="hero-tag">
                <span className="hero-tag-dot"></span>
                Financial Intelligence
              </div>
              <h1 className="mb-2">Financial Ledger</h1>
              <p className="text-xl">Detailed breakdown of your institutional investment and future payment roadmap.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
               <div className="lg:col-span-5 space-y-12">
                  <div className="portal-card bg-black text-white p-12 relative overflow-hidden border-none shadow-2xl">
                     <div className="relative z-10">
                        <div className="text-[10px] font-black uppercase tracking-[0.4em] text-gold mb-12">Educational Plan 2026</div>
                        <h2 className="text-3xl font-black mb-4">Premium Leadership Track</h2>
                        <div className="flex items-baseline gap-4 mb-12">
                           <span className="text-5xl font-black text-white tracking-tighter">₦250,000</span>
                           <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Total Valuation</span>
                        </div>
                        <div className="space-y-6">
                           <div className="flex justify-between text-xs font-bold">
                              <span className="opacity-40">Status</span>
                              <span className="text-gold">Active • Paid Partial</span>
                           </div>
                           <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                              <div className="bg-gold h-full w-[64%]"></div>
                           </div>
                           <div className="text-[10px] font-black uppercase tracking-widest text-right opacity-60">64% Settled</div>
                        </div>
                     </div>
                     <div className="absolute top-0 right-0 w-80 h-80 bg-gold/5 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
                  </div>

                  <div className="portal-card bg-white p-12 space-y-8 border-none shadow-sm">
                     <h3 className="text-xl font-black border-b border-gray-50 pb-6 flex items-center gap-4">
                        <FiClock className="text-rust" /> Upcoming Commitment
                     </h3>
                     <div className="bg-rust/5 p-8 rounded-[32px] border border-rust/10">
                        <div className="flex justify-between items-start mb-6">
                           <div>
                              <div className="text-[10px] font-black text-rust uppercase tracking-widest mb-1">Final Installment</div>
                              <div className="text-3xl font-black text-black tracking-tighter">₦100,000</div>
                           </div>
                           <div className="bg-white px-4 py-2 rounded-xl border border-rust/20 text-rust font-black text-[10px] uppercase">JUL 15</div>
                        </div>
                        <p className="text-[10px] text-muted font-bold leading-relaxed mb-8 uppercase tracking-widest">This payment finalizes your tuition for the current academic session.</p>
                        <button className="w-full py-5 bg-black text-white rounded-2xl font-black text-[10px] uppercase tracking-[0.3em] hover:bg-gold hover:text-black transition-all">Authorize Now</button>
                     </div>
                  </div>
               </div>

               <div className="lg:col-span-7 space-y-12">
                  <section className="portal-card bg-white p-12 space-y-10 border-none shadow-sm h-full">
                     <h3 className="text-2xl font-black border-b border-gray-50 pb-6 flex items-center gap-4">
                       <FiActivity className="text-gold" /> Transaction Registry
                     </h3>
                     <div className="space-y-6">
                        {[
                          { item: 'Application Fee', amount: '₦10,000', date: 'APR 12, 2026', method: 'Paystack', status: 'Success' },
                          { item: 'Tuition Deposit', amount: '₦150,000', date: 'APR 20, 2026', method: 'Transfer', status: 'Success' },
                          { item: 'Study Materials', amount: '₦0 (Included)', date: 'MAY 01, 2026', method: 'Internal', status: 'Settled' }
                        ].map((t, i) => (
                           <div key={i} className="flex items-center justify-between p-8 border border-gray-50 rounded-[32px] hover:border-black transition-all group">
                              <div className="flex items-center gap-6">
                                 <div className="w-14 h-14 bg-off rounded-2xl flex items-center justify-center text-black group-hover:bg-black group-hover:text-gold transition-colors"><FiArrowRight /></div>
                                 <div>
                                    <div className="text-sm font-black text-black uppercase">{t.item}</div>
                                    <div className="text-[10px] text-muted font-bold mt-1 uppercase tracking-widest">{t.date} • {t.method}</div>
                                 </div>
                              </div>
                              <div className="text-right">
                                 <div className="text-lg font-black text-black mb-1">{t.amount === '₦10,000' && <span className="text-green-600 mr-2">●</span>}{t.amount}</div>
                                 <div className="text-[9px] font-black uppercase tracking-widest text-muted">{t.status}</div>
                              </div>
                           </div>
                        ))}
                     </div>
                     <button className="w-full py-5 bg-off rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-black hover:text-white transition-all mt-8">Export Full Audit Log (PDF)</button>
                  </section>
               </div>
            </div>
          </div>
        );
      case 'schedule':
        return (
          <div className="space-y-16">
            <div>
              <div className="hero-tag">
                <span className="hero-tag-dot"></span>
                Timeline Operations
              </div>
              <h1 className="mb-2">Institutional Schedule</h1>
              <p className="text-xl">Your synchronized roadmap of lectures, peer-reflections, and studio residency.</p>
            </div>
            
            <div className="portal-card bg-white p-12 border-none shadow-sm min-h-[600px] flex items-center justify-center italic text-muted">
               [Calendar Interface Component Integrated Here]
            </div>
          </div>
        );
      default:
        return <div>Sub-page not found.</div>;
    }
  };

  return (
    <StudentSidebar>
      <div className="animate-slideUp">
        {renderContent()}
      </div>
    </StudentSidebar>
  );
};

export default StudentPortalPage;
