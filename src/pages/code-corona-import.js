import React from "react";
import ImportCorona from "../components/code-snippets/import-corona";
import TCButton from "../components/button";

import styles from "./code-corona-label.module.scss";

const CodeCoronaImport = () => {
  return (
    <div className={styles.container}>
      <div className={styles.code}>
        <ImportCorona />
      </div>
      <div className={styles.button}>
        <TCButton color="black" text="BACK" path="/easy-to-use" />
      </div>
    </div>
  );
};

export default CodeCoronaImport;
