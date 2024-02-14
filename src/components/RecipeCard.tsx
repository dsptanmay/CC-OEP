import React, { useEffect, useRef, useState } from "react";
import { RecipeType } from "@/types/Recipe";
import axios from "axios";
import { useRouter } from "next/navigation";
import { HOME_ROUTE, SHOW_RECIPES_ROUTE } from "@/constants/routes";

interface RecipeCardProps {
  recipe: RecipeType;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => {
  const router = useRouter();
  const [showMenu, setShowMenu] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState<RecipeType | null>(null);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const toggleModal = (recipe: RecipeType) => {
    setSelectedRecipe(recipe);
    setShowModal(!showModal);
  };

  const handleDelete = async (_id: string) => {
    console.log("Delete function", _id);
    await axios.delete(`${HOME_ROUTE}api/delete/${_id}`);
    window.location.reload(); 
  };

  const handleShare = () => {
    console.log("Share clicked");
  };

  return (
    <div
      className="bg-white rounded-lg shadow-md p-4 relative"
      onClick={() => toggleModal(recipe)}
    >
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
            onClick={() => handleDelete(recipe._id as string)}
          >
            Delete
          </button>
          <button className="block w-full text-left py-2" onClick={handleShare}>
            Share
          </button>
        </div>
      )}

      {showModal && selectedRecipe && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-50">
          <div className="bg-white rounded-lg shadow-md p-4 w-3/4 h-4/5">
            <h2 className="text-4xl font-semibold mb-2 text-center">
              {selectedRecipe.title}
            </h2>
            <p className="text-gray-900 mb-2 text-xl">{selectedRecipe.description}</p>
            <div className="flex items-center mb-2">
              <span className="text-gray-600 text-xl">Rating: </span>
              <span className="text-yellow-500 mr-1 text-xl">
                {selectedRecipe.rating.toString()}
              </span>
            </div>
            <div className="text-gray-600 text-xl">
              Serving Size: {selectedRecipe.servings.toString()}
            </div>
            <div className="text-gray-600 text-xl">Steps: {selectedRecipe.steps}</div>
            <button
              className="mt-4 text-xl bg-blue-500 text-white px-4 py-2 rounded absolute bottom-28 left-1/2 transform -translate-x-1/2"
              onClick={() => toggleModal(recipe)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default RecipeCard;
