import mongoose from 'mongoose';

const RecipeSchema = mongoose.Schema({
  title: String,
  tags: [String],
  creator: String,
  images: String,
  rating: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: Date,
});

const Recipe = mongoose.model('Recipe', RecipeSchema);

export default Recipe;
