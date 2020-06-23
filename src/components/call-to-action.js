import React from "react";
import { GET_STARTED } from "../utils/links";

import styles from "./call-to-action.module.scss";

const CallToAction = (props) => {
  const { color } = props;
  const btnStyle = () => {
    switch (color) {
      case "green":
        return "buttonGreen";
      case "black":
        return "buttonBlack";
      default:
        break;
    }
  };
  return (
    <div>
      <a href="" href={GET_STARTED} target="_blank" rel="noopener noreferrer">
        {color === "green" ? (
          <button className={styles.buttonGreen}>Try in 8 minutes</button>
        ) : (
          <button className={styles.buttonBlack}>Try in 8 minutes</button>
        )}
      </a>
    </div>
  );
};

export default CallToAction;
