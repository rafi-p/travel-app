import { getAirplanes } from "@/app/dashboard/(home)/airplanes/lib/data";
import React from "react";
import { CheckboxAirline } from "./checkbox-airline";

export default async function FilterAirline() {
  const airplanes = await getAirplanes();

  return (
    <div className="flex flex-col gap-4">
      <p className="font-semibold">Airlines</p>
      {airplanes?.map((val, i) => (
        <CheckboxAirline key={`${val.name}${i}`} val={val} />
      ))}
    </div>
  );
}
