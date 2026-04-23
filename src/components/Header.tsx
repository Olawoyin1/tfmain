import React from 'react';
import { useAppSelector, useAppDispatch } from '../store';
import { toggleTheme, toggleSidebar } from '../store/slices/uiSlice';

const Header: React.FC = () => {
  const { theme, sidebarOpen } = useAppSelector((state) => state.ui);
  const dispatch = useAppDispatch();

  const handleThemeToggle = () => {
    dispatch(toggleTheme());
  };

  const handleSidebarToggle = () => {
    dispatch(toggleSidebar());
  };

  return (
    <header className={`header header-${theme}`}>
      <div className="header-content">
        <button 
          className="menu-toggle"
          onClick={handleSidebarToggle}
          aria-label="Toggle sidebar"
        >
          {sidebarOpen ? '✕' : '☰'}
        </button>
        
        <h1 className="app-title">React Redux App</h1>
        
        <div className="header-actions">
          <button 
            className="theme-toggle"
            onClick={handleThemeToggle}
            aria-label="Toggle theme"
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
