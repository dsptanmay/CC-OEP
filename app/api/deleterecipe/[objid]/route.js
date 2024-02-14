import mongoose from "mongoose";
import { NextRequest, NextResponse } from "next/server";
import Recipe from "@/app/models/recipe";

// For Testing Purpose
export async function GET(request, { params }) {
    try {
        const successObject = { successMessage: "true" }; 
        return NextResponse.json({ message: successObject }, { status: 201 });
    } catch (error) {
        return NextResponse.json({message: error}, { status: 500});
    }
}

// // To DELETE a Single Recipe
export async function DELETE(request, { params }) {
    try {
        const { objid: _id } = params;
        console.log(_id);
        const deletedRecipe = await Recipe.findByIdAndDelete(_id);
        return NextResponse.json({ message: deletedRecipe}, { status: 201 });
    } catch (error) {
        return NextResponse.json({ message: error }, { status: 500 });
    }
}