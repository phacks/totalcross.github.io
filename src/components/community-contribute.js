import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog, faCode, faFileAlt } from "@fortawesome/free-solid-svg-icons";
import Card from "./card";
import { GITHUB, GITHUB_ISSUES, GITHUB_DOCS } from "../utils/links";

import styles from "./cards.module.scss";

const Contribute = () => {
  const COG = <FontAwesomeIcon className={styles.icon} icon={faCog} />;
  const CODE = <FontAwesomeIcon className={styles.icon} icon={faCode} />;
  const FILE = <FontAwesomeIcon className={styles.icon} icon={faFileAlt} />;
  const cards = [
    {
      icon: CODE,
      text: "Source Code",
      url: GITHUB,
    },
    {
      icon: COG,
      text: "Report an Issue",
      url: GITHUB_ISSUES,
    },
    {
      icon: FILE,
      text: "Docs",
      url: GITHUB_DOCS,
    },
  ];
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Become a TotalCross Contributor</h2>
      <div className={styles.cardsContainer}>
        {cards.map((card) => (
          <Card icon={card.icon} text={card.text} url={card.url} />
        ))}
      </div>
    </div>
  );
};

export default Contribute;
