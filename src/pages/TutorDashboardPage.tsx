import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { 
  FiUsers, 
  FiCalendar, 
  FiPaperclip, 
  FiFolder, 
  FiBarChart2, 
  FiLogOut,
  FiCompass,
  FiActivity,
  FiArrowRight,
  FiSearch,
  FiBell,
  FiPlus,
  FiClock,
  FiBook,
  FiMenu,
  FiX
} from 'react-icons/fi';
import { type ColumnDef } from '@tanstack/react-table';
import { BaseTable } from '../components/UI/BaseTable';

interface EnrolledStudent {
  id: number;
  name: string;
  specialization: string;
  attendance: string;
  grade: string;
  status: string;
}

const TutorDashboardPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'students' | 'admissions' | 'materials'>('overview');
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const studentData = useMemo<EnrolledStudent[]>(() => [
    { id: 1, name: 'Sarah Johnson', specialization: 'Human Capital', attendance: '92%', grade: 'A', status: 'Active' },
    { id: 2, name: 'Michael Chen', specialization: 'Business Strategy', attendance: '88%', grade: 'B+', status: 'Active' },
    { id: 3, name: 'Amina Yusuf', specialization: 'Human Capital', attendance: '95%', grade: 'A', status: 'Active' },
  ], []);

  const studentColumns = useMemo<ColumnDef<EnrolledStudent>[]>(() => [
    {
      header: 'Student',
      accessorKey: 'name',
      cell: info => (
        <div className="flex items-center gap-4">
           <div className="w-10 h-10 rounded-xl bg-black text-gold flex items-center justify-center font-bold text-[10px]">{info.row.original.name[0]}</div>
           <div className="font-bold text-black">{info.row.original.name}</div>
        </div>
      ),
    },
    { header: 'Major', accessorKey: 'specialization' },
    { header: 'Presense', accessorKey: 'attendance' },
    { header: 'Grade', accessorKey: 'grade', cell: info => <span className="font-black">{info.getValue() as string}</span> },
    {
      header: 'Actions',
      cell: () => (
        <button className="text-[10px] font-black uppercase tracking-[0.2em] text-gold">Deep Dive</button>
      ),
    },
  ], []);

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-20">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
               <div className="max-w-2xl">
                 <div className="hero-tag">
                   <span className="hero-tag-dot"></span>
                   Faculty Workspace
                 </div>
                 <h1 className="mb-2">Academic Operations</h1>
                 <p className="text-xl">Manage your cohorts, evaluate performance, and curate curriculum materials.</p>
               </div>
               <div className="flex gap-4">
                  <button className="btn-primary py-5 px-10 bg-off border border-gray-100 text-black shadow-none flex items-center gap-3">
                     <FiCalendar /> Schedule
                  </button>
                  <button className="btn-primary py-5 px-10 flex items-center gap-3">
                     <FiPlus /> New Session
                  </button>
               </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {[
                 { label: 'Active Students', val: '432', icon: <FiUsers /> },
                 { label: 'Avg Attendance', val: '91.4%', icon: <FiBarChart2 /> },
                 { label: 'Submissions', val: '28', icon: <FiPaperclip /> }
               ].map((s, i) => (
                 <div key={i} className="portal-card border-none bg-white shadow-sm h-40 flex flex-col justify-between group hover:bg-black hover:text-white transition-all">
                    <div className="w-12 h-12 bg-off group-hover:bg-white/10 rounded-2xl flex items-center justify-center text-muted group-hover:text-gold transition-colors">{s.icon}</div>
                    <div>
                       <div className="text-[10px] font-black uppercase tracking-[0.3em] text-muted group-hover:text-white/40 mb-1">{s.label}</div>
                       <div className="text-3xl font-black tracking-tighter">{s.val}</div>
                    </div>
                 </div>
               ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
               <div className="lg:col-span-8 space-y-16">
                  <section>
                    <h3 className="text-2xl font-black mb-8 border-b border-gray-50 pb-6 flex items-center gap-4">
                      <span className="w-2 h-2 rounded-full bg-gold"></span>
                      Next Live Workshop
                    </h3>
                    <div className="portal-card bg-black text-white p-16 relative overflow-hidden group border-none">
                       <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-12 text-center md:text-left">
                          <div>
                             <div className="text-gold font-black text-[10px] uppercase tracking-[0.4em] mb-6 flex items-center justify-center md:justify-start gap-3"><FiClock className="animate-pulse" /> Commencing in 12m</div>
                             <h2 className="text-4xl font-black mb-4 tracking-tighter">Strategic Talent Acquisition M04</h2>
                             <div className="text-white/40 font-bold uppercase text-[11px] tracking-widest">Cohort 01 • Advanced Track</div>
                          </div>
                          <button className="btn-primary py-5 px-12 bg-gold text-black border-none shadow-gold/20">Launch Microsoft Teams</button>
                       </div>
                       <div className="absolute top-0 right-0 w-80 h-80 bg-gold/5 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
                    </div>
                  </section>

                  <section>
                    <h3 className="text-xl font-black mb-8 border-b border-gray-50 pb-6 ml-2">Recent Submissions</h3>
                    <div className="space-y-6">
                       {[
                         { user: 'Boluwatife S.', task: 'Case Study: Tech Layoffs', time: '2m ago' },
                         { user: 'Ibrahim O.', task: 'Recruitment Flowchart', time: '14m ago' },
                         { user: 'Chinelo A.', task: 'KPI Design Framework', time: '45m ago' }
                       ].map((sub, i) => (
                         <div key={i} className="portal-card py-8 px-10 border-none bg-white shadow-sm flex items-center justify-between hover:translate-x-2 transition-transform cursor-pointer group">
                            <div className="flex items-center gap-8">
                               <div className="w-12 h-12 bg-off rounded-xl flex items-center justify-center font-black text-xs group-hover:bg-black group-hover:text-gold">{sub.user[0]}</div>
                               <div>
                                  <div className="text-sm font-black text-black uppercase tracking-tight">{sub.user}</div>
                                  <div className="text-[10px] text-muted font-bold tracking-widest uppercase mt-1">{sub.task}</div>
                                </div>
                            </div>
                            <FiArrowRight className="text-muted opacity-20 group-hover:opacity-100 group-hover:text-gold transition-all" />
                         </div>
                       ))}
                    </div>
                  </section>
               </div>

               <div className="lg:col-span-4 space-y-16">
                  <section className="portal-card bg-gold text-black border-none p-12">
                     <FiActivity className="mb-8" size={32} />
                     <h3 className="text-3xl font-black tracking-tighter">Batch Pulse</h3>
                     <p className="text-sm font-bold text-black/60 mb-10 leading-relaxed">Systematic analysis indicates a 4.2% increase in peer-to-peer engagement this week.</p>
                     <div className="w-full bg-black/10 h-2 rounded-full overflow-hidden">
                        <div className="w-[82%] h-full bg-black"></div>
                     </div>
                     <div className="mt-4 flex justify-between text-[10px] font-black uppercase tracking-widest">
                        <span>Engagement</span>
                        <span>82%</span>
                     </div>
                  </section>

                  <div className="portal-card bg-off border-none p-12">
                     <h4 className="text-[10px] font-black uppercase tracking-[0.4em] mb-10 text-muted">Faculty Drive</h4>
                     <div className="space-y-6">
                        {[
                          { name: 'Unit 4 Slidedeck', icon: <FiPaperclip /> },
                          { name: 'Onboarding.pdf', icon: <FiFolder /> },
                          { name: 'Recap M03 Video', icon: <FiArrowRight /> }
                        ].map((f, i) => (
                          <div key={i} className="flex items-center gap-6 p-4 rounded-xl hover:bg-white transition-all cursor-pointer group">
                             <div className="text-muted group-hover:text-black transition-colors">{f.icon}</div>
                             <span className="text-sm font-bold tracking-tight">{f.name}</span>
                          </div>
                        ))}
                     </div>
                     <button className="w-full mt-10 py-5 bg-white border border-gray-200 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:border-black transition-all">Upload Asset</button>
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
                <h1 className="mb-2">Student Insights</h1>
                <p className="text-xl">Monitor individual performance and specialized track progress.</p>
              </div>
              <div className="flex gap-4">
                 <button className="btn-primary py-5 px-10 bg-off border border-gray-100 text-black shadow-none">Export Ledger</button>
                 <button className="btn-primary py-5 px-10">Broadcast Batch</button>
              </div>
            </div>
            <div className="overflow-x-auto">
              <BaseTable data={studentData} columns={studentColumns} pageSize={10} />
            </div>
          </div>
        );
      
      default:
        return <div>Sub-page not found.</div>;
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
            <div className="text-2xl font-black text-black tracking-tighter">FACULTY</div>
          </Link>
        </div>

        <nav className="sidebar-nav">
          <div className="text-[10px] font-black text-muted uppercase tracking-[0.4em] mb-6 ml-4">Command Center</div>
          <button onClick={() => {setActiveTab('overview'); setIsMobileOpen(false)}} className={`sidebar-link ${activeTab === 'overview' ? 'active' : ''}`}>
            <FiActivity className="sidebar-link-icon" /> Dashboard
          </button>
          <button onClick={() => {setActiveTab('students'); setIsMobileOpen(false)}} className={`sidebar-link ${activeTab === 'students' ? 'active' : ''}`}>
            <FiUsers className="sidebar-link-icon" /> My Cohort
          </button>
          <button onClick={() => {setActiveTab('admissions'); setIsMobileOpen(false)}} className={`sidebar-link ${activeTab === 'admissions' ? 'active' : ''}`}>
             <FiCompass className="sidebar-link-icon" /> Vetting
          </button>
          <button onClick={() => {setActiveTab('materials'); setIsMobileOpen(false)}} className={`sidebar-link ${activeTab === 'materials' ? 'active' : ''}`}>
            <FiBook className="sidebar-link-icon" /> Research
          </button>
        </nav>

        <div className="sidebar-footer">
          <Link to="/" className="sidebar-link group">
            <FiLogOut className="sidebar-link-icon group-hover:rotate-12 transition-transform" /> Leave Workspace
          </Link>
        </div>
      </aside>

      <div className="portal-main">
        <header className="portal-topbar">
          <div className="relative w-full max-w-lg hidden md:block group">
            <FiSearch className="absolute left-8 top-1/2 -translate-y-1/2 text-muted" />
            <input 
              type="text" 
              placeholder="Search cohort database, materials, or student IDs..." 
              className="w-full bg-white border border-gray-100 rounded-3xl py-5 pl-16 pr-8 text-xs font-bold focus:outline-none focus:border-black transition-all shadow-sm"
            />
          </div>
          <div className="flex items-center gap-12 ml-12">
            <button className="relative w-12 h-12 flex items-center justify-center text-muted hover:text-black bg-white rounded-2xl shadow-sm">
              <FiBell size={24} />
              <span className="absolute top-2 right-2 w-2 h-2 bg-rust rounded-full"></span>
            </button>
            <div className="flex items-center gap-6">
              <div className="text-right hidden sm:block">
                <div className="text-[10px] font-black text-muted uppercase tracking-[0.2em] mb-1">Active Expert</div>
                <div className="text-lg font-black text-black tracking-tighter">DR. MICHAEL</div>
              </div>
              <div className="w-16 h-16 rounded-[40%] bg-black flex items-center justify-center font-black text-gold border-4 border-white shadow-2xl hover:scale-105 transition-transform">
                MO
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

export default TutorDashboardPage;
