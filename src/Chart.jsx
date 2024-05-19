import React from "react";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";

const Chart = ({ data }) => {
  const attendanceData = data.map((entry) => {
    if (entry.time === "Absent") return { ...entry, color: "red" };
    if (entry.time === "HalfDay") return { ...entry, color: "lightblue" };
    if (entry.time === "ShortDay") return { ...entry, color: "orange" };
    if (entry.time === "Leave") return { ...entry, color: "lightyellow" };
    if (entry.time === "Missing") return { ...entry, color: "gray" };
    if (entry.time === "OFF") return { ...entry, color: "black" };
    if (entry.time >= "09:00" && entry.time <= "18:00")
      return { ...entry, color: "blue" };
    if (entry.time > "09:00") return { ...entry, color: "blue" };
    if (entry.time < "18:00") return { ...entry, color: "purple" };
    return { ...entry, color: "green" };
  });

  const chartData = {
    labels: attendanceData.map((entry) => entry.date),
    datasets: [
      {
        label: "Attendance",
        data: attendanceData.map((entry) => entry.hours),
        backgroundColor: attendanceData.map((entry) => entry.color),
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  const legend = [
    { label: "Absent", color: "red" },
    { label: "HalfDay", color: "lightblue" },
    { label: "ShortDay", color: "orange" },
    { label: "Leave", color: "lightyellow" },
    { label: "Missing", color: "gray" },
    { label: "OFF", color: "black" },
    { label: "Present", color: "blue" },
    { label: "Late", color: "yellow" },
    { label: "Early", color: "purple" },
  ];

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "20px",
        }}
      >
        {legend.map((item) => (
          <div
            key={item.label}
            style={{
              marginRight: "20px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <div
              style={{
                width: "20px",
                height: "20px",
                backgroundColor: item.color,
                marginRight: "5px",
              }}
            ></div>
            <span>{item.label}</span>
          </div>
        ))}
      </div>
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default Chart;
