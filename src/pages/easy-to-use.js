import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import LayoutWhyTC from "../components/layout-why-tc";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

import styles from "./easy-to-use.module.scss";

const LowFootprint = () => {
  const data = useStaticQuery(graphql`
    query {
      lang: file(relativePath: { eq: "src/imgs/lang.png" }) {
        childImageSharp {
          fluid(maxWidth: 370, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      endtoend: file(relativePath: { eq: "src/imgs/endtoend.png" }) {
        childImageSharp {
          fluid(maxWidth: 370, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      responsive: file(relativePath: { eq: "src/imgs/responsive.png" }) {
        childImageSharp {
          fluid(maxWidth: 370, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      anyide: file(relativePath: { eq: "src/imgs/anyide.png" }) {
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
              fluid={data.lang.childImageSharp.fluid}
              alt="Illustration of High Level Languages"
              className={styles.image}
            />
            <div className={styles.rowTextBlock}>
              <div className={styles.rowTitle}>High Level Languages</div>
              <div className={styles.rowText}></div>
            </div>
          </div>
          <div className={styles.rowImage}>
            <Img
              fluid={data.anyide.childImageSharp.fluid}
              alt="Illustration of diffenrent IDEs"
              className={styles.image}
            />
            <div className={styles.rowTextBlock}>
              <div className={styles.rowTitle}>
                On your <br />
                favorite IDE
              </div>
              <div className={styles.rowText}></div>
            </div>
          </div>
          <div className={styles.rowImage}>
            <Img
              fluid={data.endtoend.childImageSharp.fluid}
              alt="Illustration of End to End applications"
              className={styles.image}
            />
            <div className={styles.rowTextBlock}>
              <div className={styles.rowTitle}>
                Build end-to-end appplications
              </div>
              <div className={styles.rowText}></div>
            </div>
          </div>
          <div className={styles.rowImage}>
            <Img
              fluid={data.responsive.childImageSharp.fluid}
              alt="Illustration of TotalCross Process"
              className={styles.image}
            />
            <div className={styles.rowTextBlock}>
              <div className={styles.rowTitle}>Responsive</div>
              <div className={styles.rowText}></div>
            </div>
          </div>
        </div>
      </LayoutWhyTC>
    </Layout>
  );
};

export default LowFootprint;
