import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

import styles from "./partners.module.scss";
import { PARTNERS } from "../utils/links";

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
      ossys: file(relativePath: { eq: "src/imgs/os-systems.png" }) {
        childImageSharp {
          fixed(width: 250, height: 32) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <a href={PARTNERS.BANCONOR} target="_blank" rel="noreferrer">
          <Img
            fixed={data.bnb.childImageSharp.fixed}
            alt="Banco do Nordeste logo"
          />
        </a>
      </div>
      <div className={styles.logo}>
        <a href={PARTNERS.TORADEX} target="_blank" rel="noreferrer">
          <Img fixed={data.toradex.childImageSharp.fixed} alt="Toradex logo" />
        </a>
      </div>
      <div className={styles.logo}>
        <a href={PARTNERS.UNIAVEIRO} target="_blank" rel="noreferrer">
          <Img
            fixed={data.uniaveiro.childImageSharp.fixed}
            alt="Aveiro University logo"
          />
        </a>
      </div>
      <div className={styles.logo}>
        <a href={PARTNERS.SCANDIT} target="_blank" rel="noreferrer">
          <Img fixed={data.scandit.childImageSharp.fixed} alt="Scandit logo" />
        </a>
      </div>
      <div className={styles.logo}>
        <a href={PARTNERS.UNIFOR} target="_blank" rel="noreferrer">
          <Img fixed={data.unifor.childImageSharp.fixed} alt="Unifor logo" />
        </a>
      </div>
      <div className={styles.logo}>
        <a href={PARTNERS.OSSYS} target="_blank" rel="noreferrer">
          <Img fixed={data.ossys.childImageSharp.fixed} alt="OS Systems logo" />
        </a>
      </div>
    </div>
  );
}

export default Partners;
