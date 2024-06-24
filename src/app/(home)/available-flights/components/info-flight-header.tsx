"use client";
import { useSearchParams } from "next/navigation";
import React, { useContext } from "react";
import { type FContext, FlightContext } from "../providers/flight-provider";
import { dateFormat } from "@/lib/utils";
import LoadingFlightHeader from "./loading-info-flight-header";

export default function InfoFlightHeader() {
  const search = useSearchParams();
  const { flights, isLoading } = useContext(FlightContext) as FContext;

  const params = {
    departure: search.get("departure"),
    arrival: search.get("arrival"),
    date: search.get("date"),
  };
  if (isLoading) {
    return <LoadingFlightHeader />;
  }
  return (
    <div className="title container max-w-[1130px] mx-auto flex flex-col gap-1 pt-[50px] pb-[68px]">
      <h1 className="font-bold text-[32px] leading-[48px]">
        {params?.departure && params?.arrival
          ? `${params.departure} to ${params.arrival}`
          : "All Flights"}
      </h1>
      {params && params.date && (
        <p className="font-medium text-lg leading-[27px]">
          {dateFormat(params.date, "DD MMM YYYY")}
        </p>
      )}
      <p className="font-medium text-lg leading-[27px]">
        {flights && flights.length > 0
          ? `${flights.length} flights available`
          : "No flights available"}
      </p>
    </div>
  );
}
