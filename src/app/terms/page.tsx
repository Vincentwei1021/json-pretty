import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms of Service | JSONPretty",
  description: "JSONPretty terms of service and conditions of use.",
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="px-4 py-12 sm:px-6 sm:py-16">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Terms of Service</h1>
          <p className="mt-2 text-sm text-gray-400">Last updated: March 10, 2026</p>
          <div className="mt-8 space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">Acceptance of Terms</h2>
            <p>By accessing and using JSONPretty (&quot;the Service&quot;), you agree to be bound by these Terms of Service. If you do not agree, please do not use the Service.</p>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">Description of Service</h2>
            <p>JSONPretty provides free, browser-based JSON formatting, validation, and minification tools. The Service runs entirely in your web browser — no data is transmitted to our servers.</p>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">Use of the Service</h2>
            <p>You may use JSONPretty for any lawful purpose, including personal and commercial use. You agree not to use automated systems to excessively access the Service in a way that degrades performance for other users.</p>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">No Warranty</h2>
            <p>JSONPretty is provided &quot;as is&quot; without warranties of any kind, express or implied. We do not guarantee that the Service will be uninterrupted, error-free, or that results will be accurate. Always validate critical JSON data through multiple methods.</p>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">Limitation of Liability</h2>
            <p>In no event shall JSONPretty or its operators be liable for any indirect, incidental, special, or consequential damages arising from your use of the Service.</p>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">Intellectual Property</h2>
            <p>The JSONPretty name, logo, and website design are the property of their respective owners. The JSON data you process using our tool remains entirely yours.</p>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">Changes to Terms</h2>
            <p>We may update these terms from time to time. Continued use of the Service after changes constitutes acceptance of the updated terms.</p>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">Contact</h2>
            <p>For questions about these terms, contact us at legal@toolboxlite.com.</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
