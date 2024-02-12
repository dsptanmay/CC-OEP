import mongoose, { Schema } from "mongoose";

mongoose.connect(process.env.MONGO_URI);
mongoose.Promise = global.Promise;
console.log("Successful DB Connection");

const recipeSchema = new Schema({
    title: {
        type: String,
        requiered: true,
        maxlength: 20,
        minlength: 3,
        trim: true,
        uppercase: true
    },
    description: {
        type: String,
        requiered: true,
        maxlength: 100,
        minlength: 10,
    },
    servings: {
        type: Number,
        requiered: true,
        min: 1,
        max: 10
    },
    rating: {
        type: Number,
        requiered: true,
        min: 1,
        max: 5
    },
    steps: {
        type: String,
        requiered: true,
        minlength: 10,
        maxlength: 500
    }
}, { timestamps: true });

const Recipe = mongoose.models.Recipe || mongoose.model("Recipe", recipeSchema);
export default Recipe;