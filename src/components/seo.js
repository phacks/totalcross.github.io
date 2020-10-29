/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
// import { Helmet } from "react-helmet";
import { useLocation } from "@reach/router";
import { useStaticQuery, graphql } from "gatsby";
import { Title, Link, Meta } from "react-head";

function SEO({ description, lang, meta, title, image }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            defaultTitle: title
            defaultDescription: description
            siteUrl: url
            defaultImage: image
            twitterUsername
          }
        }
      }
    `
  );

  const { pathname } = useLocation();

  const {
    defaultTitle,
    defaultDescription,
    siteUrl,
    defaultImage,
    twitterUsername,
  } = site.siteMetadata;

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image || defaultImage}`,
    url: `${siteUrl}${pathname}`,
  };

  // const metaDescription = description || site.siteMetadata.defaultDescription;

  return (
    <>
      <Title>{seo.title}</Title>
      <Meta name="description" content={seo.description} />
      <Meta name="image" content={seo.image} />
      <Meta property="og:url" content={seo.url} />
      <Meta property="og:title" content={seo.title} />
      <Meta property="og:description" content={seo.description} />
      <Meta property="og:image" content={seo.image} />
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:creator" content={twitterUsername} />
      <Meta name="twitter:title" content={seo.title} />
      <Meta name="twitter:description" content={seo.description} />
      <Meta name="twitter:image" content={seo.image} />
      <Link rel="canonical" content="https://totalcross.com/" />
    </>
  );
}

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  article: PropTypes.bool,
};
SEO.defaultProps = {
  title: null,
  description: null,
  image: null,
  article: false,
};

export default SEO;
