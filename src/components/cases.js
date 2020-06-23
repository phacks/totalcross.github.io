import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Button } from "react-bootstrap";
import Img from "gatsby-image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import CallToAction from "./call-to-action";

import styles from "./cases.module.scss";

const download = <FontAwesomeIcon className={styles.icon} icon={faDownload} />;

function Cases() {
  const data = useStaticQuery(graphql`
    query {
      alluviam: file(relativePath: { eq: "src/imgs/alluviam_01.png" }) {
        childImageSharp {
          fixed(width: 80, height: 80) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      copel: file(relativePath: { eq: "src/imgs/copel_01.png" }) {
        childImageSharp {
          fixed(width: 80, height: 80) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      escol: file(relativePath: { eq: "src/imgs/escolarize.png" }) {
        childImageSharp {
          fixed(width: 80, height: 80) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);
  return (
    <div>
      <div className={styles.casesContainer}>
        <h2 className={styles.casesTitle}>Built with TotalCross</h2>
        <h4 className={styles.casesSubtitle}>
          See what developers have already created with TotalCross
        </h4>
        <div className={styles.cardsContainer}>
          <div className={styles.cardContainer}>
            <div className={styles.cardHeader}>
              <Img
                className={styles.cardImage}
                fixed={data.alluviam.childImageSharp.fixed}
                alt="Alluviam icon"
              />
              <h6 className={styles.cardTitle}>Alluviam</h6>
            </div>
            <p className={styles.cardText}>
              Alluviam has created a bomb detection App using TotalCross and
              provides its technology for the North American, French and Belgium
              governments. Their developers have chosen TotalCross because of
              its high performance and stability.
            </p>
          </div>
          <div className={styles.cardContainer}>
            <div className={styles.cardHeader}>
              <Img
                className={styles.cardImage}
                fixed={data.copel.childImageSharp.fixed}
                alt="Copel icon"
              />
              <h6 className={styles.cardTitle}>Copel</h6>
            </div>
            <p className={styles.cardText}>
              COPEL is one of the largest Electricity Distributors in Brazil and
              is using TotalCross to build a field services App, running on
              Android and WinCE devices. TotalCross allowed its developers to
              code once and build performing Apps, even running offline data, on
              many devices.
            </p>
          </div>
          <div className={styles.cardContainer}>
            <div className={styles.cardHeader}>
              <Img
                className={styles.cardImage}
                fixed={data.escol.childImageSharp.fixed}
                alt="Escolarize icon"
              />
              <h6 className={styles.cardTitle}>Escolarize</h6>
            </div>
            <p className={styles.cardText}>
              Escolarize is a gamification platform to improve students leaning
              process. A group of high school students has created this App and
              have chosen TotalCross SDK because of how easy it is to use and
              fast way to code.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.callToActionContainer}>
        <div className={styles.callToActionCard}>
          <div className={styles.casesIcon}>{download}</div>
          <div className={styles.buttonArea}>
            <div className={styles.buttonAreaText}>
              Install TotalCross VSCode <br /> plugin for a quick start
            </div>
            <div className={styles.buttonAreaButton}>
              <CallToAction color="black" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cases;
