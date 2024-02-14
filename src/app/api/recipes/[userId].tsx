// pages/api/recipes/[userId].tsx

import dbConnect from "@/utils/dbConnect";
import UserRecipe, { IRecipe, IUserRecipe } from "@/models/UserRecipe";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;

  await dbConnect();

  const userId = req.query.userId as string;

  switch (method) {
    case "GET":
      try {
        const userRecipes = await UserRecipe.findOne({ userId });
        res
          .status(200)
          .json({ success: true, data: userRecipes?.recipes || [] });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    case "POST":
      try {
        const newRecipe: IRecipe = req.body;
        const userRecipes = await UserRecipe.findOneAndUpdate(
          { userId },
          { $push: { recipes: newRecipe } },
          { new: true, upsert: true }
        );
        res.status(201).json({ success: true, data: userRecipes.recipes });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    case "DELETE":
      try {
        const deletedRecipeId = req.body.recipeId;
        const userRecipes = await UserRecipe.findOneAndUpdate(
          { userId },
          { $pull: { recipes: { _id: deletedRecipeId } } },
          { new: true }
        );
        res.status(200).json({ success: true, data: userRecipes.recipes });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    default:
      res.status(400).json({ success: false });
      break;
  }
}
