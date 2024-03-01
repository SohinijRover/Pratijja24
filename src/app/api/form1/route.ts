
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

  const { team_name,speaker_1,email_1,contact_1 ,institution_1,speaker_2,email_2,contact_2,institution_2,speaker_3,email_3,contact_3,institution_3,accomodation, message} = data;

  try {
    await db.form1.create({
      data: {
        team_name,
        speaker_1,
        email_1,
        contact_1,
        institution_1,
        speaker_2,
        email_2,
        contact_2,
        institution_2,
        speaker_3,
        email_3,
        contact_3,
        institution_3,
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
