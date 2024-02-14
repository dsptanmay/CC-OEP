"use client";
import RecipeCard from "@/components/RecipeCard";
import { AuthContext } from "@/provider/AuthProvider";
import { getAllUID } from "@/services/fetchServ";
import { RecipeObject } from "@/types/Recipe";
import { User } from "firebase/auth";
import { useRouter } from "next/navigation";
import { Key, useEffect, useState } from "react";

const ShowRecipes = () => {
  const [recipes, setRecipes] = useState<RecipeObject>();
  const router = useRouter();
  const { user }: any = AuthContext();
  const userInfo: User = user.user;
  useEffect(() => {
    const fetchData = async () => {
      const res = await getAllUID("234");
      setRecipes(res);
    };
    fetchData();
  }, []);
  return (
    <div className="h-screen max:h-screen-auto flex justify-center items-center bg-gradient-to-br from-yellow-400/20 via-blue-300 to-purple-400/60">
      <div className="container mx-auto m-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {recipes?.message.map((recipe) => {
            return <RecipeCard key={recipe._id as Key} recipe={recipe} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default ShowRecipes;
