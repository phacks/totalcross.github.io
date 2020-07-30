import React from "react";
import Img from "gatsby-image";

import styles from "./content-card.module.scss";

const ContentCard = (props) => {
  const { image, title, subtitle, author, date, duration, url } = props;
  return (
    <div className={styles.card}>
      <div>
        <Img fixed={image} alt={title} className={styles.cardImage} />
      </div>
      <div className={styles.cardText}>
        <a href={url}>
          <div className={styles.cardTitle}>{title}</div>
        </a>
        <div className={styles.cardSubtitle}>{subtitle}</div>
        <div className={styles.cardSubtitle}>{author}</div>
        <div className={styles.cardSubtitle}>{date}</div>
      </div>
    </div>
  );
};

export default ContentCard;
