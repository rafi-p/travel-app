import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

export default function LoadingTicketCard() {
  return (
    <div className="ticket-card flex justify-between items-center rounded-[20px] gap-[30px] p-5 bg-flysha-bg-purple">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2 md:gap-[30px]">
        <div className="flex gap-[16px] items-center">
          <div className="hidden md:flex shrink-0 w-[90px] h-[70px] rounded-[14px] overflow-hidden">
            <Skeleton className="bg-white w-[90px] h-[70px] rounded-md" />
          </div>
          <div className="flex flex-col justify-center-center gap-[2px]">
            <Skeleton className="bg-white w-[60px] h-5" />
            <Skeleton className="bg-white w-[90px] h-5" />
          </div>
        </div>
        <p className="w-fit h-fit font-bold text-sm md:text-lg">
          <Skeleton className="bg-white w-[90px] md:w-[120px] h-5" />
        </p>
        <div className="flex items-center gap-5 md:gap-[30px]">
          <div className="flex flex-col gap-[2px] text-center">
            <Skeleton className="bg-white w-[38px] md:w-[60px] h-5" />
            <Skeleton className="bg-white w-[38px] md:w-[90px] h-5" />
          </div>
          <img src="/assets/images/icons/plane-dotted.svg" alt="icon" />
          <div className="flex flex-col gap-[2px] text-center">
            <Skeleton className="bg-white w-[38px] md:w-[60px] h-5" />
            <Skeleton className="bg-white w-[38px] md:w-[90px] h-5" />
          </div>
        </div>
      </div>
      <div className="flex h-full justify-between items-start md:items-center gap-[30px]">
        <Skeleton className="bg-white w-[32px] md:w-[100px] h-[32px] md:h-[48px] rounded-full" />
      </div>
    </div>
  );
}
