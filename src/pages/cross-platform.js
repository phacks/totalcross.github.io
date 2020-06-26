import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import LayoutWhyTC from "../components/layout-why-tc";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

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
      <SEO title="Low footprint with TotalCross"></SEO>
      <LayoutWhyTC page="low">
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
