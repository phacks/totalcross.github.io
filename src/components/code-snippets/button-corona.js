import React from "react";

const ButtonCorona = () => {
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

      Button btnStartStop = `}
      <span style={{ color: "orange" }}>{`new `}</span>
      {`Button(`}
      <span style={{ color: "lightgreen" }}>{`"Start"`}</span>
      {`);
      `}
      <span
        style={{ color: "grey" }}
      >{`// Adding listener to start or stop the animation`}</span>
      {`
      btnStartStop.addPressListener(e `}
      <span style={{ color: "orange" }}>{`-> `}</span>
      {`{
        `}
      <span style={{ color: "orange" }}>{`if `}</span>
      {` (btnStartStop.getText().equals(`}
      <span style={{ color: "lightgreen" }}>{`"Start"`}</span>
      {`)) {
          restartAnimation();
          btnStartStop.setText(`}
      <span style={{ color: "lightgreen" }}>{`"Stop"`}</span>
      {`);
        } `}
      <span style={{ color: "orange" }}>{`else `}</span>
      {`{
          MainWindow.getMainWindow().removeUpdateListener(updateListener);
          btnStartStop.setText(`}
      <span style={{ color: "lightgreen" }}>{`"Start"`}</span>
      {`);
        }
      });

      (...)

      add(btnStartStop, `}
      <span style={{ color: "cornflowerblue" }}>{`LEFT `}</span>
      {`+ `}
      <span style={{ color: "cornflowerblue" }}>{`this`}</span>
      {`.fmH, `}
      <span style={{ color: "cornflowerblue" }}>{`AFTER `}</span>
      {`+ `}
      <span style={{ color: "cornflowerblue" }}>{`this`}</span>
      {`.fmH);
        
      (...)
      
    }`}
    </pre>
  );
};

export default ButtonCorona;
