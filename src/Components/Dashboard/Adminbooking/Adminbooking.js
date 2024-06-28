// import React, { useEffect, useState } from "react";
// import "./adminbooking.css";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";
// import axios from "axios";

// const Adminbooking = () => {
//   const [selectedVehicle, setSelectedVehicle] = useState("");
//   const [showSelectDate, setShowSelectDate] = useState(false);
//   // const [selectedDate, setSelectedDate] = useState(null);
//   const [selectedSlot, setSelectedSlot] = useState(null);
//   const [error, setError] = useState(false);
//   const [villaNumber, setVillaNumber] = useState("");
//   const [vehicleNumber, setVehicleNumber] = useState("");
//   const [bookedBy, setBookedBy] = useState("");
//   const [formError, setFormError] = useState(false);
//   const [modal, setModal] = useState(false);
//   const [data, setData] = useState([]);


//   const [bookedByOptions, setBookedByOptions] = useState([]);
//   const [successModal, setSuccessModal] = useState(false); // New state for success modal

  


//   const [vehicleCounts, setVehicleCounts] = useState({
//     Tractor: 0, 
//     JCB:0,
//   });


//   const fetchSlotData = () => {
//     axios
//       .get("http://localhost:3000/getslots")
//       .then((response) => {
//         // Process the fetched data to get the count of available slots for each vehicle type
//         const slotsData = response.data.data;
//         const counts = {
//           Tractor: 0, // Initialize Tractor count to 0
//           // Initialize other vehicle counts similarly
//         };
//         slotsData.forEach((slot) => {
//           // Increment the count of available slots for the corresponding vehicle type
//           counts[slot.selectedVehicle]++;
//         });
//         setVehicleCounts(counts); // Update the state variable with the counts
//       })
//       .catch((error) => {
//         console.error("Error fetching slot data:", error);
//       });
//   };

//   //useeffect
//   useEffect(() => {
//     const fetchSlotData = async () => {
//       try {
//         const response = await axios.get("http://localhost:3000/getslots");
//         const slotsData = response.data.data;
//         const counts = {
//           Tractor: 0, // Initialize Tractor count to 0
//           // Initialize other vehicle counts similarly
//         };
//         slotsData.forEach((slot) => {
//           counts[slot.selectedVehicle]++;
//         });
//         setVehicleCounts(counts);
//       } catch (error) {
//         console.error("Error fetching slot data:", error);
//       }
//     };
  
//     fetchSlotData();
//   }, []);

//   const [bookedSlots, setBookedSlots] = useState([]);

//   const [vehicleNumbers, setVehicleNumbers] = useState([]);

//   const handleVehicleClick = (selectedVehicle) => {
//     setSelectedVehicle(selectedVehicle);
//     toggleModal();
//   };

//   const toggleModal = () => setModal(!modal);


//   const handleSelectSlot = (slot) => {
//     if (selectedDate) {
//       setSelectedSlot(slot);
//       toggleModal(); // Show modal
//       setError(false);
//     } else {
//       setError(true);
//       setTimeout(() => {
//         setError(false);
//       }, 2000);
//     }
//   };


//   const handleCancel = () => {
//     toggleModal();
//   };

//   const handlereset = () => {
//     setVillaNumber("");
//     setVehicleNumber("");
//     setBookedBy("");
//     setFormError("");
//   };

  

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const currentTime = new Date();
//     const formattedCurrentTime = currentTime.toLocaleTimeString("en-IN");
//     if (!villaNumber.trim() || !vehicleNumber.trim() || !bookedBy.trim()) {
//       setFormError(true);      return;
//     }
//     const data = {
//       selectedVehicle: selectedVehicle,
//       selectedDate: selectedDate,
//       fromTime: fromTime,
//       toTime: toTime,
//       vehicleNumber: vehicleNumber,
//       villaNumber: villaNumber,
//       bookedBy: bookedBy,
//       // submittedAt: formattedCurrentTime,
//     };
  
//    axios
//       .post("http://localhost:3000/createSlots", data)
//       .then((response) => {
//         console.log(response.status);
//         console.log("Form data submitted successfully:", response.data);
//         alert("form submitted successfully");
//         setSuccessModal(true);
//         fetchSlotData(); // Refresh slot data
//         setShowSelectDate(false);
//       })
//       .catch((error) => {
//         console.error("Error submitting form data:", error);
//       });
//   };

//   const closeSuccessModal = () => {
//     setSuccessModal(false);
//   };
  

//   useEffect(() => {
//     fetch("http://localhost:3000/getslots", {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json",
//       },
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         // console.log(data, "userData");
//         setData(data.data);
//       });
//   }, []);

//   //vehiclenum
//   // useEffect(() => {
//   //   axios.get("http://localhost:3000/getVehicle").then((response) => {
//   //     const vehicleNumbers = response.data.map((vehicle) => vehicle.vehicleNum);
//   //     setVehicleNumbers(vehicleNumbers);
//   //   }).catch((error) => {
//   //     console.error("Error fetching vehicle numbers:", error);
//   //   });
//   // }, []);
//   useEffect(() => {
//     axios
//       .get("http://localhost:3000/vehicles") // Correct endpoint to fetch all vehicle numbers
//       .then((response) => {
//         const vehicleNumbers = response.data.map(
//           (vehicle) => vehicle.vehicleNum
//         );
//         setVehicleNumbers(vehicleNumbers);
//       })
//       .catch((error) => {
//         console.error("Error fetching vehicle numbers:", error);
//       });
//   }, []);

//   const handleVehicleNumberChange = (event) => {
//     setVehicleNumber(event.target.value);
//   };

//   //time
//   const [selectedDate, setSelectedDate] = useState(new Date());
//   const [selectedTime, setSelectedTime] = useState('00:00');

//   const handleDateChange = (e) => {
//     const date = new Date(e.target.value);
//     setSelectedDate(date);
//   };

//   const getCurrentDate = () => {
//     const currentDate = new Date();
//     const year = currentDate.getFullYear();
//     let month = currentDate.getMonth() + 1;
//     let day = currentDate.getDate();
  
//     // Add leading zero to month and day if needed
//     month = month < 10 ? `0${month}` : month;
//     day = day < 10 ? `0${day}` : day;
  
//     return `${year}-${month}-${day}`;
//   };

//   const handleTimeChange = (e) => {
//     setSelectedTime(e.target.value);
//   };


//   //from - to
//   const [fromTime, setFromTime] = useState("");
//   const [toTime, setToTime] = useState("");

//   const handleFromTimeChange = (event) => {
//       setFromTime(event.target.value);
//   };

//   const handleToTimeChange = (event) => {
//       setToTime(event.target.value);
//   };

//   //bookedby
// useEffect(() => {
//   axios
//     .get("http://localhost:3000/createusers") // Endpoint to fetch all usernames
//     .then((response) => {
//       const usernames = response.data.map(
//         (user) => user.username
//       );
//       setBookedByOptions(usernames);
//     })
//     .catch((error) => {
//       console.error("Error fetching usernames:", error);
//     });
// }, []);


// const handleBookedByChange = (event) => {
//   setBookedBy(event.target.value);





// };

//   return (
//     <div>


// {/* test */}
// <div className="body"> 
//     <div classname="center"> 
  
//     <div class="slider"> 
//             <div class="imgs_slides"> 
  
//                 <input type="radio" name="radio-btn" id="radio1" />
  
//                 <input type="radio" name="radio-btn" id="radio2" /> 
  
//                 <input type="radio" name="radio-btn" id="radio3" /> 
  
//                 <input type="radio" name="radio-btn" id="radio4" /> 
  
//                 <input type="radio" name="radio-btn" id="radio5" /> 
  
//                 <input type="radio" name="radio-btn" id="radio6" /> 
  
//                 {/* <input type="radio" name="radio-btn" id="radio7" />  */}
  
//                 <div class="first slide">
//                     <img src= 
// "https://assets.tractorjunction.com/truck-junction/assets/images/truck/blazo-x-28-transit-mixer-1614682581.webp?format=webp" /> 
//                 </div> 
//                 <div class="slide"> 
//                     <img src= 
// "https://images.creativefabrica.com/products/previews/2023/10/28/OG8vumD3r/2XNREEHXqeTraAgNdfIbYO45xGP-mobile.jpg" /> 
//                 </div> 
//                 <div class="slide"> 
//                     <img src= 
// "https://images.creativefabrica.com/products/previews/2023/10/28/OG8vumD3r/2XNREEHXqeTraAgNdfIbYO45xGP-mobile.jpg" /> 
//                 </div> 
//                 <div class="slide"> 
//                     <img src= 
// "https://images.creativefabrica.com/products/previews/2023/10/28/OG8vumD3r/2XNREEHXqeTraAgNdfIbYO45xGP-mobile.jpg" /> 
//                 </div> 
//                 <div class="slide"> 
//                     <img src= 
// "https://images.creativefabrica.com/products/previews/2023/10/28/OG8vumD3r/2XNREEHXqeTraAgNdfIbYO45xGP-mobile.jpg" /> 
//                 </div> 
//                 {/* <div class="slide"> 
//                     <img src= 
// "https://images.creativefabrica.com/products/previews/2023/10/28/OG8vumD3r/2XNREEHXqeTraAgNdfIbYO45xGP-mobile.jpg" /> 
//                 </div> 
//                 <div class="slide"> 
//                     <img src= 
// "https://images.creativefabrica.com/products/previews/2023/10/28/OG8vumD3r/2XNREEHXqeTraAgNdfIbYO45xGP-mobile.jpg" /> 
//                 </div>  */}
//             </div> 
  
           
//         </div> 
//         <br />  
//          <br />
      
       
//          <div class="navigation"> 
//                 {/* <label for="radio1" class="navigation-btn">Tractor
//                 </label> 
//                 <label for="radio2" class="navigation-btn">JCB
//                 </label>  */}
//                 <label for="radio1" class="navigation-btn">concrete-mixer
//                 </label> 
//                 <label for="radio2" class="navigation-btn">Bulldozer
//                 </label> 
//                 <label for="radio3" class="navigation-btn">Crane
//                 </label> 
//                 <label for="radio4" class="navigation-btn">Roller
//                 </label> 
//                 <label for="radio5" class="navigation-btn">Truck
//                 </label> 
//             </div> 
//             <hr />

//             <div className="text">
//            <h5 className="txt-color">Choose a vehicle below to book your slot</h5>
//            </div>
//         <div className="grid-container">
        
//          {/* <div
//   value={selectedVehicle}
//   onClick={vehicleCounts["Tractor"] < 5 ? () => handleVehicleClick("Tractor") : null}
//   className={`grid-item${vehicleCounts["Tractor"] >= 5 ? " disabled" : ""}`}
// >
//   {vehicleCounts["Tractor"] >= 5 ? (
//     <React.Fragment>
//       All tractors booked
//       <br />
//       Total available - 5
//     </React.Fragment>
//   ) : (
//     <React.Fragment>
//       Tractors Booked - {vehicleCounts["Tractor"]}
//       <br />
//       Total available - 5
//     </React.Fragment>
//   )}
// </div> */}

// {/* <div className="container">
//   <div className="card">
//     <div className="face face1">
//       <div className="content">
//         <div className="icon">
//           <i className="fa fa-linkedin-square" aria-hidden="true"></i>
//         </div>
//       </div>
//     </div>

//     <div className="face face2">
//       <div className="content">
//         <h3>
//           <a href="#" target="_blank">Card</a>
//         </h3>
//         <p>More info</p>
//       </div>
//     </div>
//   </div>
// </div> */}






// <div class="container">
  
// <div
//             value={selectedVehicle}
//             onClick={() => handleVehicleClick("Tractor")}
//             className="box"
//           >
//             Tractor
//           </div>

//           <div
//             value={selectedVehicle}
//             onClick={() => handleVehicleClick("JCB")}
//             className="box"
//           >
//             JCB
//           </div>
//           <div
//             value={selectedVehicle}
//             onClick={() => handleVehicleClick("Concrete Mixer")}
//             className="box"
//           >
//             Concrete Mixer
//           </div>
//           <div
//             value={selectedVehicle}
//             onClick={() => handleVehicleClick("Bulldozers")}
//             className="box"
//           >
//             Bulldozer
//           </div>
//           <div
//             value={selectedVehicle}
//             onClick={() => handleVehicleClick("Cranes")}
//             className="box"
//           >
//             Crane
//           </div>
//           <div
//             value={selectedVehicle}
//             onClick={() => handleVehicleClick("Rollers")}
//             className="box"
//           >
//             Roller
//           </div>
//           <div
//             value={selectedVehicle}
//             onClick={() => handleVehicleClick("Trucks")}
//             className="box"
//           >
//             Truck
//           </div>
//         </div>
//         </div>
//     </div> 
// </div> 





//       {/* {!showSelectDate ? ( */}
       
         
    
//       {/* ) : ( */}
//         <div>
        
//         {/* <Modal isOpen={modal} toggle={toggleModal} centered={true}>
//   <ModalHeader toggle={closeSuccessModal}>Success</ModalHeader>
//   <ModalBody>
//     Slot created successfully.
//   </ModalBody>
//   <ModalFooter>
//     <Button color="primary" onClick={closeSuccessModal}>OK</Button>
//   </ModalFooter>
// </Modal> */}






// <div className="date-time"></div>
// <div class="datetime-picker">

//           </div>

//           <Modal isOpen={modal} toggle={toggleModal} centered={true}>
//             <ModalHeader toggle={toggleModal}>Slot Details:</ModalHeader>
//             <ModalBody>
//             <form className="form1" onSubmit={handleSubmit}>
//                 <div className="form-group">
//                   <label htmlFor="input2">Vehicle Name:</label>
//                   <input
//                     type="text"
//                     id="input6"
//                     value={selectedVehicle}
//                     readOnly
//                   />
//                 </div>

//                 <div className="form-group">
//                   <label htmlFor="input1">Slot date (IST):</label>
                  
//                    {/* <input type="date" value={selectedDate.toISOString().split('T')[0]} onChange={handleDateChange} /> */}
//                    <input type="date" value={selectedDate.toISOString().split('T')[0]} onChange={handleDateChange} min={getCurrentDate()} />

//                 </div>

//                 <div className="form-group">
                 
//                   <label>From Time:</label> 
//                    <input type="time" value={fromTime} onChange={handleFromTimeChange} />
  
//             <label>To Time:</label> 
//             <input type="time" value={toTime} onChange={handleToTimeChange} />
        
//                 </div>
                
//                  <div>Vehicle Number
//                 <select
//                 className="form-group-input"
//                   id="input4"
//                   value={vehicleNumber}
//                   onChange={handleVehicleNumberChange}
//                 >
//                   <option 
//                   value="">Select Vehicle Number</option>
//                   {vehicleNumbers.map((number) => (
//                     <option key={number} value={number}>
//                       {number}
//                     </option>
//                   ))}
//                 </select>
//                 </div>
                
//                 <div className="form-group">
//                   <label htmlFor="input3">Villa Number:</label>
//                   <input
//                     type="text"
//                     id="input3"
//                     value={villaNumber}
//                     onChange={(e) => setVillaNumber(e.target.value)}
//                   />
//                 </div>
                
//                 <label>Booked By</label> 
//                  <select
//               className="form-group-input"
//               id="input7"
//               value={bookedBy}
//               onChange={handleBookedByChange}
//             >
//               <option value="">Select Booked By</option>
//               {bookedByOptions.map((option) => (
//                 <option key={option} value={option}>
//                   {option}
//                 </option>
//               ))}
//             </select>

//                 {formError && (
//                   <p className="error">Please fill out all fields.</p>
//                 )}
//                 <div className="flex-end">
//                   <Button
//                     color="secondary"
//                     className="m-2"
//                     onClick={handlereset}
//                   >
//                     Reset
//                   </Button>
//                   <Button color="primary" onClick={handleSubmit}>
//                     Submit
//                   </Button>
//                 </div>
//               </form>
//             </ModalBody>
//           </Modal>
//         </div>
//       {/* )} */}

//       {/* <div className="auth-inner" style={{ width: "auto" }}>
//         <table>
//           <tr>
//             <th>Vehicle Name</th>
//             <th>Date</th>
//             <th>slot time</th>
//             <th>vehicle num</th>
//             <th>villa num</th>
//             <th>Booked by</th>
//           </tr>
//           {data.map((i, index) => {
//             return (
//               <tr key={index}>
//                 <td>{i.selectedVehicle}</td>
//                 <td>{i.selectedDate}</td>
//                 <td>{`${i.fromTime}  -  ${i.toTime}`}</td>
//                 <td>{i.vehicleNumber}</td>
//                 <td>{i.villaNumber}</td>
//                 <td>{i.bookedBy}</td>
//               </tr>
//             );
//           })}
//         </table>
//       </div> */}
//     </div>
//   );
// };

// export default Adminbooking;


import React, { useEffect, useState } from "react";
import "./adminbooking.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";
import axios from "axios";
import SimpleImageSlider from "react-simple-image-slider";


const Adminbooking = () => {
  const [selectedVehicle, setSelectedVehicle] = useState("");
  const [showSelectDate, setShowSelectDate] = useState(false);
  // const [selectedDate, setSelectedDate] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [error, setError] = useState(false);
  const [villaNumber, setVillaNumber] = useState("");
  const [vehicleNumber, setVehicleNumber] = useState("");
  const [bookedBy, setBookedBy] = useState("");
  const [formError, setFormError] = useState(false);
  const [modal, setModal] = useState(false);
  const [data, setData] = useState([]);


  const [bookedByOptions, setBookedByOptions] = useState([]);
  const [successModal, setSuccessModal] = useState(false); // New state for success modal
  const [vehiclesData, setVehiclesData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/vehicles")
      .then((response) => {
        setVehiclesData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching vehicles data:", error);
      });
  }, []);

  useEffect(() => {
    // Filter vehicle numbers based on the selected vehicle
    const filteredVehicleNumbers = vehiclesData
      .filter((vehicle) => vehicle.vehicleName === selectedVehicle)
      .map((vehicle) => vehicle.vehicleNum);
    setVehicleNumbers(filteredVehicleNumbers);
  }, [selectedVehicle, vehiclesData]);

  const handleVehicleChange = (event) => {
    setSelectedVehicle(event.target.value);
    // Reset selected vehicle number when a different vehicle is selected
    setVehicleNumber("");
  };

  // const [vehicleNumber, setVehicleNumber] = useState("");

  // const handleVehicleNumberChange = (event) => {
  //   setVehicleNumber(event.target.value);
  // };

  const images = [
    { url: "https://media.sketchfab.com/models/2a61c987f8b048f592e084b4eefc1dd1/thumbnails/7966d556e92842b2a2ddc1dd78967830/368b3c31fdb9480dbb88b04ffb1fcb08.jpeg" },
    { url: "https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630" },
    { url: "https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630" },
    { url: "https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630" },
    { url: "https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630" },
    { url: "https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630" },
    { url: "https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630" },
  ];


  const [vehicleCounts, setVehicleCounts] = useState({
    Tractor: 0, 
    JCB:0,

  });


  const fetchSlotData = () => {
    axios
      .get("http://localhost:3000/getslots")
      .then((response) => {
        // Process the fetched data to get the count of available slots for each vehicle type
        const slotsData = response.data.data;
        const counts = {
          Tractor: 0, // Initialize Tractor count to 0
          // Initialize other vehicle counts similarly
        };
        slotsData.forEach((slot) => {
          // Increment the count of available slots for the corresponding vehicle type
          counts[slot.selectedVehicle]++;
        });
        setVehicleCounts(counts); // Update the state variable with the counts
      })
      .catch((error) => {
        console.error("Error fetching slot data:", error);
      });
  };

  //useeffect
  useEffect(() => {
    const fetchSlotData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/getslots");
        const slotsData = response.data.data;
        const counts = {
          Tractor: 0, // Initialize Tractor count to 0
          // Initialize other vehicle counts similarly
        };
        slotsData.forEach((slot) => {
          counts[slot.selectedVehicle]++;
        });
        setVehicleCounts(counts);
      } catch (error) {
        console.error("Error fetching slot data:", error);
      }
    };
  
    fetchSlotData();
  }, []);

  const [bookedSlots, setBookedSlots] = useState([]);

  const [vehicleNumbers, setVehicleNumbers] = useState([]);

  const handleVehicleClick = (selectedVehicle) => {
    setSelectedVehicle(selectedVehicle);
    toggleModal();
  };

  // const toggleModal = () => setModal(!modal);
  const toggleModal = () => {
    if (!modal) {
      // If modal is opening, do nothing
      setModal(true);
    } else {
      // If modal is closing, reset the form
      setFromTime("");
      setToTime("")
      setVillaNumber("");
      setVehicleNumber("");
      setBookedBy("");
      setFormError(false);
      setModal(false);
    }
  };


  const handleSelectSlot = (slot) => {
    if (selectedDate) {
      setSelectedSlot(slot);
      toggleModal(); // Show modal
      setError(false);
    } else {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 2000);
    }
  };


  const handleCancel = () => {
    toggleModal();
  };

  const handlereset = () => {
    setVillaNumber("");
    setVehicleNumber("");
    setBookedBy("");
    setFormError("");
  };

  

  const handleSubmit = (event) => {
    event.preventDefault();
    const currentTime = new Date();
    const formattedCurrentTime = currentTime.toLocaleTimeString("en-IN");
    if (!villaNumber.trim() || !vehicleNumber.trim() || !bookedBy.trim()) {
      setFormError(true);      return;
    }
    const data = {
      selectedVehicle: selectedVehicle,
      selectedDate: selectedDate,
      fromTime: fromTime,
      toTime: toTime,
      vehicleNumber: vehicleNumber,
      villaNumber: villaNumber,
      bookedBy: bookedBy,
      // submittedAt: formattedCurrentTime,
    };
  
   axios
        .post("http://localhost:3000/createSlots", data)
        .then((response) => {
        console.log(response.status);
        console.log("Form data submitted successfully:", response.data);
        alert("form submitted successfully");
        setSuccessModal(true);
        fetchSlotData();
        setShowSelectDate(false);
      })
        .catch((error) => {
        console.error("Error submitting form data:" , error);
      });
  };

  const closeSuccessModal = () => {
    setSuccessModal(false);
  };
  

  useEffect(() => {
    fetch("http://localhost:3000/getslots", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data, "userData");
        setData(data.data);
      });
  }, []);

  //vehiclenum
  // useEffect(() => {
  //   axios.get("http://localhost:3000/getVehicle").then((response) => {
  //     const vehicleNumbers = response.data.map((vehicle) => vehicle.vehicleNum);
  //     setVehicleNumbers(vehicleNumbers);
  //   }).catch((error) => {
  //     console.error("Error fetching vehicle numbers:", error);
  //   });
  // }, []);
  useEffect(() => {
    axios
      .get("http://localhost:3000/vehicles") // Correct endpoint to fetch all vehicle numbers
      .then((response) => {
        const vehicleNumbers = response.data.map(
          (vehicle) => vehicle.vehicleNum
        );
        setVehicleNumbers(vehicleNumbers);
      })
      .catch((error) => {
        console.error("Error fetching vehicle numbers:", error);
      });
  }, []);

  const handleVehicleNumberChange = (event) => {
    setVehicleNumber(event.target.value);
  };

  //time
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState('00:00');

  const handleDateChange = (e) => {
    const date = new Date(e.target.value);
    setSelectedDate(date);
  };

  const getCurrentDate = () => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    let month = currentDate.getMonth() + 1;
    let day = currentDate.getDate();
  
    // Add leading zero to month and day if needed
    month = month < 10 ? `0${month}` : month;
    day = day < 10 ? `0${day}` : day;
  
    return `${year}-${month}-${day}`;
  };

  const handleTimeChange = (e) => {
    setSelectedTime(e.target.value);
  };


  //from - to
  const [fromTime, setFromTime] = useState("");
  const [toTime, setToTime] = useState("");

  const handleFromTimeChange = (event) => {
      setFromTime(event.target.value);
  };

  const handleToTimeChange = (event) => {
      setToTime(event.target.value);
  };

  //bookedby
useEffect(() => {
  axios
    .get("http://localhost:3000/createusers") // Endpoint to fetch all usernames
    .then((response) => {
      const usernames = response.data.map(
        (user) => user.username
      );
      setBookedByOptions(usernames);
    })
    .catch((error) => {
      console.error("Error fetching usernames:", error);
    });
}, []);


const handleBookedByChange = (event) => {
  setBookedBy(event.target.value);
};

  return (
    <div>

<div className="slider-container">
      <SimpleImageSlider
        width={'60%'}
        height={'80vh'}
        images={images}
        showBullets={true}
        showNavs={true}
      />
      <br />

      {/* <div className="text2"> */}
          
           {/* </div> */}
           
      {/* <h5 className="txt-color">Choose a vehicle below to book your slot</h5>  */}
      <div class="boxes2-container">
      
  <div
              value={selectedVehicle}
              onClick={() => handleVehicleClick("Tractor ")}
              className="box2"
            >
              Tractor
            </div>
  
            <div
              value={selectedVehicle}
              onClick={() => handleVehicleClick("JCB")}
              className="box2"
            >
              JCB
            </div>
            <div
              value={selectedVehicle}
              onClick={() => handleVehicleClick("Concrete Mixer")}
              className="box2"
            >
              Concrete Mixer
            </div>
            <div
              value={selectedVehicle}
              onClick={() => handleVehicleClick("Bulldozers")}
              className="box2"
            >
              Bulldozer
            </div>
            <div
              value={selectedVehicle}
              onClick={() => handleVehicleClick("Cranes")}
              className="box2"
            >
              Crane
            </div>
            <div
              value={selectedVehicle}
              onClick={() => handleVehicleClick("Rollers")}
              className="box2"
            >
              Roller
            </div>
            <div
              value={selectedVehicle}
              onClick={() => handleVehicleClick("Trucks")}
              className="box2"
            >
              Truck
            </div>
          </div>
    </div>  
        <div>
   

<div className="date-time"></div>
<div class="datetime-picker">

          </div>

          <Modal isOpen={modal} toggle={toggleModal} centered={true} style={{ marginTop: '50px' }}>
            <ModalHeader toggle={toggleModal}>Slot Details:</ModalHeader>
            <ModalBody>
            <form className="form1" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="input2">Vehicle Name:</label>
                  <input
                    type="text"
                    id="input6"
                    value={selectedVehicle}
                    readOnly
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="input1">Slot date (IST):</label>
                  
                   {/* <input type="date" value={selectedDate.toISOString().split('T')[0]} onChange={handleDateChange} /> */}
                   <input type="date" value={selectedDate.toISOString().split('T')[0]} onChange={handleDateChange} min={getCurrentDate()} />

                </div>

                <div className="form-group">
                 
                  <label>From Time:</label> 
                   <input type="time" value={fromTime} onChange={handleFromTimeChange} />
  
            <label>To Time:</label> 
            <input type="time" value={toTime} onChange={handleToTimeChange} />
        
                </div>
                
                
                   <label htmlFor="vehicleNumber">Select Vehicle Number:</label>
      <select id="vehicleNumber" value={vehicleNumber} onChange={handleVehicleNumberChange}>
        <option value="">Select Vehicle Number</option>
        {vehicleNumbers.map((number) => (
          <option key={number} value={number}>
            {number}
          </option>
        ))}
      </select>
                
            
                 <div className="form-group">
        <label htmlFor="input3">Villa Number:</label>
        <input
          type="text"
          id="input3"
          value={villaNumber}
          onChange={(e) => setVillaNumber(e.target.value)}
        />
      </div>

      
                
                <label>Booked By</label> 
                 <select
              className="form-group-input"
              id="input7"
              value={bookedBy}
              onChange={handleBookedByChange}
            >
              <option value="">Select Booked By</option>
              {bookedByOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>

                {formError && (
                  <p className="error">Please fill out all fields.</p>
                )}
                <div className="flex-end">
                  <Button
                    color="secondary"
                    className="m-2"
                    onClick={handlereset}
                  >
                    Reset
                  </Button>
                  <Button color="primary" onClick={handleSubmit}>
                    Submit
                  </Button>
                </div>
              </form>
            </ModalBody>
          </Modal>
        </div>
      
    </div>
  );
};

export default Adminbooking;