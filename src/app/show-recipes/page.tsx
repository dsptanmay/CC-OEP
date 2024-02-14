"use client";
import RecipeCard from "@/components/RecipeCard";
import { AuthContext } from "@/provider/AuthProvider";
import { getAllUID } from "@/services/fetchServ";
import { RecipeObject } from "@/types/Recipe";
import { useRouter } from "next/navigation";
import { Key, useEffect, useState } from "react";

const ShowRecipes = () => {
  const [recipes, setRecipes] = useState<RecipeObject>();
  const router = useRouter();
  const { user }: any = AuthContext();
  const userInfo = user.user;
  useEffect(() => {
    const fetchData = async () => {
      const res = await getAllUID("234");
      setRecipes(res);
    };
    fetchData();
  }, []);
  // recipes?.message.forEach((res) => {
  //   console.log(res.userid, res.title);
  // });
  return (
    <div className="container mx-auto m-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {recipes?.message.map((recipe) => {
          return <RecipeCard key={recipe._id as Key} recipe={recipe} />;
        })}
      </div>
    </div>
  );
};

export default ShowRecipes;
