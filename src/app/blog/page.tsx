import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Blog — JSON Tips & Developer Guides | JSONPretty",
  description: "Practical guides on JSON formatting, validation, and best practices for developers and data engineers.",
  alternates: { canonical: "/blog" },
};

const posts = [
  {
    slug: "json-formatting-guide",
    title: "The Complete Guide to JSON Formatting: Pretty Print, Validate & Minify",
    excerpt: "Learn everything about JSON formatting — from basic pretty printing to advanced validation techniques. A practical guide for developers.",
    date: "2026-03-10",
  },
  {
    slug: "json-vs-xml",
    title: "JSON vs XML in 2026: Which Data Format Should You Use?",
    excerpt: "A comprehensive comparison of JSON and XML for modern applications. Pros, cons, performance benchmarks, and when to use each format.",
    date: "2026-03-08",
  },
];

export default function BlogPage() {
  return (
    <>
      <Header />
      <main className="px-4 py-12 sm:px-6 sm:py-16">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">Blog</h1>
          <p className="mt-2 text-gray-600 dark:text-gray-300">Practical guides on JSON, data formats, and developer tools.</p>
          <div className="mt-10 space-y-8">
            {posts.map((post) => (
              <article key={post.slug} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md dark:border-gray-700 dark:bg-gray-800">
                <time className="text-xs font-medium text-gray-400">{post.date}</time>
                <h2 className="mt-2 text-xl font-bold text-gray-900 dark:text-white">
                  <Link href={`/blog/${post.slug}`} className="hover:text-blue-600 dark:hover:text-blue-400">{post.title}</Link>
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-300">{post.excerpt}</p>
                <Link href={`/blog/${post.slug}`} className="mt-3 inline-block text-sm font-semibold text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">Read more →</Link>
              </article>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
