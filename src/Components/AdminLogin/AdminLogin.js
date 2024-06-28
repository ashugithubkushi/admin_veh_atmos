
import { useState } from "react";
import "./adminlogin.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AdminLogin() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [usernameError, setUsernameError] = useState("");

  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [loginError, setLoginError] = useState("");

  const validateUsername = (username) => {
    const regex = /^[a-zA-Z0-9]+$/;
    return regex.test(username);
  };

  const validatePassword = (password) => {
    const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return regex.test(password);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
    setUsernameError("");
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPasswordError("");
    setLoginError("");

    if (!validateUsername(username)) {
      setUsernameError("Username is required");
      return;
    }

    if (!validatePassword(password)) {
      setPasswordError(
        "Password must be at least 8 characters long, including at least one uppercase letter, one lowercase letter, and one number"
      );
      return;
    }

  //   axios
  //     .post("http://localhost:3000/createAdminlogin", {
  //       username,
  //       password,
  //     })
  //     .then((response) => {
  //       console.log(response.data);
  //       const { username } = response.data;
  //       navigate("/dashboard", { state: { username } }); 
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //       setLoginError("Login failed. Please try again.");
  //     });

  //   setUsername("");
  //   setPassword("");
  
  axios
  .post("http://localhost:3000/createAdminlogin", {
    username,
    // password,
  })
  .then((response) => {
    console.log(response.data);
    const { username, password } = response.data;
    navigate("/dashboard", { state: { username, password } });
  })
  .catch((error) => {
    console.error(error);
    setLoginError("Login failed. Please try again.");
  });
};

  return (
    <div className="form">
      <div className="login-wrapper">
        <div className="login-box">
          <form onSubmit={handleSubmit} className="login-form">
          {/* <h2 class="center-heading">Login
  <div class="login-icon"></div>
  <span class="login-name">Login</span>
</h2> */}
<div className="text-form">
  <h2 className='text1'>ATMOS</h2>
</div>

            <div className="form-group">
              <input
                type="text"
                value={username}
                onChange={handleUsernameChange}
                className="input-field"
                // style={{ width: '100%'}}
                placeholder="Enter Username"
              />
              {usernameError && <div className="error">{usernameError}</div>}
            </div>

            <div className="form-group">
              <input
                type="password"
                value={password}
                onChange={handlePasswordChange}
                className="input-field"
                // style={{ marginBottom: '10px'}}
                placeholder="Enter Password"
              />
              {passwordError && <div className="error">{passwordError}</div>}
            </div>

<div className="submit-button">
            <button type="submit" className="colorful-button" style={{ marginBottom: '10px' }}>
              <b>Login</b>
            </button>
            </div>
            <div className="error">{loginError}</div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AdminLogin;





// export default AdminLogin;

// import React, { useState } from "react";
// import { styled } from "@mui/material/styles";
// import Box from "@mui/material/Box";
// import Button from "@mui/material/Button";
// import TextField from "@mui/material/TextField";
// import { SwapHoriz as SwapIcon } from "@mui/icons-material";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const Background = styled(Box)({
//   position: "fixed",
//   top: 0,
//   left: 0,
//   width: "100%",
//   height: "100%",
//   backgroundImage:
//     "url(https://media.sketchfab.com/models/4d2938f269e94f33aaa676f0252f08c4/thumbnails/ee74fb144e3e4c8d93fef1449c60fb5b/26ddffda6deb44fb88023e3213c867be.jpeg)",
//   backgroundSize: "cover",
//   backgroundRepeat: "no-repeat",
//   backgroundPosition: "center",
//   zIndex: -1,
//   opacity: 1,
// });

// const FormContainer = styled(Box)({
//   display: "flex",
//   flexDirection: "column",
//   alignItems: "center",
//   justifyContent: "center",
//   height: "100vh",
// });

// const ColorfulButton = styled(Button)({
//   background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
//   border: 0,
//   borderRadius: 3,
//   boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
//   height: 48,
//   padding: "0 30px",
//   marginTop: "6px",
//   transition: "background-color 0.3s ease",
//   "&:hover": {
//     background: "linear-gradient(45deg, #FF8E53 30%, #FE6B8B 90%)",
//   },
// });

// export default function AdminLogin() {
//   const [isLogin, setIsLogin] = useState(true);
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [emailError, setEmailError] = useState("");
//   const [passwordError, setPasswordError] = useState("");
//   const [isValid, setIsValid] = useState(false);
//   const [loginError, setLoginError] = useState("");
//   const navigate = useNavigate();

//   const handleSwitchForm = () => {
//     setIsLogin((prevIsLogin) => !prevIsLogin);
//     setEmailError("");
//     setPasswordError("");
//     setEmail("");
//     setPassword("");
//     setIsValid(false);
//     setLoginError("");
//   };

//   const validateLogin = () => {
//     const isEmailValid = validateEmail(email);
//     const isPasswordValid = validatePassword(password);
//     return isEmailValid && isPasswordValid;
//   };

//   const validateSignup = () => {
//     const isEmailValid = validateEmail(email);
//     const isPasswordValid = validatePassword(password);
//     return isEmailValid && isPasswordValid;
//   };

//   const validateEmail = (value) => {
//     if (!value) {
//       setEmailError("Email is required");
//       return false;
//     } else if (!/\S+@\S+\.\S+/.test(value)) {
//       setEmailError("Email is invalid");
//       return false;
//     } else {
//       setEmailError("");
//       return true;
//     }
//   };

//   const validatePassword = (value) => {
//     if (!value) {
//       setPasswordError("Password is required");
//       return false;
//     } else if (value.length < 6) {
//       setPasswordError("Password must be at least 6 characters long");
//       return false;
//     } else {
//       setPasswordError("");
//       return true;
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setPasswordError("");
//     setEmailError("");
//     navigate("/dashboard");

//     if (isLogin) {
//       if (validateLogin()) {
//         console.log("Login request submitted");
//         try {
//           const response = await axios.post(
//             "http://localhost:3000/createAdminlogin",
//             {
//               email,
//               password,
//             }
//           );
//           console.log(response.data);
         
//         } catch (error) {
//           console.error(error);
//           setLoginError("Login failed. Please try again.");
//         }
//       } else {
//         setIsValid(false);
//       }
//     } else {
//       if (validateSignup()) {
//         console.log("Signup successful");
//       } else {
//         setIsValid(false);
//       }
//     }
//   };

//   return (
//     <>
//     <Background />
//     <FormContainer>
//       <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '8px', background: 'rgba(255, 255, 255, 0.4)'}}>
//         <h2 style={{ color: 'black', textAlign: 'center' }}>{isLogin ? 'Login' : 'Sign Up'}</h2>
//         <form onSubmit={handleSubmit}>
//           <TextField
//             label="Email"
//             variant="outlined"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             onBlur={() => isLogin ? validateLogin() : validateSignup()}
//             error={!!emailError}
//             helperText={emailError}
//             margin="normal"
//             fullWidth
//           />
//           <TextField
//             label="Password"
//             variant="outlined"
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             onBlur={() => isLogin ? validateLogin() : validateSignup()}
//             error={!!passwordError}
//             helperText={passwordError}
//             margin="normal"
//             fullWidth
//           />
//           <ColorfulButton type="submit" fullWidth>
//             {isLogin ? 'Login' : 'Sign Up'}
//           </ColorfulButton>
//         </form>
//         <div>{loginError}</div>
//       </div>
//       <Button 
//   onClick={handleSwitchForm} 
//   startIcon={<SwapIcon />} 
//   style={{ color: 'white' }} 
// >
//   {isLogin ? 'Switch to Sign Up' : 'Switch to Login'}
// </Button>
//     </FormContainer>
//   </>
//   );
// }
