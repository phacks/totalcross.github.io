import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import Img from "gatsby-image";
import CallToAction from "./call-to-action";

import styles from "./reasons-home.module.scss";
import HelloWorldGIF from "../imgs/TotalCrossHelloWorld.gif";
import { WHYTC, CROSS, EASY } from "../utils/links";

function Reasons() {
  const data = useStaticQuery(graphql`
    query {
      low: file(relativePath: { eq: "src/imgs/lowfootprint.png" }) {
        childImageSharp {
          fixed(width: 80, height: 80) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      test: file(relativePath: { eq: "src/imgs/gui.png" }) {
        childImageSharp {
          fixed(width: 80, height: 80) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      devices: file(relativePath: { eq: "src/imgs/cross.png" }) {
        childImageSharp {
          fixed(width: 80, height: 80) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      code: file(relativePath: { eq: "src/imgs/tccode.png" }) {
        childImageSharp {
          fixed(width: 534, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);
  return (
    <div>
      <div className={styles.containerIcons}>
        <Link to={WHYTC}>
          <div className={styles.containerIcon}>
            <div className={styles.icon}>
              <Img
                fixed={data.low.childImageSharp.fixed}
                alt="low footprint icon"
              />
            </div>
            <div className={styles.iconTextArea}>
              <div className={styles.iconTitle}>Low Footprint</div>
              <div className={styles.iconText}>
                Less than 10MB of footprint, ensuring high performance even when
                running in low-end devices
              </div>
            </div>
          </div>
        </Link>
        <Link to={EASY}>
          <div className={styles.containerIcon}>
            <div className={styles.icon}>
              <Img
                fixed={data.test.childImageSharp.fixed}
                alt="test footprint icon"
              />
            </div>
            <div className={styles.iconTextArea}>
              <div className={styles.iconTitle}>Easy to use GUI Creator</div>
              <div className={styles.iconText}>
                Basic knowledge of Java or Kotlin lets you build performing Apps
                for Android, Linux Arm, Windows and iOS.
              </div>
            </div>
          </div>
        </Link>
        <Link to={CROSS}>
          <div className={styles.containerIcon}>
            <div className={styles.icon}>
              <Img
                fixed={data.devices.childImageSharp.fixed}
                alt="desktop tablet and mobile icon"
              />
            </div>
            <div className={styles.iconTextArea}>
              <div className={styles.iconTitle}>Cross-Platform</div>
              <div className={styles.iconText}>
                Code once and run on every platform. Responsive User Interfaces
                providing same behaviour and usability.
              </div>
            </div>
          </div>
        </Link>
      </div>

      <div className={styles.containerCodeImage}>
        <img
          className={styles.image}
          src={HelloWorldGIF}
          alt="TotalCross code sample"
        />

        <div className={styles.codeText}>
          <p>
            TotalCross is an <strong>open source</strong> crossplatform SDK
            developed to make your life easier when creating mobile grade user
            experience to your embedded systems.
          </p>
          <p>All while delivering native performance with a low footprint.</p>
          <CallToAction color="black" />
        </div>
      </div>
    </div>
  );
}

export default Reasons;
