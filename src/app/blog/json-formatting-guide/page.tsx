import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "The Complete Guide to JSON Formatting: Pretty Print, Validate & Minify",
  description: "Learn everything about JSON formatting — from basic pretty printing to advanced validation techniques. A practical guide for developers working with JSON data.",
  alternates: { canonical: "/blog/json-formatting-guide" },
};

export default function JsonFormattingGuide() {
  return (
    <>
      <Header />
      <main className="px-4 py-12 sm:px-6 sm:py-16">
        <article className="prose prose-gray dark:prose-invert mx-auto max-w-3xl">
          <Link href="/blog" className="text-sm text-blue-600 dark:text-blue-400 no-underline hover:underline">← Back to Blog</Link>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            The Complete Guide to JSON Formatting: Pretty Print, Validate & Minify
          </h1>
          <time className="text-sm text-gray-400">March 10, 2026</time>

          <div className="mt-8 space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed">
            <p>
              JSON (JavaScript Object Notation) has become the universal language of data exchange on the web. Whether you&apos;re building REST APIs, configuring cloud infrastructure, or storing application settings, chances are you work with JSON every single day. But raw JSON — especially minified JSON from API responses — can be nearly impossible to read without proper formatting.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">What Is JSON Formatting (Pretty Printing)?</h2>
            <p>
              JSON formatting, commonly called &quot;pretty printing,&quot; is the process of adding whitespace, indentation, and line breaks to JSON data to make it human-readable. A minified JSON response like <code>{`{"name":"John","age":30,"active":true}`}</code> becomes a neatly structured, indented document that&apos;s easy to scan, debug, and understand.
            </p>
            <p>
              Pretty printing doesn&apos;t change the data itself — it only changes how it&apos;s displayed. The parsed result is identical whether the JSON uses 2-space indentation, 4-space indentation, or no whitespace at all.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Why JSON Formatting Matters for Developers</h2>
            <p>
              Working with unformatted JSON is like reading a novel with no paragraph breaks. Technically possible, but painfully slow. Here&apos;s why proper JSON formatting is essential in your development workflow:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Debugging API responses:</strong> When an API returns unexpected data, formatted JSON lets you immediately spot missing fields, wrong types, or malformed structures.</li>
              <li><strong>Code reviews:</strong> JSON configuration files in pull requests are much easier to review when properly formatted with consistent indentation.</li>
              <li><strong>Documentation:</strong> Including formatted JSON examples in API docs, READMEs, and tutorials makes them significantly more useful.</li>
              <li><strong>Comparing data:</strong> Formatted JSON with consistent indentation makes diff tools far more effective at showing meaningful changes.</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">How to Pretty Print JSON: Three Approaches</h2>
            <p>
              There are several ways to format JSON depending on your context and tools. Let&apos;s walk through the most common approaches developers use in 2026.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">1. Online JSON Formatters</h3>
            <p>
              The fastest way to format JSON is to use an online tool like <strong>JSONPretty</strong>. Paste your raw JSON, click Format, and instantly get syntax-highlighted, indented output. The best online formatters run entirely in your browser (client-side) so your data stays private — no server uploads needed.
            </p>
            <p>
              This approach is ideal for quick one-off formatting tasks: checking an API response, cleaning up a config file, or validating JSON you received from a colleague.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">2. Command-Line Tools</h3>
            <p>
              For developers who live in the terminal, command-line tools offer powerful JSON formatting. The most popular is <code>jq</code>, a lightweight command-line JSON processor:
            </p>
            <pre className="rounded-lg bg-gray-100 dark:bg-gray-800 p-4 text-sm overflow-x-auto"><code>{`# Format JSON from a file
cat data.json | jq '.'

# Format JSON from an API response  
curl -s https://api.example.com/data | jq '.'

# Python built-in
python -m json.tool data.json`}</code></pre>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">3. IDE Extensions and Built-in Features</h3>
            <p>
              Most modern IDEs and code editors have JSON formatting built in. VS Code formats JSON with <code>Shift+Alt+F</code> (or <code>Shift+Option+F</code> on Mac). JetBrains IDEs use <code>Ctrl+Alt+L</code>. These work great for JSON files in your project, but aren&apos;t as convenient for ad-hoc formatting of API responses or clipboard data.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">JSON Validation: Finding and Fixing Errors</h2>
            <p>
              Invalid JSON is one of the most common causes of application errors, especially when dealing with manually edited configuration files or data from external sources. Common JSON syntax errors include:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Trailing commas:</strong> JSON doesn&apos;t allow a comma after the last item in an array or object — unlike JavaScript.</li>
              <li><strong>Single quotes:</strong> JSON requires double quotes for strings. <code>{`{'key': 'value'}`}</code> is invalid.</li>
              <li><strong>Unquoted keys:</strong> All object keys must be double-quoted strings.</li>
              <li><strong>Missing commas:</strong> Forgetting a comma between key-value pairs or array items.</li>
              <li><strong>Comments:</strong> Standard JSON (RFC 8259) does not support comments of any kind.</li>
            </ul>
            <p>
              A good JSON validator doesn&apos;t just say &quot;invalid&quot; — it tells you the exact line and column where the error occurs. JSONPretty&apos;s built-in validator pinpoints errors precisely, making it easy to fix issues even in large JSON documents.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">JSON Minification: When Smaller Is Better</h2>
            <p>
              While pretty printing makes JSON readable, minification does the opposite — it strips all unnecessary whitespace to produce the smallest possible output. Minified JSON is ideal for:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>API responses:</strong> Smaller payloads mean faster network transfers and lower bandwidth costs.</li>
              <li><strong>Database storage:</strong> Storing minified JSON in NoSQL databases reduces storage requirements.</li>
              <li><strong>Configuration in environment variables:</strong> Minified JSON fits in a single line, perfect for env vars.</li>
              <li><strong>Embedding in HTML:</strong> Inline JSON in script tags should be minified for page load performance.</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">JSON Formatting Best Practices</h2>
            <p>
              After years of working with JSON across thousands of projects, the developer community has settled on several best practices for JSON formatting:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Use 2-space indentation</strong> for JSON files. This is the most common convention and balances readability with compactness.</li>
              <li><strong>Sort keys alphabetically</strong> in configuration files. This makes diffs cleaner and keys easier to find.</li>
              <li><strong>Validate before deploying.</strong> Always validate JSON configuration files as part of your CI/CD pipeline.</li>
              <li><strong>Use a privacy-first formatter</strong> for sensitive data. Never paste API keys, tokens, or personal data into a server-side formatting tool.</li>
              <li><strong>Minify in production, pretty-print in development.</strong> Your build pipeline should handle this automatically.</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Conclusion</h2>
            <p>
              JSON formatting is a small but essential part of the modern developer toolkit. Whether you&apos;re debugging an API response at 2 AM or reviewing a teammate&apos;s configuration changes, having a fast, reliable, and private JSON formatter makes the job easier. Try <Link href="/" className="text-blue-600 dark:text-blue-400 hover:underline">JSONPretty</Link> — it&apos;s free, runs in your browser, and handles everything from formatting to validation to minification.
            </p>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
