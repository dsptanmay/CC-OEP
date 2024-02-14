import mongoose, { Schema } from "mongoose";

mongoose.connect(process.env.NEXT_PUBLIC_MONGO_URI as string);
mongoose.Promise = global.Promise;

const recipeSchema = new Schema(
  {
    userid: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
      maxlength: 20,
      minlength: 3,
      trim: true,
      uppercase: true,
    },
    description: {
      type: String,
      required: true,
      maxlength: 100,
      minlength: 10,
    },
    servings: {
      type: Number,
      required: true,
      min: 1,
      max: 10,
    },
    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
    },
    steps: {
      type: String,
      required: true,
      minlength: 10,
      maxlength: 500,
    },
  },
  { timestamps: true }
);

const Recipe = mongoose.models.Recipe || mongoose.model("Recipe", recipeSchema);
export default Recipe;
