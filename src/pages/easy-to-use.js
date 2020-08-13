import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Layout from "../components/layout";
import SEO from "../components/seo";
import LayoutWhyTC from "../components/layout-why-tc";
import NavBarWhyTC from "../components/navbar-why-tc";
import coronaGIF from "../imgs/coronachart.gif";
import { GITHUB_CORONA } from "../utils/links";
import ImportCorona from "../components/code-snippets/import-corona";
import ButtonCorona from "../components/code-snippets/button-corona";
import TitleCorona from "../components/code-snippets/title-corona";
import TCButton from "../components/button";

import styles from "./easy-to-use.module.scss";

const snGit = <FontAwesomeIcon className={styles.icon} icon={faGithub} />;
const EasyToUse = () => {
  return (
    <Layout>
      <SEO
        title="What makes TotalCross easy to use"
        description="TotalCross is easy to use because it allows you to code in a high level language, frees you to code on your favourite IDE, helps you build end to end solutions, and with TotalCross you can build your user interface responsive by default."
      ></SEO>
      <LayoutWhyTC>
        <NavBarWhyTC active="Easy to use" />

        <div className={styles.container}>
          <div className={styles.rowTextCenter}>
            TotalCross Components allow for creation of great UIs with very few
            commands. That means less development time for you.
          </div>
          <div className={styles.rowTitle2}>
            Corona Chart App Example{" "}
            <a target="_blank" rel="noopener noreferrer" href={GITHUB_CORONA}>
              {snGit}
            </a>
          </div>
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
            <TCButton
              color="black"
              text="Show code"
              path="/code-corona-label"
            />
          </div>
          <div className={styles.exampleText}>
            The Start and Stop button code:
          </div>
          <div className={styles.code}>
            <ButtonCorona />
          </div>
          <div className={styles.codeMobile}>
            <TCButton
              color="black"
              text="Show code"
              path="/code-corona-button"
            />
          </div>
          <div className={styles.exampleText}>
            This is how data was added to the chart:
          </div>
          <div className={styles.code}>
            <ImportCorona />
          </div>
          <div className={styles.codeMobile}>
            <TCButton
              color="black"
              text="Show code"
              path="/code-corona-import"
            />
          </div>
          <div className={styles.exampleText}>
            Would you like to see more? Here is the project's{" "}
            <a
              href="https://github.com/TotalCross/CoronaChartApp"
              target="_blank"
              rel="noreferrer"
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
      </LayoutWhyTC>
    </Layout>
  );
};

export default EasyToUse;
