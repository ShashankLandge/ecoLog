import React, { useState, useEffect } from "react";
import axios from "axios";
import { Doughnut } from "react-chartjs-2";
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from "recharts";

import { Chart as ChartJS } from "chart.js/auto";
import { UserBin } from "@/components/UserBin";
import { DustbinPopover } from "@/components/DustbinPopover";

export const FullDashboard = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Waste Management Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <WasteGraph />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <WastePieChart />
          </div>
          <div>
            <WasteFormPieChart />
          </div>
        </div>
        <div>
          <WasteStats />
        </div>
      </div>
    </div>
  );
};

const WasteGraph = () => {
  // Implement your graph component here
  const [response, setResponse] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(
          "http://localhost:3000/waste/lastMonth",
          {
            headers: {
              authorization: localStorage.getItem("token"),
            },
          }
        );
        setResponse(result.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures that this effect runs only once after initial render

  return (
    <div>
      {response && (
        <LineChart
          width={600}
          height={300}
          data={response}
          margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
        >
          <Line type="monotone" dataKey="volume" stroke="#8884d8" />
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="date" />
          <YAxis />
        </LineChart>
      )}
    </div>
  );
};

// const WastePieChart = () => {
//   // Prepare data for the pie chart
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const result = await axios.get("http://localhost:3000/user/getinfo", {
//           headers: {
//             authorization: localStorage.getItem("token"),
//           },
//         });
//         setUser(result.data);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, []); // Empty dependency array ensures that this effect runs only once after initial render

//   const wasteTypeData = {
//     labels: ["Biodegradable", "Non-Biodegradable"],
//     datasets: [
//       {
//         data: [user.recycled, user.total - user.recycled], // Example data
//         backgroundColor: ["#4caf50", "#f44336"],
//       },
//     ],
//   };

//   return (
//     <div>
//       <h2 className="text-xl font-bold mb-2">Waste by Type</h2>
//       <Doughnut data={wasteTypeData} />
//     </div>
//   );
// };

const WastePieChart = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get("http://localhost:3000/user/getinfo", {
          headers: {
            authorization: localStorage.getItem("token"),
          },
        });
        setUser(result.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures that this effect runs only once after initial render

  if (!user) {
    return null; // Render nothing if user data is not yet fetched
  }

  const wasteTypeData = {
    labels: ["Biodegradable", "Non-Biodegradable"],
    datasets: [
      {
        data: [user.recycled, user.total - user.recycled], // Example data
        backgroundColor: ["#4caf50", "#f44336"],
      },
    ],
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-2">Waste by Type</h2>
      <Doughnut data={wasteTypeData} />
    </div>
  );
};

const WasteFormPieChart = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get("http://localhost:3000/user/getinfo", {
          headers: {
            authorization: localStorage.getItem("token"),
          },
        });
        setUser(result.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures that this effect runs only once after initial render

  // Render the Doughnut component only when user data is available
  return (
    <div>
      <h2 className="text-xl font-bold mb-2">Waste by Type</h2>
      {user && (
        <Doughnut
          data={{
            labels: ["Wet", "Dry", "E Waste"],
            datasets: [
              {
                data: [user.wetWaste, user.dryWaste, user.eWaste], // Example data
                backgroundColor: ["#ffeb3b", "#2196f3", "#9c27b0"],
              },
            ],
          }}
        />
      )}
    </div>
  );
};

const WasteStats = () => {
  // Calculate stats based on the data
  const recycledWaste = 0; // Example calculation
  const environmentContribution = 0; // Example calculation
  const earnings = 0; // Example calculation

  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get("http://localhost:3000/user/getinfo", {
          headers: {
            authorization: localStorage.getItem("token"),
          },
        });
        setUser(result.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {user && (
        <>
          <h2 className="text-xl font-bold mb-2">Statistics</h2>
          <div>Recycled Waste: {user.recycled}</div>
          <div>Environment Contribution: {environmentContribution}</div>
          <div>Earnings: {user.earnings}</div>
          <DustbinPopover></DustbinPopover>
          <UserBin></UserBin>
        </>
      )}
    </div>
  );
};
