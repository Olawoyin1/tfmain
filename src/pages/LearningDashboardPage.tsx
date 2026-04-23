import React from 'react';
import StudentSidebar from '../components/Navigation/StudentSidebar';

const LearningDashboardPage: React.FC = () => {
  const materials = [
    { id: 1, title: 'HR Fundamentals Handbook', type: 'PDF', size: '2.4 MB', date: 'Jan 22' },
    { id: 2, title: 'Talent Acquisition Strategy', type: 'XLSX', size: '1.2 MB', date: 'Jan 29' },
    { id: 3, title: 'Performance Review Template', type: 'DOCX', size: '0.8 MB', date: 'Feb 5' },
    { id: 4, title: 'Operational Excellence Guide', type: 'PDF', size: '3.1 MB', date: 'Feb 12' },
    { id: 5, title: 'Compensation & Benefits Matrix', type: 'XLSX', size: '1.5 MB', date: 'Feb 19' },
  ];

  const assignments = [
    { id: 1, title: 'HR Policy Analysis', week: 1, status: 'submitted', grade: 85 },
    { id: 2, title: 'Job Description Exercise', week: 2, status: 'submitted', grade: 92 },
    { id: 3, title: 'Performance Review Simulation', week: 3, status: 'submitted', grade: 78 },
    { id: 4, title: 'HR Process Mapping', week: 4, status: 'submitted', grade: null }
  ];

  return (
    <StudentSidebar>
      <div className="animate-slide-up">
        <div className="mb-12">
          <div className="hero-tag mb-4">
            <span className="hero-tag-dot"></span>
            Cohort 1 Learning Path
          </div>
          <h1 className="sec-h text-5xl">Resource <em>Repository</em></h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            <section>
              <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-gold"></span>
                Active Workshop
              </h3>
              <div className="portal-card bg-black text-white p-12 relative overflow-hidden">
                <div className="relative z-10">
                  <div className="text-gold font-bold text-sm mb-4 uppercase tracking-widest">Week 04 • Live Now</div>
                  <h2 className="text-4xl font-bold mb-4 italic">HR Operations & Excellence</h2>
                  <p className="text-white/60 mb-8 max-w-lg leading-relaxed italic">Mastering the administrative and operational pillars that ensure organizational stability and employee satisfaction.</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-4">
                    <div className="p-8 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm">
                      <div className="text-[10px] text-gold uppercase tracking-widest mb-2 font-bold">Zoom Classroom</div>
                      <div className="font-bold mb-4 text-white">Process Mapping Workshop</div>
                      <button className="btn-primary w-full py-4 text-xs font-bold">Join Session →</button>
                    </div>
                    <div className="p-8 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm">
                      <div className="text-[10px] text-white/40 uppercase tracking-widest mb-2 font-bold">Submission</div>
                      <div className="font-bold mb-4 text-white">Draft Operational Flowchart</div>
                      <button className="w-full py-4 rounded-xl border border-white/20 text-xs font-bold hover:bg-white/5 transition-all">Upload Task</button>
                    </div>
                  </div>
                </div>
                <div className="absolute top-0 right-0 w-1/3 h-full bg-gold/5 blur-3xl rounded-full translate-x-1/2"></div>
              </div>
            </section>

            <section>
              <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-gold"></span>
                Course Materials
              </h3>
              <div className="grid grid-cols-1 gap-4">
                {materials.map((m) => (
                  <div key={m.id} className="portal-card p-8 flex items-center justify-between group hover:border-gold transition-all">
                    <div className="flex items-center gap-6">
                      <div className="w-12 h-12 rounded-xl bg-off border border-gray-100 flex items-center justify-center text-xl shadow-sm group-hover:bg-gold/10 group-hover:border-gold/20 transition-all">
                        {m.type === 'PDF' ? '📕' : m.type === 'XLSX' ? '📊' : '📄'}
                      </div>
                      <div>
                        <h4 className="text-lg font-bold italic">{m.title}</h4>
                        <div className="flex gap-4 text-[10px] text-muted font-bold uppercase tracking-widest">
                          <span>{m.type}</span>
                          <span>•</span>
                          <span>{m.size}</span>
                        </div>
                      </div>
                    </div>
                    <button className="p-4 rounded-xl bg-off border border-gray-100 hover:bg-black hover:text-white transition-all">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                    </button>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <div className="space-y-12">
            <section>
              <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-gold"></span>
                Official Record
              </h3>
              <div className="portal-card space-y-8 p-10">
                <div className="text-center pb-8 border-b border-gray-100">
                  <div className="text-6xl font-bold text-black italic">84<span className="text-gold text-2xl not-italic">%</span></div>
                  <div className="text-[10px] uppercase font-bold text-muted tracking-widest mt-2">Overall Performance</div>
                </div>
                <div className="space-y-6">
                  {assignments.map(a => (
                    <div key={a.id} className="flex justify-between items-center text-xs">
                      <span className="text-muted truncate mr-4 font-medium italic">{a.title}</span>
                      <span className="font-bold underline decoration-gold/30 underline-offset-4">{a.grade ? `${a.grade}%` : '---'}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-gold"></span>
                Assigned Tutor
              </h3>
              <div className="portal-card p-10 bg-off/30 border-dashed">
                <div className="flex items-center gap-6 mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-white border border-gray-100 flex items-center justify-center text-3xl shadow-sm text-black">👨‍🏫</div>
                  <div>
                    <h4 className="font-bold text-lg italic">Dr. M. Okonkwo</h4>
                    <p className="text-[10px] text-muted font-bold uppercase tracking-widest">Master Instructor</p>
                  </div>
                </div>
                <button className="w-full py-4 rounded-xl bg-black text-white text-xs font-bold hover:bg-gold hover:text-black transition-all uppercase tracking-widest">Send Message →</button>
              </div>
            </section>
          </div>
        </div>
      </div>
    </StudentSidebar>
  );
};


export default LearningDashboardPage;
