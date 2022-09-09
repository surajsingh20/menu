

import React, { useState } from "react";
// import { Link } from "react-router-dom";

import { useRef} from "react";
import { login,logout, useAuth } from "./firebase";
import { getAuth} from "firebase/auth";


import "../../login.css"

function Login() {

  const [ loading, setLoading ] = useState(false);
  const currentUser = useAuth();
  
  const isUser = localStorage.getItem("isUser");
 const [userName ,setUserName] =useState("");

  const auth = getAuth();


  const emailRef = useRef();
  const passwordRef = useRef();
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);


  async function handleLogin() {

    setLoading(true);
   
    try {
      await login(emailRef.current.value, passwordRef.current.value);
      localStorage.setItem("isUser", true);
      setIsSubmitted(true);
       localStorage.setItem("userName",userName);
      window.location.href = window.location.origin + "/";
    } catch {
    //   errors();
    }
    setLoading(false);

  }
//   async function handleSignup() {




//     setLoading(true);
//     try {
//       await signup(emailRef.current.value, passwordRef.current.value);
 
      
//     } catch {
//       alert("Error!");
//     }
//     setLoading(false);

// }



    async function handleLogout() {
        setLoading(true);
        try {
          await logout();
          localStorage.removeItem("isUser");
          localStorage.removeItem("userName");


        } catch {
          alert("Error!");
        }
        setLoading(false);
      }



  // JSX code for login form
  const renderForm = (

    
    <div className="form">
       <div> User: { currentUser?.email } </div>
      <form onSubmit={handleLogin}>
        <div className="input-container">
          <label>Email </label>
          <input ref={emailRef} onChange={(e)=>{setUserName(e.target.value)}} type ="text" required />
          {/* {renderErrorMessage("uname")} */}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input ref={passwordRef} type="password"required />
          {/* {renderErrorMessage("pass")} */}
        </div>
{/* 
        <div className="input-container">
          <span>
            New User ?<Link to="/SignUp"> Register </Link>
          </span>
        </div> */}
        {/* <div className="button-container"  disabled={ loading || currentUser } onClick={handleLogin}>
          <input type="submit" />
        </div> */}
     <div className="loginbutton">
     {/* <button disabled={ loading || currentUser } className="button-container"  type="submit" onClick={handleSignup}>Sign Up</button> */}
      <button disabled={ loading || currentUser }  className="button-container" type="submit"  onClick={handleLogin}>Log In</button>
      <button disabled={ loading || !currentUser }  className="button-container" type="submit"  onClick={handleLogout}>Log Out</button>
     </div>
      
      </form>
    </div>
  );

  return (
    
    
          <div className="login">
            <div className="login-form">
              <div className="title">User</div>
              {isSubmitted ? (
                <div className="text">User is successfully logged in</div>
              ) : (
                renderForm
              )}
            </div>
          </div>
        );


   
  
}

export default Login;



// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// import "../../login.css";

// function Login() {
//   // React States
//   const [errorMessages, setErrorMessages] = useState({});
//   const [isSubmitted, setIsSubmitted] = useState(false);

//   // User Login info
//   const database = [
//     {
//       username: "suraj",
//       password: "5911"
//     },
//   ];

//   const errors = {
//     uname: "invalid username",
//     pass: "invalid password"
//   };

//   const handleSubmit = (event) => {
//     //Prevent page reload
//     event.preventDefault();

//     var { uname, pass } = document.forms[0];

//     // Find user login info
//     const userData = database.find((user) => user.username === uname.value);

//     // Compare user info
//     if (userData) {
//       if (userData.password !== pass.value) {
//         // Invalid password
//         setErrorMessages({ name: "pass", message: errors.pass });
//       } else {
//         setIsSubmitted(true);
//         // match condition
//         localStorage.setItem("isUser", true);
//         // localStorage.setItem("isAdmin", false);

//         window.location.href = window.location.origin + "/";
//       }
//     } else {
//       // Username not found
//       setErrorMessages({ name: "uname", message: errors.uname });
//     }
//   };

//   // Generate JSX code for error message
//   const renderErrorMessage = (name) =>
//     name === errorMessages.name && (
//       <div className="error">{errorMessages.message}</div>
//     );

//   // JSX code for login form
//   const renderForm = (
//     <div className="form">
//       <form onSubmit={handleSubmit}>
//         <div className="input-container">
//           <label>Username </label>
//           <input type="text" name="uname" required />
//           {renderErrorMessage("uname")}
//         </div>
//         <div className="input-container">
//           <label>Password </label>
//           <input type="password" name="pass" required />
//           {renderErrorMessage("pass")}
//         </div>

//         <div className="input-container">
//           <span>
//             New User ?<Link to="/SignUp"> Register </Link>
//           </span>
//         </div>
//         <div className="button-container">
//           <input type="submit" />
//         </div>
//       </form>
//     </div>
//   );

//   return (
//     <div className="login">
//       <div className="login-form">
//         <div className="title">User</div>
//         {isSubmitted ? (
//           <div className="text">User is successfully logged in</div>
//         ) : (
//           renderForm
//         )}
//       </div>
//     </div>
//   );
// }

// export default Login;

