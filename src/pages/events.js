import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Card from "../components/card";
import Video from "../components/video";
import {
  VIDEOS,
  YOUTUBE_PLAYLIST_EVENTS,
  WEBINARS,
  YOUTUBE,
  MEDIUM,
  LINKEDIN,
} from "../utils/links";

import styles from "../components/video.module.scss";

function Events() {
  const data = useStaticQuery(graphql`
    query {
      webinar: file(
        relativePath: { eq: "src/imgs/webinars/moreinfosoon.png" }
      ) {
        childImageSharp {
          fixed(width: 300, height: 200) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);
  const videos = VIDEOS;
  return (
    <Layout>
      <SEO
        title="TotalCross Events"
        description="A list of webinars on how to code embedded applications with Java or Kotlin using TotalCross"
      ></SEO>
      <div className={styles.container}>
        <h2 className={styles.firstTitle}>Watch our past webinars</h2>
        <div className={styles.videosContainer}>
          {videos.map((video) => (
            <div className={styles.videoContainer}>
              <Video
                videoSrcURL={
                  video.src + "?rel=0&modestbranding=1&fullscreen=1&controls=0"
                }
                videoTitle={video.title}
              />
              <div className={styles.videoTitle}>{video.title}</div>
            </div>
          ))}
        </div>
        <div className={styles.buttonContainer}>
          <a
            href={YOUTUBE_PLAYLIST_EVENTS}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className={styles.button}>More Videos</button>
          </a>
        </div>
        <h2 className={styles.title}>Join our next webinars</h2>
        <div className={styles.webinarsContainer}>
          <div className={styles.webinarContainer}>
            {/* <a href={WEBINARS[0]} target="_blank" rel="noopener noreferrer"> */}
            <div className={styles.webinar}>
              <Img
                fixed={data.webinar.childImageSharp.fixed}
                alt="webinar banner"
              />
            </div>
            {/* <div className={styles.webinarTitle}>
                {" "}
                Escolhendo a linguagem de programação para o seu próximo projeto
                embarcado
              </div> */}
            {/* </a> */}
          </div>
          {/* <div className={styles.webinarContainer}>
            <div className={styles.webinar}>... coming soon</div>
            <div className={styles.webinarTitle}>
              Our Next Webinar after That
            </div>
          </div>
          <div className={styles.webinarContainer}>
            <div className={styles.webinar}>... coming soon</div>
            <div className={styles.webinarTitle}> Our Third Webinar</div>
          </div> */}
        </div>
      </div>
    </Layout>
  );
}

export default Events;
