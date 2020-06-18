import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import BackgroundImage from "gatsby-background-image";

import styles from "./hero-community.module.scss";
import CrossyOnABranch from "../utils/crossy-on-branch";

function HeroCommunity() {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "src/imgs/bg_contactus_01.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return (
    <div className={styles.containerWithCrossy}>
      <BackgroundImage
        Tag="section"
        className={styles.container}
        fluid={data.file.childImageSharp.fluid}
      >
        <h1 className={styles.title}>Join the TotalCross Community</h1>
      </BackgroundImage>
      <CrossyOnABranch />
    </div>
  );
}

export default HeroCommunity;
