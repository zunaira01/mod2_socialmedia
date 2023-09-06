
import React, { useEffect, useState, useContext } from 'react';
import { logIn, getUserFromSession } from '../../utilities/user-functions'
// import axios from 'axios'
import { AppContext } from '../../context/app_context';

const Login = () => {
    let { setUser } = useContext(AppContext);

    const [formState, setFormState] = useState({email: '', password: ''});
    const [error, setError] = useState("");
    const [disabled, setDisabled] = useState(true);


    useEffect(() => {
        setDisabled(formState.email && formState.password ? false : true);
    }, [formState])

    useEffect(() => {
      let autoLogin = async () => {
        await logIn({email: "w@w", password: "qqq"});
        // get session info (user)
        let user = await getUserFromSession()
        setUser(user);
      }
      autoLogin()
    }, [])

    const handleChange = (event) => {
        let propertyName = event.target.name;
        setFormState({
            ...formState,
            [propertyName]: event.target.value,
        });
      };

    const handleSubmit = async (e) => {
      // LOGIN
        // make a call to the server with this info and authenticate!
        e.preventDefault();
        await logIn(formState);
        // get session info (user)
        let user = await getUserFromSession()
        setUser(user);
    }

  return (
    <div>
        <div className="form-container">
        <form autoComplete="off" onSubmit={handleSubmit}>
            <label>Email</label>
            <input type="email" name="email" value={formState.email} onChange={handleChange} required />
            <label>Password</label>
            <input type="password" name="password" value={formState.password} onChange={handleChange} required />
            <button type="submit" disabled={disabled}>Log In</button>
        </form>
        </div>
        <p className="error-message">&nbsp;{error}</p>
    </div>
  )
}

export default Login;

// // import Header from "./header";
// import { useState } from "react";

// const Login = () => {
//   const { login } = useState("");
//   const handleLogin = () => {
//     login();
//   };
//   return (
//     <div className="login">
//       {/* <Header/> */}
//     <div className="main">
//          <div className="grid">
//             <h2> Welcome to Connect! </h2>
//             <p> We are ready to serve you differently. </p>
//             <span> Don't have an account?</span>
//             <button className="loginbtn1" >REGISTER</button>
//                 <h2> Login</h2>
//                 <form>
//             <input type="text" placeholder="Username" />
//             <br></br>
//             <input type="password" placeholder="Password" />
//             <br></br>
//             <button  className="loginbtn2" onClick={handleLogin}>Login</button>
//             <br></br>
//           </form>
//             </div>
//     </div>
//     </div>
//   )
// }
// export default Login;


// import React, { useEffect, useState, useContext } from "react";
// import { logIn, getUserFromSession } from "../../utilities/user-functions";
// // import { AppContext } from "../../contexts/app_context";
// import { useNavigate } from "react-router-dom";

// const Login = () => {
//   let { setUser } = useContext(AppContext);

//   const [formState, setFormState] = useState({ email: "", password: "" });
//   const [disabled, setDisabled] = useState(true);
//   const [credentialError, setCredentialError] = useState(null);
//   const [errors, setErrors] = useState({
//     emailInvalid: null,
//     passwordShort: null,
//   });

//   const navigate = useNavigate();

//   useEffect(() => {
//     setDisabled(formState.email && formState.password ? false : true);
//   }, [formState]);

//   const handleChange = (e) => {
//     let propertyName = e.target.name;
//     setFormState({
//       ...formState,
//       [propertyName]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // check for form errors prior to submitting
//     let areErrorsPresent = false;
//     const formErrors = {
//       emailInvalid: null,
//       passwordShort: null,
//     };

//     let email = formState.email;
//     const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     let password = formState.password;

//     if (!email.match(regex)) {
//       formErrors.emailInvalid = true;
//       areErrorsPresent = true;
//     } else if (password.length < 8) {
//       formErrors.passwordShort = true;
//       areErrorsPresent = true;
//     }

//     if (areErrorsPresent) {
//       setErrors(formErrors);
//       return;
//     }

//     // if no form errors, try to submit form
//     try {
//       // make a call to the server, and authenticate
//       let serverResponse = await logIn(formState);
//       console.log(serverResponse);

//       // if user authenticated, get session info (user)
//       let user = await getUserFromSession();
//       setUser(user);

//       // redirect to /recipes/view
//       if (user) {
//         navigate("/recipes/view");
//       } else {
//         setCredentialError(true);
//       }
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <div className="auth-container">
//       <div className="form-container">
//         <form autoComplete="off" onSubmit={handleSubmit}>
//           <div>
//             <label>Email</label>
//             <input
//               type="email"
//               name="email"
//               value={formState.email}
//               onChange={handleChange}
//               required
//             />
//             <p className="error-message">
//               {errors.emailInvalid ? "Please enter a valid email" : ""}
//             </p>
//           </div>
//           <div>
//             <label>Password</label>
//             <input
//               type="password"
//               name="password"
//               value={formState.password}
//               onChange={handleChange}
//               required
//             />
//             <p className="error-message">
//               {errors.passwordShort
//                 ? "Password must be at least 8 characters"
//                 : ""}
//             </p>
//           </div>
//           <button type="submit" disabled={disabled}>
//             Log In
//           </button>
//           <p className="error-message">
//             {credentialError ? "login failed: email or password incorrect" : ""}
//           </p>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;