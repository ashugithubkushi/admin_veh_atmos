// import React, { useState } from 'react';
// import { styled } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import TextField from '@mui/material/TextField';
// import { SwapHoriz as SwapIcon } from '@mui/icons-material';
// import axios from "axios";
// import { useNavigate } from "react-router-dom";


// const Background = styled(Box)({
//   position: 'fixed',
//   top: 0,
//   left: 0,
//   width: '100%',
//   height: '100%',
//   backgroundImage: 'url(https://media.sketchfab.com/models/4d2938f269e94f33aaa676f0252f08c4/thumbnails/ee74fb144e3e4c8d93fef1449c60fb5b/26ddffda6deb44fb88023e3213c867be.jpeg)', // Replace 'your-background-image.jpg' with the URL or path to your image
//   backgroundSize: 'cover',
//   backgroundRepeat: 'no-repeat',
//   backgroundPosition: 'center',
//   zIndex: -1,
//   opacity: 1,

// });

// const FormContainer = styled(Box)({
//   display: 'flex',
//   flexDirection: 'column',
//   alignItems: 'center',
//   justifyContent: 'center',
//   height: '100vh',
//   // color: 'white',
// });

// const ColorfulButton = styled(Button)({
//   background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
//   border: 0,
//   borderRadius: 3,
//   boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
//   // color: 'white',
//   height: 48,
//   padding: '0 30px',
//   marginTop: '6px',
//   transition: 'background-color 0.3s ease',
//   '&:hover': {
//     background: 'linear-gradient(45deg, #FF8E53 30%, #FE6B8B 90%)',
//   },
// });

// export default function Createuser() {
//   const navigate = useNavigate();
  
//   const [isLogin, setIsLogin] = useState(true);
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [emailError, setEmailError] = useState('');
//   const [passwordError, setPasswordError] = useState('');
//   const [isValid, setIsValid] = useState(false);

//   const handleSwitchForm = () => {
//     setIsLogin((prevIsLogin) => !prevIsLogin);
//     setEmailError('');
//     setPasswordError('');
//     setEmail('');
//     setPassword('');
//     setIsValid(false);
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

//   const handleSubmit = (event) => {
//     event.preventDefault();
    
//     if (isLogin) {
//       if (validateLogin()) {
//         setIsValid(true);
//         console.log('Login successful');
//       } else {
//         setIsValid(false);
//       }
//     } else {
//       if (validateSignup()) {
//         setIsValid(true);
//         console.log('Signup successful');
//       } else {
//         setIsValid(false);
//       }
//     }
//   };

//   axios
//   .post("http://localhost:3000/createAdminlogin", {
//     email,
//     password,
//   })
//   .then((response) => {
//     console.log(response.data);
//     navigate("/dashboard");
//   })
//   .catch((error) => {
//     console.error(error);
//     setEmailError("Login failed. Please try again.");
//     setPasswordError("Login failed. Please try again.");
//   });

// setEmail("");
// setPassword("");


//   const validateEmail = (value) => {
//     if (!value) {
//       setEmailError('Email is required');
//       return false;
//     } else if (!/\S+@\S+\.\S+/.test(value)) {
//       setEmailError('Email is invalid');
//       return false;
//     } else {
//       setEmailError('');
//       return true;
//     }
//   };

//   const validatePassword = (value) => {
//     if (!value) {
//       setPasswordError('Password is required');
//       return false;
//     } else if (value.length < 6) {
//       setPasswordError('Password must be at least 6 characters long');
//       return false;
//     } else {
//       setPasswordError('');
//       return true;
//     }
//   };

  

//   return (
//     <>
//       {/* Background with opacity */}
//       <Background />
//       <FormContainer>
        
//         <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '8px', background: 'rgba(255, 255, 255, 0.4)'}}>
//         <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
//         <form onSubmit={handleSubmit}>
//           <TextField
//             label="Email"
//             variant="outlined"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             onBlur={(e) => isLogin ? validateLogin() : validateSignup()}
//             error={!!emailError}
//             helperText={emailError}
//             margin="normal"
//             fullWidth
//             // InputProps={{ style: { color: 'white' } }} 
//             // InputLabelProps={{ style: { color: 'white' } }}
//           />
//           <TextField
//             label="Password"
//             variant="outlined"
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             onBlur={(e) => isLogin ? validateLogin() : validateSignup()}
//             error={!!passwordError}
//             helperText={passwordError}
//             margin="normal"
//             fullWidth
//             // InputProps={{ style: { color: 'white' } }}
//             // InputLabelProps={{ style: { color: 'white' } }}
//           />
//           <ColorfulButton type="submit" fullWidth disabled={!isValid}>
//             {isLogin ? 'Login' : 'Sign Up'}
//           </ColorfulButton>
//         </form>
//         </div>
//         <Button onClick={handleSwitchForm} startIcon={<SwapIcon />}>
//           {isLogin ? 'Switch to Sign Up' : 'Switch to Login'}
//         </Button>
//       </FormContainer>
//     </>
//   );
// }
