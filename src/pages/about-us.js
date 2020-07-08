import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import BackgroundImage from "gatsby-background-image";

import styles from "./about-us.module.scss";
import CarouselTeam from "../components/carousel-team";

function AboutUs() {
  const data = useStaticQuery(graphql`
    query {
      bg: file(relativePath: { eq: "src/imgs/bg_aboutus.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      timeline: file(relativePath: { eq: "src/imgs/timeline.png" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 939) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      timelinemob: file(relativePath: { eq: "src/imgs/timeline_mobile.png" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 271) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      mission: file(relativePath: { eq: "src/imgs/mission.png" }) {
        childImageSharp {
          fixed(width: 125, height: 104) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      vision: file(relativePath: { eq: "src/imgs/vision.png" }) {
        childImageSharp {
          fixed(width: 125, height: 104) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      values: file(relativePath: { eq: "src/imgs/values.png" }) {
        childImageSharp {
          fixed(width: 125, height: 104) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);
  return (
    <Layout>
      <SEO
        title="TotalCross History"
        description="TotalCross mission is  to be the software development tool most loved by Embedded Developers."
      />
      <BackgroundImage Tag="section" fluid={data.bg.childImageSharp.fluid}>
        <div className={styles.container}>
          <div className={styles.pageTitle}>Our History</div>
          <div className={styles.timeline}>
            <Img
              fluid={data.timeline.childImageSharp.fluid}
              alt="2007 TotalCross Lauch, 2017 Startup, 2019 TotalCross for Embedded, 2020 Open Source"
            />
          </div>
          <div className={styles.timelineMobile}>
            <Img
              fluid={data.timelinemob.childImageSharp.fluid}
              alt="2007 TotalCross Lauch, 2017 Startup, 2019 TotalCross for Embedded, 2020 Open Source"
            />
          </div>
          <div className={styles.cardsContainer}>
            <div className={styles.card}>
              <div className={styles.icon}>
                <Img
                  fixed={data.mission.childImageSharp.fixed}
                  alt="target illustration"
                />
              </div>
              <div className={styles.cardTitle}>Mission</div>
              <div className={styles.cardText}>
                Be the software development tool most loved by Embedded
                Developers.
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.icon}>
                <Img
                  fixed={data.vision.childImageSharp.fixed}
                  alt="eye illustration"
                />
              </div>
              <div className={styles.cardTitle}>Vision</div>
              <div className={styles.cardText}>
                Software development made fast and easy for every device on the
                planet.
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.icon}>
                <Img
                  fixed={data.values.childImageSharp.fixed}
                  alt="diamond illustration"
                />
              </div>
              <div className={styles.cardTitle}>Values</div>
              <div className={styles.cardText}>
                Ownership, Driven by Details and Developers First.
              </div>
            </div>
          </div>
          <div>
            <div className={styles.teamTitle}>Small Team. Big Hearts.</div>
            <CarouselTeam />
          </div>
        </div>
      </BackgroundImage>
    </Layout>
  );
}

export default AboutUs;
