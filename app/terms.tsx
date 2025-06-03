import Header from "./components/Header"
import Footer from "./components/Footer"
import type React from "react"

export default function Terms() {
  return (
    <>
      <Header />
      <main className="max-w-3xl mx-auto px-4 py-16 text-foreground">
        <h1 className="text-4xl font-bold mb-8 text-center">Terms and Conditions</h1>
        <section className="space-y-6 text-base leading-7">
          <p>Welcome to our Terms and Conditions page. These terms govern your use of our personal computer software design services and website. By accessing or using our services, you agree to be bound by these terms.</p>

          <h2 className="text-2xl font-semibold mt-8 mb-2">1. Acceptance of Terms</h2>
          <p>By using our website or services, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions, as well as our Privacy Policy.</p>

          <h2 className="text-2xl font-semibold mt-8 mb-2">2. Intellectual Property</h2>
          <p>All content, software, designs, graphics, and other materials provided by us are the intellectual property of the company or its licensors. You may not copy, reproduce, distribute, or create derivative works without our express written permission.</p>

          <h2 className="text-2xl font-semibold mt-8 mb-2">3. Use of Services</h2>
          <p>You agree to use our services only for lawful purposes. You may not use our software or website to engage in any activity that is illegal, harmful, or infringes on the rights of others.</p>

          <h2 className="text-2xl font-semibold mt-8 mb-2">4. Payment and Fees</h2>
          <p>All fees for software design services must be paid as agreed in your project contract or invoice. Failure to pay may result in suspension or termination of services.</p>

          <h2 className="text-2xl font-semibold mt-8 mb-2">5. Limitation of Liability</h2>
          <p>We are not liable for any indirect, incidental, or consequential damages arising from the use or inability to use our software or services. Our total liability is limited to the amount you paid for the services.</p>

          <h2 className="text-2xl font-semibold mt-8 mb-2">6. Warranties</h2>
          <p>Our software and services are provided "as is" without warranties of any kind, either express or implied. We do not guarantee that our software will be error-free or uninterrupted.</p>

          <h2 className="text-2xl font-semibold mt-8 mb-2">7. Termination</h2>
          <p>We reserve the right to terminate or suspend your access to our services at any time, without notice, for conduct that we believe violates these Terms and Conditions or is harmful to other users or us.</p>

          <h2 className="text-2xl font-semibold mt-8 mb-2">8. Changes to Terms</h2>
          <p>We may update these Terms and Conditions from time to time. Continued use of our services after changes constitutes your acceptance of the new terms.</p>

          <h2 className="text-2xl font-semibold mt-8 mb-2">9. Governing Law</h2>
          <p>These Terms and Conditions are governed by the laws of your jurisdiction. Any disputes will be resolved in the appropriate courts of that jurisdiction.</p>

          <h2 className="text-2xl font-semibold mt-8 mb-2">10. Contact Us</h2>
          <p>If you have any questions about these Terms and Conditions, please contact us at info@yourcompany.com.</p>
        </section>
      </main>
      <Footer />
    </>
  )
} 