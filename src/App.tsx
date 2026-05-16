import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


// Pages
import LandingPage from './pages/LandingPage';
import WaitlistPage from './pages/WaitlistPage';
import RoleSelectionPage from './pages/RoleSelectionPage';
import StudentInfoPage from './pages/StudentInfoPage';
import MiniRegistrationPage from './pages/MiniRegistrationPage';
import ApplicationPaymentPage from './pages/ApplicationPaymentPage';
import AdmissionTestPage from './pages/AdmissionTestPage';
import ApplicationFormPage from './pages/ApplicationFormPage';
import StudentPortalPage from './pages/StudentPortalPage';
import LearningDashboardPage from './pages/LearningDashboardPage';
import InternshipPortalPage from './pages/InternshipPortalPage';
import CertificateVaultPage from './pages/CertificateVaultPage';
import TutorDashboardPage from './pages/TutorDashboardPage';
import TutorRegistrationPage from './pages/TutorRegistrationPage';
import PartnerRegistrationPage from './pages/PartnerRegistrationPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsOfServicePage from './pages/TermsOfServicePage';

const App: React.FC = () => {
  return (
    <Router>

      <div className="font-syne bg-off text-black overflow-x-hidden">
        <Routes>
          {/* Landing */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/waitlist" element={<WaitlistPage />} />

          {/* Application flow */}
          <Route path="/apply" element={<RoleSelectionPage />} />
          <Route path="/apply/student" element={<StudentInfoPage />} />
          <Route path="/apply/register" element={<MiniRegistrationPage />} />
          <Route path="/apply/payment" element={<ApplicationPaymentPage />} />
          <Route path="/apply/test" element={<AdmissionTestPage />} />
          <Route path="/apply/form" element={<ApplicationFormPage />} />

          {/* Student portal */}
          <Route path="/portal" element={<StudentPortalPage />} />
          <Route path="/portal/learning" element={<LearningDashboardPage />} />
          <Route path="/portal/internship" element={<InternshipPortalPage />} />
          <Route path="/portal/certificates" element={<CertificateVaultPage />} />

          {/* Tutor */}
          <Route path="/apply/tutor" element={<TutorRegistrationPage />} />
          <Route path="/apply/partner" element={<PartnerRegistrationPage />} />
          <Route path="/tutor" element={<TutorDashboardPage />} />

          {/* Legal */}
          <Route path="/privacy" element={<PrivacyPolicyPage />} />
          <Route path="/terms" element={<TermsOfServicePage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
