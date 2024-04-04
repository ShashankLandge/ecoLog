import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import axios from "axios";

export function UserBin() {
  const [capacity, setCapacity] = useState("");
  const [type, setType] = useState("");
  const [location, setLocation] = useState("");

  const handleSubmit = async () => {
    // Fetch location and username here
    // Example: Fetch from API or local storage
    // For demonstration, using static values
    setLocation("pune");

    // Suggestions:
    // - You can fetch the location and username from an API endpoint
    // - Or retrieve them from local storage if available

    // After fetching, you can use the retrieved values to perform further actions

    // Example: Post the capacity and type to an endpoint
    try {
      const response = await axios.post(
        "http://localhost:3000/bin/input",
        {
          capacity,
          type,
          location,
        },
        {
          headers: {
            authorization: localStorage.getItem("token"),
          },
        }
      );
      console.log("Data posted successfully:", response.data);
    } catch (error) {
      console.error("Error posting data:", error);
    }
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Add dustbin</Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Dimensions</h4>
            <p className="text-sm text-muted-foreground">Enter a dustbin</p>
          </div>
          <div className="grid gap-2">
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="capacity">Capacity</Label>
              <Input
                id="capacity"
                value={capacity}
                onChange={(e) => setCapacity(e.target.value)}
                className="col-span-2 h-8"
              />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="type">Type</Label>
              <Input
                id="type"
                value={type}
                onChange={(e) => setType(e.target.value)}
                className="col-span-2 h-8"
              />
            </div>
          </div>
          <div className="flex justify-end">
            <Button onClick={handleSubmit}>Add</Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
