import { getAirplanes } from "@/app/dashboard/(home)/airplanes/lib/data";
import React from "react";
import { CheckboxAirline } from "./checkbox-airline";

export default async function FilterAirline() {
  const airplanes = await getAirplanes();

  return (
    <div className="flex flex-col gap-3 md:gap-4">
      <p className="font-semibold  text-xs md:text-base">Airlines</p>
      <div className="h-[80px] md:h-auto w-40 md:w-auto p-[1px] md:p-0 overflow-y-auto md:overflow-y-visible flex flex-col gap-3 md:gap-4">
        {airplanes?.map((val, i) => (
          <CheckboxAirline key={`${val.name}${i}`} val={val} />
        ))}
      </div>
    </div>
  );
}
