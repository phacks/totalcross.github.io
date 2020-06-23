import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import BackgroundImage from "gatsby-background-image";

import styles from "./hero-home.module.scss";
import CallToAction from "./call-to-action";

function HeroHome() {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "src/imgs/bghome_sitetc.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return (
    <BackgroundImage
      Tag="section"
      className={styles.container}
      fluid={data.file.childImageSharp.fluid}
    >
      <div className={styles.containerTextBlock}>
        <h1 className={styles.title}>
          GUI Creator for Embedded and IoT Devices
        </h1>
        <h4 className={styles.subtitle}>
          Open Source SDK providing a fast and easy way build beautiful User
          Interfaces for Embedded, IoT, mobile, desktop, everything.
        </h4>
        <CallToAction color="green" />
      </div>
    </BackgroundImage>
  );
}

export default HeroHome;
