import React from "react";
import Header6 from "@/components/headers/Header6";
import Footer2 from "@/components/footers/Footer2";
import { siteContent } from "@/data/siteContent";

export const metadata = {
  title: `Privacy Policy | ${siteContent.agent.name} - ${siteContent.agent.title}`,
  description: `Privacy Policy for ${siteContent.agent.name}'s website.`,
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <div id="wrapper">
        <Header6 />
        <div className="main-content" style={{ paddingTop: '100px', paddingBottom: '100px' }}>
          <div className="tf-container">
            <div className="row">
              <div className="col-md-12">
                <h2 className="title-heading mb-20">{metadata.title.replace('{Agent Name}', siteContent.agent.name).replace('{Agent Title}', siteContent.agent.title)}</h2>
                <p className="mb-30">Last Updated: {new Date().toLocaleDateString()}</p>

                <h4 className="mb-10">Introduction</h4>
                <p className="mb-20">Welcome to {siteContent.agent.name}'s website. We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.</p>
                <p className="mb-30"><strong>Disclaimer:</strong> This is a template Privacy Policy and may not be legally sufficient for your specific needs or jurisdiction. Consult with a legal professional to ensure compliance.</p>

                <h4 className="mb-10">Information We Collect</h4>
                <p className="mb-20">[Placeholder: Describe the types of information collected, e.g., personal identification information (name, email, phone number submitted through forms), browsing data (IP address, browser type, pages visited via analytics tools), cookies for site functionality and analytics. Explain *how* it's collected (contact forms, newsletter signups, server logs, analytics cookies).] </p>

                <h4 className="mb-10">How We Use Your Information</h4>
                <p className="mb-20">[Placeholder: Explain the purposes for using the collected information, e.g., to provide requested real estate services, respond to inquiries via contact forms, improve website functionality and user experience, send marketing communications like newsletters or property updates (only with explicit consent and providing opt-out options), comply with legal obligations.]</p>

                <h4 className="mb-10">Cookies and Tracking Technologies</h4>
                <p className="mb-20">[Placeholder: Explain the use of cookies (e.g., session, persistent) and similar technologies (e.g., pixels). Detail their purpose (e.g., essential site functions, remembering preferences, analytics via Google Analytics, potential advertising/retargeting if applicable). Provide information on how users can manage or disable cookies through their browser settings, linking to browser help pages if possible.]</p>

                <h4 className="mb-10">Disclosure of Your Information</h4>
                <p className="mb-20">[Placeholder: Describe circumstances under which information might be shared: with third-party service providers assisting with website operation or marketing (e.g., email marketing platform, CRM), if required by law or legal process, during business transfers (mergers, acquisitions), or with explicit user consent for other purposes.]</p>

                <h4 className="mb-10">Security of Your Information</h4>
                <p className="mb-20">[Placeholder: Describe the administrative, technical, and physical security measures implemented to protect user information (e.g., SSL encryption, access controls). Include a disclaimer that no internet transmission or electronic storage is 100% secure.]</p>

                <h4 className="mb-10">Your Rights</h4>
                <p className="mb-20">[Placeholder: Outline user rights regarding their personal information based on applicable laws (e.g., GDPR, CCPA, PIPEDA). This may include the right to access, correct, update, or delete their information, and the right to opt-out of marketing communications. Provide instructions on how users can exercise these rights, typically by contacting the agent.]</p>

                <h4 className="mb-10">Changes to This Privacy Policy</h4>
                <p className="mb-20">[Placeholder: State that the policy may be updated periodically and that continued use of the site after changes constitutes acceptance. Indicate how users can find the latest version (e.g., by checking the "Last Updated" date).]</p>

                <h4 className="mb-10">Contact Us</h4>
                <p className="mb-20">If you have questions or comments about this Privacy Policy, please contact us at: <a href={`mailto:${siteContent.agent.email}`}>{siteContent.agent.email}</a> or <a href={`tel:${siteContent.agent.phone}`}>{siteContent.agent.phone}</a>.</p>

              </div>
            </div>
          </div>
        </div>
        <Footer2 />
      </div>
    </>
  );
}