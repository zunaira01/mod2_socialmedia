const mongoose = require('mongoose');
const COLLECTION = "SocialApp";
// mongoose.connect(process.env.MONGODB_URI || config.connectionString);

// mongoose.connect(
//     process.env.MONGO_URI
  
// , {
//   useNewUrlParser: true,
//   useCreateIndex: true,
//   useUnifiedTopology: true
// });
//let connectionString= `mongodb+srv://${process.env.MONGOUSERNAME}:${process.env.MONGOPASSWORD}@cluster0.l53ufn0.mongodb.net/cafeapp?retryWrites=true&w=majority`
// , {
    
let connectionString = process.env.MONGO_URI;
// by default mongoose has a strictQuery that is set to true (meaning we can't ask info that is not in our schema)
//https://mongoosejs.com/docs/migrating_to_6.html#strictquery-is-removed-and-replaced-by-strict
mongoose.set('strictQuery', false)

mongoose.connect(connectionString, {

  // useNewUrlParser: true,
  // useCreateIndex: true,
  useUnifiedTopology: true
  
});






