"use client";
import { FormEventHandler, useState } from "react";
import { RecipeObject } from "@/types/Recipe";
import axios from "axios";
import { HOME_ROUTE } from "@/constants/routes";
import { auth } from "@/services/firebase";
import { AuthContext } from "@/provider/AuthProvider";
import { User } from "firebase/auth";
import { useRouter } from "next/navigation";

type RecipeType = {
  description: string;
  rating: number;
  servings: number;
  steps: string;
  title: string;
};

const AddRecipe = () => {
  const { user }: any = AuthContext();
  const router = useRouter();
  const userInfo: User = user.user;
  const [title, setTitle] = useState<string>("");
  const [rating, setRating] = useState<number>(0);
  const [servings, setServings] = useState<number>(0);
  const [steps, setSteps] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const handleSubmitRecipe = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const recipeData: RecipeType = {
      title,
      rating,
      servings,
      steps,
      description,
    };

    try {
      const response = await fetch(`${HOME_ROUTE}api/recipes/${userInfo.uid}`, {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        body: JSON.stringify(recipeData),
      });
      const t = await response.json();
      router.push("/show-recipes");
    } catch (error) {
      console.error("Error submitting recipe:", error);
    }
  };

  return (
    <div>
      <div className="container w-3/4 py-8 mx-auto">
        <form
          onSubmit={handleSubmitRecipe}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <label className="block text-gray-700 text-sm font-bold m-2">
            Name of Recipe
          </label>
          <input
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />

          <label className="block text-gray-700 text-sm font-bold m-2">
            Number of Servings
          </label>
          <input
            value={servings}
            onChange={(e) => {
              const n = parseInt(e.target.value);
              setServings(n);
            }}
            className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          />

          <label className="block text-gray-700 text-sm font-bold m-2">
            Rating
          </label>
          <input
            value={rating}
            onChange={(e) => {
              const n = parseInt(e.target.value);
              setRating(n);
            }}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />

          <label className="block text-gray-700 text-sm font-bold m-2">
            Desciption
          </label>
          <textarea
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter your  Recipe here..."
          ></textarea>

          <label className="block text-gray-700 text-sm font-bold m-2">
            Steps to Prepare
          </label>
          <textarea
            value={steps}
            onChange={(e) => {
              setSteps(e.target.value);
            }}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter your  Recipe here..."
          ></textarea>

          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddRecipe;
