import mongoose from "mongoose";
import { NextRequest, NextResponse } from "next/server";
import Recipe from '@/app/models/recipe';

export async function POST(request, { params }) {
    try {
        const { uid: userid } = params;
        const { title, description, servings, rating, steps } = await request.json();
        const savedData = await Recipe.create({userid, title, description, servings, rating, steps});
        console.log("data saved");
        return NextResponse.json({message: savedData}, { status: 201});
    } catch (error) {
        return NextResponse.json({ message: error}, { status: 500});
    }
}
