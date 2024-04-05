import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { LineChart, Line, CartesianGrid, XAxis, YAxis } from "recharts";
import { Wasteinput } from "@/components/Wasteinput";
import { Requirementinput } from "@/components/Requirementinput";

export const Dashboard = () => {
  const [response, setResponse] = useState(null);
  const [user, setUser] = useState(null);

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

  // return (
  //   <div>
  //     <Card>
  //       <CardHeader>
  //         <CardTitle> Buying Analysis </CardTitle>
  //         <CardDescription>Volume bought over time</CardDescription>
  //       </CardHeader>
  //       <CardContent>
  //         {response && (
  //           <LineChart
  //             width={600}
  //             height={300}
  //             data={response}
  //             margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
  //           >
  //             <Line type="monotone" dataKey="volume" stroke="#8884d8" />
  //             <CartesianGrid stroke="#ccc" />
  //             <XAxis dataKey="date" />
  //             <YAxis />
  //           </LineChart>
  //         )}
  //       </CardContent>
  //       <CardFooter>
  //         <p></p>
  //       </CardFooter>
  //     </Card>

  //     {user && (
  //       <>
  //         <Card>
  //           <CardHeader>
  //             <CardTitle>Total Ewaste Aqquired</CardTitle>
  //             <CardDescription></CardDescription>
  //           </CardHeader>
  //           <CardContent>
  //             <p>{user.eWaste}</p>
  //           </CardContent>
  //           <CardFooter>
  //             <p></p>
  //           </CardFooter>
  //         </Card>

  //         <Card>
  //           <CardHeader>
  //             <CardTitle>Total Dry waste Aqquired</CardTitle>
  //             <CardDescription></CardDescription>
  //           </CardHeader>
  //           <CardContent>
  //             <p>{user.dryWaste}</p>
  //           </CardContent>
  //           <CardFooter>
  //             <p></p>
  //           </CardFooter>
  //         </Card>

  //         <Card>
  //           <CardHeader>
  //             <CardTitle> Total Wet waste Aqquired </CardTitle>
  //             <CardDescription></CardDescription>
  //           </CardHeader>
  //           <CardContent>
  //             <p>{user.wetWaste}</p>
  //           </CardContent>
  //           <CardFooter>
  //             <p></p>
  //           </CardFooter>
  //         </Card>
  //         <Wasteinput></Wasteinput>
  //         <Requirementinput></Requirementinput>
  //       </>
  //     )}
  //   </div>
  // );

  return (
    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start">
      {/* Chart Section */}
      <div className="lg:w-2/3 lg:mr-4 mb-4 lg:mb-0">
        <Card>
          <CardHeader>
            <CardTitle>Buying Analysis</CardTitle>
            <CardDescription>Volume bought over time</CardDescription>
          </CardHeader>
          <CardContent>
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
          </CardContent>
          <CardFooter>
            <p></p>
          </CardFooter>
        </Card>
      </div>

      {/* Info Section */}
      <div className="lg:w-1/3">
        {user && (
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Total Ewaste Acquired</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{user.eWaste}</p>
              </CardContent>
              <CardFooter>
                <p></p>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Total Dry Waste Acquired</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{user.dryWaste}</p>
              </CardContent>
              <CardFooter>
                <p></p>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Total Wet Waste Acquired</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{user.wetWaste}</p>
              </CardContent>
              <CardFooter>
                <p></p>
              </CardFooter>
            </Card>

            {/* Popovers/Inputs */}
            <div className="space-y-4">
              <Wasteinput />
              <Requirementinput />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
