import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faLinkedin,
  faTelegram,
  faYoutube,
  faMedium,
} from "@fortawesome/free-brands-svg-icons";
import { faComments } from "@fortawesome/free-solid-svg-icons";
import {
  FORUM,
  TWITTER,
  TELEGRAM,
  YOUTUBE,
  MEDIUM,
  LINKEDIN,
} from "../utils/links";
import Card from "./card";

import styles from "./cards.module.scss";

const JoinTheConversation = () => {
  const ICON_TWITTER = (
    <FontAwesomeIcon className={styles.icon} icon={faTwitter} />
  );
  const ICON_TELEGRAM = (
    <FontAwesomeIcon className={styles.icon} icon={faTelegram} />
  );
  const ICON_YOUTUBE = (
    <FontAwesomeIcon className={styles.icon} icon={faYoutube} />
  );
  const ICON_LINKEDIN = (
    <FontAwesomeIcon className={styles.icon} icon={faLinkedin} />
  );
  const ICON_MEDIUM = (
    <FontAwesomeIcon className={styles.icon} icon={faMedium} />
  );
  const ICON_FORUM = (
    <FontAwesomeIcon className={styles.icon} icon={faComments} />
  );
  const cards1 = [
    {
      icon: ICON_FORUM,
      text: "Forum",
      url: FORUM,
    },
    {
      icon: ICON_TWITTER,
      text: "Twitter",
      url: TWITTER,
    },
    {
      icon: ICON_TELEGRAM,
      text: "Telegram",
      url: TELEGRAM,
    },
  ];
  const cards2 = [
    {
      icon: ICON_MEDIUM,
      text: "Medium",
      url: MEDIUM,
    },
    {
      icon: ICON_YOUTUBE,
      text: "YouTube",
      url: YOUTUBE,
    },
    {
      icon: ICON_LINKEDIN,
      text: "LinkedIn",
      url: LINKEDIN,
    },
  ];
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Join the conversation</h2>
      <div className={styles.cardsContainerJoinTheConv}>
        {cards1.map((card) => (
          <Card icon={card.icon} text={card.text} url={card.url} />
        ))}
      </div>
      <div className={styles.cardsContainerJoinTheConv}>
        {cards2.map((card) => (
          <Card icon={card.icon} text={card.text} url={card.url} />
        ))}
      </div>
    </div>
  );
};

export default JoinTheConversation;
