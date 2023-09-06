// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import './index.css';

// import Login from "./components/login_form/index.js";
// import Register from "./pages/register.js";
// import Profile from "./pages/profilepage";
// import Home from "./pages/home";
// // import Friends from "./pages/friendslist";


// const App = () => {
//   return (
//     <Router>
//     <div>
//       <Routes>
//         <Route path="/" element={<Home/>}/>
//         <Route path="/register" element={<Register/>}/>
//         <Route path= "/login" element={<Login/>}/>
//         <Route path="/profile" element={<Profile/>}/>
//       </Routes>
//       </div>
//       </Router>
    
//   );
// };
// export default App;


import React from 'react';
import Login from "./components/login_form/index.js";
import Register from "./pages/register.js";
import PhotoAlbum from './pages/photoalbum.js';
import Profile from "./pages/profilepage";
import Home from "./pages/home";
// import Friends from "./pages/friendslist";
import { Route, Routes } from 'react-router-dom';
import './index.css';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path= "/login" element={<Login/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/album" element={<PhotoAlbum/>}/>
      </Routes>
    </div>
  );
};
export default App;