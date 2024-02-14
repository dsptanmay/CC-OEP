import mongoose from "mongoose";
import { NextRequest, NextResponse } from "next/server";
import Recipe from "@/app/models/recipe";

// POST a recipe from a user
export async function POST(request, { params }) {
  try {
    const { uid: userid } = params;
    const { title, description, servings, rating, steps } =
      await request.json();
    const savedData = await Recipe.create({
      userid,
      title,
      description,
      servings,
      rating,
      steps,
    });
    console.log("data saved");
    return NextResponse.json({ message: savedData }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
}

// GET all recipes for a user 
export async function GET(request, { params }) {
  try {
    const { uid: userid } = params;
    const allData = await Recipe.find({});
    const particularUserData = allData.filter((data) => data.userid == userid);
    return NextResponse.json({ message: particularUserData }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
}

