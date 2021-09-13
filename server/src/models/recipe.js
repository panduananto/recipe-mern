import mongoose from 'mongoose';

const RecipeSchema = mongoose.Schema({
  title: String,
  tags: [{ type: String, trim: true }],
  creator: {
    type: String,
    default: 'user 1',
  },
  images: String,
  description: String,
  ingredient: [{ name: { type: String, trim: true }, amount: { type: String, trim: true } }],
  step: [{ description: { type: String, trim: true }, image: { type: String } }],
  rating: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

const Recipe = mongoose.model('Recipe', RecipeSchema);

export default Recipe;
