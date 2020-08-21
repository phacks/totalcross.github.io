import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faTwitter,
  faTelegram,
  faYoutube,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import {
  GITHUB,
  TWITTER,
  TELEGRAM,
  YOUTUBE,
  INSTAGRAM,
  LINKEDIN,
} from "./links";

import styles from "./social-networks.module.scss";
import SocialNetwork from "./social-network";

const snGit = <FontAwesomeIcon className={styles.icon} icon={faGithub} />;
const snTwt = <FontAwesomeIcon className={styles.icon} icon={faTwitter} />;
const snTel = <FontAwesomeIcon className={styles.icon} icon={faTelegram} />;
const snYou = <FontAwesomeIcon className={styles.icon} icon={faYoutube} />;
const snInst = <FontAwesomeIcon className={styles.icon} icon={faInstagram} />;
const snLin = <FontAwesomeIcon className={styles.icon} icon={faLinkedin} />;

const SocialNetworks = () => (
  <div className={styles.container}>
    <SocialNetwork link={GITHUB} icon={snGit} />
    <SocialNetwork link={TWITTER} icon={snTwt} />
    <SocialNetwork link={TELEGRAM} icon={snTel} />
    <SocialNetwork link={YOUTUBE} icon={snYou} />
    <SocialNetwork link={INSTAGRAM} icon={snInst} />
    <SocialNetwork link={LINKEDIN} icon={snLin} />
  </div>
);

export default SocialNetworks;
