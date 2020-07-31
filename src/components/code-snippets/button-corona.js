import React from "react";

const ButtonCorona = () => {
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

      Button btnStartStop = `}
      <span style={{ color: "firebrick" }}>{`new `}</span>
      {`Button(`}
      <span style={{ color: "navy" }}>{`"Start"`}</span>
      {`);
      `}
      <span
        style={{ color: "grey" }}
      >{`// Adding listener to start or stop the animation`}</span>
      {`
      btnStartStop.addPressListener(e `}
      <span style={{ color: "firebrick" }}>{`-> `}</span>
      {`{
        `}
      <span style={{ color: "firebrick" }}>{`if `}</span>
      {` (btnStartStop.getText().equals(`}
      <span style={{ color: "navy" }}>{`"Start"`}</span>
      {`)) {
          restartAnimation();
          btnStartStop.setText(`}
      <span style={{ color: "navy" }}>{`"Stop"`}</span>
      {`);
        } `}
      <span style={{ color: "firebrick" }}>{`else `}</span>
      {`{
          MainWindow.getMainWindow().removeUpdateListener(updateListener);
          btnStartStop.setText(`}
      <span style={{ color: "navy" }}>{`"Start"`}</span>
      {`);
        }
      });

      (...)

      add(btnStartStop, `}
      <span style={{ color: "blue" }}>{`LEFT `}</span>
      {`+ `}
      <span style={{ color: "blue" }}>{`this`}</span>
      {`.fmH, `}
      <span style={{ color: "blue" }}>{`AFTER `}</span>
      {`+ `}
      <span style={{ color: "blue" }}>{`this`}</span>
      {`.fmH);
        
      (...)
      
    }`}
    </pre>
  );
};

export default ButtonCorona;
