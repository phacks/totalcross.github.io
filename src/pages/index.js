import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import HeroHome from "../components/hero-home";
import Reasons from "../components/reasons-home";
import Partners from "../components/partners";
import Cases from "../components/cases";

const IndexPage = () => (
  <Layout>
    <SEO
      title="TotalCross · GUI Creator For Embedded, Mobile... Everything!"
      description="Build beautiful and modern Graphical User Interfaces for embedded, IoT, mobile and desktop. A cross-platform tool that lets you develop apps in Java."
    />
    <HeroHome />
    <Reasons />
    <Partners />
    <Cases />
  </Layout>
);

export default IndexPage;
