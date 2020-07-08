import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import PaymentPlans from "../components/payment-plans";

function Pricing() {
  return (
    <Layout>
      <SEO
        title="TotalCross Pricing"
        description="Understand what you get with TotalCross Free version under Open Source Licence LPGL v2.1"
      ></SEO>
      <PaymentPlans />
    </Layout>
  );
}

export default Pricing;
