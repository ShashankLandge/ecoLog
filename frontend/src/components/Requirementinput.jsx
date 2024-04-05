import { useState } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export function Requirementinput() {
  const [volume, setVolume] = useState("");
  const [type, setType] = useState("");
  const [ppv, setPpv] = useState("");

  const handleSubmit = async () => {
    try {
      // Convert volume and ppv to numbers
      const parsedVolume = parseInt(volume);
      const parsedPpv = parseInt(ppv);

      const response = await axios.post(
        "http://localhost:3000/requirement/create",
        {
          volume: parsedVolume,
          type,
          ppv: parsedPpv,
        },
        {
          headers: {
            authorization: localStorage.getItem("token"),
          },
        }
      );

      console.log("Requirement created successfully", response.data);
      // Optionally, you can reset the form fields after successful submission
      setVolume("");
      setType("");
      setPpv("");
    } catch (error) {
      console.error("There was a problem with your fetch operation:", error);
    }
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Post Requirement</Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Requirement Details</h4>
            <p className="text-sm text-muted-foreground">
              Enter details for the requirement.
            </p>
          </div>
          <div className="grid gap-2">
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="volume">Volume</Label>
              <Input
                id="volume"
                value={volume}
                onChange={(e) => setVolume(e.target.value)}
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
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="ppv">PPV</Label>
              <Input
                id="ppv"
                value={ppv}
                onChange={(e) => setPpv(e.target.value)}
                className="col-span-2 h-8"
              />
            </div>
          </div>
          <div className="text-right">
            <Button onClick={handleSubmit}>Submit</Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
