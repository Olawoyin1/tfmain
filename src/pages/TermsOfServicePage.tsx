import React from 'react';

const TermsOfServicePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6">Terms & Conditions</h1>
            <p className="text-xl text-gray-300">
              Legal agreement governing your use of Talent Factory services
            </p>
          </div>

          <div className="prose prose-invert max-w-none">
            <div className="bg-gray-900 p-8 rounded-2xl mb-8">
              <p className="text-lg leading-relaxed">
                <strong>Last Updated:</strong> January 2024
              </p>
              <p className="text-lg leading-relaxed mt-4">
                Please read these Terms and Conditions ('Terms') carefully. They constitute a legally 
                binding agreement between you ('You', 'Student', 'Learner') and Talent Factory 
                ('Talent Factory', 'We', 'Us', 'Our'). These Terms govern your access to all 
                Talent Factory programs, resources, communications platforms, and any other services 
                offered by Talent Factory (together, the 'Platform').
              </p>
            </div>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-yellow-400">1. Definitions</h2>
              <div className="space-y-4 text-gray-300">
                <p><strong>'Account'</strong> means the student record created for a Learner upon enrollment.</p>
                <p><strong>'Cohort'</strong> means a group of students enrolled in the same 6-month program cycle.</p>
                <p><strong>'Course Content'</strong> means all materials, recordings, slides, assignments, and resources made available to enrolled students.</p>
                <p><strong>'Platform'</strong> means all tools and services used by Talent Factory including the website, Zoom classes, Google Drive resources, and WhatsApp communities.</p>
                <p><strong>'Tuition Fee'</strong> means the fee payable by the Learner for access to the program.</p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-yellow-400">2. Student Obligations</h2>
              <p className="text-gray-300 mb-4">As a Talent Factory student, you agree to:</p>
              <ul className="list-disc list-inside space-y-3 text-gray-300">
                <li>Adhere to the Talent Factory Student Code of Conduct at all times</li>
                <li>Pay the full Tuition Fee in accordance with your agreed payment plan</li>
                <li>Not copy, distribute, sell, or share Course Content with any third party</li>
                <li>Attend and actively participate in live sessions, assignments, and projects</li>
                <li>Notify Talent Factory in writing of any intention to withdraw from the program</li>
                <li>Provide your own devices and internet access sufficient to participate in online sessions</li>
                <li>Conduct yourself professionally during the internship phase</li>
                <li>Cooperate with Talent Factory's reasonable instructions at all times</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-yellow-400">3. Tuition Fees & Payment</h2>
              <ul className="list-disc list-inside space-y-3 text-gray-300">
                <li>Tuition fees are due upon acceptance and must be paid before the cohort start date</li>
                <li>Payments are processed via Paystack</li>
                <li>Failure to pay tuition fees when due may result in suspension or removal from the program</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-yellow-400">4. Intellectual Property</h2>
              <ul className="list-disc list-inside space-y-3 text-gray-300">
                <li>All Course Content and materials remain the exclusive property of Talent Factory</li>
                <li>You receive a limited, non-exclusive licence to access content for personal educational use only</li>
                <li>You may not reproduce, distribute, or exploit any Course Content without written consent</li>
                <li>Content you submit remains yours, but you grant Talent Factory a licence to use it for educational purposes</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-yellow-400">5. Code of Conduct</h2>
              <p className="text-gray-300 mb-4">During all live sessions, students must not:</p>
              <ul className="list-disc list-inside space-y-3 text-gray-300">
                <li>Use the session for purposes other than the stated learning activity</li>
                <li>Disrupt, interfere with, or destabilise the session or platform</li>
                <li>Record the session without express permission</li>
                <li>Engage in disrespectful, harassing, or discriminatory conduct</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-yellow-400">6. Events of Default</h2>
              <p className="text-gray-300 mb-4">The following constitute Events of Default:</p>
              <ul className="list-disc list-inside space-y-3 text-gray-300">
                <li>Failure to pay tuition fees when due</li>
                <li>Repeated failure to participate in sessions or meet program requirements</li>
                <li>Misconduct during live sessions or in the cohort community</li>
                <li>Breach of the Student Code of Conduct or these Terms</li>
              </ul>
              <p className="text-gray-300 mt-4">
                Upon an Event of Default, Talent Factory may suspend or terminate access, 
                revoke admission, withdraw certificates, and/or pursue outstanding fees through legal proceedings.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-yellow-400">7. Refund Policy</h2>
              <div className="space-y-4 text-gray-300">
                <p><strong>Application Fees:</strong> Non-refundable and non-transferable in all circumstances.</p>
                <p><strong>Full Refund Window:</strong> Available only within 48 hours of the first payment.</p>
                <p><strong>Transfer to Another Cohort:</strong> Available if you have attended 2 or fewer live sessions.</p>
                <p><strong>Partial Refund:</strong> Pro-rated portion of unused tuition may be eligible for partial refund at Talent Factory's discretion.</p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-yellow-400">8. Limitation of Liability</h2>
              <p className="text-gray-300">
                Talent Factory shall not be liable for any indirect, incidental, special, or 
                consequential damages arising from your use of or inability to use the Platform 
                or program, including loss of data, revenue, or employment opportunity.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-yellow-400">9. Governing Law</h2>
              <p className="text-gray-300">
                These Terms are governed by the laws of the Federal Republic of Nigeria. 
                Any dispute shall first be resolved through good-faith negotiation. 
                If unresolved within 30 days, disputes shall be referred to arbitration in Lagos, Nigeria.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-yellow-400">10. Contact</h2>
              <p className="text-gray-300">
                For questions about these Terms, contact us at <strong>hello@talentfactory.ng</strong>
              </p>
            </section>

            <div className="bg-red-900 text-white p-6 rounded-2xl mt-12">
              <p className="font-semibold">
                <strong>Important:</strong> By applying to, enrolling in, or accessing any Talent Factory program, 
                you agree to be bound by these Terms. If you do not agree, you must not enrol or use the Platform.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfServicePage;