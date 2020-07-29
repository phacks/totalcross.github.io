import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import ContentCard from "../components/content-card";

import styles from "../components/content-card.module.scss";
const check = <FontAwesomeIcon className={styles.icon} icon={faCheckCircle} />;

function Articles() {
  const data = useStaticQuery(graphql`
    query {
      bm20200707: file(
        relativePath: { eq: "src/imgs/articles/blogBM20200707.png" }
      ) {
        childImageSharp {
          fixed(width: 320, height: 170) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      pm20200526: file(
        relativePath: { eq: "src/imgs/articles/blogPM20200526.png" }
      ) {
        childImageSharp {
          fixed(width: 320, height: 170) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);
  const articles = [
    {
      image: data.bm20200707.childImageSharp.fixed,
      title:
        "Creating and using your own external Java library for your TotalCross Applications",
      subtitle: "",
      author: "Bruno Muniz",
      date: "Jul 7",
      duration: "5",
      url:
        "https://medium.com/totalcross-community/creating-and-using-your-own-external-java-library-for-your-totalcross-applications-9943a9b3a5aa",
    },
    {
      image: data.pm20200526.childImageSharp.fixed,
      title: "Creating a dashboard for industrial automation",
      subtitle: "",
      author: "Patrick Martins",
      date: "May 26",
      duration: "8",
      url:
        "https://medium.com/totalcross-community/creating-a-dashboard-user-interface-for-embedded-devices-6bc4a7a020e0",
    },
  ];
  return (
    <Layout>
      <SEO
        title="TotalCross Articles"
        description="Learn how to use totalcross with out tutorials"
      ></SEO>
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.title}>Articles</div>
        </div>
        <div className={styles.cardExtra}></div>
        <div className={styles.container}>
          {articles.map((card) => (
            <ContentCard
              image={card.image}
              title={card.title}
              subtitle={card.subtitle}
              author={card.author}
              date={card.date}
              duration={card.size}
              url={card.url}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default Articles;
