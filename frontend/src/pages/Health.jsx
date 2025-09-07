import React from "react";
import Layout from "../components/Layout";
import PingPanel from "../components/PingPanel";
import EchoForm from "../components/EchoForm";

const Health = () => {
  return (
    <Layout>
      <div className="space-y-6">
        <PingPanel />
        <EchoForm />
      </div>
    </Layout>
  );
};

export default Health;
