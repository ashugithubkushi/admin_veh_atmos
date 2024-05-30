// import React, { useEffect, useState } from 'react'
// import { useNavigate, useParams } from 'react-router-dom'
// import axios from "axios"

// const Update = () => {
//   const {id} = useParams()
//   const [vehicleName, setVehicleName] = useState();
//   const [vehicleNum, setVehicleNum] = useState();
//   const [contactNum, setContactNum] = useState();
//   const navigate = useNavigate()

//   useEffect(() => {
//     axios.get("http://localhost:3000/getUser/"+id)
//       .then(result => {console.log(result)
//         setVehicleName(result.data.vehicleName)
//         setVehicleNum(result.data.vehicleNum)
//         setContactNum(result.data.contactNum)
//       })
//       .catch(err => console.log(err));
//   }, []);


//   const Update = (e) => {
//     e.preventDefault()
//     axios.put("http://localhost:3000/updateUser/"+id, {
//       vehicleName: vehicleName,
//       vehicleNum: vehicleNum,
//       contactNum: contactNum,
//     })
//    .then(result => {
//     console.log(result)
//     navigate("/dashboard")
//    })
//    .catch(err => console.log(err))
//   }


//   const handleBackToDashboard = () => {
//     navigate('/dashboard');
//   };

//   return (
//     <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
//     <div className="w-50 bg-white rounded p-3">
//     <button className="btn btn-danger btn-sm float-end" onClick={handleBackToDashboard}>X</button>
       
//       <form onSubmit={Update}>
//         <h2>Update User</h2>
//         <div className="mb-2">
//           <label htmlFor="">Vehicle Name</label>
//           <input type="text" placeholder='Vehicle Name' className='form-control'
//           value={vehicleName}
//           onChange={(e) => setVehicleName(e.target.value)}/>
//         </div>
//         <div className="mb-2">
//           <label htmlFor="">Vehicle Num</label>
//           <input type="text" placeholder='Vehicle Num' className='form-control'
//           value={vehicleNum}
//           onChange={(e) => setVehicleNum(e.target.value)}/>
//         </div>
//         <div className="mb-2">
//           <label htmlFor="">Contact Num</label>
//           <input type="text" placeholder='Conatact Num' className='form-control'
//           value={contactNum}
//           onChange={(e) => setContactNum(e.target.value)}/>
//         </div>
//         <button className='btn btn-primary'>Update</button>
//       </form>
//     </div>
//   </div>
//   )
// }

// export default Update