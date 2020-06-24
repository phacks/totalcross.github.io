import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Card from "../components/card";
import Video from "../components/video";
import {
  VIDEOS,
  YOUTUBE_PLAYLIST_EVENTS,
  TELEGRAM,
  YOUTUBE,
  MEDIUM,
  LINKEDIN,
} from "../utils/links";

import styles from "../components/video.module.scss";

function Community() {
  const videos = VIDEOS;
  return (
    <Layout>
      <SEO title="TotalCross Events"></SEO>
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
              {video.last === true ? (
                <div className={styles.buttonContainer}>
                  <a
                    href={YOUTUBE_PLAYLIST_EVENTS}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className={styles.button}>More Videos</button>
                  </a>
                </div>
              ) : (
                ""
              )}
            </div>
          ))}
        </div>
        <h2 className={styles.title}>Join our next webinars</h2>
        <div className={styles.webinarsContainer}>
          <div className={styles.webinarContainer}>
            <div className={styles.webinar}>... coming soon</div>
            <div className={styles.webinarTitle}> Our Next Webinar</div>
          </div>
          <div className={styles.webinarContainer}>
            <div className={styles.webinar}>... coming soon</div>
            <div className={styles.webinarTitle}>
              Our Next Webinar after That
            </div>
          </div>
          <div className={styles.webinarContainer}>
            <div className={styles.webinar}>... coming soon</div>
            <div className={styles.webinarTitle}> Our Third Webinar</div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Community;
