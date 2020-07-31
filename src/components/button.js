import React from "react";

import styles from "./call-to-action.module.scss";

const TCButton = (props) => {
  const { color, text, path } = props;
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
      <a href="" href={path}>
        {color === "green" ? (
          <button className={styles.buttonGreen}>{text}</button>
        ) : (
          <button className={styles.buttonBlack}>{text}</button>
        )}
      </a>
    </div>
  );
};

export default TCButton;
