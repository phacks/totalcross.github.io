import React from "react";
import Img from "gatsby-image";

import styles from "./content-card.module.scss";

const ContentCard = (props) => {
  const {
    imageURL,
    image,
    title,
    subtitle,
    author,
    date,
    duration,
    url,
  } = props;
  return (
    <a href={url}>
      <div className={styles.card}>
        <div>
          <img src={imageURL} alt={title} />
          {/* <Img fixed={image} alt={title} className={styles.cardImage} /> */}
        </div>
        <div className={styles.cardText}>
          <div className={styles.cardTitle}>{title}</div>

          <div className={styles.cardSubtitle}>{subtitle}</div>
          <div className={styles.cardSubtitle}>{author}</div>
          <div className={styles.cardSubtitle}>{date}</div>
        </div>
      </div>
    </a>
  );
};

export default ContentCard;
