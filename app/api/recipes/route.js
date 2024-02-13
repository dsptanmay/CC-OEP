import Recipe from '@/app/models/recipe';
import { NextResponse, NextRequest } from "next/server";

// To get all users recipes
export async function GET(request) {
  try {
      const allData = await Recipe.find({});
      return NextResponse.json({ message: allData}, { status: 201 });
  } catch (error) {
    return NextResponse.json({ status: 500 }, { message: error });
  }
}
