export type RecipeType = {
  createdAt: String;
  description: String;
  rating: Number;
  servingSize: Number;
  steps: String;
  title: String;
  userId: String;
  __v: any;
  _id: String;
};

export type RecipeObject = {
  message: Array<RecipeType>;
};
