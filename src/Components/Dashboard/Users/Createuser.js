  // import React, { useState } from 'react';
  // import axios from 'axios';
  // import { useNavigate } from 'react-router-dom';


  // const Createuser = () => {
  //   const [username, setUsername] = useState('');
  //   const [email, setEmail] = useState('');
  //   const [password, setPassword] = useState('');
  //   const [designation, setDesignation] = useState('');
  //   const [contact, setContact] = useState('');
  //   const [errors, setErrors] = useState({});
  //   const navigate = useNavigate();

  //   const validateForm = () => {
  //     let isValid = true;
  //     const newErrors = {};

  //     if (!username.trim()) {
  //       newErrors.username = 'Username is required';
  //       isValid = false;
  //     }

  //     if (!email.trim()) {
  //       newErrors.email = 'Email is required';
  //       isValid = false;
  //     }

  //     if (!password.trim()) {
  //       newErrors.password = 'Password is required';
  //       isValid = false;
  //     }

  //     if (!designation.trim()) {
  //       newErrors.designation = 'designation is required';
  //       isValid = false;
  //     }

  //     if (!contact.trim()) {
  //       newErrors.contact = 'contact is required';
  //       isValid = false;
  //     }

  //     setErrors(newErrors);
  //     return isValid;
  //   };

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     if (validateForm()) {
  //       axios.post("http://localhost:3000/createCreateuser", { username, email, password, designation, contact })
  //         .then(result => {
  //           console.log(result);
  //           navigate('/users');
  //         })
  //         .catch(err => console.log(err));
  //     }
  //   };

  //   const handleInputChange = (e) => {
  //     const { name, value } = e.target;
  //     if (name === 'username') {
  //       setErrors({ ...errors, username: '' });
  //       setUsername(value);
  //     } else if (name === 'email') {
  //       setErrors({ ...errors, email: '' });
  //       setEmail(value);
  //     } else if (name === 'password') {
  //       setErrors({ ...errors, password: '' });
  //       setPassword(value);
  //     }else if (name === 'designation') {
  //       setErrors({ ...errors, designation: '' });
  //       setDesignation(value);
  //     }else if (name === 'contact') {
  //       setErrors({ ...errors, contact: '' });
  //       setContact(value);
  //     }
  //   };

  //   const handleBackToDashboard = () => {
  //     navigate('/dashboard');
  //   };

  //   return (
  //     <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
  //       <div className="w-50 bg-white rounded p-3">
  //       <button className="btn btn-danger btn-sm float-end" onClick={handleBackToDashboard}>X</button>
          
  //         <form onSubmit={handleSubmit}>
  //           <h2>Create User data</h2>
  //           <div className="mb-2">
  //             <label htmlFor="username">User Name</label>
  //             <input
  //               type="text"
  //               id="username"
  //               name="username"
  //               placeholder="User Name"
  //               className="form-control"
  //               value={username}
  //               onChange={handleInputChange}
  //             />
  //             {errors.username && <div className="text-danger">{errors.username}</div>}
  //           </div>
  //           <div className="mb-2">
  //             <label htmlFor="email">User Email</label>
  //             <input
  //               type="text"
  //               id="email"
  //               name="email"
  //               placeholder="Email"
  //               className="form-control"
  //               value={email}
  //               onChange={handleInputChange}
  //             />
  //             {errors.email && <div className="text-danger">{errors.email}</div>}
  //           </div>
  //           <div className="mb-2">
  //             <label htmlFor="password">Password</label>
  //             <input
  //               type="text"
  //               id="password"
  //               name="password"
  //               placeholder="Password"
  //               className="form-control"
  //               value={password}
  //               onChange={handleInputChange}
  //             />
  //             {errors.password && <div className="text-danger">{errors.password}</div>}
  //           </div>
  //           <div className="mb-2">
  //             <label htmlFor="designation">designation</label>
  //             <input
  //               type="text"
  //               id="designation"
  //               name="designation"
  //               placeholder="designation"
  //               className="form-control"
  //               value={designation}
  //               onChange={handleInputChange}
  //             />
  //             {errors.designation && <div className="text-danger">{errors.designation}</div>}
  //           </div>
  //           <div className="mb-2">
  //             <label htmlFor="contact">contact</label>
  //             <input
  //               type="text"
  //               id="contact"
  //               name="contact"
  //               placeholder="contact"
  //               className="form-control"
  //               value={contact}
  //               onChange={handleInputChange}
  //             />
  //             {errors.contact && <div className="text-danger">{errors.contact}</div>}
  //           </div>
  //           <button className="btn btn-primary">Create</button>
  //         </form>
  //       </div>
  //     </div>
  //   );
  // };

  // export default Createuser;