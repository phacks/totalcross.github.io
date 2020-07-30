import React from "react";
import { useStaticQuery, graphql } from "gatsby";
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
      bm20200529: file(
        relativePath: { eq: "src/imgs/articles/blogBM20200529.png" }
      ) {
        childImageSharp {
          fixed(width: 320, height: 170) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      bm20200720: file(
        relativePath: { eq: "src/imgs/articles/blogBM20200720.png" }
      ) {
        childImageSharp {
          fixed(width: 320, height: 170) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      bm20200603: file(
        relativePath: { eq: "src/imgs/articles/blogBM20200603.jpeg" }
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
      pm20200709: file(
        relativePath: { eq: "src/imgs/articles/blogPM20200709.png" }
      ) {
        childImageSharp {
          fixed(width: 320, height: 170) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      lg20200724: file(
        relativePath: { eq: "src/imgs/articles/blogLG20200724.png" }
      ) {
        childImageSharp {
          fixed(width: 320, height: 170) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      lg20200422: file(
        relativePath: { eq: "src/imgs/articles/blogLG20200422.png" }
      ) {
        childImageSharp {
          fixed(width: 320, height: 170) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      ac20200722: file(
        relativePath: { eq: "src/imgs/articles/blogAC20200722.jpeg" }
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
      date: "Jul 7, 2020",
      duration: "5",
      url:
        "https://medium.com/totalcross-community/creating-and-using-your-own-external-java-library-for-your-totalcross-applications-9943a9b3a5aa",
    },
    {
      image: data.pm20200526.childImageSharp.fixed,
      title: "Creating a dashboard for industrial automation",
      subtitle:
        "The purpose of this article is to show how to create a panel interface for industrial automation.",
      author: "Patrick Martins",
      date: "May 26, 2020",
      duration: "8",
      url:
        "https://medium.com/totalcross-community/creating-a-dashboard-user-interface-for-embedded-devices-6bc4a7a020e0",
    },
    {
      image: data.bm20200529.childImageSharp.fixed,
      title: "A new way to build cross-platform UIs for Linux ARM devices",
      subtitle:
        "A proof of concept using AndroidXML and TotalCross provides an easier way of creating UIs for Raspberry Pi and other devices.",
      author: "Bruno Muniz",
      date: "May 29, 2020",
      duration: "",
      url: "https://opensource.com/article/20/5/linux-arm-ui",
    },
    {
      image: data.pm20200709.childImageSharp.fixed,
      title: "Expand your Raspberry Pi with Arduino ports",
      subtitle:
        "For this project, explore Raspberry Pi port expansions using Java, serial, and Arduino.",
      author: "Patrick Martins",
      date: "Jul 09, 2020",
      duration: "",
      url: "https://opensource.com/article/20/7/arduino-raspberry-pi",
    },
    {
      image: data.bm20200720.childImageSharp.fixed,
      title: "Open source cross-platform development with TotalCross",
      subtitle:
        "Opinions to the contrary, TotalCross Virtual Machine is not another Java Virtual Machine.",
      author: "Bruno Muniz",
      date: "Jul 09, 2020",
      duration: "",
      url: "https://opensource.com/article/20/7/arduino-raspberry-pi",
    },
    {
      image: data.lg20200724.childImageSharp.fixed,
      title: "Choosing open source as a marketing strategy",
      subtitle:
        "More than contributions to source code and word-of-mouth, open source software is also the best product marketing strategy.",
      author: "Lucas Galvanini and Nathalie Risbakk",
      date: "Jul 24, 2020",
      duration: "",
      url: "https://opensource.com/article/20/7/open-source-marketing",
    },
    {
      image: data.ac20200722.childImageSharp.fixed,
      title: "Creating Java CI with Maven",
      subtitle: "",
      author: "Allan C. M. Lira",
      date: "Jul 22, 2020",
      duration: "",
      url: "https://dev.to/acmlira/creating-java-ci-with-maven-4l08",
    },
    {
      image: data.bm20200603.childImageSharp.fixed,
      title: "Applying Computer Vision to build great UI/UX for applications",
      subtitle: "",
      author: "Bruno Muniz",
      date: "Jun 03, 2020",
      duration: "",
      url:
        "https://dev.to/brunoamuniz/applying-computer-vision-to-build-great-ui-ux-for-applications-3lb4",
    },
    {
      image: data.lg20200422.childImageSharp.fixed,
      title: "Why we decided to be open source",
      subtitle: "",
      author: "Lucas Galvanini",
      date: "Apr 22, 2020",
      duration: "",
      url:
        "https://dev.to/lucasgalvanini/why-we-decided-to-be-open-source-49dd",
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
