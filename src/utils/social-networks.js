import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faTwitter,
  faTelegram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { GITHUB, TWITTER, TELEGRAM, YOUTUBE } from "./links";

import styles from "./social-networks.module.scss";

const snGit = <FontAwesomeIcon className={styles.icon} icon={faGithub} />;
const snTwt = <FontAwesomeIcon className={styles.icon} icon={faTwitter} />;
const snTel = <FontAwesomeIcon className={styles.icon} icon={faTelegram} />;
const snYou = <FontAwesomeIcon className={styles.icon} icon={faYoutube} />;

const SocialNetworks = () => (
  <div className={styles.container}>
    <div className={styles.iconContainer}>
      <a target="_blank" rel="noopener noreferrer" href={GITHUB}>
        {snGit}
      </a>
    </div>
    <div className={styles.iconContainer}>
      <a target="_blank" rel="noopener noreferrer" href={TWITTER}>
        {snTwt}
      </a>
    </div>
    <div className={styles.iconContainer}>
      <a target="_blank" rel="noopener noreferrer" href={TELEGRAM}>
        {snTel}
      </a>
    </div>
    <div className={styles.iconContainer}>
      <a target="_blank" rel="noopener noreferrer" href={YOUTUBE}>
        {snYou}
      </a>
    </div>
  </div>
);

export default SocialNetworks;
