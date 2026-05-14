import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - Zaxby's Franchise Management Platform",
  description:
    "Privacy policy for the Zaxby's Franchise Management Platform, detailing how we collect, use, and protect your data.",
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            Privacy Policy
          </h1>

          <p className="text-gray-600 mb-8">
            <strong>Effective Date:</strong> October 15, 2024
            <br />
            <strong>Last Updated:</strong> October 15, 2024
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-8">
            <p className="text-blue-800">
              <strong>Quick Summary:</strong> This Privacy Policy explains how
              Zaxby's Franchising LLC ("we," "our," or "us") collects, uses, and
              protects your information when you use our Franchise Management
              Platform. We are committed to protecting your privacy and ensuring
              the security of your personal information.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            1. Information We Collect
          </h2>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
            1.1 Personal Information
          </h3>
          <p className="text-gray-700 mb-4">
            We collect personal information that you provide directly to us,
            including:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-4">
            <li>Name, email address, and phone number</li>
            <li>Franchise location information and store numbers</li>
            <li>Job title and role within the organization</li>
            <li>Payment and billing information</li>
            <li>Profile information and preferences</li>
            <li>Communication preferences</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
            1.2 Business Information
          </h3>
          <p className="text-gray-700 mb-4">
            We collect business-related information to provide our services,
            including:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-4">
            <li>Sales data and performance metrics</li>
            <li>Employee information and HR records</li>
            <li>Operational data and maintenance records</li>
            <li>Financial information and cost analysis</li>
            <li>Customer feedback and satisfaction scores</li>
            <li>Audit and compliance data</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
            1.3 Technical Information
          </h3>
          <p className="text-gray-700 mb-4">
            We automatically collect certain technical information when you use
            our platform:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-4">
            <li>IP address and device information</li>
            <li>Browser type and version</li>
            <li>Operating system and device identifiers</li>
            <li>Usage patterns and platform interactions</li>
            <li>Cookies and similar tracking technologies</li>
            <li>Log files and error reports</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            2. How We Use Your Information
          </h2>

          <p className="text-gray-700 mb-4">
            We use the information we collect for the following purposes:
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
            2.1 Service Provision
          </h3>
          <ul className="list-disc pl-6 text-gray-700 mb-4">
            <li>Provide and maintain our franchise management platform</li>
            <li>Process transactions and manage your account</li>
            <li>Deliver analytics and performance insights</li>
            <li>Enable communication and collaboration features</li>
            <li>Provide customer support and technical assistance</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
            2.2 Business Operations
          </h3>
          <ul className="list-disc pl-6 text-gray-700 mb-4">
            <li>Improve our platform and develop new features</li>
            <li>Conduct research and analytics</li>
            <li>Ensure platform security and prevent fraud</li>
            <li>Comply with legal obligations and regulatory requirements</li>
            <li>Enforce our terms of service and policies</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
            2.3 Communication
          </h3>
          <ul className="list-disc pl-6 text-gray-700 mb-4">
            <li>Send important updates about our services</li>
            <li>Provide marketing communications (with your consent)</li>
            <li>Respond to your inquiries and support requests</li>
            <li>Send notifications about platform changes</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            3. Information Sharing and Disclosure
          </h2>

          <p className="text-gray-700 mb-4">
            We do not sell, trade, or rent your personal information to third
            parties. We may share your information in the following
            circumstances:
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
            3.1 Service Providers
          </h3>
          <p className="text-gray-700 mb-4">
            We may share information with trusted third-party service providers
            who assist us in operating our platform, including:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-4">
            <li>Cloud hosting and data storage providers</li>
            <li>Authentication and security services (Clerk)</li>
            <li>Analytics and monitoring services (Sentry)</li>
            <li>Email and communication services</li>
            <li>Payment processing providers</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
            3.2 Legal Requirements
          </h3>
          <p className="text-gray-700 mb-4">
            We may disclose information when required by law or to:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-4">
            <li>Comply with legal processes or government requests</li>
            <li>Protect our rights, property, or safety</li>
            <li>Protect the rights, property, or safety of our users</li>
            <li>Investigate or prevent fraud or security issues</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
            3.3 Business Transfers
          </h3>
          <p className="text-gray-700 mb-4">
            In the event of a merger, acquisition, or sale of assets, your
            information may be transferred as part of the transaction.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            4. Data Security
          </h2>

          <p className="text-gray-700 mb-4">
            We implement appropriate technical and organizational measures to
            protect your information against unauthorized access, alteration,
            disclosure, or destruction. These measures include:
          </p>

          <ul className="list-disc pl-6 text-gray-700 mb-4">
            <li>Encryption of data in transit and at rest</li>
            <li>Regular security assessments and updates</li>
            <li>Access controls and authentication requirements</li>
            <li>Secure data centers and infrastructure</li>
            <li>Employee training on data protection</li>
            <li>Incident response and breach notification procedures</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            5. Data Retention
          </h2>

          <p className="text-gray-700 mb-4">
            We retain your information for as long as necessary to provide our
            services and fulfill the purposes outlined in this Privacy Policy.
            We may retain certain information for longer periods for:
          </p>

          <ul className="list-disc pl-6 text-gray-700 mb-4">
            <li>Legal compliance and regulatory requirements</li>
            <li>Dispute resolution and enforcement of agreements</li>
            <li>Business operations and analytics</li>
            <li>Security and fraud prevention</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            6. Your Rights and Choices
          </h2>

          <p className="text-gray-700 mb-4">
            Depending on your location, you may have certain rights regarding
            your personal information:
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
            6.1 Access and Portability
          </h3>
          <p className="text-gray-700 mb-4">
            You have the right to access your personal information and receive a
            copy in a portable format.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
            6.2 Correction and Updates
          </h3>
          <p className="text-gray-700 mb-4">
            You can update or correct your personal information through your
            account settings or by contacting us.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
            6.3 Deletion
          </h3>
          <p className="text-gray-700 mb-4">
            You may request deletion of your personal information, subject to
            certain legal and business requirements.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
            6.4 Opt-Out
          </h3>
          <p className="text-gray-700 mb-4">
            You can opt out of marketing communications by using the unsubscribe
            link in emails or contacting us directly.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            7. Cookies and Tracking Technologies
          </h2>

          <p className="text-gray-700 mb-4">
            We use cookies and similar technologies to enhance your experience
            on our platform. These technologies help us:
          </p>

          <ul className="list-disc pl-6 text-gray-700 mb-4">
            <li>Remember your preferences and settings</li>
            <li>Analyze platform usage and performance</li>
            <li>Provide personalized content and features</li>
            <li>Ensure platform security and functionality</li>
          </ul>

          <p className="text-gray-700 mb-4">
            You can control cookie settings through your browser preferences,
            but disabling certain cookies may affect platform functionality.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            8. International Data Transfers
          </h2>

          <p className="text-gray-700 mb-4">
            Your information may be transferred to and processed in countries
            other than your own. We ensure appropriate safeguards are in place
            to protect your information in accordance with applicable data
            protection laws.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            9. Children's Privacy
          </h2>

          <p className="text-gray-700 mb-4">
            Our platform is not intended for children under 13 years of age. We
            do not knowingly collect personal information from children under
            13. If we become aware that we have collected such information, we
            will take steps to delete it.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            10. Changes to This Privacy Policy
          </h2>

          <p className="text-gray-700 mb-4">
            We may update this Privacy Policy from time to time. We will notify
            you of any material changes by posting the new Privacy Policy on
            this page and updating the "Last Updated" date. Your continued use
            of our platform after such changes constitutes acceptance of the
            updated Privacy Policy.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            11. Contact Us
          </h2>

          <p className="text-gray-700 mb-4">
            If you have any questions about this Privacy Policy or our data
            practices, please contact us:
          </p>

          <div className="bg-gray-50 p-6 rounded-lg">
            <p className="text-gray-700 mb-2">
              <strong>Zaxby's Franchising LLC</strong>
              <br />
              Data Protection Officer
              <br />
              Email: privacy@yourzaxbys.com
              <br />
              Phone: (555) 123-ZAXBYS
              <br />
              Address: 1040 Zaxby's Blvd, Athens, GA 30601
            </p>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-8">
            <p className="text-yellow-800">
              <strong>Note:</strong> This Privacy Policy is designed to comply
              with applicable data protection laws, including GDPR, CCPA, and
              other relevant regulations. If you have specific questions about
              your rights under these laws, please contact us directly.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
