import React from "react";
import { NavLink } from "react-router-dom";

const linkBase =
  "rounded-md px-3 py-1.5 text-sm font-medium hover:bg-gray-100 transition";
const linkActive = "bg-gray-900 text-white hover:bg-gray-800";
const linkInactive = "text-gray-700";

const Layout = ({ children }) => {
  return (
    <div className="min-h-dvh bg-gray-50 text-gray-900">
      <header className="border-b bg-white">
        <div className="mx-auto max-w-4xl px-4 py-3 flex items-center justify-between">
          <h1 className="text-xl font-semibold tracking-tight">
            Node + React Template
          </h1>
          <nav className="flex items-center gap-2">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `${linkBase} ${isActive ? linkActive : linkInactive}`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/health"
              className={({ isActive }) =>
                `${linkBase} ${isActive ? linkActive : linkInactive}`
              }
            >
              Health
            </NavLink>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-4 py-6">
        <div className="grid gap-6">{children}</div>
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
