import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-heading", weight: ["400","500","600","700","800"] });
const inter = Inter({ subsets: ["latin"], variable: "--font-body" });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://json.toolboxlite.com";

export const metadata: Metadata = {
  title: "JSON Formatter & Validator — Pretty Print JSON Online | JSONPretty",
  description: "Format, validate, and minify JSON instantly in your browser. Syntax highlighting, error detection, and one-click copy. 100% private — no data leaves your device.",
  keywords: ["json formatter", "json validator", "json pretty print", "json beautifier", "json minifier", "format json online", "json viewer"],
  metadataBase: new URL(siteUrl),
  alternates: { canonical: "/" },
  openGraph: {
    title: "JSON Formatter & Validator — Pretty Print Online | JSONPretty",
    description: "Format, validate, and minify JSON instantly. 100% private — runs entirely in your browser.",
    url: siteUrl,
    siteName: "JSONPretty",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "JSON Formatter & Validator | JSONPretty",
    description: "Pretty print, validate, and minify JSON. 100% client-side, no data uploaded.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: `(function(){try{var d=document.documentElement;var t=localStorage.getItem('theme');if(t==='dark'||((!t)&&window.matchMedia('(prefers-color-scheme:dark)').matches)){d.classList.add('dark')}else{d.classList.remove('dark')}}catch(e){}})()` }} />
      </head>
      <body className={`${jakarta.variable} ${inter.variable} font-sans antialiased bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100`}>
        {children}
      </body>
    </html>
  );
}
