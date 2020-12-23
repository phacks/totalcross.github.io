import React from "react";
import { Link } from "gatsby";
import { Navbar, Nav } from "react-bootstrap";
import Img from "gatsby-image";
import { useStaticQuery, graphql } from "gatsby";
import {
  WHYTC,
  COMMUNITY,
  DOCS,
  PRICING,
  ENTERPRISE,
  GITHUB,
  GET_STARTED,
} from "../utils/links";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import SocialNetwork from "../utils/social-network";

import styles from "./navbar.module.scss";
import TCButton from "./button";

const snGit = <FontAwesomeIcon className={styles.icon} icon={faGithub} />;

function NavBar() {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "src/imgs/logo-totalcross.png" }) {
        childImageSharp {
          fixed(width: 135, height: 30) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);
  return (
    <Navbar
      variant="dark"
      expand="lg"
      fixed="top"
      className={styles.navbarContainer}
    >
      {/* <div className={styles.logo}> */}
      <Navbar.Brand href="/">
        <Img
          className={styles.logo}
          fixed={data.logo.childImageSharp.fixed}
          alt="TotalCross logo"
        />
      </Navbar.Brand>
      {/* </div> */}
      {/* <div className={styles.mainMenu}> */}
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className={styles.navContainer}>
          <Link className={styles.navItem} to={WHYTC}>
            why totalcross?
          </Link>
          <Link className={styles.navItem} to={PRICING}>
            LICENSING
          </Link>
          <a
            className={styles.navItem}
            target="_blank"
            rel="noopener noreferrer"
            href={DOCS}
          >
            docs
          </a>
          <Link className={styles.navItem} to='/samples'>
            samples
          </Link>
          <Link className={styles.navItem} to={COMMUNITY}>
            community
          </Link>
          <a
            className={styles.navItem}
            target="_blank"
            rel="noopener noreferrer"
            href={ENTERPRISE}
          >
            ENTERPRISE
          </a>
        </Nav>
      </Navbar.Collapse>
      {/* </div> */}
      <div className={styles.socialNetworks}>
        <div
          style={{
            marginRight: "20px",
            marginLeft: "-20px",
            fontSize: "25px",
          }}
        >
          <SocialNetwork icon={snGit} link={GITHUB} />
        </div>
        <div className={styles.gsButton}>
          <a href={GET_STARTED}>GET STARTED</a>
        </div>
      </div>
    </Navbar>
  );
}

export default NavBar;
