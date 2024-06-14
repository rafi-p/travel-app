"use client";

import type { Airplane, Flight } from "@prisma/client";
import { useQuery } from "@tanstack/react-query";
import React, {
  Dispatch,
  createContext,
  useReducer,
  type FC,
  type ReactNode,
} from "react";
import axios from "axios";
import { useSearchParams } from "next/navigation";

interface FlightProviderProps {
  children: ReactNode;
}

export enum FilterActionKind {
  ADD_PLANE = "ADD_PLANE",
  REMOVE_PLANE = "REMOVE_PLANE",
}

type FilterState = {
  departure?: string | null;
  arrival?: string | null;
  date?: string | null;
  planeId: string;
  planeIds: string[];
  seat?: string | null;
};

type FilterAction = {
  type: FilterActionKind;
  payload: Omit<FilterState, "planeIds">;
};

function filterReducer(state: FilterState, action: FilterAction): FilterState {
  const { payload, type } = action;

  switch (type) {
    case FilterActionKind.ADD_PLANE:
      return {
        ...state,
        planeIds: [...state.planeIds, payload.planeId],
      };
    case FilterActionKind.REMOVE_PLANE:
      return {
        ...state,
        planeIds: state.planeIds.filter((item) => item !== payload.planeId),
      };

    default:
      return state;
  }
}

export type FlightWithPlane = Flight & {
  plane: Airplane;
};

export type FContext = {
  flights: FlightWithPlane[] | undefined;
  isLoading: boolean;
  dispatch: Dispatch<FilterAction>;
};

export const FlightContext = createContext<FContext | null>(null);

const FlightProvider: FC<FlightProviderProps> = ({ children }) => {
  const search = useSearchParams();

  const params = {
    departure: search.get("departure"),
    arrival: search.get("arrival"),
    date: search.get("date"),
  };

  const [state, dispatch] = useReducer(filterReducer, {
    arrival: params.arrival,
    date: params.date,
    departure: params.departure,
    planeId: "",
    planeIds: [],
    seat: null,
  });

  const { data, isLoading } = useQuery({
    queryKey: ["flights-list", state],
    queryFn: () =>
      axios.post("/api/flights", state).then((res) => res.data.data),
  });

  return (
    <FlightContext.Provider value={{ flights: data, isLoading, dispatch }}>
      {children}
    </FlightContext.Provider>
  );
};

export default FlightProvider;
