import React, { useState } from "react";
import axios from "axios";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

export function Wasteinput() {
  const [type, setType] = useState(""); // State for selected type
  const [volume, setVolume] = useState(0); // State for selected volume

  // Handler function to update the type state
  const handleTypeChange = (newType) => {
    setType(newType);
  };

  // Handler function to update the volume state
  const handleVolumeChange = (newVolume) => {
    setVolume(newVolume);
  };

  return (
    <>
      {/* Dropdown menu for selecting types */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">Select Type</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>Types</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuCheckboxItem
            checked={type === "drywaste"}
            onCheckedChange={(checked) =>
              handleTypeChange(checked ? "drywaste" : "")
            }
          >
            Dry Waste
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem
            checked={type === "wetwaste"}
            onCheckedChange={(checked) =>
              handleTypeChange(checked ? "wetwaste" : "")
            }
          >
            Wet Waste
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem
            checked={type === "ewaste"}
            onCheckedChange={(checked) =>
              handleTypeChange(checked ? "ewaste" : "")
            }
          >
            E-Waste
          </DropdownMenuCheckboxItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Dropdown menu for selecting volumes */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">Select Volume</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>Volumes</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuCheckboxItem
            checked={volume === 10}
            onCheckedChange={(checked) => handleVolumeChange(checked ? 10 : 0)}
          >
            Small (10)
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem
            checked={volume === 15}
            onCheckedChange={(checked) => handleVolumeChange(checked ? 15 : 0)}
          >
            Medium (15)
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem
            checked={volume === 20}
            onCheckedChange={(checked) => handleVolumeChange(checked ? 20 : 0)}
          >
            Large (20)
          </DropdownMenuCheckboxItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <Button
        onClick={async () => {
          try {
            const response = await axios.post(
              "http://localhost:3000/waste/input",
              {
                volume,
                type,
                date: new Date(),
              },
              {
                headers: {
                  authorization: localStorage.getItem("token"),
                },
              }
            );
            console.log("Response:", response.data); // Logging the response data
          } catch (error) {
            console.error("Error:", error); // Logging any errors that occur
          }
        }}
        label="Enter"
      />
    </>
  );
}
