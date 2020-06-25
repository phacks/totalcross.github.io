import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import Header from "./header";
import Footer from "./footer";
import { Helmet } from "react-helmet";

import favicon from "../imgs/favicon.ico";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./layout.module.scss";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div>
      <Helmet>
        <link rel="icon" href={favicon} />
      </Helmet>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div className={styles.site}>
        <main>
          <div className={styles.siteContent}>{children}</div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
