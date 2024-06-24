import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";
import React from "react";

export default function LoadingFlightItem() {
  return (
    <div className="ticket-card flex justify-between items-center rounded-[20px] gap-[30px] p-5 bg-flysha-bg-purple">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3 md:gap-[30px]">
        <div className="flex gap-[16px] items-center">
          <div className="hidden md:flex shrink-0 w-[90px] h-[70px] rounded-[14px] overflow-hidden">
            <Skeleton className="w-[90px] bg-white h-[70px] rounded-lg" />
          </div>
          <div className="flex flex-col justify-center-center gap-[2px]">
            <Skeleton className="w-[100px] bg-white h-5" />
            <Skeleton className="w-[100px] bg-white h-4" />
          </div>
        </div>
        <div className="flex items-center gap-5 md:gap-[30px]">
          <div className="flex flex-col gap-[2px] text-center">
            <Skeleton className="w-[38px] md:w-[50px] bg-white h-5" />
            <Skeleton className="w-[38px] md:w-[50px] bg-white h-5" />
          </div>
          <Image
            width={50}
            height={60}
            src="/assets/images/icons/plane-dotted.svg"
            alt="icon"
          />
          <div className="flex flex-col gap-[2px] text-center">
            <Skeleton className="w-[38px] md:w-[50px] bg-white h-5" />
            <Skeleton className="w-[38px] md:w-[50px] bg-white h-5" />
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-end md:items-center gap-[30px]">
        <Skeleton className="w-[100px] md:w-[150px] bg-white h-6 rounded-lg" />

        <Skeleton className="w-[32px] md:w-[150px] bg-white h-[32px] md:h-[48px] rounded-full" />
      </div>
    </div>
  );
}
