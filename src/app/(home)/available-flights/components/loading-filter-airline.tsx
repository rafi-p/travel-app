import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

export default function LoadingFilterAirline() {
  return (
    <div className="flex flex-col gap-4">
      <p className="font-semibold">Airlines</p>
      {[0, 1, 2].map((val) => (
        <label
          key={`${val}`}
          className="font-semibold flex items-center gap-[10px] text-white"
        >
          <Skeleton className="bg-white w-[25px] h-[25px] rounded" />
          <Skeleton className="bg-white w-[150px] h-[25px] rounded" />
        </label>
      ))}
    </div>
  );
}
