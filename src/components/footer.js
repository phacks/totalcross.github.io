import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import {
  ABOUT,
  GET_STARTED,
  DOCS,
  CONTACT,
  MEDIUM,
  GITHUB,
  EVENTS,
  YOUTUBE,
} from "../utils/links";

import SocialNetworks from "../utils/social-networks";

import styles from "./footer.module.scss";

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "src/imgs/logo-totalcross.png" }) {
        childImageSharp {
          fixed(width: 180, height: 30) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);
  return (
    <footer className={styles.container}>
      <div className={styles.footer}>
        <div className={styles.footerNav}>
          <div className={styles.footerNavGroup}>
            <h5 className={styles.footerNavSubtitle}>Resources</h5>
            <ul className={styles.footerNavItems}>
              <li>
                <a
                  className={styles.footerNavItem}
                  href={GET_STARTED}
                  target="_blank"
                  rel="noreferrer"
                >
                  Get Started
                </a>
              </li>
              <li>
                <a
                  className={styles.footerNavItem}
                  href={DOCS}
                  target="_blank"
                  rel="noreferrer"
                >
                  Docs
                </a>
              </li>
              <li>
                <a
                  className={styles.footerNavItem}
                  href={GITHUB}
                  target="_blank"
                  rel="noreferrer"
                >
                  Contribute
                </a>
              </li>
            </ul>
          </div>
          <div className={styles.footerNavGroup}>
            <h5 className={styles.footerNavSubtitle}>Community</h5>
            <ul className={styles.footerNavItems}>
              <li>
                <a
                  className={styles.footerNavItem}
                  href={GITHUB}
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  className={styles.footerNavItem}
                  href={YOUTUBE}
                  target="_blank"
                  rel="noreferrer"
                >
                  YouTube
                </a>
              </li>
              <li>
                <a
                  className={styles.footerNavItem}
                  href={MEDIUM}
                  target="_blank"
                  rel="noreferrer"
                >
                  Medium
                </a>
              </li>
              <li>
                <Link className={styles.footerNavItem} to={EVENTS}>
                  Events
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles.footerNavGroup}>
            <h5 className={styles.footerNavSubtitle}>About Us</h5>
            <ul className={styles.footerNavItems}>
              <li>
                <Link className={styles.footerNavItem} to={ABOUT}>
                  Our History
                </Link>
              </li>
              <li>
                <Link className={styles.footerNavItem} to={CONTACT}>
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div
          style={{
            padding: "40px",
            textAlign: "right",
          }}
        >
          <Img fixed={data.logo.childImageSharp.fixed} alt="TotalCross logo" />
          <div>
            <SocialNetworks />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
