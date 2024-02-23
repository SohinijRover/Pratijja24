
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
  const{email,name, phone, issue } = data;

  try {
    await db.contact.create({
      data:{
        email,
        name,
        phone,
        issue,
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
