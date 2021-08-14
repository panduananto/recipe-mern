import mongoose from 'mongoose';

const RecipesSchema = mongoose.Schema({
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

const Recipes = mongoose.model('Recipes', RecipesSchema);

export default Recipes;
