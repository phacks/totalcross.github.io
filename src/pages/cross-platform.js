import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import SEO from "../components/seo";
import Layout from "../components/layout";
import LayoutWhyTC from "../components/layout-why-tc";
import NavBarWhyTC from "../components/navbar-why-tc";

import styles from "./cross-platform.module.scss";

const LowFootprint = () => {
  const data = useStaticQuery(graphql`
    query {
      crossplatform: file(relativePath: { eq: "src/imgs/crossplatform.png" }) {
        childImageSharp {
          fluid(maxWidth: 645, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return (
    <Layout>
      <SEO
        title="TotalCross is cross-platform"
        description="With TotalCross you can develop your application in Java and deploy it to iOS, Android, Windows, Linux, and create solutions for embedded/IoT devices, like Raspberry Pi, Toradex or Beaglebone."
      ></SEO>
      <LayoutWhyTC>
        <NavBarWhyTC active="Cross-Platform" />
        <div className={styles.column}>
          <div className={styles.columnTextBlock}>
            <div className={styles.columnTitle}>
              One source code. All devices.
            </div>
            <div className={styles.columnText}></div>
          </div>
          <div className={styles.columnImage}>
            <Img
              fluid={data.crossplatform.childImageSharp.fluid}
              alt="Illustraiton of all devices that run TotalCross"
            />
          </div>
        </div>
      </LayoutWhyTC>
    </Layout>
  );
};

export default LowFootprint;
