import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import pages
import LandingPage from './pages/LandingPage';
import WaitlistPage from './pages/WaitlistPage';
import ApplicationPaymentPage from './pages/ApplicationPaymentPage';
import ApplicationFormPage from './pages/ApplicationFormPage';
import AdmissionTestPage from './pages/AdmissionTestPage';
import StudentPortalPage from './pages/StudentPortalPage';
import LearningDashboardPage from './pages/LearningDashboardPage';
import InternshipPortalPage from './pages/InternshipPortalPage';
import CertificateVaultPage from './pages/CertificateVaultPage';
import TutorDashboardPage from './pages/TutorDashboardPage';

const App: React.FC = () => {
  return (
    <Router>
      <div className="font-syne bg-off text-black overflow-x-hidden">
        <Routes>
          {/* Landing Page Route */}
          <Route path="/" element={<LandingPage />} />
          
          {/* Application Flow Routes */}
          <Route path="/waitlist" element={<WaitlistPage />} />
          <Route path="/apply/payment" element={<ApplicationPaymentPage />} />
          <Route path="/apply/form" element={<ApplicationFormPage />} />
          <Route path="/apply/test" element={<AdmissionTestPage />} />
          
          {/* Student Portal Routes */}
          <Route path="/portal" element={<StudentPortalPage />} />
          <Route path="/portal/learning" element={<LearningDashboardPage />} />
          <Route path="/portal/internship" element={<InternshipPortalPage />} />
          <Route path="/portal/certificates" element={<CertificateVaultPage />} />

          {/* Tutor Dashboard Routes */}
          <Route path="/tutor" element={<TutorDashboardPage />} />
        </Routes>
      </div>
    </Router>
  );
};


export default App;

