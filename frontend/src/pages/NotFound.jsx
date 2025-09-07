import React from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";

const NotFound = () => {
  return (
    <Layout>
      <section className="rounded-xl border bg-white p-6 text-center">
        <h2 className="text-lg font-semibold">404 — Page Not Found</h2>
        <p className="mt-2 text-sm text-gray-600">
          The page you’re looking for doesn’t exist.
        </p>
        <Link
          to="/"
          className="mt-4 inline-block rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white hover:bg-gray-800"
        >
          Go Home
        </Link>
      </section>
    </Layout>
  );
};

export default NotFound;
