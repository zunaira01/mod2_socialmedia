import Nav from "./nav";
import { Link } from "react-router-dom";
function Header(props){
    return(
        <header className="header">
            <h1> Connect </h1>
            <div >
            <h3 className="header button">Think, Explore, Meet!
            {/* <button><Link to="/">HOME</Link></button> */}
            <br></br>
            <button><Link to="/">Home</Link></button>
           
        <button><Link to="/profile">Profile</Link></button>
     
        <button><Link to="/album">PhotoAlbum</Link></button>
            </h3>
            <Nav/>
            </div>
        </header>
    );
}
export default Header;


// import Nav from "./nav";
// import { Link } from "react-router-dom";
// function Header(props){
//     return(
//         <header className="header">
//             <h1> Connect Social media </h1>
//             <div >
//             <h2 className="header button">Think, Explore, Meet!
//             <button><Link to="/">HOME</Link></button>
//             <br></br>
//         <button><Link to="/profile">BLOG</Link></button>
//             </h2>
//             <Nav/>
//             </div>
//         </header>
//     );
// }
// export default Header;





