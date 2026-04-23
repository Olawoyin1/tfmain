import React, { useState } from 'react';
import StudentSidebar from '../components/Navigation/StudentSidebar';

const CertificateVaultPage: React.FC = () => {
  const [showLinkedInModal, setShowLinkedInModal] = useState(false);

  return (
    <StudentSidebar>
      <div className="animate-slide-up">
        <div className="mb-12">
          <div className="hero-tag mb-4">
            <span className="hero-tag-dot"></span>
            Professional Accreditation
          </div>
          <h1 className="sec-h text-5xl">Certificate <em>Vault</em></h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Academic Certificate */}
          <div className="portal-card group">
            <div className="aspect-[1.414/1] bg-black rounded-3xl mb-10 p-12 text-white relative overflow-hidden flex flex-col justify-between border-4 border-gold/10 group-hover:border-gold/30 transition-all shadow-2xl">
              <div className="relative z-10 flex justify-between items-start">
                <div className="logo-box bg-gold text-black border-none w-14 h-14 text-2xl font-fraunces shadow-lg">TF</div>
                <div className="text-[9px] uppercase tracking-[0.5em] font-extrabold opacity-40 text-right">Verification ID<br/>TF-CERT-2026-001</div>
              </div>
              
              <div className="relative z-10 text-center">
                <div className="text-[11px] uppercase tracking-[0.4em] font-extrabold text-gold mb-4 py-1 px-4 border border-gold/20 rounded-full inline-block mx-auto">Certificate of Excellence</div>
                <div className="font-fraunces text-4xl font-bold italic mb-2 tracking-tight">Sarah Johnson</div>
                <div className="w-16 h-[2px] bg-gold mx-auto mb-6"></div>
                <p className="text-[10px] opacity-60 leading-relaxed max-w-[260px] mx-auto uppercase tracking-widest font-medium">Has successfully achieved professional accreditation in Human Resource Management Specialization</p>
              </div>

              <div className="relative z-10 flex justify-between items-end border-t border-white/5 pt-6 italic">
                <div className="text-[8px] opacity-40 uppercase tracking-widest text-left font-bold">Issued April 2026<br/>Lagos, NG</div>
                <div className="text-[8px] opacity-40 uppercase tracking-widest text-right font-bold underline decoration-gold/40 underline-offset-4">Academic Registrar<br/>Verified Signature</div>
              </div>

              {/* Decorative texture */}
              <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,215,0,0.05),transparent_70%)] opacity-50"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gold/5 blur-[120px] rounded-full"></div>
            </div>

            <h3 className="text-2xl font-bold mb-2 italic">HR Professional Certificate</h3>
            <p className="text-sm text-muted mb-10 italic font-medium">Academic Completion with Honors (84%)</p>
            
            <div className="flex gap-4">
              <button className="flex-1 btn-primary py-4 text-xs font-bold uppercase tracking-widest">Download Official PDF</button>
              <button 
                onClick={() => setShowLinkedInModal(true)}
                className="px-8 py-4 rounded-xl border-2 border-blue-600 text-blue-600 font-bold text-xs uppercase tracking-widest hover:bg-blue-50 transition-all"
              >
                Share
              </button>
            </div>
          </div>

          {/* Internship Certificate */}
          <div className="portal-card group opacity-50">
            <div className="aspect-[1.414/1] bg-white rounded-3xl mb-10 p-12 text-black relative overflow-hidden flex flex-col justify-between border-2 border-dashed border-gray-200">
              <div className="absolute inset-0 flex items-center justify-center z-20 backdrop-blur-[2px]">
                <div className="bg-black/90 px-6 py-3 rounded-xl text-[10px] uppercase font-bold tracking-[0.3em] text-white shadow-2xl animate-pulse">In Progress</div>
              </div>
              <div className="opacity-10 grayscale">
                 <div className="flex justify-between">
                   <div className="logo-box bg-black text-white w-14 h-14 font-fraunces">SB</div>
                   <div className="text-[8px] uppercase tracking-widest font-bold">Residency Unit</div>
                 </div>
                 <div className="text-center mt-20">
                   <div className="h-4 w-48 bg-gray-400 mx-auto rounded mb-4"></div>
                   <div className="h-8 w-64 bg-gray-400 mx-auto rounded"></div>
                 </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold mb-2 italic">Industry practice Diploma</h3>
            <p className="text-sm text-muted mb-10 italic font-medium"> Sterling Bank Plc • Human Capital Group</p>
            
            <button disabled className="w-full py-4 rounded-xl bg-gray-50 border border-gray-100 text-gray-400 font-extrabold text-[10px] uppercase tracking-[0.2em] cursor-not-allowed">Scheduled for July 2026</button>
          </div>
        </div>
      </div>

      {/* LinkedIn Share Modal */}
      {showLinkedInModal && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-[10px] flex items-center justify-center p-6 z-[200] animate-fade-in">
          <div className="bg-white max-w-xl w-full p-16 rounded-[40px] text-center relative overflow-hidden shadow-3xl border border-white/20">
             <button onClick={() => setShowLinkedInModal(false)} className="absolute top-10 right-10 text-3xl font-light hover:rotate-90 transition-transform duration-500">×</button>
             <div className="text-4xl mb-8">🎖️</div>
             <h3 className="sec-h text-4xl mb-6">Celebrate <em>Success</em></h3>
             <p className="sec-p mb-10 mx-auto max-w-md italic opacity-60">Boost your authority. Add this verified accreditation to your LinkedIn profile and showcase your expertise to recruiters.</p>
             
             <div className="text-left bg-off p-10 rounded-3xl mb-10 border border-gray-100 italic text-sm text-black/80 leading-relaxed font-medium">
               "Extremely proud to announce my professional HR certification from Talent Factory Academy. This intensive program has refined my strategic people-ops capabilities. Looking forward to driving innovation!"
             </div>

             <div className="flex gap-4">
               <button 
                onClick={() => setShowLinkedInModal(false)}
                className="btn-primary flex-1 py-5"
               >
                 Add to LinkedIn Profile
               </button>
               <button 
                onClick={() => setShowLinkedInModal(false)}
                className="flex-1 py-5 rounded-xl border-2 border-black font-bold text-xs uppercase tracking-widest hover:bg-black hover:text-white transition-all"
               >
                 Maybe Later
               </button>
             </div>
          </div>
        </div>
      )}
    </StudentSidebar>
  );
};

export default CertificateVaultPage;
