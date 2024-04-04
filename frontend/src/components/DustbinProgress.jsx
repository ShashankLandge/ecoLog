import { Progress } from "@/components/ui/progress";
import { useState, useEffect } from "react";
import axios from "axios";

export function DustbinProgress({ capacity, volume }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (capacity > 0 && volume >= 0) {
      const calculatedProgress = (volume / capacity) * 100;
      setProgress(calculatedProgress);
    }
  }, [capacity, volume]);

  return <Progress value={progress} className="w-[60%]" />;
}
