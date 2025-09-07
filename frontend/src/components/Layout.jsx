import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="min-h-dvh bg-gray-50 text-gray-900">
      <header className="border-b bg-white">
        <div className="mx-auto max-w-4xl px-4 py-3">
          <h1 className="text-xl font-semibold tracking-tight">Node + React Template</h1>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-4 py-6">
        <div className="grid gap-6">
          {children}
        </div>
      </main>

      <footer className="mt-8 border-t bg-white">
        <div className="mx-auto max-w-4xl px-4 py-4 text-sm text-gray-500">
          Backend: <code>/api/health/ping</code>, <code>/api/health/echo</code>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
