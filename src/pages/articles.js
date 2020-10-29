import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import ContentCard from "../components/content-card";

import styles from "../components/content-card.module.scss";

function MediumBlog() {
  const data = useStaticQuery(graphql`
    query {
      allMediumPost(sort: { fields: [createdAt], order: DESC }) {
        edges {
          node {
            id
            title
            createdAt(formatString: "DD MMMM YYYY")
            uniqueSlug
            virtuals {
              subtitle
              previewImage {
                imageId
              }
            }
            author {
              name
            }
          }
        }
      }
    }
  `);
  return (
    <Layout>
      <SEO
        title="TotalCross · Articles"
        description="It’s time to learn. Read our articles to know more about TotalCross’s updates, the different uses for our tool and innovations in the world of technology."
      ></SEO>
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.title}>
            <h1>Articles</h1>
          </div>
        </div>
        <div className={styles.cardExtra}></div>
        <div className={styles.container}>
          {data.allMediumPost.edges.map((edge) => {
            return (
              <ContentCard
                imageURL={`https://cdn-images-1.medium.com/fit/c/280/240/${edge.node.virtuals.previewImage.imageId}`}
                title={edge.node.title}
                subtitle={edge.node.virtuals.subtitle}
                author={edge.node.author.name}
                date={edge.node.createdAt}
                url={`https://medium.com/totalcross-community/${edge.node.uniqueSlug}`}
              />
            );
          })}
        </div>
      </div>
    </Layout>
  );
}

export default MediumBlog;
