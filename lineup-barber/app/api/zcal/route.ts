import { CALENDER_URL_ID } from "@/data";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await fetch(
      `https://zcal.co/api/invites/${CALENDER_URL_ID}?embed=1&embedVersion=1.0.2`,
      //{ next: { revalidate: 1000 } }, // cache for 5 mins
    );

    if (!res.ok) {
      return NextResponse.json(
        { error: `zcal error: ${res.status}` },
        { status: res.status },
      );
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch (err) {
    console.error("zcal proxy error:", err);
    return NextResponse.json(
      { error: "Failed to fetch zcal data" },
      { status: 500 },
    );
  }
}
