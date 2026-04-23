import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface TestAnswer {
  question: number;
  answer: string | number;
}

const AdmissionTestPage: React.FC = () => {
  const [currentSection, setCurrentSection] = useState<'A' | 'B' | 'C'>('A');
  const [answers, setAnswers] = useState<TestAnswer[]>([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30 * 60);

  // Timer logic
  React.useEffect(() => {
    if (timeLeft > 0 && !isSubmitted) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [timeLeft, isSubmitted]);

  const questions = {
    A: [
      {
        id: 1,
        question: "Typically, what is the first formal stage in the standard recruitment lifecycle?",
        options: [
          "Candidate Interviewing",
          "Job Analysis & Requisition",
          "Onboarding & Induction",
          "Reference Checking"
        ]
      },
      {
        id: 2,
        question: "According to the Nigerian Labour Act, what is the minimum statutory annual leave for an employee after 12 months of continuous service?",
        options: [
          "3 Working Days",
          "6 Working Days",
          "12 Working Days",
          "21 Working Days"
        ]
      },
      {
        id: 3,
        question: "Which HR metric is specifically designed to measure the likelihood of employees recommending their organization as a great place to work?",
        options: [
          "Turnover Rate",
          "Cost Per Hire",
          "eNPS (Employee Net Promoter Score)",
          "Revenue Per Employee"
        ]
      },
      {
        id: 4,
        question: "In performance management, what does a '360-degree feedback' system entail?",
        options: [
          "Feedback from the manager only",
          "A review conducted every 360 days",
          "Anonymized feedback from peers, subordinates, and supervisors",
          "A physical health assessment for employees"
        ]
      }
    ],
    B: [
      {
        id: 5,
        question: "You discover an employee has accidentally shared sensitive payroll data with the team. What is your immediate priority as an HR officer?",
        options: [
          "Immediately terminate the employee",
          "Ignore it if no one complains",
          "Contain the breach, secure the data, and report to management",
          "Post the data on the notice board for transparency"
        ]
      }
    ],
    C: [
      {
        id: 6,
        question: "In 2-3 sentences, explain why HR is shifting from a 'Support Function' to a 'Strategic Business Partner' in the modern Nigerian corporate space.",
        type: "essay" as const
      }
    ]
  };

  const handleAnswer = (questionId: number, answer: string | number) => {
    setAnswers(prev => {
      const filtered = prev.filter(a => a.question !== questionId);
      return [...filtered, { question: questionId, answer }];
    });
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 3000));
    setIsSubmitted(true);
    setIsSubmitting(false);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center p-6 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]">
        <div className="bg-white p-20 rounded-[60px] text-center max-w-2xl w-full relative overflow-hidden border-8 border-gold/10">
          <div className="text-8xl mb-10">🏛️</div>
          <h2 className="sec-h text-5xl mb-6 italic leading-tight">Assessment <em>Archived</em>.</h2>
          <p className="sec-p mx-auto mb-12 text-black/60 italic font-medium leading-relaxed text-lg">
            Your evaluation data is now being cross-referenced with your application rubric. An admissions decision (Offer, Waitlist, or Deferral) will be issued within 5 business days.
          </p>
          <div className="flex gap-6 justify-center">
             <Link to="/" className="btn-primary py-5 px-16 text-xs uppercase tracking-widest font-extrabold shadow-2xl shadow-gold/30">Close Terminal →</Link>
          </div>
          <div className="absolute top-0 right-0 w-48 h-48 bg-gold/5 blur-[100px] rounded-full"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-off overflow-x-hidden">
      {/* Proctoring Bar */}
      <div className="fixed top-0 left-0 w-full h-1.5 bg-gray-100 z-[100]">
        <div className="h-full bg-red-500 animate-pulse" style={{ width: '100%' }}></div>
      </div>

      <nav className="nav-fixed px-12 h-24 flex items-center justify-between border-b border-gray-100/50 bg-white/80 backdrop-blur-md">
        <div className="flex items-center gap-12">
          <div className="flex items-center gap-3">
             <div className="w-10 h-10 rounded-xl bg-gold text-black flex items-center justify-center font-bold font-fraunces shadow-sm">TF</div>
             <div className="text-[10px] font-extrabold uppercase tracking-[0.2em] italic">Pre-Admission <br/> Assessment</div>
          </div>
          <div className="w-[1px] h-10 bg-gray-100 hidden md:block"></div>
          <div className="hidden md:flex gap-6">
            {(['A', 'B', 'C'] as const).map(s => (
               <div key={s} className={`flex items-center gap-3 transition-opacity ${currentSection === s ? 'opacity-100' : 'opacity-20'}`}>
                 <span className="text-[10px] font-bold uppercase tracking-widest">{s === 'A' ? 'Knowledge' : s === 'B' ? 'Judgement' : 'Thinking'}</span>
               </div>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-10">
          <div className="text-right">
            <div className="text-[9px] uppercase font-bold tracking-[0.3em] text-red-500 mb-1 animate-pulse">Session Time</div>
            <div className={`text-3xl font-bold italic leading-none font-fraunces ${timeLeft < 300 ? 'text-red-600' : 'text-black'}`}>{formatTime(timeLeft)}</div>
          </div>
          <button 
            onClick={handleSubmit} 
            disabled={isSubmitting}
            className="w-12 h-12 rounded-2xl bg-black text-white flex items-center justify-center hover:bg-gold hover:text-black transition-all shadow-xl"
          >
            {isSubmitting ? '...' : '✓'}
          </button>
        </div>
      </nav>

      <div className="pt-48 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-20 text-center">
            <div className="hero-tag mb-4 shadow-sm inline-flex items-center">
              <span className="hero-tag-dot bg-red-500 animate-ping"></span>
              Secure Proctor Active
            </div>
            <h1 className="sec-h text-6xl italic leading-tight">Section {currentSection}: <em>{currentSection === 'A' ? 'Theoretical Knowledge' : currentSection === 'B' ? 'Situational Judgement' : 'Critical Thesis'}</em></h1>
            <p className="text-xs text-muted font-bold uppercase tracking-[0.3em] mt-4 italic opacity-40">Section Weight: {currentSection === 'A' ? '20' : currentSection === 'B' ? '20' : '10'} Points</p>
          </div>

          <div className="space-y-16">
            {questions[currentSection].map((q, idx) => (
              <div key={q.id} className="relative group">
                <div className="absolute -left-16 top-0 text-5xl font-fraunces opacity-5 italic text-black transition-opacity group-hover:opacity-10">{idx + 1}</div>
                <div className="bg-white p-12 md:p-16 rounded-[50px] shadow-3xl border border-gray-50 hover:border-gold/20 transition-all">
                  <p className="text-2xl font-bold mb-12 italic leading-relaxed text-black">
                    {q.question}
                  </p>

                  {'type' in q && q.type === 'essay' ? (
                    <div className="space-y-6">
                       <textarea 
                        className="w-full bg-off border border-gray-100 rounded-[32px] p-8 text-sm focus:ring-2 focus:ring-gold/20 outline-none transition-all min-h-[300px] font-medium leading-relaxed italic" 
                        placeholder="Construct your practitioner-led response here..."
                        onChange={(e) => handleAnswer(q.id, e.target.value)}
                      />
                      <div className="flex justify-between items-center px-4">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-muted italic">No word limit. Prioritise clarity over volume.</span>
                      </div>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {q.options?.map((opt, i) => {
                        const isSelected = answers.find(a => a.question === q.id)?.answer === opt;
                        return (
                          <button
                            key={i}
                            onClick={() => handleAnswer(q.id, opt)}
                            className={`p-6 rounded-3xl border-2 text-left transition-all flex items-center gap-4 ${isSelected ? 'border-gold bg-gold-pale shadow-lg shadow-gold/10' : 'border-gray-50 bg-off hover:border-black/10'}`}
                          >
                            <span className={`w-8 h-8 rounded-xl flex items-center justify-center text-[10px] font-bold ${isSelected ? 'bg-gold text-black' : 'bg-white border border-gray-100 text-muted'}`}>
                              {String.fromCharCode(65 + i)}
                            </span>
                            <span className="text-sm font-bold italic text-black/80">{opt}</span>
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-between items-center mt-24 pt-12 border-t border-gray-100">
            <div className="flex gap-4">
              {(['A', 'B', 'C'] as const).map(s => (
                <button 
                  key={s}
                  onClick={() => setCurrentSection(s)}
                  className={`w-14 h-14 rounded-2xl font-bold transition-all text-xs border ${currentSection === s ? 'bg-black text-white border-black shadow-xl shadow-black/20' : 'bg-white border-gray-100 text-muted hover:border-black/20'}`}
                >
                  {s}
                </button>
              ))}
            </div>
            
            <div className="flex gap-4">
              {currentSection !== 'C' ? (
                <button 
                  onClick={() => setCurrentSection(currentSection === 'A' ? 'B' : 'C')}
                  className="px-12 py-5 rounded-2xl bg-black text-white text-[10px] font-extrabold uppercase tracking-[0.2em] hover:bg-gold hover:text-black transition-all shadow-xl shadow-black/10"
                >
                  Proceed to Section {currentSection === 'A' ? 'B' : 'C'} →
                </button>
              ) : (
                <button 
                  onClick={handleSubmit} 
                  className="px-12 py-5 rounded-2xl bg-gold text-black text-[10px] font-extrabold uppercase tracking-[0.2em] hover:scale-[1.05] active:scale-95 transition-all shadow-xl shadow-gold/20"
                >
                  Finalise Assessment Centre →
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default AdmissionTestPage;

