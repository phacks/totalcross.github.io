import React from "react";
import Layout from "../components/layout";

export default ({ children }) => (
  <div>
    <Layout>
      {/* <h1>.</h1> */}
      {children}
    </Layout>
  </div>
);
