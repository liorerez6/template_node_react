import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { echoAction, resetEcho } from "../store/actions/healthActions";
import { selectEcho } from "../store/selectors/healthSelectors";

const EchoForm = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector(selectEcho);
  const [message, setMessage] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    const trimmed = message.trim();
    if (!trimmed) return;
    dispatch(echoAction(trimmed));
  };

  const onReset = () => {
    setMessage("");
    dispatch(resetEcho());
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
        <button
          type="button"
          onClick={onReset}
          className="rounded-md border px-3 py-2 text-sm font-medium hover:bg-gray-50"
        >
          Reset
        </button>
      </form>

      <div className="mt-3 rounded-lg bg-gray-50 p-3 text-sm">
        <pre className="whitespace-pre-wrap break-words">
          {loading
            ? "Loading..."
            : error
            ? JSON.stringify({ ok: false, error }, null, 2)
            : data
            ? JSON.stringify(data, null, 2)
            : "No response yet."}
        </pre>
      </div>
    </section>
  );
};

export default EchoForm;
