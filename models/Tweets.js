import mongoose from 'mongoose';
const { Schema } = mongoose;

const tweetsSchema = new Schema({
   username: {
      type: String,
      required: true
   },
   message: {
      type: String,
      required: true
   },
   like: {
      type: Boolean,
      default: false
   },
   fav: {
      type: Boolean,
      default: false
   },
   tweetfav:{
      type: Array,
      default:[]
   }
});

const Tweets = mongoose.model('Tweets', tweetsSchema);
export default Tweets