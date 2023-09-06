const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const bcrypt = require('bcrypt');
// const axios = require('axios');
const cors = require('cors');

const User = require('./models/user');

// const jsxViewEngine = require('jsx-view-engine');
require('dotenv' ).config();
require('./config/database.js');

// require passport and session for user loggin
const passport = require('passport');
const session = require('express-session');
const initializePassport = require('./config/passport-config');


const app = express();

// some middleware
app.use(cors({
    origin: "*"
}));

// Logs the different requests to our server
app.use(logger('dev'));
//parse stringified objects (JSON)
app.use(express.json());


// Configure both serve-favicon & static middleware
// to serve from the production 'build' folder
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));

// *********************************userr routes*******************************

// Handling user signup
// app.post("/register", async (req, res) => {
// 	const user = await User.create({
// 	username: req.body.username,
// 	password: req.body.password
// 	});
	
// 	return res.status(200).json(user);
// });
// ******************post.axios********************************
// axios.post("http://localhost:5000/register", {
//   email: email,
//   password: password
// })
// .then((response) => {
//   console.log(response);
// });

//  use passport
initializePassport(
  passport,
  // passport tells us that they want a function that will return the correct user given an email
  async email => {
    let user = User.findOne({email: email})
    return user;

  },
  async id => {
    let user = User.findById(id);
    return user;
  },
)
app.use(session({
  // making sure the session cookie should only be sent over secure connections (https)
  secure: true,
  // using a session key that has been created. (Session keys should be kept secure and not hardcoded in your code)
  secret: process.env.SESSION_SECRET,
  // controls whether the session should be saved back to the session store even if it was not modified during the request
  resave: true,
  // controls whether a session should be stored for a new user that has not been assigned a session
  saveUninitialized: true,
  // length of time set for seesion to be closed due to inactivity (in milliseconds)
  cookie: { originalMaxAge: 3600000 }// 1 hr of inactivity
}))

// Set up view engine
// app.engine('jsx', jsxViewEngine());
// app.set('view engine', 'jsx');
// app.use(express.urlencoded({extended:false}));
//***************************************************************************** *



app.post('/register', async (req, res) => {
  // let hashedPassword = await bcrypt.hash(req.body.password, 10)
  // use User model to place user in the database
  let userFromCollection = await User.create({
      email: req.body.email,
      name: req.body.name,
      password: hashedPassword
  })
  // sending user response after creation or login
  res.json("user created")
});

app.get('/test_route', (req, res) => {
  res.send("good route!")
})


app.get('/session-info', (req, res) => {
  res.json({
      session: req.session
  });
});
app.post('/users/signup',async (req, res) => {

  let hashedPassword = await bcrypt.hash(req.body.password, 10)

  // use User model to place user in the database
  let userFromCollection = await User.create({
      email: req.body.email,
      name: req.body.name,
      password: hashedPassword
  })

  // sending user response after creation or login
  res.json("user created")
});

app.put('/users/login', async (req, res, next) => {
  console.log(req.body);
  // passport authentication
  passport.authenticate("local", (err, user, message) => {
      console.log(message);
      if (err) throw err;
      if (!user) {
          res.json({
              message: "login failed",
              user: false
          })
      } else {
          // delete user.password
          req.logIn(user, err => {
              if (err) throw err;
              res.json({
                  message: "successfully authenticated",
                  // remove user
              })
          })
      }
  })(req, res, next);
})


// axios.post('http://localhost:5000/register', userData)
// .then(response => {
//   console.log('Registration successful!', response.data);
//   // You can perform further actions here, like redirecting the user to a success page.
// })
// .catch(error => {
//   console.error('Registration failed.', error);
//   // You can display an error message to the user.
// });

// const handleSubmit = async () => {
//   try {
//     const response = await axios.post(url, userData);
//     console.log(response);
//   } catch (error) {
//     console.log(error);
//   }
// };

//routes
//create catch -All route using (/*)
//the catch all route is necssary to return the indexedDB.html on all non-Ajax requests
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html')); 
});


//listening 
app.listen(3000, ()=>{
  console.log('listening on port 3000');
});