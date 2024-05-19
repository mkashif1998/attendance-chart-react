import React from "react";
import Chart from "./Chart";
const data = [
  { date: "15-May", time: "Absent", hours: 0.5 },
  { date: "16-May", time: "Early", hours: 9 },
  { date: "17-May", time: "Present", hours: 9 },
  { date: "18-May", time: "Present", hours: 9 },
  { date: "19-May", time: "Missing", hours: 1.5 },
  { date: "20-May", time: "OFF", hours: 0 },
  { date: "21-May", time: "OFF", hours: 0 },
  { date: "22-May", time: "HalfDay", hours: 4.5 },
  { date: "23-May", time: "HalfDay", hours: 3 },
  { date: "24-May", time: "Present", hours: 9 },
  { date: "25-May", time: "HalfDay", hours: 4.5 },
  { date: "26-May", time: "HalfDay", hours: 4.5 },
  { date: "27-May", time: "OFF", hours: 0 },
  { date: "28-May", time: "OFF", hours: 0 },
  { date: "29-May", time: "HalfDay", hours: 4.5 },
  { date: "30-May", time: "HalfDay", hours: 4.5 },
  { date: "31-May", time: "HalfDay", hours: 4.5 },
];

const App = () => {
  return (
    <div style={{ height: "400px", margin: "40px" }}>
      <Chart data={data} />;
    </div>
  );
};

export default App;
