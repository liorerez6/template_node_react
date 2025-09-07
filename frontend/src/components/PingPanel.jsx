import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { pingAction } from "../store/actions/healthActions";
import { selectPing } from "../store/selectors/healthSelectors";

const PingPanel = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector(selectPing);

  const onPing = () => {
    dispatch(pingAction());
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

export default PingPanel;
