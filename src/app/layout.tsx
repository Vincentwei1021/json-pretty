import Script from "next/script";
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
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "JSONPretty" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "JSON Formatter & Validator | JSONPretty",
    description: "Pretty print, validate, and minify JSON. 100% client-side, no data uploaded.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5881105388002876" crossOrigin="anonymous" strategy="afterInteractive" />
        <script dangerouslySetInnerHTML={{ __html: `(function(){try{var d=document.documentElement;var t=localStorage.getItem('theme');if(t==='dark'||((!t)&&window.matchMedia('(prefers-color-scheme:dark)').matches)){d.classList.add('dark')}else{d.classList.remove('dark')}}catch(e){}})()` }} />
      </head>
      <body className={`${jakarta.variable} ${inter.variable} font-sans antialiased bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100`}>
        {children}
      </body>
    </html>
  );
}
