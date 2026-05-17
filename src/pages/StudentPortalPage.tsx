import React from 'react';
import { useParams } from 'react-router-dom';
import StudentSidebar from '../components/Navigation/StudentSidebar';
import { 
  FiZap, 
  FiClock,
  FiArrowRight,
  FiMail,
  FiPhone,
  FiMapPin,
  FiCreditCard,
  FiBook,
  FiMessageCircle
} from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

const StudentPortalPage: React.FC = () => {
  const { tab = 'overview' } = useParams<{ tab: string }>();

  const studentData = {
    name: 'Sarah Johnson',
    email: 'sarah.j@example.com',
    phone: '+234 812 345 6789',
    location: 'Lagos, Nigeria',
    cohort: 'Cohort 01',
    specialization: 'Human Capital Specialization',
    progress: 42,
    plan: 'Full Professional Pass',
    paymentStatus: 'Verified',
    balance: '₦0.00',
    totalTuition: '₦240,000'
  };

  const renderContent = () => {
    switch (tab) {
      case 'overview':
        return (
          <div className="space-y-16">
            <div className="max-w-3xl">
              <div className="hero-tag">
                <span className="hero-tag-dot"></span>
                {studentData.cohort}
              </div>
              <h1>
                Welcome to your workspace, <br/>
                <span className="text-gold">{studentData.name.split(' ')[0]}.</span>
              </h1>
              <p className="text-xl">You have 2 pending assignments and a live session in 4 hours.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-8 space-y-12">
                <div className="portal-card bg-black text-white p-12 relative overflow-hidden group">
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-8">
                      <span className="px-4 py-1 bg-gold text-black text-[10px] font-black uppercase tracking-widest rounded-full">Module 04</span>
                      <span className="text-[10px] font-black text-white/40 uppercase">Ongoing</span>
                    </div>
                    <h2 className="text-4xl font-black mb-4">Strategic Organizational Design</h2>
                    <p className="text-white/50 text-lg mb-12">Faculty: Dr. Michael Okonkwo</p>
                    <div className="flex flex-col md:flex-row items-center gap-8">
                       <button className="w-full md:w-auto btn-primary py-5 px-12 text-[10px] uppercase tracking-widest flex items-center gap-3 bg-gold text-black border-none">
                          Resume Learning <FiArrowRight />
                       </button>
                       <div className="flex items-center gap-3">
                          <div className="text-3xl font-black text-gold">42%</div>
                          <div className="text-[10px] font-black text-white/30 uppercase tracking-widest">Completed</div>
                       </div>
                    </div>
                  </div>
                  <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="portal-card hover:bg-off transition-all cursor-pointer group">
                    <div className="w-16 h-16 bg-black text-gold rounded-2xl flex items-center justify-center text-2xl mb-8 group-hover:scale-110 transition-transform"><FiBook /></div>
                    <h3 className="text-2xl font-black mb-3 tracking-tight">Curriculum Vault</h3>
                    <p className="mb-8">Access your recorded lectures, slide decks, and case studies.</p>
                    <div className="text-[10px] font-black text-gold uppercase tracking-[0.2em] flex items-center gap-2">View Resources <FiArrowRight /></div>
                  </div>

                  <div className="portal-card bg-warm/50">
                    <div className="w-16 h-16 bg-white border border-gray-100 text-black rounded-2xl flex items-center justify-center text-2xl mb-8"><FiMessageCircle /></div>
                    <h3 className="text-2xl font-black mb-3 tracking-tight">Community Hub</h3>
                    <p className="mb-8">Connect with other HR practitioners in your cohort.</p>
                    <button className="w-full flex items-center justify-center gap-4 bg-[#25D366] text-white py-5 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:scale-[1.02] transition-all shadow-xl shadow-[#25D366]/20">
                      <FaWhatsapp size={18} /> Join WhatsApp Village
                    </button>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 space-y-12">
                <div className="portal-card bg-gold text-black border-none">
                   <div className="flex items-center gap-2 mb-8">
                      <FiClock size={16} className="animate-pulse" />
                      <span className="text-[10px] font-black uppercase tracking-[0.2em]">Live Workshop</span>
                   </div>
                   <div className="text-5xl font-black tracking-tighter mb-4">03:42:12</div>
                   <p className="text-black/60 font-bold uppercase text-[10px] tracking-widest">Professional Ethics Deep Dive</p>
                </div>

                <section>
                   <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-muted mb-8 ml-2">Deadlines</h4>
                   <div className="space-y-6">
                      {[
                        { title: 'Org Audit Report', date: 'Tomorrow, 11:59PM', active: true },
                        { title: 'Peer Review: Unit 4', date: 'Jun 22, 2026', active: false },
                        { title: 'Goal Setting M05', date: 'Jun 28, 2026', active: false }
                      ].map((item, i) => (
                        <div key={i} className="flex gap-6 group cursor-pointer hover:translate-x-2 transition-transform">
                           <div className={`w-1.5 h-auto rounded-full ${item.active ? 'bg-gold' : 'bg-gray-100'}`}></div>
                           <div>
                              <div className="text-sm font-black text-black uppercase tracking-tight">{item.title}</div>
                              <div className="text-[10px] text-muted font-bold uppercase tracking-widest mt-1">{item.date}</div>
                           </div>
                        </div>
                      ))}
                   </div>
                </section>

                <div className="portal-card bg-off border-none relative overflow-hidden group p-8">
                   <FiZap className="text-gold mb-6 animate-pulse" size={24} />
                   <p className="text-sm font-bold leading-relaxed text-black/80">"The ESG metrics presentation has been updated. Please review before tonight's call."</p>
                   <div className="mt-8 flex items-center justify-between">
                      <span className="text-[9px] font-black uppercase tracking-widest text-muted">Facilitator O.</span>
                      <FiArrowRight className="group-hover:translate-x-2 transition-transform opacity-30 group-hover:opacity-100" />
                   </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'profile':
        return (
          <div className="space-y-16 max-w-5xl">
            <div className="flex flex-col md:flex-row items-center gap-12">
               <div className="w-48 h-48 rounded-[48px] bg-black text-gold flex items-center justify-center text-6xl font-black shadow-2xl relative border-8 border-white">
                  SJ
                  <button className="absolute -bottom-2 -right-2 w-14 h-14 bg-gold text-black rounded-2xl flex items-center justify-center border-4 border-off text-xl hover:scale-110 transition-transform shadow-xl">✎</button>
               </div>
               <div className="text-center md:text-left">
                  <div className="hero-tag">{studentData.cohort}</div>
                  <h1 className="mb-2">{studentData.name}</h1>
                  <p className="text-lg font-bold uppercase tracking-widest text-gold flex items-center justify-center md:justify-start gap-3">
                     {studentData.specialization}
                  </p>
               </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
               <section className="portal-card space-y-10">
                  <h3 className="text-2xl font-black tracking-tight border-b border-gray-50 pb-6">Information</h3>
                  <div className="space-y-8">
                     {[
                       { label: 'Email Address', value: studentData.email, icon: <FiMail /> },
                       { label: 'Phone Number', value: studentData.phone, icon: <FiPhone /> },
                       { label: 'Location', value: studentData.location, icon: <FiMapPin /> }
                     ].map((item, i) => (
                        <div key={i} className="flex items-center gap-8 group">
                          <div className="w-14 h-14 bg-off rounded-2xl flex items-center justify-center text-muted group-hover:bg-black group-hover:text-gold transition-all">{item.icon}</div>
                          <div>
                             <div className="text-[10px] font-black text-muted uppercase tracking-[0.2em] mb-1">{item.label}</div>
                             <div className="text-lg font-bold text-black">{item.value}</div>
                          </div>
                        </div>
                     ))}
                  </div>
               </section>

               <section className="portal-card space-y-10 bg-warm/30">
                  <h3 className="text-2xl font-black tracking-tight border-b border-gray-50 pb-6">Academic Status</h3>
                  <div className="space-y-8">
                     <div className="flex justify-between items-center p-6 bg-white rounded-2xl shadow-sm">
                        <span className="text-[10px] font-black text-muted uppercase tracking-widest">Active Specialization</span>
                        <span className="text-xs font-black text-black">Human Capital Ops</span>
                     </div>
                     <div className="flex justify-between items-center px-6">
                        <span className="text-[10px] font-black text-muted uppercase tracking-widest">Enrollment Date</span>
                        <span className="text-lg font-bold text-black">Jan 12, 2026</span>
                     </div>
                  </div>
                  <button className="w-full py-6 bg-black text-white rounded-2xl font-black text-[11px] uppercase tracking-[0.2em] shadow-xl shadow-black/10 hover:bg-gold hover:text-black transition-all mt-8">
                    Request Document
                  </button>
               </section>
            </div>
          </div>
        );

      case 'finance':
        return (
          <div className="space-y-16 max-w-6xl">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
               <div>
                  <h1 className="mb-2">Finance</h1>
                  <p className="text-xl">Review your historical transactions and current tuition status.</p>
               </div>
               <div className="portal-card p-10 bg-black text-white border-none flex items-center gap-10 shadow-2xl shadow-black/20">
                  <div>
                     <div className="text-[10px] font-black text-gold uppercase tracking-[0.3em] mb-2">Portfolio Balance</div>
                     <div className="text-5xl font-black tracking-tighter">{studentData.balance}</div>
                  </div>
                  <div className="w-16 h-16 bg-white/10 rounded-3xl flex items-center justify-center text-3xl"><FiCreditCard /></div>
               </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
               <div className="lg:col-span-8 space-y-12">
                  <div className="portal-card bg-gold text-black border-none relative overflow-hidden p-12 group">
                     <div className="relative z-10">
                        <h3 className="text-3xl font-black mb-10 tracking-tight">Full Professional Pass</h3>
                        <div className="grid grid-cols-2 gap-12">
                           <div>
                              <div className="text-black/40 text-[10px] font-black uppercase tracking-widest mb-2">Contract Total</div>
                              <div className="text-3xl font-black tracking-tighter">{studentData.totalTuition}</div>
                           </div>
                           <div>
                              <div className="text-black/40 text-[10px] font-black uppercase tracking-widest mb-2">Billing Method</div>
                              <div className="text-2xl font-black tracking-tighter">One-Time Deposit</div>
                           </div>
                        </div>
                     </div>
                     <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-black/5 rounded-full blur-3xl group-hover:scale-110 transition-transform"></div>
                  </div>

                  <section className="portal-card p-0 overflow-hidden shadow-xl shadow-black/5 border-none">
                     <div className="p-10 border-b border-gray-50 flex justify-between items-center">
                        <h3 className="text-xl font-black m-0">Ledger</h3>
                        <span className="text-[9px] font-black text-muted uppercase tracking-widest">Digital Audit Trails</span>
                     </div>
                     <div className="divide-y divide-gray-50">
                        {[
                          { title: 'Full Tuition Payment', ref: 'TF-9042', amount: '₦240,000', date: 'May 17, 2026' },
                          { title: 'Application Intake Fee', ref: 'TF-1022', amount: '₦10,000', date: 'Jan 10, 2026' }
                        ].map((tx, i) => (
                           <div key={i} className="p-10 flex flex-col md:flex-row justify-between items-center gap-8 hover:bg-off/50 transition-all">
                              <div className="flex items-center gap-10">
                                 <div className="text-[10px] font-black text-muted tracking-widest opacity-30">0{i+1}</div>
                                 <div>
                                    <div className="font-black text-black uppercase tracking-tight">{tx.title}</div>
                                    <div className="text-[9px] text-muted font-bold uppercase tracking-widest mt-1">Ref: {tx.ref}</div>
                                 </div>
                              </div>
                              <div className="text-center md:text-right">
                                 <div className="text-xl font-black text-black">{tx.amount}</div>
                                 <div className="text-[9px] text-green-600 font-black uppercase tracking-widest mt-2 flex items-center justify-end gap-2">
                                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                                    Cleared • {tx.date}
                                 </div>
                              </div>
                           </div>
                        ))}
                     </div>
                  </section>
               </div>

               <div className="lg:col-span-4 space-y-8">
                  <div className="portal-card p-10 bg-off border-none text-center">
                     <h4 className="text-[10px] font-black uppercase tracking-[0.4em] mb-12 text-muted">Authenticated Wallet</h4>
                     <div className="space-y-4 mb-12">
                        <div className="p-6 bg-white rounded-3xl border border-gray-100 flex items-center justify-between shadow-sm">
                           <span className="font-black">VISA</span>
                           <span className="text-sm font-mono tracking-[0.2em]">•••• 9042</span>
                        </div>
                     </div>
                     <button className="w-full py-5 border-2 border-dashed border-gray-200 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] text-muted hover:border-gold hover:text-gold transition-all">Inject New Card +</button>
                  </div>
               </div>
            </div>
          </div>
        );

      case 'schedule':
        return (
          <div className="space-y-16 max-w-4xl">
            <div>
              <h1 className="mb-2">Orientation</h1>
              <p className="text-xl">Key dates and onboarding schedule for your upcoming cohort entry.</p>
            </div>

            <div className="portal-card p-0 overflow-hidden shadow-2xl shadow-black/10 border-none">
              <div className="p-16 bg-black text-white flex flex-col md:flex-row justify-between items-center gap-12 text-center md:text-left">
                <div>
                  <div className="text-gold font-black text-[10px] uppercase tracking-[0.4em] mb-6">Cohort 01 Launch</div>
                  <h2 className="text-5xl font-black mb-4 tracking-tighter">January 15, 2026</h2>
                  <div className="flex flex-wrap justify-center md:justify-start gap-6 text-[10px] font-black uppercase tracking-widest text-white/40">
                     <span>19:00 WAT</span>
                     <span>Microsoft Teams</span>
                  </div>
                </div>
                <button className="btn-primary py-5 px-12 bg-gold text-black border-none">Add to Calendar</button>
              </div>

              <div className="p-16 space-y-16 bg-white">
                {[
                  { time: '19:00', title: 'Executive Welcome', desc: 'Program vision and core mission brief.' },
                  { time: '19:30', title: 'Curriculum Mastery', desc: 'Understanding the academic roadmap.' },
                  { time: '20:15', title: 'Ecosystem Tour', desc: 'Navigating the portal and shared resources.' }
                ].map((item, i) => (
                  <div key={i} className="flex gap-16 group relative">
                    <div className="min-w-[80px] text-lg font-black text-black/10 group-hover:text-gold transition-colors">{item.time}</div>
                    <div className="flex-1 pb-16 border-l-2 border-off pl-16 relative">
                       <div className="absolute left-[-5px] top-2 w-2 h-2 rounded-full bg-off group-hover:bg-gold transition-colors"></div>
                       <h4 className="text-3xl font-black mb-3 tracking-tight">{item.title}</h4>
                       <p className="text-muted leading-relaxed font-bold">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      
      default:
        return <div>Sub-page not found.</div>;
    }
  };

  return (
    <StudentSidebar>
      {renderContent()}
    </StudentSidebar>
  );
};

export default StudentPortalPage;
