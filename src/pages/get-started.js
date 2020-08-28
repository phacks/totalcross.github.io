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
              <p>
                Make sure your VSCode is updated and download the TotalCross
                VSCode plugin.
              </p>{" "}
              <p>
                It includes the TotalCross SDK and sets up your project folder
                structure so you can jump in the coding part straight away.
              </p>
              <p>Need help? Check this article.</p>
            </div>
          </div>
          <div className={styles.download}>
            <div className={styles.pageH3}>For any other IDE</div>
            <div className={styles.downloadText}>
              <p>
                Download this repository and follow the instructions on its
                README file.
              </p>
              <p>
                The process is a bit more involved, and that's why we recommend
                using VSCode with our plugin. But you can definitely do it!
              </p>
              <p>
                Need help? Check this video for IntelliJ or this one for
                Eclipse.
              </p>
            </div>
          </div>
        </div>
        <h2 className={styles.pageH2}>Hello World with TotalCross</h2>
        <div className={styles.helloWorld}>
          <h3>For VSCode</h3>
          <p>
            Step 1 - Create a new TotalCross project called Hello World. <br />
            How? From the VSCode Command Palette (CTRL + Shift + P on Windows,
            ⇧⌘P on Mac),{" "}
            <strong>
              type TotalCross and select TotalCross: Create new Project
            </strong>
            .
          </p>
          <p>
            Tip - To fill in the prompted questions:
            <ul>
              <li>
                GroupId is the domain of your company backward as in{" "}
                <span>org.wikipedia</span> for <span>wikipedia.org</span>. Feel
                free to leave it as <span>com.totalcross</span> for now.
              </li>
              <li>
                ArtifactId is the name of your application, for this example
                type HelloWorld.
              </li>
              <li>
                Select the latest version of TotalCross SDK and choose whatever
                platform you intend to deploy your application.
              </li>
            </ul>
          </p>
          <p>
            Step 2 - A new window will open with your project. Right click the
            RunHelloWorldApplication.java file inside src `> main `> com `>
            totalcross and choose Run. The TotalCross simulator will open with
            your brand new application.
          </p>
          <h3>For other IDEs</h3>
          <p>
            Step 1 - Open your IDE and import the Hello World repository you
            downloaded.
          </p>
          <p>
            Step 2 - Inside src/main/java/com.totalcross, right-click the
            RunHelloWordApplication.java and choose Run. The TotalCross
            simulator will open with your brand new application.
          </p>
          <p>
            Need help? Check this article for IntelliJ or this one for Eclipse.
          </p>
        </div>
        <h2 className={styles.pageH2}>Packaging and Deployment</h2>
        <div className={styles.helloWorld}>
          <h3>For VSCode</h3>
          <p>
            Packaging:
            <ul>
              <li>
                Step 1: Open VSCode Command Palette (CTRL+Shift+P on Windows,
                ⇧⌘P on Mac) and search for <span>TotalCross: Package.</span>
              </li>
              <li>
                When the packaging process is finished the target program will
                take place inside the folder target/install/&ltplatform&gt.
              </li>
            </ul>
          </p>
          <p>Deployment:</p>
          <p>
            Deployment is currently working only for linux arm programs. This
            feature performs the implementation and execution of the platform
            via ssh.
          </p>
          <p>
            <ul>
              <li>
                Open VSCode Command Palette (CTRL + Shift + P on Windows, ⇧⌘P on
                Mac) and search for TotalCross: Deploy&Run. If you just want to
                deploy, choose the option TotalCross: Deploy.
              </li>
              <li>Fill in the device information.</li>
              <li>
                See the result on a display connected to your device or with a
                VNC client.
              </li>
            </ul>
          </p>
          <h3>For other IDEs</h3>
          <p>
            Packaging and deploying in other IDEs is not an autamatic process.
            Please check this article if you use IntelliJ or this article if you
            use Eclipse. If you use other IDEs and these articles are not
            helpfull, please drop us a line in our Telegram Community.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default GetStarted;
