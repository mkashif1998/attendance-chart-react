import React from "react";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";
const data = [
  { date: "01-May-2025", status: "Absent", hours: 1, checkIn: null, checkOut: null },
  { date: "02-May-2025", status: "Early", hours: 9.6, checkIn: "07:00", checkOut: "16:00" },
  { date: "03-May-2025", status: "OFF", hours: 1, checkIn: null, checkOut: null },
  { date: "04-May-2025", status: "OFF", hours: 1, checkIn: null, checkOut: null },
  { date: "05-May-2025", status: "Present", hours: 9, checkIn: "09:00", checkOut: "18:00" },
  { date: "06-May-2025", status: "Present", hours: 9, checkIn: "09:00", checkOut: "18:00" },
  { date: "07-May-2025", status: "Missing", hours: 2, checkIn: "09:00", checkOut: "11:00" },
  { date: "08-May-2025", status: "HalfDay", hours: 4.5, checkIn: "09:00", checkOut: "13:30" },
  { date: "09-May-2025", status: "Late", hours: 5, checkIn: "11:00", checkOut: "16:00" },
  { date: "10-May-2025", status: "Present", hours: 9, checkIn: "09:00", checkOut: "18:00" },
  { date: "11-May-2025", status: "Present", hours: 9, checkIn: "09:00", checkOut: "18:00" },
  { date: "12-May-2025", status: "Present", hours: 9, checkIn: "09:00", checkOut: "18:00" },
  { date: "13-May-2025", status: "OFF", hours: 1, checkIn: null, checkOut: null },
  { date: "14-May-2025", status: "OFF", hours: 1, checkIn: null, checkOut: null },
  { date: "15-May-2025", status: "Present", hours: 8.5, checkIn: "09:00", checkOut: "17:30" },
  { date: "16-May-2025", status: "Present", hours: 8.2, checkIn: "09:00", checkOut: "17:12" },
  { date: "17-May-2025", status: "Present", hours: 8.5, checkIn: "09:00", checkOut: "17:30" },
  { date: "18-May-2025", status: "OFF", hours: 1, checkIn: null, checkOut: null },
  { date: "19-May-2025", status: "OFF", hours: 1, checkIn: null, checkOut: null },
  { date: "20-May-2025", status: "Present", hours: 9, checkIn: "09:00", checkOut: "18:00" },
  { date: "21-May-2025", status: "Late", hours: 6, checkIn: "10:30", checkOut: "16:30" },
  { date: "22-May-2025", status: "Present", hours: 9, checkIn: "09:00", checkOut: "18:00" },
  { date: "23-May-2025", status: "HalfDay", hours: 4.5, checkIn: "09:00", checkOut: "13:30" },
  { date: "24-May-2025", status: "Present", hours: 8.5, checkIn: "09:00", checkOut: "17:30" },
  { date: "25-May-2025", status: "Absent", hours: 1, checkIn: null, checkOut: null },
  { date: "26-May-2025", status: "Present", hours: 9, checkIn: "09:00", checkOut: "18:00" },
  { date: "27-May-2025", status: "Early", hours: 7.5, checkIn: "08:00", checkOut: "15:30" },
  { date: "28-May-2025", status: "Present", hours: 9, checkIn: "09:00", checkOut: "18:00" },
  { date: "29-May-2025", status: "HalfDay", hours: 4.5, checkIn: "09:00", checkOut: "13:30" },
  { date: "30-May-2025", status: "Present", hours: 8.5, checkIn: "09:00", checkOut: "17:30" },
].map(entry => {
  const date = new Date(entry.date);
  const day = date.getDay();
  if (day === 0 || day === 6) { // 0 is Sunday, 6 is Saturday
    return { ...entry, status: "OFF", hours: 1 };
  }
  return entry;
});

const App = () => {
  
  const legend = [
    { label: "Present", color: "#0000ff" },
    { label: "Absent", color: "#ff0000" },
    { label: "HalfDay", color: "#39bba0" },
    { label: "ShortDay", color: "#f79824" },
    { label: "Leave", color: "#e2e97a" },
    { label: "Missing", color: "#a93784" },
    { label: "OFF", color: "#000000" },
    { label: "Late", color: "#feca3f" },
    { label: "Early", color: "#119865" },
  ];
  const attendanceData = data.map((entry) => {
    const statusColor = legend.find(item => item.label === entry.status)?.color;
    return { ...entry, color: statusColor || "#0000ff" }; // default to Present color if status not found
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
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        max: 10,
        ticks: {
          stepSize: 1
        }
      },
    },
    plugins: {
      legend: {
        display: false // Hide the legend
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            const dataIndex = context.dataIndex;
            const entry = attendanceData[dataIndex];
            const checkInTime = entry.checkIn || 'No check-in';
            const checkOutTime = entry.checkOut || 'No check-out';
            return [
              `Hours: ${entry.hours}`,
              `Check-in: ${checkInTime}`,
              `Check-out: ${checkOutTime}`
            ];
          }
        }
      }
    }
  };

  return (
    <div style={{ width: "1000px", margin: "40px auto" }}>
      <div style={{ width: "100%" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "20px",
            flexWrap: "wrap",
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
                  width: "40px",
                  height: "20px",
                  backgroundColor: item.color,
                  marginRight: "5px",
                }}
              ></div>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
        <div style={{ height: "400px" }}>
          <Bar data={chartData} options={options} />
        </div>
      </div>
    </div>
  );
};

export default App;
