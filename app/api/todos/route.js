import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json([{ currentTimestamp: Date.now() }, { id: 2 }]);
}
