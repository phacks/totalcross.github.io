import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import BackgroundImage from "gatsby-background-image";
import Img from "gatsby-image";

import styles from "./hero-home.module.scss";
import CallToAction from "./call-to-action";

function HeroHome() {
  const data = useStaticQuery(graphql`
    query {
      bg: file(relativePath: { eq: "src/imgs/bghome_sitetc.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      rasp: file(relativePath: { eq: "src/imgs/rasp_01.png" }) {
        childImageSharp {
          fixed(width: 700) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);
  return (
    <BackgroundImage
      Tag="section"
      className={styles.container}
      fluid={data.bg.childImageSharp.fluid}
    >
      <div className={styles.containerTextBlock}>
        <h1 className={styles.title}>
          The fastest way to build GUI for embedded devices
        </h1>
        <h4 className={styles.subtitle}>
          Open Source SDK providing a fast and easy way to build beautiful User
          Interfaces for Embedded, IoT, mobile, desktop, everything.
        </h4>
        {/* <CallToAction color="green" /> */}
      </div>
      <div className={styles.img}>
        <Img
          fixed={data.rasp.childImageSharp.fixed}
          alt="Embedded System with display"
        />
      </div>
    </BackgroundImage>
  );
}

export default HeroHome;
