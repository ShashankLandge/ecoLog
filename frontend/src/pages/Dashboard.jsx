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

  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
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
          <p>Card Footer</p>
        </CardFooter>
      </Card>

      {user && (
        <>
          <Card>
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
              <CardDescription>Ewaste</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{user.eWaste}</p>
            </CardContent>
            <CardFooter>
              <p>Card Footer</p>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
              <CardDescription>drywaste</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{user.dryWaste}</p>
            </CardContent>
            <CardFooter>
              <p>Card Footer</p>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
              <CardDescription>wetwaste</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{user.wetWaste}</p>
            </CardContent>
            <CardFooter>
              <p>Card Footer</p>
            </CardFooter>
          </Card>
          <Wasteinput> Yo mama </Wasteinput>
        </>
      )}
    </div>
  );
};
