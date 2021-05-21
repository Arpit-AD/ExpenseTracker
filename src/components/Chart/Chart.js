import React from "react";

import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  const dataValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  const maxDataValues = Math.max(...dataValues);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          label={dataPoint.label}
          maxValue={maxDataValues}
          value={dataPoint.value}
        />
      ))}
    </div>
  );
};

export default Chart;
