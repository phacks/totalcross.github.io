import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBullhorn } from "@fortawesome/free-solid-svg-icons";
import Card from "./card";
import { YOUTUBE_PLAYLIST_EVENTS } from "../utils/links";

import styles from "./cards.module.scss";

const OurEvents = () => {
  const HORN = <FontAwesomeIcon className={styles.icon} icon={faBullhorn} />;
  const cards = [
    {
      icon: HORN,
      text: "TotalCross Events",
      route: "/events",
    },
  ];
  return (
    <div className={styles.container}>
      <div className={styles.cardsContainer}>
        <Card
          icon={cards[0].icon}
          text={cards[0].text}
          url={cards[0].url}
          route={cards[0].route}
        />
      </div>
    </div>
  );
};

export default OurEvents;
