import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import ContentCard from "../components/content-card";
import Video from "../components/video";
import { TUTORIALS } from "../utils/links";

import styles from "../components/content-card.module.scss";

function Tutorials() {
  const videos = TUTORIALS;
  return (
    <Layout>
      <SEO
        title="TotalCross Articles"
        description="Learn how to use totalcross with out tutorials"
      ></SEO>
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.title}>Tutorials</div>
        </div>
        <div className={styles.cardExtra}></div>
        <div className={styles.container}>
          {videos.map((video) => (
            <div className={styles.card}>
              <Video
                videoSrcURL={
                  video.src + "?rel=0&modestbranding=1&fullscreen=1&controls=0"
                }
                videoTitle={video.title}
              />
              <div className={styles.cardText}>
                <div className={styles.cardTitle}>{video.title}</div>
                <div className={styles.cardSubtitle}>{video.subtitle}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default Tutorials;
