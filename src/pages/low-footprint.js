import React from "react";
import Img from "gatsby-image";
import { useStaticQuery, graphql, Link } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import LayoutWhyTC from "../components/layout-why-tc";
import NavBarWhyTC from "../components/navbar-why-tc";

import styles from "./low-footprint.module.scss";

const LowFootprint = () => {
  const data = useStaticQuery(graphql`
    query {
      process: file(relativePath: { eq: "src/imgs/process2.png" }) {
        childImageSharp {
          fluid(maxWidth: 385, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      process_mobile: file(
        relativePath: { eq: "src/imgs/process_mobile.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 385, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      vmdiff: file(relativePath: { eq: "src/imgs/vmdiff2.png" }) {
        childImageSharp {
          fluid(maxWidth: 370, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  const ListLink = (props) => (
    <li style={{ display: `inline-block` }}>
      {props.middle ? (
        <Link className={styles.menuItemMiddle} to={props.to}>
          {props.children}
        </Link>
      ) : (
        <Link className={styles.menuItem} to={props.to}>
          {props.children}
        </Link>
      )}
    </li>
  );
  return (
    <Layout>
      <SEO
        title="Low Footprint with TotalCross"
        description="TotalCross greatly improves application footprint, making your solution lighter."
      ></SEO>
      <LayoutWhyTC>
        <NavBarWhyTC active="Low Footprint" />
        <div className={styles.row}>
          <div className={styles.rowTextCenter}>
            TotalCross SDK has an innovative architecture to provide low
            footprint Apps even with high level programming languages, due to
            its bytecode and virtual machine.
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.rowImage}>
            <Img
              fluid={data.process.childImageSharp.fluid}
              alt="Illustration of TotalCross Process"
            />
          </div>
          <div className={styles.rowImageMobile}>
            <Img
              fluid={data.process_mobile.childImageSharp.fluid}
              alt="Illustration of TotalCross Process"
            />
          </div>
          <div className={styles.rowTextBlock}>
            <div className={styles.rowTitle}>
              <h1>TotalCross bytecode</h1>
            </div>
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
          <div className={styles.rowImageMobile}>
            <Img
              fluid={data.vmdiff.childImageSharp.fluid}
              alt="Illustration of the bytecode difference between TotalCross and Java"
            />
          </div>
          <div className={styles.rowTextBlock}>
            <div className={styles.rowTitle}>
              <h1>TotalCross Virtual Machine</h1>
            </div>
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
