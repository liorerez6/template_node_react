import React from "react";
import Layout from "./components/Layout.jsx";
import PingPanel from "./components/PingPanel.jsx";
import EchoForm from "./components/EchoForm.jsx";

const App = () => {
  return (
    <Layout>
      <div className="space-y-6">
        <PingPanel />
        <EchoForm />
      </div>
    </Layout>
  );
};

export default App;
