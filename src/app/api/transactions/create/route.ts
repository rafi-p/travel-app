import type { NextRequest } from "next/server";
import prisma from "../../../../../lib/prisma";
import { makeid } from "@/lib/utils";

export async function POST(request: NextRequest) {
  const body = await request.json();

  try {
    console.log(body);
    const transactions = await prisma.ticket.create({
      data: {
        bookingDate: body.bookingDate,
        price: body.price,
        status: "PENDING",
        customerId: body.customerId,
        flightId: body.flightId,
        seatId: body.seatId,
        code: `TRX${makeid(7)}`,
      },
    });

    await prisma.flightSeat.update({
      where: {
        id: transactions.seatId,
      },
      data: {
        isBooked: true,
      },
    });

    // handle midtrans
    return Response.json({ transaction_id: transactions.id });
  } catch (error) {
    console.log(error);
    return Response.json({ error }, { status: 500 });
  }
}
