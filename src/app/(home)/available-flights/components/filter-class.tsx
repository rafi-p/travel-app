"use client";

import type { TypeSeat } from "@prisma/client";
import React, { type ChangeEvent, useContext } from "react";
import {
  type FContext,
  FlightContext,
  FilterActionKind,
} from "../providers/flight-provider";

const SEAT_OPTIONS: TypeSeat[] = ["ECONOMY", "BUSINESS", "FIRST"];

export default function FilterClass() {
  const { dispatch } = useContext(FlightContext) as FContext;

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    dispatch({
      type: FilterActionKind.SET_SEAT,
      payload: {
        planeId: "",
        seat: value,
      },
    });
  };

  return (
    <div className="flex flex-col gap-3 md:gap-4">
      <p className="font-semibold  text-xs md:text-base">Seat Class</p>
      <div className="p-[1px] md:p-0 flex flex-col gap-3 md:gap-4">
        {SEAT_OPTIONS.map((val, i) => (
          <label
            key={`${val}${i}`}
            htmlFor={val}
            className="font-semibold text-[10px] md:text-base flex items-center gap-[10px] has-[:checked]:text-white"
          >
            <input
              type="radio"
              name="seat"
              value={val}
              id={val}
              onChange={handleChange}
              className="w-[18px] h-[18px] appearance-none checked:border-[3px] checked:border-solid checked:border-flysha-black rounded-full checked:bg-flysha-light-purple ring-2 ring-flysha-off-purple checked:ring-white"
            />
            {val}
          </label>
        ))}
      </div>
    </div>
  );
}
