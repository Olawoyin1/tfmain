import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface StudentSidebarProps {
  children: React.ReactNode;
  activeTab?: string;
}

const StudentSidebar: React.FC<StudentSidebarProps> = ({ children }) => {
  const location = useLocation();

  const menuItems = [
    { path: '/portal', label: 'Dashboard', icon: '🏛️' },
    { path: '/portal/learning', label: 'Classroom', icon: '📚' },
    { path: '/portal/internship', label: 'Internship', icon: '💼' },
    { path: '/portal/certificates', label: 'Certificates', icon: '🎓' },
  ];

  return (
    <div className="portal-wrapper">
      {/* Student Sidebar */}
      <aside className="portal-sidebar font-syne">
        <div className="sidebar-header">
          <Link to="/" className="nav-logo-link no-underline">
            <div className="logo-box bg-gold text-black border-none font-fraunces">TF</div>
            <div className="logo-name text-white font-fraunces">Talent<span>Factory</span></div>
          </Link>
          <div className="mt-4">
            <span className="text-[9px] uppercase font-bold tracking-[0.2em] text-gold/60">Student Portal</span>
          </div>
        </div>

        <nav className="sidebar-nav">
          {menuItems.map((item) => (
            <Link 
              key={item.path}
              to={item.path}
              className={`sidebar-link ${location.pathname === item.path ? 'active' : ''}`}
            >
              <span className="sidebar-link-icon">{item.icon}</span>
              {item.label}
            </Link>
          ))}
          
          <div className="my-4 h-[1px] bg-white/10 mx-4"></div>
          
          <button className="sidebar-link opacity-60 cursor-not-allowed">
            <span className="sidebar-link-icon">⚙️</span>
            Settings
          </button>
        </nav>

        <div className="sidebar-footer">
          <Link to="/" className="sidebar-link text-white/40 hover:text-white">
            <span className="sidebar-link-icon">🚪</span>
            Sign Out
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <div className="portal-main font-syne">
        <header className="portal-topbar">
          <div className="flex items-center gap-4">
            <div className="text-right hidden sm:block">
              <div className="text-[10px] uppercase tracking-widest text-muted">Sarah Johnson</div>
              <div className="text-sm font-bold text-black">Cohort 1 Learner</div>
            </div>
            <div className="w-12 h-12 rounded-2xl bg-gold flex items-center justify-center font-bold text-black border-2 border-white/10 shadow-sm">
              SJ
            </div>
          </div>
        </header>

        <div className="portal-container">
          {children}
        </div>
      </div>
    </div>
  );
};

export default StudentSidebar;
