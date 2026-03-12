export default function Hero() {
  return (
    <section className="px-4 pt-12 pb-4 sm:px-6 sm:pt-16 sm:pb-6">
      <div className="mx-auto max-w-3xl text-center animate-fade-in">
        <div className="mb-4 inline-block rounded-full bg-blue-100 px-4 py-1.5 text-sm font-semibold text-blue-700 dark:bg-blue-900/40 dark:text-blue-300">
          🔒 Privacy First — 100% Client-Side
        </div>
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl lg:text-6xl">
          JSON Formatter<br />
          <span className="text-blue-600 dark:text-blue-400">& Validator</span>
        </h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 sm:text-xl">
          Pretty print, validate, and minify JSON instantly. Your data never leaves your browser — no servers, no uploads, completely private.
        </p>
      </div>
    </section>
  );
}
