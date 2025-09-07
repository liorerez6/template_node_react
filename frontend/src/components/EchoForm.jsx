import React, { useState } from "react";

const EchoForm = () => {
  const [message, setMessage] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    try {
      setLoading(true);
      setResult(null);
      const res = await fetch("/api/health/echo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message }),
      });
      const data = await res.json();
      setResult(data);
    } catch (e) {
      setResult({ ok: false, error: e?.message || "Echo failed" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="rounded-xl border bg-white p-4">
      <h2 className="text-lg font-medium">Echo Message</h2>

      <form onSubmit={onSubmit} className="mt-3 flex items-center gap-2">
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type something…"
          className="w-full rounded-md border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-gray-300"
        />
        <button
          type="submit"
          disabled={loading || !message.trim()}
          className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? "Sending…" : "Send"}
        </button>
      </form>

      <div className="mt-3 rounded-lg bg-gray-50 p-3 text-sm">
        <pre className="whitespace-pre-wrap break-words">
          {result ? JSON.stringify(result, null, 2) : "No response yet."}
        </pre>
      </div>
    </section>
  );
};

export default EchoForm;
