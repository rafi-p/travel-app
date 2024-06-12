import Image from "next/image";
import React from "react";
import FlightItem from "./flight-item";

export default function ListFlights() {
  return (
    <div className="ticket-container flex flex-col w-full gap-6">
      <FlightItem />
      <FlightItem />
      <FlightItem />
      <FlightItem />

      <p className="text-center text-sm text-[#A0A0AC] h-fit">
        You’ve reached the end of results.
      </p>
    </div>
  );
}
