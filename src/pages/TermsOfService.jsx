import Navbar from "../components/Navbar";

export default function TermsOfService() {
  return (
    <div className="bg-[#0B0F14] text-white min-h-screen">
      <Navbar />

      <article className="pt-32 pb-24 px-6 max-w-3xl mx-auto">
        <h1 className="text-4xl font-extrabold text-[#F5C451] mb-2">Terms of Service</h1>
        <p className="text-sm text-[#6B7280] mb-12">
          <strong className="text-[#B8C1CC]">Jubal Music Academy</strong><br />
          Last updated: July 24, 2026
        </p>

        <div className="space-y-10 text-[#B8C1CC] leading-relaxed">
          <p>
            These Terms of Service ("Terms") govern your registration for and participation in
            programs offered by Jubal Music Academy ("we," "us," "our"), including the Worship Keys
            3-Day Challenge and other worship keyboard training programs. By registering, you agree
            to these Terms.
          </p>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Program Registration</h2>
            <p>
              When you register for a program, you agree to provide accurate name, email, and
              phone/WhatsApp number so we can deliver confirmations, program access, and support.
              Registration is confirmed only once payment is successfully processed.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. Payments</h2>
            <ul className="list-disc list-inside space-y-1.5">
              <li>All payments are processed securely through Razorpay. We do not store your card, UPI, or banking details.</li>
              <li>Prices are listed in Indian Rupees (INR) and are inclusive of any applicable taxes unless stated otherwise.</li>
              <li>Your seat in a batch is reserved only after payment is confirmed as successful.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. Cancellations and Refunds</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong className="text-white">Refunds are only provided if Jubal Music Academy cancels
                a scheduled program.</strong> In that case, we will process a full refund to your
                original payment method within 21 days of the cancellation notice.
              </li>
              <li>
                <strong className="text-white">Except for an academy-initiated cancellation, all
                payments are non-refundable.</strong> This includes situations where you are unable to
                attend, choose to withdraw, or miss part or all of the program after registering.
              </li>
              <li>
                If Jubal Music Academy cancels a program, we will notify registered students by email
                and/or WhatsApp, and refund requests do not need to be initiated by you — we will
                process them automatically. If you have questions about a cancellation-related refund,
                contact us at the details in Section 10.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Program Access and Conduct</h2>
            <ul className="list-disc list-inside space-y-1.5">
              <li>Access to program content (live sessions, WhatsApp group, resources) is for your personal use only and may not be shared, resold, or redistributed.</li>
              <li>The WhatsApp group provided as part of a program is intended for respectful, on-topic communication related to the program. We reserve the right to remove participants who violate this.</li>
              <li>We reserve the right to reschedule sessions due to unforeseen circumstances, with reasonable notice provided via email or WhatsApp.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. Communications</h2>
            <p>
              By registering, you consent to receive transactional communications via email and
              WhatsApp related to your registration, payment status, and program access, as described
              in our Privacy Policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">6. Intellectual Property</h2>
            <p>
              All course materials, videos, resources, and content provided as part of our programs
              remain the intellectual property of Jubal Music Academy and may not be reproduced or
              distributed without permission.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">7. Limitation of Liability</h2>
            <p>
              Jubal Music Academy provides educational content on a best-effort basis. We are not
              liable for indirect, incidental, or consequential damages arising from your
              participation in our programs, to the extent permitted by applicable law.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">8. Changes to These Terms</h2>
            <p>
              We may update these Terms from time to time. Continued registration or participation in
              our programs after changes are posted constitutes acceptance of the revised Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">9. Governing Law</h2>
            <p>
              These Terms are governed by the laws of India. Any disputes will be subject to the
              jurisdiction of the courts in Chennai, Tamil Nadu.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">10. Contact Us</h2>
            <p>For questions about these Terms, contact us at:</p>
            <p className="mt-3">
              <strong className="text-white">Email:</strong>{" "}
              <a href="mailto:jubaljukebox@gmail.com" className="text-[#F5C451] hover:underline">jubaljukebox@gmail.com</a>
              {" "}or{" "}
              <a href="mailto:daniel.p@jubalmusicacademy.com" className="text-[#F5C451] hover:underline">daniel.p@jubalmusicacademy.com</a>
              <br />
              <strong className="text-white">Business:</strong> Jubal Music Academy
            </p>
          </section>
        </div>
      </article>
    </div>
  );
}
