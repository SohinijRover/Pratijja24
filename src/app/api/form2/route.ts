
import { db } from "@/server/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  let data;
  try {
    data = await request.json();
  } catch (error) {
    return NextResponse.json(
      {
        message: "No data provided",
      },
      {
        status: 400,
      },
    );
  }

  const { email,
    institution,
    name_poc1,
    contact_poc1,
    email_poc1,
    name_poc2,
    contact_poc2,
    email_poc2,
    slots,
    ajudicator_slots,
    accomodation,
    message} = data;

  try {
    await db.form2.create({
      data: {
        email,
        institution,
        name_poc1,
        contact_poc1,
        email_poc1,
        name_poc2,
        contact_poc2,
        email_poc2,
        slots,
        ajudicator_slots,
        accomodation,
        message,
      },
    });
    return NextResponse.json(
      {
        success: true,
        message: "Registered successfully",
      },
      {
        status: 201,
      },
    );
  } catch (error) {
    console.log({ register: error });
    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong.",
      },
      {
        status: 500,
      },
    );
  }
}
