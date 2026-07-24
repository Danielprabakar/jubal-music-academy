import Navbar from "../components/Navbar";

export default function PrivacyPolicy() {
  return (
    <div className="bg-[#0B0F14] text-white min-h-screen">
      <Navbar />

      <article className="pt-32 pb-24 px-6 max-w-3xl mx-auto">
        <h1 className="text-4xl font-extrabold text-[#F5C451] mb-2">Privacy Policy</h1>
        <p className="text-sm text-[#6B7280] mb-12">
          <strong className="text-[#B8C1CC]">Jubal Music Academy</strong><br />
          Last updated: July 24, 2026
        </p>

        <div className="space-y-10 text-[#B8C1CC] leading-relaxed">
          <p>
            Jubal Music Academy ("we," "us," "our") operates the Worship Keys 3-Day Challenge and
            related worship keyboard training programs. This policy explains what information we
            collect when you register for a program, how we use it, and who we share it with.
          </p>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Information We Collect</h2>
            <p className="mb-3">
              When you register for a workshop or program through our website, we collect:
            </p>
            <ul className="list-disc list-inside space-y-1.5 mb-3">
              <li><strong className="text-white">Name</strong></li>
              <li><strong className="text-white">Email address</strong></li>
              <li><strong className="text-white">Phone number (WhatsApp number)</strong></li>
              <li>
                <strong className="text-white">Payment information</strong> — processed entirely by our
                payment partner, Razorpay. We do not collect or store your card, UPI, or bank details
                ourselves; we only receive confirmation that a payment succeeded or failed, along with
                a transaction reference ID.
              </li>
              <li>
                <strong className="text-white">Batch/program selection</strong> — which workshop or
                challenge you registered for.
              </li>
            </ul>
            <p>
              We do not knowingly collect information from children under 18 without parental
              involvement, and our programs are intended for adults.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. How We Use Your Information</h2>
            <p className="mb-3">We use the information above to:</p>
            <ul className="list-disc list-inside space-y-1.5">
              <li>Register you for the workshop or program you selected</li>
              <li>Send you a registration confirmation and payment confirmation by email</li>
              <li>
                Send you WhatsApp messages confirming your payment and inviting you to your batch's
                WhatsApp group
              </li>
              <li>Send you reminders if a registration is started but payment is not completed</li>
              <li>Provide customer support if you contact us</li>
              <li>Improve our programs and communicate about future offerings you may be interested in</li>
            </ul>
            <p className="mt-3">We do not sell your personal information to third parties.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. Third-Party Services We Use</h2>
            <p className="mb-3">
              To operate our registration, payment, and communication systems, we rely on the
              following third-party services, each governed by its own privacy policy:
            </p>
            <ul className="list-disc list-inside space-y-1.5">
              <li>
                <strong className="text-white">Razorpay</strong> — for processing payments. Razorpay's
                privacy policy:{" "}
                <a href="https://razorpay.com/privacy/" target="_blank" rel="noopener noreferrer" className="text-[#F5C451] hover:underline">
                  razorpay.com/privacy
                </a>
              </li>
              <li>
                <strong className="text-white">Meta / WhatsApp Business Platform (Cloud API)</strong> —
                for sending WhatsApp confirmation and group-invite messages. Meta's privacy policy:{" "}
                <a href="https://www.whatsapp.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-[#F5C451] hover:underline">
                  whatsapp.com/legal/privacy-policy
                </a>
              </li>
              <li>
                <strong className="text-white">Google (Gmail, Google Sheets)</strong> — for sending
                confirmation emails and securely storing registration records. Google's privacy policy:{" "}
                <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[#F5C451] hover:underline">
                  policies.google.com/privacy
                </a>
              </li>
            </ul>
            <p className="mt-3">
              These providers process your data only to the extent necessary to deliver the service
              you requested (e.g., completing your payment, delivering your confirmation message).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Data Storage and Retention</h2>
            <p>
              Your registration information is stored in a secured, access-restricted system and is
              retained for as long as necessary to provide our services, maintain accurate business
              records, and comply with applicable tax and financial regulations. If you'd like your
              information removed sooner, contact us using the details below and we will honor
              reasonable requests, subject to any records we're legally required to retain.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. Your Rights</h2>
            <p className="mb-3">You can contact us at any time to:</p>
            <ul className="list-disc list-inside space-y-1.5">
              <li>Request a copy of the information we hold about you</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your information (subject to legal/financial record-keeping requirements)</li>
              <li>
                Opt out of future promotional WhatsApp or email messages (note: this does not apply to
                essential transactional messages like payment confirmations for a program you've
                already joined)
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">6. WhatsApp Communication</h2>
            <p>
              By providing your WhatsApp number during registration, you consent to receive messages
              from us related to your registration, payment status, and program access via the
              WhatsApp Business Platform. These are transactional/utility messages tied to a program
              you've actively registered for.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">7. Security</h2>
            <p>
              We take reasonable technical and organizational measures to protect your information,
              including restricting access to registration records and relying on established,
              reputable providers (Razorpay, Google, Meta) for payment processing and message delivery.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">8. Changes to This Policy</h2>
            <p>
              We may update this policy from time to time. The "Last updated" date at the top will
              reflect the most recent revision.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">9. Contact Us</h2>
            <p>If you have questions about this policy or how your information is handled, contact us at:</p>
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
