import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import ContentCard from "../components/content-card";

import styles from "../components/payment-plans.module.scss";
const check = <FontAwesomeIcon className={styles.icon} icon={faCheckCircle} />;

function Articles() {
  const data = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "src/imgs/mission.png" }) {
        childImageSharp {
          fixed(width: 100, height: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);
  const articles = [
    {
      image: data.image.childImageSharp.fixed,
      title:
        "Creating and using your own external Java library for your TotalCross Applications",
      subtitle: "",
      author: "Bruno Muniz",
      date: "Jul 7",
      duration: "5",
      url: "",
    },
  ];
  return (
    <Layout>
      <SEO
        title="TotalCross Articles"
        description="Learn how to use totalcross with out tutorials"
      ></SEO>
      <div>
        <h2>Article</h2>
        <div style={{ border: "solid red" }}>
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
