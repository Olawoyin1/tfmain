import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ApplicationPaymentPage: React.FC = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [isPaid, setIsPaid] = useState(false);

  const handlePayment = async () => {
    setIsProcessing(true);
    // Simulate Paystack Overlay
    await new Promise(resolve => setTimeout(resolve, 2500));
    setIsPaid(true);
    setIsProcessing(false);
  };

  if (isPaid) {
    return (
      <div className="min-h-screen bg-off flex items-center justify-center p-6 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]">
        <div className="bg-white/80 backdrop-blur-xl p-16 rounded-[40px] shadow-3xl text-center max-w-xl w-full border border-white relative overflow-hidden">
          <div className="text-6xl mb-8 animate-bounce">🛡️</div>
          <h2 className="sec-h text-4xl mb-4 italic">Verification <em>Stored</em></h2>
          <p className="sec-p mx-auto mb-10 text-black/60 italic font-medium leading-relaxed">
            Your ₦10,000 application fee has been confirmed. You've officially unlocked the next stage of your professional journey at Talent Factory.
          </p>
          <Link 
            to="/apply/form"
            className="btn-primary w-full py-5 block text-center"
          >
            Enter Application Portal →
          </Link>
          <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 blur-3xl rounded-full"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-off overflow-x-hidden">
      <nav className="nav-fixed px-12 h-24 flex items-center justify-between border-b border-gray-100/50 bg-white/50 backdrop-blur-md">
        <Link to="/" className="nav-logo-link">
          <div className="logo-box bg-gold text-black border-none font-fraunces">TF</div>
          <div className="logo-name font-fraunces text-black">Talent<span>Factory</span></div>
        </Link>
        <Link to="/" className="text-xs font-extrabold uppercase tracking-widest text-black hover:opacity-60 transition-opacity">← Exit Session</Link>
      </nav>

      <div className="pt-40 pb-20 px-6">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-20 items-center">
          <div className="flex-1 space-y-8 text-center lg:text-left">
            <div className="hero-tag mb-4 shadow-sm inline-flex items-center">
              <span className="hero-tag-dot bg-gold"></span>
              Secure Admissions Interface
            </div>
            <h1 className="sec-h text-7xl italic leading-[1.1]">The <em>Gateway</em> to Your Career.</h1>
            <p className="sec-p !max-w-xl mx-auto lg:mx-0 opacity-60 text-lg leading-relaxed italic">
              Access to our world-class human capital training and residency program begins here. Your admin fee covers verification and platform maintenance.
            </p>
            
            <div className="flex items-center gap-6 justify-center lg:justify-start pt-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-100 flex items-center justify-center text-[10px] font-bold">👤</div>
                ))}
              </div>
              <div className="text-[10px] font-extrabold uppercase tracking-widest opacity-40">Join 500+ Qualified Applicants</div>
            </div>
          </div>

          <div className="max-w-md w-full">
            <div className="bg-black text-white p-12 rounded-[50px] shadow-3xl relative overflow-hidden">
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-16">
                  <div className="logo-box bg-gold text-black border-none w-12 h-12 text-sm font-fraunces">TF</div>
                  <div className="text-right">
                    <div className="text-[9px] uppercase font-bold text-white/40 tracking-[0.3em]">Total Payable</div>
                    <div className="text-4xl font-bold text-gold italic">₦10,000</div>
                  </div>
                </div>

                <div className="space-y-6 mb-16">
                  <div className="flex justify-between items-center pb-4 border-b border-white/10">
                    <span className="text-xs opacity-60 font-medium italic">Application Fee</span>
                    <span className="text-xs font-bold">₦10,000.00</span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-white/10">
                    <span className="text-xs opacity-60 font-medium italic">Admin Verification</span>
                    <span className="text-[10px] font-bold text-gold uppercase tracking-[0.2em]">Inclusive</span>
                  </div>
                </div>

                <button
                  onClick={handlePayment}
                  disabled={isProcessing}
                  className="w-full py-5 rounded-2xl bg-gold text-black font-extrabold text-xs uppercase tracking-[0.2em] hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-gold/20 flex items-center justify-center gap-3"
                >
                  {isProcessing ? (
                    'Redirecting to Paystack...'
                  ) : (
                    <>
                      <span>Secure Checkout</span>
                      <span className="text-lg">→</span>
                    </>
                  )}
                </button>

                <div className="mt-10 flex items-center justify-center gap-6">
                  <img src="https://checkout.paystack.com/assets/img/paystack-logo-blue.png" alt="Paystack" className="h-4 brightness-0 invert opacity-40" />
                  <div className="w-[1px] h-4 bg-white/20"></div>
                  <div className="text-[9px] font-bold text-white/40 uppercase tracking-widest italic">256-bit SSL Layer</div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_100%_100%,rgba(255,215,0,0.1),transparent_70%)]"></div>
              <div className="absolute top-0 left-0 w-32 h-32 bg-gold/5 blur-3xl rounded-full translate-x-[-50%] translate-y-[-50%]"></div>
            </div>

            <div className="mt-8 px-6 text-center">
              <p className="text-[10px] text-muted font-bold uppercase tracking-widest leading-loose">
                Supports: Mastercard, Visa, Verve, & Bank Transfer via Paystack Secure Gateway.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default ApplicationPaymentPage;

