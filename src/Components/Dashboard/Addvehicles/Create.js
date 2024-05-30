// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const Create = () => {
//   const [vehicleName, setVehicleName] = useState('');
//   const [vehicleNum, setVehicleNum] = useState('');
//   const [contactNum, setContactNum] = useState('');
//   const [errors, setErrors] = useState({});
//   const navigate = useNavigate();

//   const validateForm = () => {
//     let isValid = true;
//     const newErrors = {};

//     if (!vehicleName.trim()) {
//       newErrors.vehicleName = 'Vehicle name is required';
//       isValid = false;
//     }

//     if (!vehicleNum.trim()) {
//       newErrors.vehicleNum = 'Vehicle number is required';
//       isValid = false;
//     }

//     if (!contactNum.trim()) {
//       newErrors.contactNum = 'Contact number is required';
//       isValid = false;
//     }

//     setErrors(newErrors);
//     return isValid;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (validateForm()) {
//       axios.post("http://localhost:3000/createUser", { vehicleName, vehicleNum, contactNum })
//         .then(result => {
//           console.log(result);
//           navigate('/dashboard');
//         })
//         .catch(err => console.log(err));
//     }
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     if (name === 'vehicleName') {
//       setErrors({ ...errors, vehicleName: '' });
//       setVehicleName(value);
//     } else if (name === 'vehicleNum') {
//       setErrors({ ...errors, vehicleNum: '' });
//       setVehicleNum(value);
//     } else if (name === 'contactNum') {
//       setErrors({ ...errors, contactNum: '' });
//       setContactNum(value);
//     }
//   };

//   const handleBackToDashboard = () => {
//     navigate('/dashboard');
//   };

//   return (
//     <div className="d-flex bg-primary justify-content-center align-items-center vh-100">
//       <div className="w-50 bg-white rounded p-3">
//       <button className="btn btn-danger btn-sm float-end" onClick={handleBackToDashboard}>X</button>
        
//         <form onSubmit={handleSubmit}>
//           <h2>Create Vehicle data</h2>
//           <div className="mb-2">
//             <label htmlFor="vehicleName">Vehicle Name</label>
//             <input
//               type="text"
//               id="vehicleName"
//               name="vehicleName"
//               placeholder="Vehicle Name"
//               className="form-control"
//               value={vehicleName}
//               onChange={handleInputChange}
//             />
//             {errors.vehicleName && <div className="text-danger">{errors.vehicleName}</div>}
//           </div>
//           <div className="mb-2">
//             <label htmlFor="vehicleNum">Vehicle Num</label>
//             <input
//               type="text"
//               id="vehicleNum"
//               name="vehicleNum"
//               placeholder="Vehicle Num"
//               className="form-control"
//               value={vehicleNum}
//               onChange={handleInputChange}
//             />
//             {errors.vehicleNum && <div className="text-danger">{errors.vehicleNum}</div>}
//           </div>
//           <div className="mb-2">
//             <label htmlFor="contactNum">Contact Num</label>
//             <input
//               type="text"
//               id="contactNum"
//               name="contactNum"
//               placeholder="Contact Num"
//               className="form-control"
//               value={contactNum}
//               onChange={handleInputChange}
//             />
//             {errors.contactNum && <div className="text-danger">{errors.contactNum}</div>}
//           </div>
//           <button className="btn btn-primary">Create</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Create;