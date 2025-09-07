import React, { useState } from "react";

const PingPanel = () => {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const onPing = async () => {
    try {
      setLoading(true);
      setResult(null);
      const res = await fetch("/api/health/ping");
      const data = await res.json();
      setResult(data);
    } catch (e) {
      setResult({ ok: false, error: e?.message || "Ping failed" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="rounded-xl border bg-white p-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-medium">Ping Backend</h2>
        <button
          onClick={onPing}
          disabled={loading}
          className="rounded-md border px-3 py-1.5 text-sm font-medium hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? "Pinging..." : "Ping"}
        </button>
      </div>

      <div className="mt-3 rounded-lg bg-gray-50 p-3 text-sm">
        <pre className="whitespace-pre-wrap break-words">
          {result ? JSON.stringify(result, null, 2) : "No response yet."}
        </pre>
      </div>
    </section>
  );
};

export default PingPanel;
