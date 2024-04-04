import { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { DustbinProgress } from "./DustbinProgress"; // Import the DustbinProgress component

export function DustbinPopover({ userId }) {
  const [dustbins, setDustbins] = useState([]);

  useEffect(() => {
    // Fetch dustbins for the current user
    const fetchDustbins = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/user/dustbins`,
          {
            headers: {
              authorization: localStorage.getItem("token"),
            },
          }
        );
        setDustbins(response.data.dustbins);
      } catch (error) {
        console.error("Error fetching dustbins:", error);
      }
    };

    fetchDustbins();
  }, [userId]);

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Open Dustbin List</Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Dustbin List</h4>
          </div>
          <div className="grid gap-2">
            {dustbins.map((dustbin, index) => (
              <div key={index} className="flex items-center space-x-2">
                <span>Capacity: {dustbin.capacity}</span>
                <span>Volume: {dustbin.volume}</span>
                <span>Type: {dustbin.type}</span>
                <DustbinProgress
                  capacity={dustbin.capacity}
                  volume={dustbin.volume}
                />{" "}
                {/* Render DustbinProgress for each dustbin */}
              </div>
            ))}
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
