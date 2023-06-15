import mongoose from 'mongoose';
const { Schema } = mongoose;

const favoritesSchema = new Schema({
   username: {
      type: String,
      required: true
   },
   message: {
      type: String,
      required: true
   }
});

const Favorites = mongoose.model('Favorites', favoritesSchema);
export default Favorites