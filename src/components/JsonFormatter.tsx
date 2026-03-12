"use client";
import { useState, useCallback } from "react";
import CopyButton from "./CopyButton";

const SAMPLE_JSON = `{
  "name": "JSONPretty",
  "version": "1.0.0",
  "features": ["format", "validate", "minify"],
  "private": true,
  "stats": { "users": 10000, "rating": 4.9 }
}`;

interface JsonError {
  message: string;
  line: number;
  column: number;
}

function findJsonError(input: string): JsonError | null {
  try {
    JSON.parse(input);
    return null;
  } catch (e) {
    const msg = (e as SyntaxError).message;
    const posMatch = msg.match(/position\s+(\d+)/i);
    if (posMatch) {
      const pos = parseInt(posMatch[1], 10);
      const before = input.slice(0, pos);
      const line = (before.match(/\n/g) || []).length + 1;
      const lastNl = before.lastIndexOf("\n");
      const column = pos - lastNl;
      return { message: msg, line, column };
    }
    return { message: msg, line: 1, column: 1 };
  }
}

function highlightJson(json: string): string {
  return json.replace(
    /("(\\u[\da-fA-F]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g,
    (match) => {
      let cls = "json-number";
      if (match.startsWith('"')) {
        cls = match.endsWith(":") ? "json-key" : "json-string";
      } else if (/true|false/.test(match)) {
        cls = "json-boolean";
      } else if (match === "null") {
        cls = "json-null";
      }
      return `<span class="${cls}">${match}</span>`;
    }
  );
}

export default function JsonFormatter() {
  const [input, setInput] = useState(SAMPLE_JSON);
  const [output, setOutput] = useState("");
  const [highlighted, setHighlighted] = useState("");
  const [error, setError] = useState<JsonError | null>(null);
  const [indent, setIndent] = useState(2);
  const [stats, setStats] = useState({ lines: 0, bytes: 0, keys: 0 });

  const countKeys = (obj: unknown): number => {
    if (typeof obj !== "object" || obj === null) return 0;
    if (Array.isArray(obj)) return obj.reduce((acc, v) => acc + countKeys(v), 0);
    return Object.keys(obj).reduce((acc, k) => acc + 1 + countKeys((obj as Record<string, unknown>)[k]), 0);
  };

  const format = useCallback(() => {
    if (!input.trim()) {
      setOutput("");
      setHighlighted("");
      setError(null);
      setStats({ lines: 0, bytes: 0, keys: 0 });
      return;
    }
    const err = findJsonError(input);
    if (err) {
      setError(err);
      setOutput("");
      setHighlighted("");
      return;
    }
    const parsed = JSON.parse(input);
    const formatted = JSON.stringify(parsed, null, indent);
    setOutput(formatted);
    setHighlighted(highlightJson(formatted));
    setError(null);
    setStats({
      lines: formatted.split("\n").length,
      bytes: new Blob([formatted]).size,
      keys: countKeys(parsed),
    });
  }, [input, indent]);

  const minify = useCallback(() => {
    if (!input.trim()) return;
    const err = findJsonError(input);
    if (err) {
      setError(err);
      return;
    }
    const parsed = JSON.parse(input);
    const minified = JSON.stringify(parsed);
    setOutput(minified);
    setHighlighted(highlightJson(minified));
    setError(null);
    setStats({
      lines: 1,
      bytes: new Blob([minified]).size,
      keys: countKeys(parsed),
    });
  }, [input]);

  const handlePaste = () => {
    navigator.clipboard.readText().then((text) => {
      setInput(text);
    }).catch(() => {});
  };

  const clear = () => {
    setInput("");
    setOutput("");
    setHighlighted("");
    setError(null);
    setStats({ lines: 0, bytes: 0, keys: 0 });
  };

  const loadSample = () => {
    setInput(SAMPLE_JSON);
    setError(null);
  };

  return (
    <section id="formatter" className="px-4 py-8 sm:px-6 sm:py-12">
      <div className="mx-auto max-w-6xl">
        {/* Toolbar */}
        <div className="mb-4 flex flex-wrap items-center gap-3">
          <button onClick={format} className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600">
            ✨ Format
          </button>
          <button onClick={minify} className="rounded-lg bg-gray-700 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-gray-800 dark:bg-gray-600 dark:hover:bg-gray-500">
            📦 Minify
          </button>
          <button onClick={handlePaste} className="rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700">
            📋 Paste
          </button>
          <button onClick={clear} className="rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700">
            🗑️ Clear
          </button>
          <button onClick={loadSample} className="rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700">
            📄 Sample
          </button>
          <div className="ml-auto flex items-center gap-2">
            <label htmlFor="indent" className="text-sm text-gray-600 dark:text-gray-400">Indent:</label>
            <select id="indent" value={indent} onChange={(e) => setIndent(Number(e.target.value))} className="rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300">
              <option value={2}>2 spaces</option>
              <option value={4}>4 spaces</option>
              <option value={8}>8 spaces</option>
              <option value={1}>Tab</option>
            </select>
          </div>
        </div>

        {/* Error banner */}
        {error && (
          <div className="mb-4 rounded-lg border border-red-300 bg-red-50 px-4 py-3 text-sm text-red-700 dark:border-red-700 dark:bg-red-900/30 dark:text-red-300">
            <strong>❌ Invalid JSON</strong> — Line {error.line}, Column {error.column}: {error.message}
          </div>
        )}

        {/* Editor panels */}
        <div className="grid gap-4 lg:grid-cols-2">
          {/* Input */}
          <div className="flex flex-col">
            <div className="mb-2 flex items-center justify-between">
              <h2 className="text-sm font-semibold text-gray-700 dark:text-gray-300">Input</h2>
              <span className="text-xs text-gray-400">{new Blob([input]).size} bytes</span>
            </div>
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              spellCheck={false}
              placeholder="Paste your JSON here..."
              className="min-h-[400px] w-full flex-1 resize-y rounded-xl border border-gray-300 bg-white p-4 font-mono text-sm leading-relaxed text-gray-800 shadow-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200 dark:focus:border-blue-400"
            />
          </div>
          {/* Output */}
          <div className="flex flex-col">
            <div className="mb-2 flex items-center justify-between">
              <h2 className="text-sm font-semibold text-gray-700 dark:text-gray-300">Output</h2>
              <div className="flex items-center gap-3">
                {output && (
                  <span className="text-xs text-gray-400">
                    {stats.lines} lines · {stats.bytes} bytes · {stats.keys} keys
                  </span>
                )}
                {output && <CopyButton text={output} />}
              </div>
            </div>
            <div className="min-h-[400px] flex-1 overflow-auto rounded-xl border border-gray-300 bg-white p-4 shadow-sm dark:border-gray-600 dark:bg-gray-800">
              {highlighted ? (
                <pre className="font-mono text-sm leading-relaxed whitespace-pre-wrap break-all" dangerouslySetInnerHTML={{ __html: highlighted }} />
              ) : (
                <p className="font-mono text-sm text-gray-400 dark:text-gray-500">Formatted JSON will appear here…</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
