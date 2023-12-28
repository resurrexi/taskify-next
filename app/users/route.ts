import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json({
    hello: "taskify",
  })
}

export function POST() {
  return NextResponse.json({
    hello: "taskify",
  })
}

export function PATCH() {
  return NextResponse.json({
    hello: "taskify",
  })
}
