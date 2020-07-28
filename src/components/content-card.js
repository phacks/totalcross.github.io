import React from "react";
import Img from "gatsby-image";

import styles from "./content-card.module.scss";

const ContentCard = (props) => {
  const { image, title, subtitle, author, date, duration, url } = props;
  return (
    <div className={styles.container}>
      <div>
        <Img fixed={image} alt={title} />
      </div>
      <div>
        <div className={styles.cardTitle}>{title}</div>
        <div className={styles.cardSubtitle}>{subtitle}</div>
        <div className={styles.cardSubtitle}>{author}</div>
        <div className={styles.cardSubtitle}>
          {date} - {duration} min read
        </div>
      </div>
    </div>
  );
};

export default ContentCard;
