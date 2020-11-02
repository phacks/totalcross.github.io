import React from "react";
import ButtonCorona from "../components/code-snippets/button-corona";
import TCButton from "../components/button";

import styles from "./code-corona-label.module.scss";

const CodeCoronaButton = () => {
  return (
    <div className={styles.container}>
      <div className={styles.code}>
        <ButtonCorona />
      </div>
      <div className={styles.button}>
        <TCButton color="black" text="BACK" path="/easy-to-use" />
      </div>
    </div>
  );
};

export default CodeCoronaButton;
