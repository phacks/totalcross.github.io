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

import styles from "./get-started.module.scss";

const GetStarted = () => {
  return (
    <Layout>
      <SEO
        title="What makes TotalCross easy to use"
        description="TotalCross is easy to use because it allows you to code in a high level language, frees you to code on your favourite IDE, helps you build end to end solutions, and with TotalCross you can build your user interface responsive by default."
      ></SEO>
      <div className={styles.container}>
        <h1 className={styles.pageTitle}>Get Started With TotalCross</h1>
        <div className={styles.dependencies}>
          <div className={styles.dependency}>
            <div className={styles.number}>1</div>
            <div className={styles.text}>
              You need an IDE (we recommend VSCode, but any will do)
            </div>
          </div>
          <div className={styles.dependency}>
            <div className={styles.number}>2</div>
            <div className={styles.text}>
              You need Java (VSCode: Java11, any other IDE: Java8)
            </div>
          </div>
          <div className={styles.dependency}>
            <div className={styles.number}>3</div>
            <div className={styles.text}>You need Maven</div>
          </div>
          <div className={styles.dependency}>
            <div className={styles.number}>4</div>
            <div className={styles.text}>
              Download TotalCross and start coding!
            </div>
          </div>
          <div></div>
          <div></div>
        </div>
        <h2 className={styles.pageH2}>Download the TotalCross SDK</h2>
        <div className={styles.downloads}>
          <div className={styles.download}>
            <div className={styles.pageH3}>For VSCode</div>
            <div className={styles.downloadText}>
              Make sure your VSCode is updated and download the TotalCross
              VSCode plugin.
              <br />
              It includes the TotalCross SDK and sets up your project folder
              structure so you can jump in the coding part straight away.
              <br />
              Need help? Check this article.
            </div>
          </div>
          <div className={styles.download}>
            <div className={styles.pageH3}>For any other IDE</div>
            <div className={styles.downloadText}>
              Download this repository and follow the instructions on its README
              file.
              <br />
              The process is a bit more involved, and that's why we recommend
              using VSCode with our plugin. But you can definitely do it!
              <br />
              Need help? Check this video for IntelliJ or this one for Eclipse.
            </div>
          </div>
        </div>
        <h2 className={styles.pageH2}>Hello World with TotalCross</h2>
        <h2 className={styles.pageH2}>Packaging and Deployment</h2>
      </div>
    </Layout>
  );
};

export default GetStarted;
