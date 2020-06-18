import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import HeroHome from "../components/hero-home";
import Reasons from "../components/reasons-home";
import Partners from "../components/partners";
import Cases from "../components/cases";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HeroHome />
    <Reasons />
    <Partners />
    <Cases />
  </Layout>
);

export default IndexPage;
