import React from 'react';

const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6">Privacy Policy</h1>
            <p className="text-xl text-gray-300">
              How we collect, use, and protect your personal information
            </p>
          </div>

          <div className="prose prose-invert max-w-none">
            <div className="bg-gray-900 p-8 rounded-2xl mb-8">
              <p className="text-lg leading-relaxed">
                <strong>Effective Date:</strong> January 2024
              </p>
              <p className="text-lg leading-relaxed mt-4">
                tf.thegenzhr.com is operated by Talent Factory ('Talent Factory', 'We', 'Us', 'Our'). 
                We are committed to protecting your personal information and handling it responsibly. 
                This Privacy Policy explains how we collect, use, store, share, and protect your personal 
                data in connection with your relationship with us as a student, applicant, instructor, 
                partner, or visitor to our platform.
              </p>
            </div>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-yellow-400">1. Data We Collect</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">Information You Provide:</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-300">
                    <li>Full legal name, email address and phone number</li>
                    <li>Physical address and date of birth</li>
                    <li>Employment and educational background</li>
                    <li>CV and motivation statements</li>
                    <li>Payment and financial information (processed via Paystack)</li>
                    <li>Bank details (for instructors and affiliates)</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Information Collected Automatically:</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-300">
                    <li>IP address, browser type, pages visited</li>
                    <li>Time spent on the site and device information</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-yellow-400">2. How We Use Your Data</h2>
              <ul className="list-disc list-inside space-y-3 text-gray-300">
                <li>To verify your identity and process your application</li>
                <li>To administer your enrollment, cohort placement, and program progress</li>
                <li>To facilitate your internship placement at a partner company</li>
                <li>To communicate program updates, class schedules, and announcements</li>
                <li>To process payments and maintain financial records</li>
                <li>To issue certificates and alumni credentials</li>
                <li>To improve our programs, curriculum, and student experience</li>
                <li>To comply with legal, regulatory, and contractual obligations</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-yellow-400">3. Sharing Your Data</h2>
              <p className="text-gray-300 mb-4">
                Talent Factory does not sell, rent, or trade personal data to any third party. 
                We may share your data only as follows:
              </p>
              <ul className="list-disc list-inside space-y-3 text-gray-300">
                <li><strong>With Instructors:</strong> Limited to information necessary for session delivery</li>
                <li><strong>With Partner Companies:</strong> Your internship profile for placement facilitation</li>
                <li><strong>With Service Providers:</strong> Third-party tools (Paystack, Zoom, Google, Mailchimp)</li>
                <li><strong>Legal Obligations:</strong> Where required by law, court order, or regulatory authority</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-yellow-400">4. Your Rights</h2>
              <p className="text-gray-300 mb-4">
                Under applicable data protection law, you have the right to:
              </p>
              <ul className="list-disc list-inside space-y-3 text-gray-300">
                <li>Access the personal data we hold about you</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your data in certain circumstances</li>
                <li>Withdraw consent for data processing activities</li>
                <li>Object to data processing for direct marketing</li>
                <li>Lodge a complaint with the Nigeria Data Protection Commission (NDPC)</li>
              </ul>
              <p className="text-gray-300 mt-4">
                To exercise any of these rights, email <strong>hello@talentfactory.ng</strong> with the subject 'Data Rights Request'.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-yellow-400">5. Data Security</h2>
              <p className="text-gray-300">
                Talent Factory implements appropriate technical and organisational measures to protect 
                your personal data against unauthorised access, loss, alteration, or disclosure. 
                All payment data is processed exclusively through Paystack (PCI-DSS compliant). 
                However, no system is entirely secure and Talent Factory cannot guarantee absolute 
                data security.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-yellow-400">6. Contact</h2>
              <p className="text-gray-300">
                For any privacy-related questions, requests, or complaints, contact us at{' '}
                <strong>hello@talentfactory.ng</strong>. We will respond within 14 calendar days.
              </p>
            </section>

            <div className="bg-yellow-400 text-black p-6 rounded-2xl mt-12">
              <p className="font-semibold">
                <strong>Important:</strong> The name, email address, and date of birth you provide 
                during registration are treated as final and cannot be changed after enrollment, 
                except upon provision of a notarised affidavit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;