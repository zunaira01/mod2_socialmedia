import { Link } from "react-router-dom";

 function Nav (props){
  return (
    <div className="nav">
      <nav>
        <button className="b1"><Link to="/login_form">LOGIN</Link></button>
        <button><Link to="/signup_form">REGISTER</Link></button>
      </nav>
    </div>
  );
};

export default Nav;

