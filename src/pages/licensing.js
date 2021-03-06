import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { CONTACT, GET_STARTED } from "../utils/links";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

import styles from "../components/payment-plans.module.scss";
import TCButton from "../components/button";
const check = <FontAwesomeIcon className={styles.icon} icon={faCheckCircle} />;

function Licensing() {
  const data = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "src/imgs/licence.png" }) {
        childImageSharp {
          fixed(width: 729, height: 406) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);
  const plan1 = [
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
  ];
  const plan2 = [
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
    <Layout>
      <SEO
        title="TotalCross · Licenses"
        description="Understand what you get with TotalCross Free License under Open Source License LGPL v2.1 and what is included in the Commercial License."
      ></SEO>
      <div className={styles.container}>
        <h1 className={styles.pageTitle}>Our Licenses</h1>

        <div className={styles.content}>
          <div>
            <h2 className={styles.pageSubtitle}>TotalCross is LGPL v2.1</h2>
            <div className={styles.text}>
              TotalCross is open source under LGPL v2.1. That means:
              <br />
              <br />
              <ul>
                <li>
                  If you will use TotalCross for a personal project that will
                  not be shared with anyone, you don't need to worry about
                  licence demands.
                </li>
                <br />
                <li>
                  If you will show your project to others, you just need to make
                  it clear that you are using TotalCross, include TotalCross
                  source code, and with that let people know that LGPL'd
                  software is being used in your work. As long as you do that
                  you are covered to give your work away or sell it.
                </li>
                <br />
                <li>
                  If you make any changes to TotalCross code you will need to
                  send these changes back to TotalCross. If you did something
                  really clever we'll definetelly consider adding it to a future
                  version, so that more people can benefit from it.
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.cardsContainer}>
            {plan1.map((plan) => (
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
        <div>
          <Img
            className={styles.image}
            fixed={data.image.childImageSharp.fixed}
            alt="infographic explaining requeriments for LGPL v2.1"
          />
        </div>

        <div className={styles.content2}>
          <h2 className={styles.pageSubtitle2}>
            TotalCross has also a commercial licence
          </h2>
          <div className={styles.content2}>
            <div className={styles.text2}>
              If complying with the requirements outlined above doesn't quite
              fit your needs, we also have a commercial licence. <br />
              <br />
              Contact us if you wish to know more about it.
            </div>
            <TCButton color={"green"} text={"Contact us"} path={CONTACT} />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Licensing;
