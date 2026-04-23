import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const TutorDashboardPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'cohorts' | 'students' | 'applications' | 'materials'>('overview');

  const stats = [
    { label: 'Total Students', value: '128', icon: '👥' },
    { label: 'Upcoming Sessions', value: '4', icon: '📅' },
    { label: 'Materials Shared', value: '24', icon: '📎' },
    { label: 'Active Cohorts', value: '2', icon: '🚀' }
  ];

  const upcomingSessions = [
    { id: 1, title: 'Advanced Talent Acquisition', cohort: 'Cohort 1', time: 'Today, 7:00 PM', type: 'Live Workshop' },
    { id: 2, title: 'Strategic HR Frameworks', cohort: 'Cohort 2', time: 'Tomorrow, 6:00 PM', type: 'Lecture' }
  ];

  const cohorts = [
    { id: 1, name: 'Cohort 1', students: 64, status: 'Active', start: 'Jan 2026', end: 'April 2026' },
    { id: 2, name: 'Cohort 2', students: 64, status: 'Onboarding', start: 'April 2026', end: 'July 2026' },
    { id: 3, name: 'Cohort 0 (Alpha)', students: 32, status: 'Completed', start: 'Sept 2025', end: 'Dec 2025' }
  ];

  const applications = [
    { id: 1, name: 'Michael Chen', role: 'HR Generalist', experience: '4 Years', status: 'Pending Review', date: '2 hours ago' },
    { id: 2, name: 'Amina Yusuf', role: 'Admin Officer', experience: '2 Years', status: 'Payment Verified', date: '5 hours ago' },
    { id: 3, name: 'Robert Smith', role: 'People Ops', experience: '6 Years', status: 'In Review', date: '1 day ago' }
  ];

  const materials = [
    { id: 1, title: 'Talent Acquisition Handbook', size: '2.4 MB', date: 'Feb 10, 2026', type: 'PDF' },
    { id: 2, title: 'HR Process Mapping Template', size: '1.2 MB', date: 'Feb 12, 2026', type: 'XLSX' },
    { id: 3, title: 'Strategic People Ops Slides', size: '8.5 MB', date: 'Feb 15, 2026', type: 'PPTX' }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="animate-slide-up">
            <div className="mb-12">
              <div className="hero-tag mb-4">
                <span className="hero-tag-dot"></span>
                Faculty Command Center
              </div>
              <h1 className="sec-h text-5xl">Welcome Back, <em>Professor.</em></h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {stats.map((stat, i) => (
                <div key={i} className="portal-card p-8 flex items-center gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-off border border-gray-100 flex items-center justify-center text-2xl shadow-sm">
                    {stat.icon}
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-black italic leading-none mb-1">{stat.value}</div>
                    <div className="text-[10px] uppercase font-bold text-muted tracking-widest">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2 space-y-12">
                <section>
                  <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-gold"></span>
                    Upcoming Sessions
                  </h3>
                  <div className="space-y-4">
                    {upcomingSessions.map(session => (
                      <div key={session.id} className="portal-card p-8 flex justify-between items-center group hover:border-gold transition-all cursor-pointer">
                        <div className="flex items-center gap-8">
                          <div className="text-center min-w-[80px] pr-8 border-r border-gray-100">
                            <div className="text-xs font-bold text-muted uppercase tracking-tighter mb-1">Status</div>
                            <div className="text-xs font-bold text-gold">Ready</div>
                          </div>
                          <div>
                            <div className="text-[10px] font-bold text-muted uppercase tracking-widest mb-1">{session.cohort} • {session.type}</div>
                            <h4 className="text-xl font-bold mb-1">{session.title}</h4>
                            <div className="text-xs text-muted flex items-center gap-2">
                               <span className="w-1.5 h-1.5 rounded-full bg-gray-300"></span>
                               {session.time}
                            </div>
                          </div>
                        </div>
                        <button className="btn-primary py-3 px-8 text-xs">Launch Studio →</button>
                      </div>
                    ))}
                  </div>
                </section>

                <section>
                  <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-gold"></span>
                    Student Progress Highlight
                  </h3>
                  <div className="portal-card p-0 overflow-hidden">
                    <table className="w-full text-left">
                      <thead className="bg-off border-b border-gray-100">
                        <tr>
                          <th className="px-8 py-4 text-[10px] font-bold uppercase tracking-widest text-muted">Student</th>
                          <th className="px-8 py-4 text-[10px] font-bold uppercase tracking-widest text-muted">Attendance</th>
                          <th className="px-8 py-4 text-[10px] font-bold uppercase tracking-widest text-muted">Current Grade</th>
                          <th className="px-8 py-4 text-[10px] font-bold uppercase tracking-widest text-muted text-right">Action</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100 italic">
                        {[
                          { name: 'Sarah Johnson', attendance: '100%', grade: '84%', avatar: 'SJ' },
                          { name: 'John Doe', attendance: '92%', grade: '76%', avatar: 'JD' },
                          { name: 'Emily Davis', attendance: '85%', grade: '89%', avatar: 'ED' }
                        ].map((student, i) => (
                           <tr key={i} className="hover:bg-off/50 transition-colors">
                            <td className="px-8 py-6">
                              <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-lg bg-black text-white text-[10px] font-bold flex items-center justify-center not-italic">{student.avatar}</div>
                                <span className="font-bold text-sm text-black not-italic">{student.name}</span>
                              </div>
                            </td>
                            <td className="px-8 py-6 text-sm font-bold text-black not-italic">{student.attendance}</td>
                            <td className="px-8 py-6 text-sm font-bold text-gold not-italic">{student.grade}</td>
                            <td className="px-8 py-6 text-right">
                              <button className="text-[10px] font-bold uppercase tracking-widest text-muted hover:text-gold transition-all">View Analytics</button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </section>
              </div>

              <div className="space-y-12">
                <section>
                  <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-gold"></span>
                    Admin Notices
                  </h3>
                  <div className="portal-card bg-black text-white p-8">
                    <div className="space-y-8">
                      <div>
                        <div className="text-[10px] font-bold text-gold uppercase tracking-widest mb-2">Notice • High Priority</div>
                        <p className="text-sm font-medium leading-relaxed mb-4">Grading deadline for Module 3 is this Friday at 11:59PM.</p>
                        <button className="text-[10px] font-bold text-gold underline underline-offset-8">Open Panel</button>
                      </div>
                      <div className="w-full h-[1px] bg-white/10"></div>
                      <div>
                        <div className="text-[10px] font-bold text-white/40 uppercase tracking-widest mb-2">Internal Memo</div>
                        <p className="text-xs text-white/60 leading-relaxed">Cohort 3 review meeting next Monday at 10:00 AM.</p>
                      </div>
                    </div>
                  </div>
                </section>
                <section>
                  <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-gold"></span>
                    Support
                  </h3>
                  <div className="portal-card">
                    <p className="text-xs text-muted mb-6">Need assistance with student coordination?</p>
                    <button className="w-full py-4 rounded-xl border border-black font-bold text-xs hover:bg-black hover:text-white transition-all">Contact Operations</button>
                  </div>
                </section>
              </div>
            </div>
          </div>
        );

      case 'cohorts':
        return (
          <div className="animate-slide-up">
            <div className="mb-12">
              <h2 className="sec-h text-4xl mb-4">Cohort <em>Management</em></h2>
              <p className="text-muted max-w-xl">Oversee active, upcoming, and archived student groups. Manage curriculum delivery and session scheduling for each cohort.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {cohorts.map(cohort => (
                <div key={cohort.id} className="portal-card p-10 group hover:border-gold transition-all">
                  <div className="flex justify-between items-start mb-8">
                    <div className={`px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest ${
                      cohort.status === 'Active' ? 'bg-gold/10 text-gold border border-gold/20' : 
                      cohort.status === 'Onboarding' ? 'bg-black text-white' : 
                      'bg-gray-100 text-muted'
                    }`}>
                      {cohort.status}
                    </div>
                    <div className="text-[10px] font-bold text-muted">{cohort.start} — {cohort.end}</div>
                  </div>
                  <h3 className="text-3xl font-bold mb-2 italic">0{cohort.id}</h3>
                  <h4 className="text-xl font-bold mb-6">{cohort.name}</h4>
                  
                  <div className="space-y-4 mb-10">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-muted">Total Students</span>
                      <span className="font-bold">{cohort.students}</span>
                    </div>
                    <div className="w-full h-[1px] bg-gray-100"></div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-muted">Avg. Attendance</span>
                      <span className="font-bold">94%</span>
                    </div>
                  </div>
                  
                  <button className="w-full py-4 bg-black text-white rounded-xl font-bold text-xs hover:bg-gold hover:text-black transition-all">Manage Cohort →</button>
                </div>
              ))}
              
              <button className="portal-card border-dashed p-10 flex flex-col items-center justify-center gap-4 text-muted hover:text-gold hover:border-gold transition-all min-h-[350px]">
                <div className="text-4xl">+</div>
                <div className="text-[10px] font-bold uppercase tracking-widest">Create New Cohort</div>
              </button>
            </div>
          </div>
        );

      case 'students':
        return (
          <div className="animate-slide-up">
            <div className="flex justify-between items-end mb-12">
              <div>
                <h2 className="sec-h text-4xl mb-4">Student <em>Database</em></h2>
                <p className="text-muted">Directory of all students across all cohorts. Track progress, attendance, and academic standing.</p>
              </div>
              <div className="flex gap-4">
                <input type="text" placeholder="Search students..." className="input-field max-w-xs py-3 text-xs" />
                <button className="btn-primary py-3 px-8 text-xs">Export CSV</button>
              </div>
            </div>
            
            <div className="portal-card p-0 overflow-hidden">
              <table className="w-full text-left">
                <thead className="bg-off border-b border-gray-100">
                  <tr>
                    <th className="px-8 py-5 text-[10px] font-bold uppercase tracking-widest text-muted">Name</th>
                    <th className="px-8 py-5 text-[10px] font-bold uppercase tracking-widest text-muted">Cohort</th>
                    <th className="px-8 py-5 text-[10px] font-bold uppercase tracking-widest text-muted">Status</th>
                    <th className="px-8 py-5 text-[10px] font-bold uppercase tracking-widest text-muted">Email</th>
                    <th className="px-8 py-5 text-[10px] font-bold uppercase tracking-widest text-muted text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 italic">
                  {[
                    { name: 'Sarah Johnson', cohort: 'Cohort 1', status: 'Enrolled', email: 'sarah.j@example.com' },
                    { name: 'Michael Chen', cohort: 'Cohort 2', status: 'Onboarding', email: 'm.chen@example.com' },
                    { name: 'Amina Yusuf', cohort: 'Cohort 1', status: 'Enrolled', email: 'amina@example.com' },
                    { name: 'Robert Smith', cohort: 'Cohort 1', status: 'Suspended', email: 'rob.s@example.com' },
                    { name: 'Lisa Wang', cohort: 'Cohort 2', status: 'Pending', email: 'lisa.w@example.com' }
                  ].map((student, i) => (
                    <tr key={i} className="hover:bg-off/50 transition-colors">
                      <td className="px-8 py-6 font-bold text-black not-italic">{student.name}</td>
                      <td className="px-8 py-6 text-sm text-muted not-italic">{student.cohort}</td>
                      <td className="px-8 py-6 not-italic">
                        <span className={`px-3 py-1 rounded-full text-[10px] font-bold ${
                          student.status === 'Enrolled' ? 'bg-green-100 text-green-700' : 
                          student.status === 'Onboarding' ? 'bg-gold-pale text-gold' :
                          student.status === 'Suspended' ? 'bg-red-50 text-red-600' :
                          'bg-gray-100 text-muted'
                        }`}>
                          {student.status}
                        </span>
                      </td>
                      <td className="px-8 py-6 text-sm text-muted not-italic">{student.email}</td>
                      <td className="px-8 py-6 text-right">
                        <button className="text-[10px] font-bold uppercase tracking-widest text-muted hover:text-black transition-all">Details →</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );

      case 'materials':
        return (
          <div className="animate-slide-up">
            <div className="flex justify-between items-end mb-12">
              <div>
                <h2 className="sec-h text-4xl mb-4">Material <em>Repository</em></h2>
                <p className="text-muted">Upload and manage downloadable resources for your students. These will be accessible on their respective dashboards.</p>
              </div>
              <button className="btn-primary py-4 px-10 text-xs font-bold uppercase tracking-widest">Upload New File →</button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {materials.map(file => (
                <div key={file.id} className="portal-card p-10 group hover:border-gold transition-all relative overflow-hidden">
                  <div className="text-[8px] font-extrabold text-gold uppercase tracking-[0.3em] mb-4 py-1 px-3 border border-gold/20 rounded-full inline-block">{file.type} Material</div>
                  <h4 className="text-2xl font-bold mb-2 italic">{file.title}</h4>
                  <div className="flex items-center gap-4 text-[10px] text-muted font-bold uppercase tracking-widest mb-10">
                    <span>{file.size}</span>
                    <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                    <span>Uploaded {file.date}</span>
                  </div>
                  
                  <div className="flex gap-3">
                    <button className="flex-1 py-4 bg-off border border-gray-100 text-black rounded-xl font-bold text-xs hover:bg-black hover:text-white transition-all">Download View</button>
                    <button className="w-14 h-14 bg-red-50 text-red-600 rounded-xl font-bold flex items-center justify-center hover:bg-red-600 hover:text-white transition-all" title="Delete Material">🗑️</button>
                  </div>

                  <div className="absolute top-0 right-0 w-24 h-24 bg-gold/5 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2"></div>
                </div>
              ))}
              
              <div className="portal-card border-dashed p-10 flex flex-col items-center justify-center gap-6 text-muted hover:text-gold hover:border-gold transition-all min-h-[250px] cursor-pointer">
                <div className="w-16 h-16 rounded-3xl bg-off border border-gray-100 flex items-center justify-center text-3xl">📁</div>
                <div className="text-center">
                  <div className="text-xs font-extrabold uppercase tracking-widest mb-1 text-black">Drag & Drop</div>
                  <div className="text-[10px] font-medium leading-relaxed">Limit 50MB per file. PDF, PPTX, XLS preferred.</div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'applications':
        return (
          <div className="animate-slide-up">
            <div className="mb-12">
              <h2 className="sec-h text-4xl mb-4">Admissions <em>Portal</em></h2>
              <p className="text-muted">Review incoming student applications, interview notes, and assessment results for future cohorts.</p>
            </div>
            
            <div className="space-y-6">
              {applications.map(app => (
                <div key={app.id} className="portal-card p-10 flex flex-col md:flex-row justify-between items-center gap-8 group hover:border-gold transition-all">
                  <div className="flex items-center gap-10 flex-1">
                    <div className="w-16 h-16 rounded-2xl bg-off border border-gray-100 flex items-center justify-center text-xl font-bold shadow-sm">
                      {app.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-gold uppercase tracking-widest mb-1">{app.date}</div>
                      <h4 className="text-2xl font-bold mb-1">{app.name}</h4>
                      <div className="flex gap-6 text-xs text-muted font-medium italic">
                        <span>{app.role}</span>
                        <span>•</span>
                        <span>{app.experience} EXP</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-12 w-full md:w-auto">
                    <div className="text-center md:text-left min-w-[140px]">
                      <div className="text-[10px] font-bold text-muted uppercase tracking-widest mb-1">Status</div>
                      <div className="text-sm font-bold text-black italic">{app.status}</div>
                    </div>
                    <div className="flex gap-3">
                      <button className="px-8 py-4 bg-off border border-gray-200 rounded-xl font-bold text-xs hover:border-black transition-all">Reject</button>
                      <button className="px-8 py-4 bg-black text-white rounded-xl font-bold text-xs hover:bg-gold hover:text-black transition-all">Start Review →</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
    }
  };

  return (
    <div className="portal-wrapper">
      {/* Sidebar Navigation */}
      <aside className="portal-sidebar font-syne">
        <div className="sidebar-header">
          <Link to="/" className="nav-logo-link no-underline">
            <div className="logo-box bg-gold text-black border-none font-fraunces">TF</div>
            <div className="logo-name text-white font-fraunces">Talent<span>Factory</span></div>
          </Link>
          <div className="mt-4">
            <span className="text-[9px] uppercase font-bold tracking-[0.2em] text-gold/60">Faculty Dashboard</span>
          </div>
        </div>

        <nav className="sidebar-nav">
          <button 
            onClick={() => setActiveTab('overview')}
            className={`sidebar-link ${activeTab === 'overview' ? 'active' : ''}`}
          >
            <span className="sidebar-link-icon">📊</span>
            Overview
          </button>
          <button 
            onClick={() => setActiveTab('cohorts')}
            className={`sidebar-link ${activeTab === 'cohorts' ? 'active' : ''}`}
          >
            <span className="sidebar-link-icon">🛰️</span>
            Cohorts
          </button>
          <button 
            onClick={() => setActiveTab('students')}
            className={`sidebar-link ${activeTab === 'students' ? 'active' : ''}`}
          >
            <span className="sidebar-link-icon">👥</span>
            Students
          </button>
          <button 
            onClick={() => setActiveTab('materials')}
            className={`sidebar-link ${activeTab === 'materials' ? 'active' : ''}`}
          >
            <span className="sidebar-link-icon">📎</span>
            Materials
          </button>
          <button 
            onClick={() => setActiveTab('applications')}
            className={`sidebar-link ${activeTab === 'applications' ? 'active' : ''}`}
          >
            <span className="sidebar-link-icon">📩</span>
            Applications
          </button>
        </nav>

        <div className="sidebar-footer">
          <Link to="/" className="sidebar-link text-white/40 hover:text-white">
            <span className="sidebar-link-icon">🚪</span>
            Logout
          </Link>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="portal-main font-syne">
        <header className="portal-topbar">
          <div className="flex items-center gap-4">
            <div className="text-right hidden sm:block">
              <div className="text-[10px] font-bold text-muted uppercase tracking-widest">Faculty Member</div>
              <div className="text-sm font-bold text-black">Dr. Michael Okonkwo</div>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-gold flex items-center justify-center font-bold text-black border-2 border-white/10 shadow-sm">
              MO
            </div>
          </div>
        </header>

        <div className="portal-container">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};



export default TutorDashboardPage;

