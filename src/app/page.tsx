import AdBanner from "@/components/AdBanner";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import JsonFormatter from "@/components/JsonFormatter";
import FAQ from "@/components/FAQ";
import { faqData } from "@/data/faq";
import Footer from "@/components/Footer";
import DevToolsNav from "@/components/DevToolsNav";

const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "JSONPretty",
  url: "https://json.toolboxlite.com",
  description: "Free online JSON formatter, validator, and minifier. Pretty print JSON with syntax highlighting. 100% client-side — your data never leaves your browser.",
  applicationCategory: "DeveloperApplication",
  operatingSystem: "Any",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  browserRequirements: "Requires a modern web browser",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqData.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Format JSON Online",
  description: "Follow these simple steps to format, validate, and minify JSON using JSONPretty — a free, privacy-first JSON tool.",
  step: [
    { "@type": "HowToStep", name: "Paste your JSON", text: "Paste or type your raw JSON data into the input panel on the left. You can also click the Paste button to read from your clipboard." },
    { "@type": "HowToStep", name: "Click Format or Minify", text: "Click the Format button to pretty-print your JSON with syntax highlighting and indentation. Or click Minify to compress it into a single line." },
    { "@type": "HowToStep", name: "Copy the result", text: "Click the Copy button next to the output to copy the formatted or minified JSON to your clipboard. Ready to use!" },
  ],
  tool: { "@type": "HowToTool", name: "JSONPretty — Free Online JSON Formatter" },
};

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AdBanner className="mx-auto max-w-5xl px-4 py-4" />
        <JsonFormatter />

        {/* Features section */}
        <section className="px-4 py-12 sm:px-6 sm:py-16">
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-10 text-center text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
              Why Developers Choose JSONPretty
            </h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { icon: "🔒", title: "100% Private", desc: "Your JSON data never leaves your browser. No servers, no uploads, no tracking. Everything is processed locally with JavaScript — complete privacy guaranteed." },
                { icon: "✨", title: "Syntax Highlighting", desc: "Color-coded JSON output makes it easy to distinguish keys, strings, numbers, booleans, and null values at a glance. Works in both light and dark mode." },
                { icon: "🔍", title: "Error Detection", desc: "Instantly find JSON syntax errors with precise line and column numbers. Stop guessing where the missing comma or bracket is — JSONPretty pinpoints it for you." },
                { icon: "⚡", title: "Instant Results", desc: "Format, validate, or minify JSON in milliseconds. No page reloads, no waiting for servers. Runs entirely in your browser for maximum speed." },
              ].map((f) => (
                <div key={f.title} className="rounded-xl border border-gray-200 bg-white p-6 text-center shadow-sm dark:border-gray-700 dark:bg-gray-800">
                  <div className="mb-3 text-3xl">{f.icon}</div>
                  <h3 className="mb-2 text-base font-semibold text-gray-900 dark:text-white">{f.title}</h3>
                  <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="px-4 py-12 sm:px-6 sm:py-16 bg-white dark:bg-gray-800">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-8 text-center text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
              How to Format JSON Online
            </h2>
            <div className="space-y-6">
              {[
                { step: "1", title: "Paste Your JSON", desc: "Copy your raw, minified, or messy JSON and paste it into the input panel. You can also type directly or load a sample." },
                { step: "2", title: "Click Format or Minify", desc: "Hit the Format button to pretty-print with syntax highlighting. Choose your preferred indentation (2 or 4 spaces). Or click Minify to compress." },
                { step: "3", title: "Copy & Use", desc: "Your formatted JSON appears instantly with color highlighting. Click Copy to save it to your clipboard. Stats show line count, byte size, and key count." },
              ].map((s) => (
                <div key={s.step} className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-100 text-lg font-bold text-blue-700 dark:bg-blue-900/40 dark:text-blue-300">{s.step}</div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">{s.title}</h3>
                    <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <FAQ />

        {/* About section */}
        <section className="px-4 py-12 sm:px-6 sm:py-16">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">About JSONPretty</h2>
            <div className="mt-4 space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed text-left sm:text-center">
              <p>
                <strong>JSONPretty</strong> is a <strong>free online JSON formatter</strong> and validator built for developers, data engineers, and anyone who works with JSON data. Whether you need to pretty-print a minified API response, validate a configuration file, or compress JSON for production, JSONPretty handles it instantly.
              </p>
              <p>
                Unlike most online JSON tools that send your data to a server, JSONPretty runs <strong>100% in your browser</strong>. Your JSON never leaves your device — no uploads, no server processing, no data collection. This makes it safe for formatting sensitive configuration files, API keys, database exports, and any data you wouldn't want transmitted over the internet.
              </p>
              <p>
                Built with modern web standards, JSONPretty features <strong>syntax highlighting</strong> with distinct colors for keys, strings, numbers, booleans, and null values. The <strong>error detection</strong> system pinpoints the exact line and column of syntax errors, making it easy to fix broken JSON. Choose between 2-space, 4-space, 8-space, or tab indentation to match your team's coding standards.
              </p>
              <p>
                JSONPretty supports both <strong>light and dark themes</strong>, responds beautifully on mobile devices, and works offline after the initial page load. It's the JSON tool you'll bookmark and use every day.
              </p>
            </div>
          </div>
        </section>
        <DevToolsNav currentSlug="json-pretty" />
        <AdBanner className="mx-auto max-w-5xl px-4 py-6" />
      </main>
      <Footer />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
    </>
  );
}
