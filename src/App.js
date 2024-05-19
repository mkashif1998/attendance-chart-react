// import {
//   BarChart,
//   Bar,
//   Rectangle,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
//   ResponsiveContainer,
//   Cell,
// } from "recharts";
// const App = () => {
//   const data = [
//     {
//       absent: 0.5,
//       color: "red",
//       date: "15-May",
//     },
//     {
//       present: 8,
//       color: "blue",
//       date: "16-May",
//     },
//     {
//       half: 4,
//       color: "yellow",
//       date: "17-May",
//     },
//     {
//       sick: 3,
//       color: "pink",
//       date: "18-May",
//     },
//     {
//       late: 2,
//       color: "orange",
//       date: "19-May",
//     },
//     {
//       sick: 3,
//       color: "pink",
//       date: "20-May",
//     },
//     {
//       late: 2,
//       color: "orange",
//       date: "21-May",
//     },
//     {
//       present: 3,
//       color: "pink",
//       date: "22-May",
//     },
//     {
//       early: 2,
//       color: "orange",
//       date: "23-May",
//     },
//     {
//       missing: 3,
//       color: "pink",
//       date: "24-May",
//     },
//     {
//       off: 2,
//       color: "orange",
//       date: "25-May",
//     },
//     {
//       missing: 3,
//       color: "pink",
//       date: "26-May",
//     },
//     {
//       present: 8,
//       color: "orange",
//       date: "27-May",
//     },
//     {
//       early: 3,
//       color: "pink",
//       date: "28-May",
//     },
//     {
//       off: 0,
//       color: "orange",
//       date: "29-May",
//     },
//     {
//       missing: 3,
//       color: "pink",
//       date: "30-May",
//     },
//     {
//       off: 2,
//       color: "orange",
//       date: "31-May",
//     },
//   ];

//   const yTicks = [0, 1, 2, 3, 4, 5, , 6, 7, 8];
//   const yLabels = {
//     0: "0:00",
//     1: "01:23",
//     2: "02:46",
//     3: "03:50",
//     4: "04:10",
//     5: "05:33",
//     6: "06:56",
//     7: "08:20",
//     8: "09:43",
//   };

//   return (
//     <div className="container-fluid">
//       <div className="row" style={{ height: "500px" }}>
//         <ResponsiveContainer width="100%" height="100%">
//           <BarChart
//             width={1000}
//             height={300}
//             data={data}
//             margin={{
//               top: 5,
//               right: 30,
//               left: 20,
//               bottom: 5,
//             }}
//           >
//             <CartesianGrid strokeDasharray="3 3" />
//             <XAxis dataKey="date" values="date" />
//             <YAxis ticks={yTicks} tickFormatter={(value) => yLabels[value]} />
//             <Tooltip />
//             <Legend />

//             <Bar
//               dataKey="absent"
//               stackId="a"
//               fill="red"
//               width={35}
//               barSize={35}
//             />
//             <Bar dataKey="present" stackId="b" fill="blue" barSize={35} />
//             <Bar dataKey="half" stackId="h" fill="yellow" barSize={35} />
//             <Bar dataKey="sick" stackId="s" fill="pink" barSize={35} />
//             <Bar dataKey="late" stackId="l" fill="orange" barSize={35} />
//             <Bar dataKey="off" stackId="o" fill="black" barSize={35} />
//             <Bar dataKey="missing" stackId="m" fill="brown" barSize={35} />
//             <Bar dataKey="early" stackId="e" fill="green" barSize={35} />
//           </BarChart>
//         </ResponsiveContainer>
//       </div>
//     </div>
//   );
// };

// export default App;
import React from "react";
import Chart from "./Chart";
const data = [
  { date: "15-May", time: "Absent", hours: 0 },
  { date: "16-May", time: "Early", hours: 1.5 },
  { date: "17-May", time: "Present", hours: 9 },
  { date: "18-May", time: "Present", hours: 9 },
  { date: "19-May", time: "Missing", hours: 1.5 },
  { date: "20-May", time: "OFF", hours: 0 },
  { date: "21-May", time: "OFF", hours: 0 },
  { date: "22-May", time: "HalfDay", hours: 4.5 },
  { date: "23-May", time: "HalfDay", hours: 4.5 },
  { date: "24-May", time: "HalfDay", hours: 4.5 },
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
