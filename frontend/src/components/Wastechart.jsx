// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
//   ResponsiveContainer,
// } from "recharts";

// const Dashboard = () => {
//   const [data, setData] = useState([]);
//   const [transform, setTransform] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const result = await axios.get(
//           "http://localhost:3000/waste/lastMonth",
//           {
//             headers: {
//               authorization: localStorage.getItem("token"),
//             },
//           }
//         );
//         // Transforming response data
//         const transformedData = transformData(result.data);
//         setData(transformedData);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   // Function to transform response data
//   const transformData = (response) => {
//     const transformedData = response.reduce((acc, wasteEntry) => {
//       const existingEntry = acc.find((item) => item.date === wasteEntry.date);
//       if (existingEntry) {
//         existingEntry[wasteEntry.type] =
//           (existingEntry[wasteEntry.type] || 0) + wasteEntry.volume;
//       } else {
//         const newEntry = {
//           date: wasteEntry.date,
//           [wasteEntry.type]: wasteEntry.volume,
//         };
//         acc.push(newEntry);
//       }
//       console.log(acc);
//       setTransform(acc);
//       // return acc;
//     }, []);

//     return transformedData;
//   };

//   return (
//     <ResponsiveContainer width="100%" height="100%">
//       <LineChart
//         width={500}
//         height={300}
//         data={transform}
//         margin={{
//           top: 5,
//           right: 30,
//           left: 20,
//           bottom: 5,
//         }}
//       >
//         <CartesianGrid strokeDasharray="3 3" />
//         <XAxis dataKey="date" />
//         <YAxis />
//         <Tooltip />
//         <Legend />
//         <Line
//           type="monotone"
//           dataKey="wetwaste"
//           stroke="#8884d8"
//           activeDot={{ r: 8 }}
//         />
//         <Line type="monotone" dataKey="drywaste" stroke="#82ca9d" />
//         <Line type="monotone" dataKey="ewaste" stroke="#82ca9d" />
//       </LineChart>
//     </ResponsiveContainer>
//   );
// };

// export default Dashboard;
