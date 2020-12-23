import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import ContentCard from "../components/content-card";

import styles from "../components/content-card.module.scss";

function Samples() {
  const data = useStaticQuery(graphql`
  query {
    printer: file(relativePath: { eq: "src/imgs/printer.png" }) {
      childImageSharp {
        fixed(width: 280, quality: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    corona: file(relativePath: { eq: "src/imgs/corona.png" }) {
      childImageSharp {
        fixed(width: 280, quality: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    homeapp: file(relativePath: { eq: "src/imgs/home_app.png" }) {
      childImageSharp {
        fixed(width: 280, quality: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
  `);
  return (
    <Layout>
      <SEO
        title="TotalCross · Samples"
        description="TotalCross · Samples"
      ></SEO>
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.title}>
            <h1>Samples</h1>
          </div>
        </div>
        <div className={styles.cardExtra}></div>
        <div className={styles.container}>
              <ContentCard
                image={data.printer.childImageSharp.fixed}
                title='Printer'
                subtitle='Can a printer be smarter? We built a printer user interface. Check the code and see it running on your embedded device.'
                url={`https://github.com/TotalCross/embedded-samples/tree/main/printer-application`}
              />
        </div>
        <div className={styles.cardExtra}></div>
        <div className={styles.container}>
              <ContentCard
                image={data.corona.childImageSharp.fixed}
                title='Corona Virus Chart'
                subtitle='We used a public Covid-19 database to create an animated chart. Access the code and see this application running on your device.'
                url={`https://github.com/TotalCross/embedded-samples/tree/main/corona-chart-app`}
              />
        </div>
        <div className={styles.cardExtra}></div>
        <div className={styles.container}>
              <ContentCard
                image={data.homeapp.childImageSharp.fixed}
                title='Home Appliance XML'
                subtitle="Let's build a smart home? Control your house with this Home Appliance sample. Control temperature, security, alarms, internet connection, your calendar and other things with an awesome interface."
                url={`https://github.com/TotalCross/embedded-samples/tree/main/home-appliance`}
              />
        </div>
        <div className={styles.cardExtra}></div>
      </div>
    </Layout>
  );
}

export default Samples;