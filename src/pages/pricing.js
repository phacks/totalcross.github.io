import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import PaymentPlans from "../components/payment-plans";

function Pricing() {
  return (
    <Layout>
      <SEO title="TotalCross Pricing"></SEO>
      <PaymentPlans />
    </Layout>
  );
}

export default Pricing;
