import React from "react";

interface IProgressBar {
  color: string;
  currentLifetime: number;
  maxLifetime: number;
}

interface IFeatureStyle extends React.CSSProperties {
  '--width': number;
}
function ProgressBar({ color, currentLifetime, maxLifetime }: IProgressBar) {

  const fillerStyles: React.CSSProperties = {
    height: "100%",
    width: `${(currentLifetime / maxLifetime) * 100}%`,
    backgroundColor: color,
    borderRadius: "inherit",
    textAlign: "right",
  };



  const labelStyles: React.CSSProperties = {
    padding: 5,
    color: "white",
    fontWeight: "bold",
  };

  const st: IFeatureStyle = { "--width": 0.6 }

  return (
    <div>
      <div style={st}>
        <span style={labelStyles}>{`${currentLifetime}%`}</span>
      </div>
    </div>
  );
}

export default ProgressBar;
