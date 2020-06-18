import React from "react";
import { Link } from "docz";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

import styles from "./payment-plans.module.scss";
import { CONTACT, GET_STARTED } from "../utils/links";
const check = <FontAwesomeIcon className={styles.icon} icon={faCheckCircle} />;

const PaymentPlans = () => {
  const plans = [
    {
      features: [
        "Unlimited Developers",
        "Unlimited Runtime",
        "Community Support",
        "Embedded Apps: Linux Arm, Android, WinCE",
        "Desktop Apps: Windows, Linux",
        "Mobile Apps: Android, iOS",
        "Documentation and Guidelines",
        "Video Tutorials",
        "Forum",
      ],
      title: "Free",
      license: "Under LGPL v2.1",
      button: {
        text: "Get Started",
        url: GET_STARTED,
        style: "primary",
      },
    },
    {
      features: [
        "01 Developer per License",
        "Unlimited Runtime",
        "Premium Support",
        "Embedded Apps: Linux Arm, Android, WinCE",
        "Desktop Apps: Windows, Linux",
        "Mobile Apps: Android, iOS",
        "Documentation and Guidelines",
        "Video Tutorials",
        "Forum",
      ],
      title: "Enterprise",
      license: "",
      button: {
        text: "Contact Us",
        url: CONTACT,
        style: "secondary",
      },
    },
  ];
  return (
    <div className={styles.container}>
      <h1 className={styles.pageTitle}>Our Plans</h1>
      <div className={styles.cardsContainer}>
        {plans.map((plan) => (
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>{plan.title}</h3>
            <h5 className={styles.cardSubtitle}>{plan.license}</h5>
            <ul className={styles.cardList}>
              {plan.features.map((item) => (
                <li className={styles.cardListItem}>
                  <div className={styles.bulletPoint}>
                    <div className={styles.bulletPointBackground}></div>
                    <div className={styles.bulletPointIcon}>{check}</div>
                  </div>
                  {item}
                </li>
              ))}
            </ul>
            <a href={plan.button.url} target="_blank" rel="noreferrer">
              {plan.button.style === "primary" ? (
                <button className={styles.cardButtonGetStarted}>
                  {plan.button.text}
                </button>
              ) : (
                <button className={styles.cardButtonContact}>
                  {plan.button.text}
                </button>
              )}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PaymentPlans;
