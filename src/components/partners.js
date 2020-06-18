import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

import styles from "./partners.module.scss";

function Partners() {
  const data = useStaticQuery(graphql`
    query {
      unifor: file(
        relativePath: { eq: "src/imgs/unifor-logo-horizontal-negative.png" }
      ) {
        childImageSharp {
          fixed(width: 253, height: 64) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      toradex: file(relativePath: { eq: "src/imgs/toradexwhite.png" }) {
        childImageSharp {
          fixed(width: 256, height: 90) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      uniaveiro: file(relativePath: { eq: "src/imgs/uawhite.png" }) {
        childImageSharp {
          fixed(width: 211, height: 79) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      bnb: file(relativePath: { eq: "src/imgs/Logo_BNB_branca.png" }) {
        childImageSharp {
          fixed(width: 192, height: 70) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      scandit: file(relativePath: { eq: "src/imgs/scandit.png" }) {
        childImageSharp {
          fixed(width: 200, height: 30) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Img
          fixed={data.bnb.childImageSharp.fixed}
          alt="Banco do Nordeste logo"
        />
      </div>
      <div className={styles.logo}>
        <Img fixed={data.toradex.childImageSharp.fixed} alt="Toradex logo" />
      </div>
      <div className={styles.logo}>
        <Img
          fixed={data.uniaveiro.childImageSharp.fixed}
          alt="Aveiro University logo"
        />
      </div>
      <div className={styles.logo}>
        <Img fixed={data.scandit.childImageSharp.fixed} alt="Scandit logo" />
      </div>
      <div className={styles.logo}>
        <Img fixed={data.unifor.childImageSharp.fixed} alt="Unifor logo" />
      </div>
    </div>
  );
}

export default Partners;
