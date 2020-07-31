import React from "react";
import { useStaticQuery, graphql, navigate } from "gatsby";
import Img from "gatsby-image";
import Layout from "../components/layout";
import SEO from "../components/seo";
import LayoutWhyTC from "../components/layout-why-tc";
import NavBarWhyTC from "../components/navbar-why-tc";
import coronaGIF from "../imgs/coronachart.gif";

import styles from "./easy-to-use.module.scss";
import ImportCorona from "../components/code-snippets/import-corona";
import ButtonCorona from "../components/code-snippets/button-corona";
import TitleCorona from "../components/code-snippets/title-corona";
import TCButton from "../components/button";

const EasyToUse2 = () => {
  const data = useStaticQuery(graphql`
    query {
      lang: file(relativePath: { eq: "src/imgs/lang.png" }) {
        childImageSharp {
          fluid(maxWidth: 370, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      endtoend: file(relativePath: { eq: "src/imgs/endtoend.png" }) {
        childImageSharp {
          fluid(maxWidth: 370, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      responsive: file(relativePath: { eq: "src/imgs/responsive.png" }) {
        childImageSharp {
          fluid(maxWidth: 370, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      anyide: file(relativePath: { eq: "src/imgs/anyide.png" }) {
        childImageSharp {
          fluid(maxWidth: 370, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return (
    <Layout>
      <SEO
        title="What makes TotalCross easy to use"
        description="TotalCross is easy to use because it allows you to code in a high level language, frees you to code on your favourite IDE, helps you build end to end solutions, and with TotalCross you can build your user interface responsive by default."
      ></SEO>
      <LayoutWhyTC>
        <NavBarWhyTC active="Easy to use" />

        <div className={styles.coronaContainer}>
          <div className={styles.rowTextCenter}>
            TotalCross Components allow for creation of great UIs with very few
            commands. That means less development time for you.
          </div>
          <div className={styles.rowTitle2}>Corona Chart App Example</div>
          <div className={styles.exampleText}>
            The Corona Chart App was coded with TotalCross. RapidAPI was used to
            fetch data and send it to the chart. The chart itself was coded in
            less than 150 lines while the whole app used 4 classes adding up to
            less than 600 lines of code in total.
          </div>
          <img
            src={coronaGIF}
            alt="Corona Chart app"
            className={styles.fitContainer}
          />
          <div className={styles.exampleText}>
            Here is a snippet of how the chart title was coded:
          </div>
          <div className={styles.code}>
            <TitleCorona />
          </div>
          <div className={styles.codeMobile}>
            <TCButton color="black" text="See code" path="/code-corona-label" />
          </div>
          <div className={styles.exampleText}>
            The Start and Stop button code:
          </div>
          <div className={styles.code}>
            <ButtonCorona />
          </div>
          <TCButton color="black" text="See code" path="/code-corona-button" />
          <div className={styles.exampleText}>
            This is how data was added to the chart:
          </div>
          <div className={styles.code}>
            <ImportCorona />
          </div>
          <TCButton color="black" text="See code" path="/code-corona-import" />
          <div className={styles.exampleText}>
            Would you like to see more? Here is the project's{" "}
            <a
              href="https://github.com/TotalCross/CoronaChartApp"
              target="_blank"
            >
              repository
            </a>
            .
          </div>

          <div className={styles.rowTitle}>On your favorite IDE</div>
          <div className={styles.rowTextCenter}>
            TotalCross SDK is compatible with any integrated development
            environment (IDE) that supports Java, like VSCode, NetBeans,
            Eclipse, and IntelliJ
          </div>
          <div className={styles.rowTitle}>High Level Languages</div>
          <div className={styles.rowTextCenter}>
            TotalCross uses NanoJava, a leaner version of Java, or more
            precisely a subset of the language with 72% less classes than full
            Java. You can also use a subset of Kotlin with TotalCross.
          </div>
        </div>
        {/* <div className={styles.row}> */}

        {/* <div className={styles.rowImage}>
            <Img
              fluid={data.lang.childImageSharp.fluid}
              alt="Illustration of High Level Languages"
              className={styles.image}
            />
            <div className={styles.rowTextBlock}>
              <div className={styles.rowTitle}>High Level Languages</div>
              <div className={styles.rowText}></div>
            </div>
          </div>
          <div className={styles.rowImage}>
            <Img
              fluid={data.anyide.childImageSharp.fluid}
              alt="Illustration of different IDEs"
              className={styles.image}
            />
            <div className={styles.rowTextBlock}>
              <div className={styles.rowTitle}>
                On your <br />
                favorite IDE
              </div>
              <div className={styles.rowText}></div>
            </div>
          </div> */}
        {/* <div className={styles.rowImage}>
            <Img
              fluid={data.endtoend.childImageSharp.fluid}
              alt="Illustration of End to End applications"
              className={styles.image}
            />
            <div className={styles.rowTextBlock}>
              <div className={styles.rowTitle}>
                Build end-to-end applications
              </div>
              <div className={styles.rowText}></div>
            </div>
          </div> */}
        {/* <div className={styles.rowImage}>
            <Img
              fluid={data.responsive.childImageSharp.fluid}
              alt="Illustration of TotalCross Process"
              className={styles.image}
            />
            <div className={styles.rowTextBlock}>
              <div className={styles.rowTitle}>Responsive</div>
              <div className={styles.rowText}></div>
            </div>
          </div> */}
        {/* </div> */}
      </LayoutWhyTC>
    </Layout>
  );
};

export default EasyToUse2;
