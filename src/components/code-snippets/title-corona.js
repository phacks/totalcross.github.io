import React from "react";

const TitleCorona = () => {
  return (
    <pre>
      {``}
      <span style={{ color: "orange" }}>{`
    @Override
    public void `}</span>
      <span style={{ color: "cornsilk" }}>{`initUI()`}</span>
      {` {
        
      (...) `}
      <span style={{ color: "grey" }}>{`// Adding components to UI`}</span>
      {`
      Label lblTitle = `}
      <span style={{ color: "orange" }}>{`new `}</span>
      {`Label(`}
      <span
        style={{ color: "lightgreen" }}
      >{`"Coronavirus (COVID-19) charts and stats"`}</span>
      {`, `}
      <span style={{ color: "cornflowerblue" }}>{`CENTER`}</span>
      {`);
      lblTitle.setForeColor(Color.`}
      <span style={{ color: "cornflowerblue" }}>{`WHITE `}</span>
      {`);
      lblTitle.setFont(Font.getFont(`}
      <span style={{ color: "cornflowerblue" }}>{`true `}</span>
      {`, `}
      <span style={{ color: "cornflowerblue" }}>{`36 `}</span>
      {`));
      add(lblTitle, `}
      <span style={{ color: "cornflowerblue" }}>{`LEFT `}</span>
      {`, `}
      <span style={{ color: "cornflowerblue" }}>{`TOP `}</span>
      {`+ `}
      <span style={{ color: "cornflowerblue" }}>{`this`}</span>
      {`.fmH, `}
      <span style={{ color: "cornflowerblue" }}>{`FILL`}</span>
      {`, `}
      <span style={{ color: "cornflowerblue" }}>{`PREFERRED`}</span>
      {`);
        
      (...)
      
    }`}
    </pre>
  );
};

export default TitleCorona;
