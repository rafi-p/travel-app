import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

export default function LoadingTicketCard() {
  return (
    <div className="ticket-card flex justify-between items-center rounded-[20px] p-5 bg-flysha-bg-purple">
      <div className="flex gap-[16px] items-center">
        <div className="flex shrink-0 w-[90px] h-[70px] rounded-[14px] overflow-hidden">
          <Skeleton className="bg-white w-[90px] h-[70px] rounded-md" />
        </div>
        <div className="flex flex-col justify-center-center gap-[2px]">
          <Skeleton className="bg-white w-[60px] h-5" />
          <Skeleton className="bg-white w-[90px] h-5" />
        </div>
      </div>
      <Skeleton className="bg-white w-[120px] h-5" />

      <div className="flex items-center gap-[30px]">
        <div className="flex flex-col gap-[2px] text-center">
          <Skeleton className="bg-white w-[60px] h-5" />
          <Skeleton className="bg-white w-[90px] h-5" />
        </div>
        <img src="/assets/images/icons/plane-dotted.svg" alt="icon" />
        <div className="flex flex-col gap-[2px] text-center">
          <Skeleton className="bg-white w-[60px] h-5" />
          <Skeleton className="bg-white w-[90px] h-5" />
        </div>
      </div>
      <Skeleton className="bg-white w-[100px] h-[48px] rounded-full" />
    </div>
  );
}
