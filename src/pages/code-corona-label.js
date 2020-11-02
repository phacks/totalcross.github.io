import React from "react";
import TitleCorona from "../components/code-snippets/title-corona";
import ButtonCorona from "../components/code-snippets/button-corona";
import ImportCorona from "../components/code-snippets/import-corona";
import TCButton from "../components/button";

import styles from "./code-corona-label.module.scss";

const CodeCoronaLabel = () => {
  return (
    <div className={styles.container}>
      <div className={styles.code}>
        <TitleCorona />
      </div>
      <div className={styles.button}>
        <TCButton color="black" text="BACK" path="/easy-to-use" />
      </div>
    </div>
  );
};

export default CodeCoronaLabel;
