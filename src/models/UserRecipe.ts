// models/UserRecipe.ts

import mongoose, { Schema, Document } from "mongoose";

export interface IUserRecipe extends Document {
  userId: string;
  recipes: IRecipe[];
}

export interface IRecipe {
  title: string;
  description: string;
  rating: number;
  servings: number;
  steps: string;
}

const RecipeSchema: Schema = new Schema({
  description: { type: String, required: true },
  rating: { type: Number, required: true },
  servings: { type: Number, required: true },
  steps: { type: String, required: true },
  title: { type: String, required: true },
});

const UserRecipeSchema: Schema = new Schema(
  {
    userId: { type: String, required: true, unique: true },
    recipes: [RecipeSchema],
  },
  { timestamps: true }
);

export default mongoose.models.UserRecipe ||
  mongoose.model<IUserRecipe>("UserRecipe", UserRecipeSchema);
