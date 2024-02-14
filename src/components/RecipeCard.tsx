import React, { useEffect, useRef, useState } from "react";
import { RecipeType } from "@/types/Recipe";

interface RecipeCardProps {
  recipe: RecipeType;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleDelete = () => {
    console.log("Delete clicked");
  };

  const handleShare = () => {
    console.log("Share clicked");
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 relative">
      <h2 className="text-lg font-semibold mb-2 truncate">{recipe.title}</h2>
      <p className="text-gray-600 mb-2 truncate">
        {recipe.description.slice(0, 20)}...
      </p>
      <div className="flex items-center mb-2">
        <span className="text-gray-600">Rating: </span>
        <span className="text-yellow-500 mr-1">{recipe.rating.toString()}</span>
      </div>
      <div className="text-gray-600">
        Serving Size: {recipe.servings.toString()}
      </div>
      <button
        className="absolute bottom-2 right-2 p-2 rounded-full bg-gray-200"
        onClick={toggleMenu}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-3 w-3 text-gray-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          />
        </svg>
      </button>
      {showMenu && (
        <div className="absolute bottom-10 right-2 bg-white border border-gray-200 rounded-md shadow-md p-2">
          <button
            className="block w-full text-left py-2"
            onClick={handleDelete}
          >
            Delete
          </button>
          <button className="block w-full text-left py-2" onClick={handleShare}>
            Share
          </button>
        </div>
      )}
    </div>
  );
};

export default RecipeCard;
