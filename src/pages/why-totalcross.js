import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import LayoutWhyTC from "../components/layout-why-tc";
import LowFootprint from "./low-footprint";

function WhyTC() {
  return (
    <Layout>
      <SEO title="Reasons to choose TotalCross for your embedded project"></SEO>
      <LayoutWhyTC>
        <LowFootprint />
      </LayoutWhyTC>
    </Layout>
  );
}

export default WhyTC;
