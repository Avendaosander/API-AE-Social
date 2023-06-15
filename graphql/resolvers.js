import Tweets from '../models/Tweets.js'

export const resolvers = {
   Query: {
      tweets: async () => await Tweets.find().lean(),
      tweetsFav:async()=> await Tweets.find({fav:{$in:true}}).lean(),
   },
   Mutation: {
      createTweet: async (_, {username, message}) => {
         const tweet = new Tweets({
            username,
            message
         })
         const saveTweet = await tweet.save()
         return saveTweet
      },
      updateTweet: async (_, args) => {
         const updateTweet = await Tweets.findByIdAndUpdate(args._id, args, {new: true})
         if (!updateTweet) throw new Error('Tweet not found')
         return updateTweet
      },
      deleteTweet: async (_, {_id}) => {
         const deletedTweet = await Tweets.findByIdAndDelete(_id).lean()
         if (!deletedTweet) throw new Error('Tweet not found')
         return deletedTweet
      },
   }
};