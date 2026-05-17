import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { 
  FiUsers, 
  FiBriefcase, 
  FiDollarSign, 
  FiSettings, 
  FiActivity, 
  FiXCircle, 
  FiTrendingUp,
  FiClock,
  FiLogOut,
  FiSearch,
  FiShield,
  FiGlobe,
  FiDatabase,
  FiBell,
  FiLock,
  FiArrowRight,
  FiMenu,
  FiX
} from 'react-icons/fi';
import { type ColumnDef } from '@tanstack/react-table';
import { BaseTable } from '../components/UI/BaseTable';

interface StudentData {
  id: number;
  name: string;
  email: string;
  role: string;
  payment: string;
  status: string;
}

interface TutorData {
  id: number;
  name: string;
  role: string;
  status: string;
  classes: number;
}

interface PaymentData {
  id: number;
  user: string;
  type: string;
  amount: string;
  method: string;
  status: string;
  date: string;
}

const AdminDashboardPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'students' | 'tutors' | 'payments' | 'settings'>('overview');
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const stats = [
    { label: 'Revenue', value: '₦12.4M', icon: <FiDollarSign size={22} />, trend: '+12.5%' },
    { label: 'Students', value: '1,284', icon: <FiUsers size={22} />, trend: '+4.3%' },
    { label: 'Faculty', value: '42', icon: <FiBriefcase size={22} />, trend: '+2' },
    { label: 'Success', value: '94.2%', icon: <FiTrendingUp size={22} />, trend: '+1.2%' }
  ];

  const students = useMemo<StudentData[]>(() => [
    { id: 1, name: 'Sarah Johnson', email: 'sarah@example.com', role: 'UX Designer', payment: 'Verified', status: 'Active' },
    { id: 2, name: 'Kevin Hart', email: 'kevin@example.com', role: 'Data Analyst', payment: 'Pending', status: 'Inactive' },
    { id: 3, name: 'Amina Yusuf', email: 'amina@example.com', role: 'Fullstack Dev', payment: 'Verified', status: 'Active' },
    { id: 4, name: 'Michael Chen', email: 'micheal@example.com', role: 'Product Manager', payment: 'Awaiting', status: 'Inactive' },
  ], []);

  const tutors = useMemo<TutorData[]>(() => [
    { id: 1, name: 'Dr. Michael Okonkwo', role: 'Program Director', status: 'Active', classes: 4 },
    { id: 2, name: 'Prof. Amara Silva', role: 'Core HR Instructor', status: 'Active', classes: 2 },
  ], []);

  const payments = useMemo<PaymentData[]>(() => [
    { id: 1, user: 'Sarah Johnson', type: 'Application Fee', amount: '₦10,000', method: 'Paystack', status: 'Success', date: 'May 16, 2026' },
    { id: 2, user: 'Sarah Johnson', type: 'Tuition (Full)', amount: '₦240,000', method: 'Bank Transfer', status: 'Pending', date: 'May 17, 2026' },
  ], []);

  const studentColumns = useMemo<ColumnDef<StudentData>[]>(() => [
    {
      header: 'Student Profile',
      accessorKey: 'name',
      cell: info => (
        <div className="flex items-center gap-4">
           <div className="w-10 h-10 rounded-xl bg-black text-gold flex items-center justify-center font-bold text-[10px]">{info.row.original.name[0]}</div>
           <div>
              <div className="font-bold text-black">{info.row.original.name}</div>
              <div className="text-[9px] text-muted font-bold uppercase tracking-widest">{info.row.original.email}</div>
           </div>
        </div>
      ),
    },
    { header: 'Learning Path', accessorKey: 'role' },
    {
      header: 'Finance',
      accessorKey: 'payment',
      cell: info => (
        <span className={`px-4 py-1 rounded-full text-[9px] font-black uppercase tracking-widest ${
          info.getValue() === 'Verified' ? 'bg-green-50 text-green-600' : 'bg-gold/10 text-gold'
        }`}>{info.getValue() as string}</span>
      ),
    },
    {
      header: 'Status',
      accessorKey: 'status',
      cell: info => (
        <span className={`px-4 py-1 rounded-full text-[9px] font-black uppercase tracking-widest ${
          info.getValue() === 'Active' ? 'bg-black text-white' : 'bg-gray-100 text-muted'
        }`}>{info.getValue() as string}</span>
      ),
    },
    {
      header: 'Operations',
      cell: () => (
        <div className="flex gap-4">
          <button className="text-[10px] font-black uppercase tracking-[0.2em] text-gold hover:opacity-70">Verify</button>
          <button className="text-[10px] font-black uppercase tracking-[0.2em] text-black hover:opacity-70">Edit</button>
        </div>
      ),
    },
  ], []);

  const tutorColumns = useMemo<ColumnDef<TutorData>[]>(() => [
    {
      header: 'Faculty Member',
      accessorKey: 'name',
      cell: info => (
        <div className="flex items-center gap-4">
           <div className="w-10 h-10 rounded-xl bg-off text-black flex items-center justify-center font-bold text-[10px]">{info.row.original.name[0]}</div>
           <div className="font-bold text-black">{info.row.original.name}</div>
        </div>
      ),
    },
    { header: 'Expertise', accessorKey: 'role' },
    { header: 'Workload', accessorKey: 'classes', cell: info => `${info.getValue()} Active Batches` },
    {
      header: 'Vetting',
      accessorKey: 'status',
      cell: info => (
        <span className={`px-4 py-1 rounded-full text-[9px] font-black uppercase tracking-widest ${
          info.getValue() === 'Active' ? 'bg-green-50 text-green-600' : 'bg-gold/10 text-gold'
        }`}>{info.getValue() as string}</span>
      ),
    },
    {
      header: 'Actions',
      cell: () => (
        <button className="text-[10px] font-black uppercase tracking-[0.2em] text-black">Manage Console</button>
      ),
    },
  ], []);

  const paymentColumns = useMemo<ColumnDef<PaymentData>[]>(() => [
    { header: 'Entity', accessorKey: 'user' },
    { header: 'Logic Type', accessorKey: 'type' },
    { header: 'Yield', accessorKey: 'amount', cell: info => <span className="font-black">{info.getValue() as string}</span> },
    {
      header: 'Status',
      accessorKey: 'status',
      cell: info => (
        <span className={`px-4 py-1 rounded-full text-[9px] font-black uppercase tracking-widest ${
          info.getValue() === 'Success' ? 'bg-green-50 text-green-600' : 'bg-gold/10 text-gold'
        }`}>{info.getValue() as string}</span>
      ),
    },
    { header: 'Timestamp', accessorKey: 'date' },
  ], []);

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-20">
            <div>
              <div className="hero-tag">
                <span className="hero-tag-dot"></span>
                Root Console
              </div>
              <h1 className="mb-2">Integrity Operations</h1>
              <p className="text-xl">Monitor and manage the global ecosystem performance.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, i) => (
                <div key={i} className="portal-card h-48 flex flex-col justify-between group hover:border-black transition-all border-none shadow-sm">
                  <div className="flex justify-between items-start">
                    <div className="w-16 h-16 rounded-3xl bg-white border border-gray-100 flex items-center justify-center text-black group-hover:bg-black group-hover:text-gold transition-colors shadow-sm">
                      {stat.icon}
                    </div>
                    <span className="text-green-600 text-[10px] font-black bg-green-50 px-4 py-1.5 rounded-full">{stat.trend}</span>
                  </div>
                  <div>
                    <div className="text-[10px] uppercase font-black text-muted tracking-[0.3em] mb-2">{stat.label}</div>
                    <div className="text-4xl font-black text-black tracking-tighter">{stat.value}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
              <div className="lg:col-span-8 space-y-16">
                <section>
                  <h3 className="text-2xl font-black mb-8 border-b border-gray-50 pb-6 flex items-center gap-4">
                    <span className="w-2 h-2 rounded-full bg-gold"></span>
                    Operational Stream
                  </h3>
                  <div className="portal-card p-0 overflow-hidden shadow-xl shadow-black/[0.02] border-none">
                    <div className="divide-y divide-gray-50">
                      {[
                        { id: 1, user: 'Sarah Johnson', action: 'Payment Verified', time: '5 mins ago', amount: '₦50,000' },
                        { id: 2, user: 'Dr. Michael Chen', action: 'Materials Uploaded', time: '12 mins ago' },
                        { id: 3, user: 'System', action: 'Cache Purged', time: '45 mins ago' },
                      ].map(item => (
                        <div key={item.id} className="px-10 py-8 flex items-center justify-between hover:bg-off transition-colors cursor-pointer group">
                          <div className="flex items-center gap-8">
                            <div className="w-14 h-14 rounded-2xl bg-black text-gold flex items-center justify-center font-black text-xs shadow-lg">
                              {item.user[0]}
                            </div>
                            <div>
                              <div className="text-sm font-black text-black uppercase tracking-tight">{item.user}</div>
                              <div className="text-[10px] text-muted font-bold tracking-[0.2em] uppercase mt-1">{item.action}</div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-sm font-black text-black">{item.amount || '--'}</div>
                            <div className="text-[9px] text-muted font-bold uppercase tracking-widest flex items-center gap-3 justify-end mt-2">
                              <FiClock size={12} /> {item.time}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                   <div className="portal-card bg-off border-none p-12">
                      <h4 className="text-[10px] font-black uppercase tracking-[0.4em] mb-12 text-muted">Core Metrics</h4>
                      <div className="space-y-10">
                         {[
                           { label: 'Daily Active', val: '432', tr: '+8%' },
                           { label: 'Retention', val: '89%', tr: '+2%' },
                           { label: 'Support SLA', val: '14m', tr: '-1m' }
                         ].map((s, i) => (
                           <div key={i} className="flex justify-between items-end">
                              <div>
                                 <div className="text-[10px] font-black text-muted uppercase tracking-widest mb-1">{s.label}</div>
                                 <div className="text-3xl font-black text-black tracking-tighter">{s.val}</div>
                              </div>
                              <div className="text-[11px] font-black text-green-600">{s.tr}</div>
                           </div>
                         ))}
                      </div>
                   </div>
                   <div className="portal-card bg-black text-white p-12 group overflow-hidden relative border-none">
                      <div className="relative z-10 flex flex-col h-full justify-between">
                         <div>
                            <FiActivity className="text-gold mb-10 animate-pulse" size={32} />
                            <h4 className="text-3xl font-black mb-4 leading-tight">System Status: <br/><span className="text-gold">NOMINAL</span></h4>
                            <p className="text-sm text-white/40 leading-relaxed font-bold">All micro-services responding within threshold. No critical anomalies.</p>
                         </div>
                         <button className="text-[10px] font-black text-gold uppercase tracking-[0.3em] flex items-center gap-4 group-hover:text-white transition-colors">
                            Access Audit Logs <FiArrowRight />
                         </button>
                      </div>
                      <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
                   </div>
                </div>
              </div>

              <div className="lg:col-span-4 space-y-16">
                 <section>
                   <h3 className="text-xl font-black mb-8 border-b border-gray-50 pb-6 ml-2">Pending Logic</h3>
                   <div className="space-y-8">
                      {[
                        { id: 1, name: 'Grace Adewale', type: 'Faculty', date: 'May 15' },
                        { id: 2, name: 'Kevin Hart', type: 'Learner', date: 'May 16' }
                      ].map(v => (
                        <div key={v.id} className="portal-card border-none bg-white shadow-xl shadow-black/[0.02] p-10 group hover:bg-black hover:text-white transition-all">
                           <div className="flex justify-between items-center mb-8">
                              <span className="text-[9px] font-black uppercase tracking-[0.3em] text-gold">{v.type}</span>
                              <span className="text-[10px] text-muted font-bold group-hover:text-white/40 uppercase">{v.date}</span>
                           </div>
                           <h5 className="font-black text-2xl tracking-tight mb-8 group-hover:text-gold transition-colors">{v.name}</h5>
                           <div className="flex gap-4">
                              <button className="flex-1 py-5 bg-black text-white rounded-2xl text-[10px] font-black uppercase tracking-widest border border-white/10 group-hover:bg-gold group-hover:text-black">Approve</button>
                              <button className="w-16 h-16 bg-off rounded-2xl flex items-center justify-center text-muted hover:text-rust group-hover:bg-white/10"><FiXCircle size={20} /></button>
                           </div>
                        </div>
                      ))}
                   </div>
                 </section>

                 <div className="portal-card bg-gold/10 border-gold/20 p-12 relative overflow-hidden">
                   <h3 className="text-gold font-black uppercase text-[11px] tracking-[0.4em] mb-6">Broadcast Notification</h3>
                   <textarea className="w-full bg-white border border-gold/10 rounded-2xl p-6 text-xs mb-8 min-h-[180px] focus:outline-none focus:border-gold font-bold placeholder:opacity-30" placeholder="Type ecosystem announcement..."></textarea>
                   <button className="w-full py-5 bg-black text-white rounded-2xl font-black text-[11px] uppercase tracking-[0.3em] shadow-2xl shadow-black/20 hover:bg-gold hover:text-black transition-all">Transmit Node</button>
                 </div>
              </div>
            </div>
          </div>
        );
      case 'students':
        return (
          <div className="space-y-20">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
              <div>
                <h1 className="mb-2">Student Database</h1>
                <p className="text-xl">Coordinate enrollment, vetting, and performance tracking.</p>
              </div>
              <div className="flex gap-4">
                <button className="btn-primary bg-off border border-gray-100 text-black shadow-none py-5 px-10">Export Dataset</button>
                <button className="btn-primary py-5 px-10">Batch Operations</button>
              </div>
            </div>
            <div className="overflow-x-auto">
              <BaseTable data={students} columns={studentColumns} pageSize={5} />
            </div>
          </div>
        );
      case 'tutors':
        return (
          <div className="space-y-20">
             <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
              <div>
                <h1 className="mb-2">Faculty Command</h1>
                <p className="text-xl">Manage program directors and subject leads.</p>
              </div>
              <button className="btn-primary py-5 px-12">+ New Faculty Entry</button>
            </div>
            <div className="overflow-x-auto">
              <BaseTable data={tutors} columns={tutorColumns} pageSize={5} />
            </div>
          </div>
        );
      case 'payments':
        return (
          <div className="space-y-20">
             <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
              <div>
                <h1 className="mb-2">Yield Ledger</h1>
                <p className="text-xl">Transactions and financial audit stream.</p>
              </div>
            </div>
            <div className="overflow-x-auto">
              <BaseTable data={payments} columns={paymentColumns} pageSize={8} />
            </div>
          </div>
        );
      
      case 'settings':
        return (
          <div className="space-y-20 max-w-6xl pb-24">
            <div>
              <h1 className="mb-2">Console Config</h1>
              <p className="text-xl">Modify global parameters and security logic of the platform.</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
               <div className="space-y-12">
                  <section className="portal-card p-12 space-y-12 border-none">
                     <h3 className="text-2xl font-black flex items-center gap-4">
                        <FiGlobe className="text-gold" /> System State
                     </h3>
                     <div className="space-y-8">
                        {[
                          { title: 'Landing Registration', desc: 'Allows new applications via landing portal.', active: true },
                          { title: 'Maintenance Mode', desc: 'Lock the platform for internal tuning.', active: false }
                        ].map((s, i) => (
                           <div key={i} className="flex justify-between items-center bg-off/50 p-8 rounded-[32px] group hover:bg-off transition-all">
                              <div>
                                 <div className="text-sm font-black uppercase tracking-tight mb-2">{s.title}</div>
                                 <div className="text-[10px] text-muted font-bold tracking-widest">{s.desc}</div>
                              </div>
                              <button className={`w-16 h-10 rounded-full relative transition-all ${s.active ? 'bg-gold' : 'bg-gray-200'}`}>
                                 <div className={`absolute top-1.5 w-7 h-7 bg-white rounded-full transition-all ${s.active ? 'right-1.5' : 'left-1.5'}`}></div>
                              </button>
                           </div>
                        ))}
                     </div>
                  </section>

                  <section className="portal-card p-12 space-y-12 border-none bg-warm">
                    <h3 className="text-2xl font-black flex items-center gap-4">
                       <FiDollarSign className="text-gold" /> Financial Logic
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                       <div className="space-y-3">
                          <label className="text-[10px] font-black text-muted uppercase tracking-[0.3em] ml-2">APP ENTRY (₦)</label>
                          <input type="text" defaultValue="10,000" className="w-full bg-white border border-gray-100 rounded-2xl py-5 px-8 text-sm font-black focus:border-gold outline-none" />
                       </div>
                       <div className="space-y-3">
                          <label className="text-[10px] font-black text-muted uppercase tracking-[0.3em] ml-2">CORE TUITION (₦)</label>
                          <input type="text" defaultValue="250,000" className="w-full bg-white border border-gray-100 rounded-2xl py-5 px-8 text-sm font-black focus:border-gold outline-none" />
                       </div>
                    </div>
                    <button className="w-full py-6 bg-black text-white rounded-2xl font-black text-[11px] uppercase tracking-[0.3em] shadow-2xl shadow-black/10 hover:bg-gold hover:text-black transition-all">Apply Financial Hooks</button>
                  </section>
               </div>

               <div className="space-y-12">
                  <section className="portal-card p-12 space-y-10 border-none">
                     <h3 className="text-2xl font-black flex items-center gap-4">
                        <FiShield className="text-gold" /> Critical Security
                     </h3>
                     <div className="space-y-6">
                        <div className="p-8 border border-gray-100 rounded-[32px] flex items-center gap-8 group hover:border-gold transition-all cursor-pointer">
                           <div className="w-16 h-16 bg-off rounded-2xl flex items-center justify-center text-muted group-hover:bg-black group-hover:text-gold transition-colors"><FiLock size={24} /></div>
                           <div>
                              <div className="text-sm font-black uppercase">Enforce MFA</div>
                              <div className="text-[10px] text-muted font-bold tracking-widest mt-1">Multi-factor required for all admins.</div>
                           </div>
                        </div>
                        <div className="p-8 border border-gray-100 rounded-[32px] flex items-center gap-8 group hover:border-gold transition-all cursor-pointer">
                           <div className="w-16 h-16 bg-off rounded-2xl flex items-center justify-center text-muted group-hover:bg-black group-hover:text-gold transition-colors"><FiDatabase size={24} /></div>
                           <div>
                              <div className="text-sm font-black uppercase">Data Encryption</div>
                              <div className="text-[10px] text-muted font-bold tracking-widest mt-1">Force SHA-256 for all PII data.</div>
                           </div>
                        </div>
                     </div>
                  </section>

                  <section className="portal-card p-12 bg-off/50 border-none">
                     <h3 className="text-xl font-black mb-8">Node Diagnostics</h3>
                     <p className="text-xs text-muted mb-12 font-bold leading-relaxed px-2">Trigger a full ecosystem synchronization and flush all cached datasets. This might isolate connected nodes briefly.</p>
                     <div className="flex gap-6">
                        <button className="flex-1 py-5 bg-white border border-gray-100 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:border-black">Sync Ecosystem</button>
                        <button className="flex-1 py-5 bg-rust text-white rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-black">Purge Datasets</button>
                     </div>
                  </section>
               </div>
            </div>
          </div>
        );
      
      default:
        return <div>Not found</div>;
    }
  };

  return (
    <div className="portal-wrapper font-sans">
      <button className="mobile-toggle" onClick={() => setIsMobileOpen(!isMobileOpen)}>
        {isMobileOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>

      {isMobileOpen && (
        <div 
          className="fixed inset-0 bg-black/40 z-[95] lg:hidden backdrop-blur-sm"
          onClick={() => setIsMobileOpen(false)}
        ></div>
      )}

      <aside className={`portal-sidebar shadow-sm ${isMobileOpen ? 'mobile-open' : ''}`}>
        <div className="sidebar-header">
           <Link to="/" className="nav-logo-link no-underline flex items-center gap-3">
            <div className="w-12 h-12 bg-black text-gold rounded-2xl flex items-center justify-center font-black">TF</div>
            <div className="text-2xl font-black text-black tracking-tighter">ADMIN <span className="text-gold">01</span></div>
          </Link>
        </div>

        <nav className="sidebar-nav">
          <div className="text-[10px] font-black text-muted uppercase tracking-[0.4em] mb-6 ml-4">Command</div>
          <button onClick={() => {setActiveTab('overview'); setIsMobileOpen(false)}} className={`sidebar-link ${activeTab === 'overview' ? 'active' : ''}`}>
            <FiActivity className="sidebar-link-icon" /> Overview
          </button>
          <button onClick={() => {setActiveTab('students'); setIsMobileOpen(false)}} className={`sidebar-link ${activeTab === 'students' ? 'active' : ''}`}>
            <FiUsers className="sidebar-link-icon" /> Students
          </button>
          <button onClick={() => {setActiveTab('tutors'); setIsMobileOpen(false)}} className={`sidebar-link ${activeTab === 'tutors' ? 'active' : ''}`}>
            <FiBriefcase className="sidebar-link-icon" /> Faculty
          </button>
          <button onClick={() => {setActiveTab('payments'); setIsMobileOpen(false)}} className={`sidebar-link ${activeTab === 'payments' ? 'active' : ''}`}>
            <FiDollarSign className="sidebar-link-icon" /> Finance
          </button>
          <button onClick={() => {setActiveTab('settings'); setIsMobileOpen(false)}} className={`sidebar-link ${activeTab === 'settings' ? 'active' : ''}`}>
            <FiSettings className="sidebar-link-icon" /> Systems
          </button>
        </nav>

        <div className="sidebar-footer">
          <Link to="/" className="sidebar-link group">
            <FiLogOut className="sidebar-link-icon group-hover:rotate-12 transition-transform" /> Sign Out Console
          </Link>
        </div>
      </aside>

      <div className="portal-main">
        <header className="portal-topbar">
          <div className="relative w-full max-w-lg hidden md:block group">
            <FiSearch className="absolute left-8 top-1/2 -translate-y-1/2 text-muted" />
            <input 
              type="text" 
              placeholder="Search ecosystem nodes, users, or protocols..." 
              className="w-full bg-white border border-gray-100 rounded-3xl py-5 pl-16 pr-8 text-xs font-bold focus:outline-none focus:border-black transition-all shadow-sm"
            />
          </div>
          <div className="flex items-center gap-12 ml-12">
            <button className="relative w-12 h-12 flex items-center justify-center text-muted hover:text-black bg-white rounded-2xl shadow-sm hover:scale-105 transition-all">
              <FiBell size={24} />
              <span className="absolute top-2 right-2 w-2 h-2 bg-rust rounded-full animate-ping"></span>
            </button>
            <div className="flex items-center gap-6">
              <div className="text-right hidden sm:block">
                <div className="text-[10px] font-black text-muted uppercase tracking-[0.2em] mb-1">Root Access</div>
                <div className="text-lg font-black text-black tracking-tighter">G. OLAWOYIN</div>
              </div>
              <div className="w-16 h-16 rounded-[40%] bg-black flex items-center justify-center font-black text-gold border-4 border-white shadow-2xl hover:scale-105 transition-transform">
                GO
              </div>
            </div>
          </div>
        </header>

        <div className="portal-container animate-slideUp">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardPage;
