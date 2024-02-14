import Recipe from "@/models/recipe";
import { NextResponse, NextRequest } from "next/server";

export async function GET(request) {
  try {
    const allData = await Recipe.find({});
    return NextResponse.json({ message: allData }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ status: 500 }, { message: error });
  }
}
