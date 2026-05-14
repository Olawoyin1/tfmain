import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiArrowLeft, FiShield, FiLock, FiCheck } from 'react-icons/fi';

const ApplicationPaymentPage: React.FC = () => {
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);
  const [isPaid, setIsPaid] = useState(false);

  const handlePayment = async () => {
    setIsProcessing(true);
    await new Promise(r => setTimeout(r, 2500));
    setIsPaid(true);
    setIsProcessing(false);
  };

  if (isPaid) {
    return (
      <div className="min-h-screen bg-off flex items-center justify-center px-6">
        <div className="text-center max-w-md w-full">
          <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
            <FiCheck size={28} className="text-green-600" />
          </div>
          <h2 className="font-display text-[36px] font-black text-black leading-tight mb-3">
            Payment <span className="text-gold italic">confirmed.</span>
          </h2>
          <p className="text-[15px] text-muted leading-relaxed mb-2">
            Your ₦10,000 application fee has been received. You've unlocked the admission assessment.
          </p>
          <p className="text-[12px] text-muted mb-10">Reference: TF-{Math.random().toString(36).substring(2, 10).toUpperCase()}</p>
          <Link to="/apply/form" className="btn-primary w-full block text-center py-4">
            Complete Your Full Profile →
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-off flex flex-col">
      {/* Nav */}
      <div className="bg-black px-10 py-4 flex items-center justify-between shrink-0">
        <a href="/" className="nav-logo-link">
          <div className="logo-box">TF</div>
          <div className="logo-name" style={{ color: 'white' }}>Talent<span>Factory</span></div>
        </a>
        <button onClick={() => navigate('/apply/register')} className="text-[13px] font-semibold text-white/40 hover:text-gold transition-colors flex items-center gap-2">
          <FiArrowLeft size={14} /> Back
        </button>
      </div>

      {/* Body */}
      <div className="flex-1 flex flex-col lg:flex-row">

        {/* ── Left: context ── */}
        <div className="lg:w-1/2 flex flex-col justify-center px-10 py-16 lg:px-16 lg:py-20">
          <div className="max-w-md">
            <div className="text-[10px] font-bold uppercase tracking-[3px] text-gold mb-5">
              Application Fee
            </div>
            <h1 className="text-[clamp(32px,4vw,52px)] font-black text-black leading-[1.1] mb-5">
              One step before<br />your profile details.
            </h1>
            <p className="text-[15px] text-muted leading-relaxed mb-10">
              A non-refundable application fee of ₦10,000. This fee is an administrative processing fee and is separate from tuition. <strong className="text-black">not</strong> deducted from your tuition.
            </p>

            {/* What's included */}
            <div className="flex flex-col gap-3 mb-10">
              {[
                'Proceed to complete your detailed profile',
                'Access to the 30-minute admission assessment',
                'Application reviewed by our admissions team',
                'Decision within 7 business days of completion',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-gold/15 flex items-center justify-center shrink-0 mt-0.5">
                    <FiCheck size={11} className="text-gold" />
                  </div>
                  <span className="text-[14px] text-black">{item}</span>
                </div>
              ))}
            </div>

            {/* Trust */}
            <div className="flex items-center gap-5 pt-6 border-t border-black/8">
              <div className="flex items-center gap-2 text-[12px] text-muted">
                <FiShield size={14} className="text-green-600" />
                Secured by Paystack
              </div>
              <div className="w-px h-4 bg-black/10" />
              <div className="flex items-center gap-2 text-[12px] text-muted">
                <FiLock size={14} className="text-green-600" />
                256-bit SSL
              </div>
            </div>
          </div>
        </div>

        {/* ── Right: payment card ── */}
        <div className="lg:w-1/2 flex items-center justify-center px-10 py-16 lg:px-16 bg-white border-l border-gray-100">
          <div className="w-full max-w-sm">

            {/* Amount display */}
            <div className="mb-8">
              <div className="text-[11px] font-bold uppercase tracking-[2px] text-muted mb-1">Total due today</div>
              <div className="font-display text-[56px] font-black text-black leading-none">₦10,000</div>
              <div className="text-[13px] text-muted mt-1">Non-refundable application fee</div>
            </div>

            {/* Line items */}
            <div className="border border-gray-100 rounded-xl overflow-hidden mb-6">
              <div className="flex justify-between items-center px-5 py-4 border-b border-gray-100">
                <span className="text-[13px] text-muted">Application fee</span>
                <span className="text-[13px] font-bold text-black">₦10,000.00</span>
              </div>
              <div className="flex justify-between items-center px-5 py-4">
                <span className="text-[13px] text-muted">Processing</span>
                <span className="text-[12px] font-bold text-green-600 uppercase tracking-wide">Included</span>
              </div>
            </div>

            {/* Pay button */}
            <button
              onClick={handlePayment}
              disabled={isProcessing}
              className="w-full py-4 rounded-xl bg-black text-white text-[14px] font-bold hover:bg-gold hover:text-black transition-all disabled:opacity-60 mb-4"
            >
              {isProcessing ? 'Redirecting to Paystack...' : 'Pay ₦10,000 via Paystack →'}
            </button>

            <p className="text-center text-[11px] text-muted leading-relaxed">
              Supports Mastercard, Visa, Verve & Bank Transfer
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationPaymentPage;

