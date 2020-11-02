import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { CHANGE_JAVA_MAVEN_PLUGIN, AZUL_TERMS, INSTALL_JAVA11, INSTALL_VSCODE, INSTALL_MAVEN, TC_VSCODE_PLUGIN, TC_HELLO_REPO, GT_ECLIPSE_VIDEO, GT_ECLIPSE_ARTICLE, GT_INTELLIJ_VIDEO, GT_INTELLIJ_ARTICLE, FIRST_EMBEDDED_PROJECT, GT_VSCODE_ARTICLE, TELEGRAM, DISCORD, GT_EMBEDDED_PROJ_ARTICLE } from "../utils/links";
import TCButton from "../components/button";
import { useStaticQuery, graphql } from "gatsby";
import BackgroundImage from "gatsby-background-image";


import LedGIF from "../imgs/led-totalcross.gif";
import styles from "./get-started.module.scss";

const tips = <FontAwesomeIcon className={styles.icon} icon={faLightbulb} />;

const GetStarted = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "src/imgs/bg_contactus_01.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return (
    <Layout>
      <SEO
        title="How to get started with TotalCross"
        description="Get started with TotalCross in a few wasy steps."
      ></SEO>
      <BackgroundImage Tag="section" fluid={data.file.childImageSharp.fluid}>
        <div className={styles.container}>
          <h1 className={styles.pageTitle}>Get Started With TotalCross</h1>
          <div className={styles.dependencies}>
            <div className={styles.dependency}>
              <div className={styles.number}>1.</div>
              <div className={styles.text}>
                You need an IDE (we recommend <a target="_blank" rel="noopener noreferrer" href={INSTALL_VSCODE}>VSCode</a>, but any will do)
              </div>
            </div>
            <div className={styles.dependency}>
              <div className={styles.number}>2.</div>
              <div className={styles.text}>
                You need <a target="_blank" rel="noopener noreferrer" href={INSTALL_JAVA11}>Java</a> (VSCode: Java11, any other IDE: Java8)
              </div>
            </div>
            <div className={styles.dependency}>
              <div className={styles.number}>3.</div>
              <div className={styles.text}>You need <a target="_blank" rel="noopener noreferrer" href={INSTALL_MAVEN}>Maven</a></div>
            </div>
            <div className={styles.dependency}>
              <div className={styles.number}>4.</div>
              <div className={styles.text}>
                Download TotalCross and start coding!
              </div>
            </div>
            <div></div>
            <div></div>
          </div>
          <div className={styles.helloWorld}>
          <div className={styles.helloWorldInnerTips}>
                <div className={styles.tips}>{tips}</div>
                <div className={styles.tipsText}>
                <p>
                On versions 2.0.0 or above from totalcross-maven-plugin you need to agree to the <a target="_blank" rel="noopener noreferrer" href={AZUL_TERMS}>Terms of Use from Azul</a>. Alternatively, you can change the jdk used to any Java version you prefer to use. How to do it is described <a target="_blank" rel="noopener noreferrer" href={CHANGE_JAVA_MAVEN_PLUGIN}>
                   here
                  </a>
                  .</p>
                </div>
              </div></div>
          <h2 className={styles.pageH2}>Download the TotalCross SDK</h2>
          <div className={styles.downloads}>
            <div className={styles.download}>
              <div className={styles.pageH3}>For VSCode</div>
              <div className={styles.downloadText}>
                <p>
                  Make sure your VSCode is updated and download the <a target="_blank" rel="noopener noreferrer" href={TC_VSCODE_PLUGIN}>TotalCross
                  VSCode plugin</a>.
                </p>{" "}
                <p>
                  It includes the TotalCross SDK and sets up your project folder
                  structure so you can jump in the coding part straight away.
                </p>
                <p>Need help? Check <a target="_blank" rel="noopener noreferrer" href={GT_VSCODE_ARTICLE}>this article</a>.</p>
              </div>
            </div>
            <div className={styles.download}>
              <div className={styles.pageH3}>For any other IDE</div>
              <div className={styles.downloadText}>
                <p>
                  Download <a target="_blank" rel="noopener noreferrer" href={TC_HELLO_REPO}>this repository</a> and follow the instructions on its
                  README file.
                </p>
                <p>
                  The process is a bit more involved, and that's why we
                  recommend using VSCode with our plugin. But you can definitely
                  do it!
                </p>
                <p>
                  Need help? Check <a target="_blank" rel="noopener noreferrer" href={GT_INTELLIJ_VIDEO}>this video</a> or <a target="_blank" rel="noopener noreferrer" href={GT_INTELLIJ_ARTICLE}>this article</a> for IntelliJ, <a target="_blank" rel="noopener noreferrer" href={GT_ECLIPSE_VIDEO}>this video</a> or <a target="_blank" rel="noopener noreferrer" href={GT_ECLIPSE_ARTICLE}>this article</a> for
                  Eclipse.
                </p>
              </div>
            </div>
          </div>
          <h2 className={styles.pageH2}>Hello World with TotalCross</h2>
          <div className={styles.helloWorld}>
            <div className={styles.helloWorldTitle}>
              <h3>For VSCode</h3>
            </div>
            <div className={styles.helloWorldInner}>
              <div className={styles.helloWorldInnerInstructions}>
                <p>
                  Step 1 - Create a new TotalCross project called Hello World.
                </p>
                <p>
                  How? From the VSCode Command Palette (CTRL + Shift + P on
                  Windows, ⇧⌘P on Mac),{" "}
                  
                    type <strong>TotalCross</strong> and select <strong>TotalCross: Create new Project
                  </strong>
                  .
                </p>
                <p>Step 2 - A new window will open with your project.</p>
                <p>
                  Right click the <strong>RunHelloWorldApplication.java</strong> file inside src/main/com/totalcross and choose <strong>Run</strong>. The TotalCross
                  simulator will open with your brand new application.
                </p>
              </div>
              <div className={styles.helloWorldInnerTips}>
                <div className={styles.tips}>{tips}</div>
                <div className={styles.tipsText}>
                  <p>
                    Tip - To fill in the prompted questions:
                    <ul>
                      <li>
                        GroupId is the domain of your company backward as in{" "}
                        <span>org.wikipedia</span> for{" "}
                        <span>wikipedia.org</span>. Feel free to leave it as{" "}
                        <span>com.totalcross</span> for now.
                      </li>
                      <li>
                        ArtifactId is the name of your application, for this
                        example type HelloWorld.
                      </li>
                      <li>
                        Select the latest version of TotalCross SDK and choose
                        whatever platform you intend to deploy your application.
                      </li>
                    </ul>
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.helloWorldTitle}>
              <h3>For other IDEs</h3>
            </div>
            <div className={styles.helloWorldInner}>
              <div className={styles.helloWorldInnerInstructions}>
                <p>
                  Step 1 - Open your IDE and import the Hello World repository
                  you downloaded.
                </p>
                <p>
                  Step 2 - Inside src/main/java/com.totalcross, right-click the <strong>RunHelloWordApplication.java</strong> and choose <strong>Run</strong>. The TotalCross
                  simulator will open with your brand new application.
                </p>
                <p>
                  Need help? Check this video for <a target="_blank" rel="noopener noreferrer" href={GT_INTELLIJ_VIDEO}>IntelliJ</a> or this one for
                  <a target="_blank" rel="noopener noreferrer" href={GT_ECLIPSE_VIDEO}> Eclipse</a>.
                </p>
              </div>
              <div className={styles.helloWorldInnerTips2}></div>
            </div>
          </div>
          <h2 className={styles.pageH2}>Packaging and Deployment</h2>
          <div className={styles.helloWorld}>
            <div className={styles.helloWorldTitle}>
              <h3>For VSCode</h3>
            </div>
            <div className={styles.helloWorldInner}>
              <div className={styles.helloWorldInnerInstructions}>
                <p>Packaging:</p>
                <p>
                  Step 1: Open VSCode Command Palette (CTRL+Shift+P on Windows,
                  ⇧⌘P on Mac) and search for <span>TotalCross: Package.</span>
                </p>
                <p>
                  Step 2: When the packaging process is finished the target
                  program will take place inside the folder
                  target/install/<em>~platform~</em>.
                </p>

                <p>Deployment:</p>
                <p>
                  Deployment is currently working only for linux arm programs.
                  This feature performs the implementation and execution of the
                  platform via ssh.
                </p>
                <p>
                  Step 1: Open VSCode Command Palette (CTRL + Shift + P on
                  Windows, ⇧⌘P on Mac) and search for TotalCross: Deploy&Run. If
                  you just want to deploy, choose the option TotalCross: Deploy.
                </p>
                <p>Step 2: Fill in the device information.</p>
                <p>
                  Step 3: See the result on a display connected to your device
                  or with a VNC client.
                </p>
              </div>
            </div>
            <div className={styles.helloWorldTitle}>
              <h3>For other IDEs</h3>
            </div>
            <div className={styles.helloWorldInner}>
              <div className={styles.helloWorldInnerInstructions}>
                <p>
                  Packaging and deploying in other IDEs is not an autamatic
                  process.
                </p>
                <p>
                  Please check <a target="_blank" rel="noopener noreferrer" href={GT_INTELLIJ_ARTICLE}>this article</a> if you use IntelliJ or <a target="_blank" rel="noopener noreferrer" href={GT_ECLIPSE_ARTICLE}>this article </a>
                  if you use Eclipse. If you use other IDEs and these articles
                  are not helpfull, please drop us a line in <a target="_blank" rel="noopener noreferrer" href={TELEGRAM}>our Telegram
                  Community</a> or <a target="_blank" rel="noopener noreferrer" href={DISCORD}>our Discord channel</a>.
                </p>
              </div>
            </div>
            <h2 className={styles.pageH2}>
              First embedded project with TotalCross
            </h2>
            <div className={styles.helloWorld}>
              <div className={styles.helloWorldInner}>
                <p>
                  Follow <a target="_blank" rel="noopener noreferrer" href={FIRST_EMBEDDED_PROJECT}>this step by step tutorial</a> on how to build your first
                  embedded application using TotalCross.
                </p>
                <div className={styles.ledGif}>
                  <img
                    className={styles.image}
                    src={LedGIF}
                    alt="Raspberry Pi 3 with a led and GUI application"
                  />
                </div>
              </div>
            </div>
            <div className={styles.helloWorldInnerTips}>
              <div className={styles.helloWorldInnerTips3}> 
                <div className={styles.tips}>{tips}</div>
                <div className={styles.tipsText}>
                <p>
                Got stuck or need any help? Join <a target="_blank" rel="noopener noreferrer" href={TELEGRAM}>our Telegram
                  Community</a> or <a target="_blank" rel="noopener noreferrer" href={DISCORD}>our Discord channel</a>.
                  </p>
                </div></div>
          </div>  
          </div>
            
        </div>
      </BackgroundImage>
    </Layout>
  );
};

export default GetStarted;
