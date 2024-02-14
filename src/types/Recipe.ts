export type RecipeType = {
  createdAt: String;
  description: String;
  rating: Number;
  servings: Number;
  steps: String;
  title: String;
  updatedAt: String;
  userid: String;
  __v: any;
  _id: String;
};

export type RecipeObject = {
  message: Array<RecipeType>;
};
