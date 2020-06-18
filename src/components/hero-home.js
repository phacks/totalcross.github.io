import React from "react";
import { Button } from "react-bootstrap";
import { useStaticQuery, graphql } from "gatsby";
import BackgroundImage from "gatsby-background-image";

import styles from "./hero-home.module.scss";

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
        <Button
          href="https://learn.totalcross.com/documentation/get-started/install/"
          target="_blank"
          className={styles.button}
          variant="success"
        >
          Try in 8 minutes
        </Button>
      </div>
    </BackgroundImage>
  );
}

export default HeroHome;
