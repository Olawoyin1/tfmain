import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  FiBook, 
  FiBriefcase, 
  FiAward, 
  FiLogOut,
  FiUser,
  FiCreditCard,
  FiCalendar,
  FiActivity,
  FiMenu,
  FiX
} from 'react-icons/fi';

interface StudentSidebarProps {
  children: React.ReactNode;
}

const StudentSidebar: React.FC<StudentSidebarProps> = ({ children }) => {
  const location = useLocation();
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const menuItems = [
    { path: '/portal', label: 'Overview', icon: <FiActivity size={18} />, isActive: location.pathname === '/portal' },
    { path: '/portal/profile', label: 'My Profile', icon: <FiUser size={18} />, isActive: location.pathname === '/portal/profile' },
    { path: '/portal/finance', label: 'Finance', icon: <FiCreditCard size={18} />, isActive: location.pathname === '/portal/finance' },
    { path: '/portal/schedule', label: 'Schedule', icon: <FiCalendar size={18} />, isActive: location.pathname === '/portal/schedule' },
  ];

  const secondaryItems = [
    { path: '/portal/learning', label: 'Classroom', icon: <FiBook size={18} /> },
    { path: '/portal/internship', label: 'Internship', icon: <FiBriefcase size={18} /> },
    { path: '/portal/certificates', label: 'Certificates', icon: <FiAward size={18} /> },
  ];

  return (
    <div className="portal-wrapper">
      <button className="mobile-toggle" onClick={() => setIsMobileOpen(!isMobileOpen)}>
        {isMobileOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>

      {/* Overlay for mobile */}
      {isMobileOpen && (
        <div 
          className="fixed inset-0 bg-black/40 z-[95] lg:hidden backdrop-blur-sm"
          onClick={() => setIsMobileOpen(false)}
        ></div>
      )}

      {/* Student Sidebar */}
      <aside className={`portal-sidebar shadow-sm ${isMobileOpen ? 'mobile-open' : ''}`}>
        <div className="sidebar-header">
          <Link to="/" className="nav-logo-link no-underline flex items-center gap-3">
            <div className="w-10 h-10 bg-black text-gold rounded-xl flex items-center justify-center font-black">TF</div>
            <div className="text-xl font-black text-black">TF <span className="text-gold">Main</span></div>
          </Link>
        </div>

        <nav className="sidebar-nav">
          <div className="text-[10px] font-black text-muted uppercase tracking-[0.2em] mb-4 ml-4">Workspace</div>
          {menuItems.map((item) => (
            <Link 
              key={item.path}
              to={item.path}
              className={`sidebar-link ${item.isActive ? 'active' : ''}`}
              onClick={() => setIsMobileOpen(false)}
            >
              <span className="sidebar-link-icon">{item.icon}</span>
              {item.label}
            </Link>
          ))}
          
          <div className="mt-12 text-[10px] font-black text-muted uppercase tracking-[0.2em] mb-4 ml-4">Learning</div>
          {secondaryItems.map((item) => (
            <Link 
              key={item.path}
              to={item.path}
              className={`sidebar-link ${location.pathname === item.path ? 'active' : ''}`}
              onClick={() => setIsMobileOpen(false)}
            >
              <span className="sidebar-link-icon">{item.icon}</span>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="sidebar-footer">
          <Link to="/" className="sidebar-link group">
            <span className="sidebar-link-icon group-hover:rotate-12 transition-transform"><FiLogOut size={18} /></span>
            Sign Out
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <div className="portal-main">
        <header className="portal-topbar">
          <div className="flex items-center gap-6">
            <div className="text-right hidden sm:block">
              <div className="text-[10px] uppercase font-black tracking-widest text-muted">Active Student</div>
              <div className="text-sm font-black text-black uppercase">Sarah Johnson</div>
            </div>
            <div className="w-14 h-14 rounded-2xl bg-black flex items-center justify-center font-bold text-gold border-4 border-white shadow-xl hover:scale-105 transition-transform cursor-pointer">
              SJ
            </div>
          </div>
        </header>

        <div className="portal-container animate-slideUp">
          {children}
        </div>
      </div>
    </div>
  );
};

export default StudentSidebar;
