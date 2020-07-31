import React from "react";

const TitleCorona = () => {
  return (
    <pre>
      {``}
      <span style={{ color: "firebrick" }}>{`
    @Override
    public void `}</span>
      <span style={{ color: "purple" }}>{`initUI()`}</span>
      {` {
        
      (...) `}
      <span style={{ color: "grey" }}>{`// Adding components to UI`}</span>
      {`
      Label lblTitle = `}
      <span style={{ color: "firebrick" }}>{`new `}</span>
      {` Label(`}
      <span
        style={{ color: "navy" }}
      >{`"Coronavirus (COVID-19) charts and stats"`}</span>
      {`, `}
      <span style={{ color: "blue" }}>{`CENTER`}</span>
      {`);
      lblTitle.setForeColor(Color.`}
      <span style={{ color: "blue" }}>{`WHITE `}</span>
      {`);
      lblTitle.setFont(Font.getFont(`}
      <span style={{ color: "blue" }}>{`true `}</span>
      {`, `}
      <span style={{ color: "blue" }}>{`36 `}</span>
      {`));
      add(lblTitle, `}
      <span style={{ color: "blue" }}>{`LEFT `}</span>
      {`, `}
      <span style={{ color: "blue" }}>{`TOP `}</span>
      {`+ `}
      <span style={{ color: "blue" }}>{`this`}</span>
      {`.fmH, `}
      <span style={{ color: "blue" }}>{`FILL`}</span>
      {`, `}
      <span style={{ color: "blue" }}>{`PREFERRED`}</span>
      {`);
        
      (...)
      
    }`}
    </pre>
  );
};

export default TitleCorona;
