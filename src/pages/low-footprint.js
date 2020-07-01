import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import LayoutWhyTC from "../components/layout-why-tc";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

import styles from "./low-footprint.module.scss";

const LowFootprint = () => {
  const data = useStaticQuery(graphql`
    query {
      process: file(relativePath: { eq: "src/imgs/process.png" }) {
        childImageSharp {
          fluid(maxWidth: 385, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      vmdiff: file(relativePath: { eq: "src/imgs/vmdiff.png" }) {
        childImageSharp {
          fluid(maxWidth: 370, quality: 100) {
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
        <div className={styles.row}>
          <div className={styles.rowImage}>
            <Img
              fluid={data.process.childImageSharp.fluid}
              alt="Illustration of TotalCross Process"
            />
          </div>
          <div className={styles.rowTextBlock}>
            <div className={styles.rowTitle}>TotalCross bytecode</div>
            <div className={styles.rowText}>
              {" "}
              Even coding with Java/Kotlin, TC SDK uses anything of these
              languages on the device. The Java bytecode is converted to
              TotalCross bytecode what is optimized. It has been created based
              on performance statistical researches to identify the operations
              that are frequently used and have more impact in performance.
              These operations are compressed in order to reduce the assembly of
              instructions and to provide low footprint.{" "}
            </div>
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.rowTextBlock}>
            <div className={styles.rowTitle}>TotalCross Virtual Machine</div>
            <div className={styles.rowText}>
              Instead of Java Virtual Machine (JVM), which is Stack based,
              TotalCross Virtual Machine (TCVM) is Register based. In few words,
              it means a simple addition operation, which loads 4 instructions
              in JVM, it requires loading only instruction in TCVM, ensuring
              high performance.
            </div>
          </div>
          <div className={styles.rowImage}>
            <Img
              fluid={data.vmdiff.childImageSharp.fluid}
              alt="Illustration of the bytecode difference between TotalCross and Java"
            />
          </div>
        </div>
      </LayoutWhyTC>
    </Layout>
  );
};

export default LowFootprint;