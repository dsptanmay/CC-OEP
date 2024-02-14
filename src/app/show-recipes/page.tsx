"use client";
import RecipeCard from "@/components/RecipeCard";
import { ADD_RECIPES_ROUTE } from "@/constants/routes";
import { AuthContext } from "@/provider/AuthProvider";
import { getAllUID } from "@/services/fetchServ";
import { RecipeObject } from "@/types/Recipe";
import { User } from "firebase/auth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Key, useEffect, useState } from "react";

const ShowRecipes = () => {
  const [recipes, setRecipes] = useState<RecipeObject>();
  const { user }: any = AuthContext();
  const userInfo: User = user.user;
  useEffect(() => {
    const fetchData = async () => {
      const res = await getAllUID(userInfo.uid);
      setRecipes(res);
    };
    fetchData();
  }, []);
  console.log(recipes);
  return (
    <div className="h-screen max:h-screen-auto flex justify-center items-center bg-gradient-to-br from-yellow-400/20 via-blue-300 to-purple-400/60">
      <div className="container mx-auto m-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {recipes?.message.map((recipe) => {
            return <RecipeCard key={recipe._id as Key} recipe={recipe} />;
          })}
        </div>
      </div>
      <Link href={ADD_RECIPES_ROUTE}>
        <button className="mt-4 text-xl bg-blue-500 text-white px-4 py-2 rounded absolute bottom-28 left-1/2 transform -translate-x-1/2">
          Add a Recipe
        </button>
      </Link>
    </div>
  );
};

export default ShowRecipes;
