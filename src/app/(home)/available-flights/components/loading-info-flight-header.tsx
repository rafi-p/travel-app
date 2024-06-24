import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

export default function LoadingFlightHeader() {
  return (
    <div className="title container max-w-[1130px] mx-auto flex flex-col gap-1 pt-[50px] pb-[68px]">
      <Skeleton className="bg-white w-[200px] h-[48px]" />
      <Skeleton className="bg-white w-[150px] h-[27px]" />
      <Skeleton className="bg-white w-[150px] h-[27px]" />
    </div>
  );
}
