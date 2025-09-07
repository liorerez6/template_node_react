import React from "react";
import Layout from "../components/Layout";

const Home = () => {
  return (
    <Layout>
      <section className="rounded-xl border bg-white p-6">
        <h2 className="text-lg font-semibold">Welcome</h2>
        <p className="mt-2 text-sm text-gray-600">
          This is a minimal Node + React + Axios + Redux Toolkit template with
          React Router. Use the Health page to ping/echo the backend.
        </p>
      </section>
    </Layout>
  );
};

export default Home;
