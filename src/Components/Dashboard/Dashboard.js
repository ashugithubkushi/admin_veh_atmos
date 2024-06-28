// import React from 'react';
// import './dashboard.css'
// import { styled, useTheme } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import MuiDrawer from '@mui/material/Drawer';
// import MuiAppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import List from '@mui/material/List';
// import CssBaseline from '@mui/material/CssBaseline';
// import Typography from '@mui/material/Typography';
// import Divider from '@mui/material/Divider';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
// import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
// import ChevronRightIcon from '@mui/icons-material/ChevronRight';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// // import MailIcon from '@mui/icons-material/Mail';
// import StarIcon from '@mui/icons-material/Star';
// import SendIcon from '@mui/icons-material/Send';
// import DraftsIcon from '@mui/icons-material/Drafts';
// import PersonIcon from '@mui/icons-material/Person';
// import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
// import EventNoteIcon from '@mui/icons-material/EventNote';
// import Addvehicles from './Addvehicles/Addvehicles';
// import Users from './Users/Users';
// import ExitToAppIcon from '@mui/icons-material/ExitToApp';
// import { useState } from 'react';
// import AdminBookings from './AdminBookings/AdminBookings';
// import { useLocation } from 'react-router-dom';
// import Adminbooking from './Adminbooking/Adminbooking';
// import EventIcon from '@mui/icons-material/Event';

// const drawerWidth = 240;

// const openedMixin = (theme) => ({
//   width: drawerWidth,
//   transition: theme.transitions.create('width', {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.enteringScreen,
//   }),
//   overflowX: 'hidden',
// });

// const closedMixin = (theme) => ({
//   transition: theme.transitions.create('width', {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   overflowX: 'hidden',
//   width: `calc(${theme.spacing(7)} + 1px)`,
//   [theme.breakpoints.up('sm')]: {
//     width: `calc(${theme.spacing(8)} + 1px)`,
//   },
// });

// const DrawerHeader = styled('div')(({ theme }) => ({

//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'flex-end',
//   padding: theme.spacing(0, 1),
//   // necessary for content to be below app bar
//   ...theme.mixins.toolbar,
// }));

// const AppBar = styled(MuiAppBar, {
//   shouldForwardProp: (prop) => prop !== 'open',
// })(({ theme, open }) => ({
//   zIndex: theme.zIndex.drawer + 1,
//   transition: theme.transitions.create(['width', 'margin'], {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   ...(open && {
//     marginLeft: drawerWidth,
//     width: `calc(100% - ${drawerWidth}px)`,
//     transition: theme.transitions.create(['width', 'margin'], {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//   }),
// }));

// const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
//   ({ theme, open }) => ({
//     width: drawerWidth,
//     flexShrink: 0,
//     whiteSpace: 'nowrap',
//     boxSizing: 'border-box',
//     ...(open && {
//       ...openedMixin(theme),
//       '& .MuiDrawer-paper': openedMixin(theme),
//     }),
//     ...(!open && {
//       ...closedMixin(theme),
//       '& .MuiDrawer-paper': closedMixin(theme),
//     }),
//   }),
// );

// const Content = ({ selected }) => {
//   switch (selected) {
//     case 'Add Vehicles':
//       return <Addvehicles />;
//     case 'Booked Slots':
//       return <AdminBookings/>;
//     case 'Add Users':
//       return <Users/>;
//     default:
//       case 'Slots-Booking':
//       return <Adminbooking />;
//   }
// };

// export default function Dashboard() {

//   const location = useLocation();
//   const { username, password } = location.state || {};

//   const theme = useTheme();
//   const [open, setOpen] = React.useState(false);
//   const [selectedItem, setSelectedItem] = React.useState('');
//   const [isLoggedIn, setIsLoggedIn] = useState(true);

//   const handleDrawerOpen = () => {
//     setOpen(true);
//   };

//   const handleDrawerClose = () => {
//     setOpen(false);
//   };

//   const handleItemClick = (item) => {
//     setSelectedItem(item);
//   };

//   const handleLogout = () => {
//     setIsLoggedIn(false);
//     window.location.href = '/';
//   };

//   return (
//     <Box sx={{ display: 'flex' }}>
//       <CssBaseline />
//       <AppBar position="fixed" open={open} sx={{ backdropFilter: "blur(10px)", backgroundColor: "rgba(155, 155, 155, 0.3)", color: 'black', display: 'flex', justifyContent: 'center' }}>
//   <Toolbar>
//     <IconButton
//       color="inherit"
//       aria-label="open drawer"
//       onClick={handleDrawerOpen}
//       edge="start"
//       sx={{
//         marginRight: 5,
//         ...(open && { display: 'none' }),
//       }}
//     >
//       <MenuIcon sx={{ marginLeft: 0 }} />
//     </IconButton>
//     <Typography variant="h6" noWrap component="div" sx={{ color: 'black' }}>
//     <b><h2 className='text1'>ATMOS</h2></b>
//     </Typography>
//     <Box sx={{ flexGrow: 1 }} />

//     <div className="user" style={{ marginLeft: 'auto', marginRight: '10px' }}>
//     User:- {username}
//     </div>

//  <IconButton color="inherit" onClick={handleLogout}>
//       <ExitToAppIcon />
//     </IconButton>
//   </Toolbar>

// </AppBar>

//       <Drawer variant="permanent" open={open}>
//         <DrawerHeader>
//           <IconButton onClick={handleDrawerClose}>
//             {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
//           </IconButton>
//         </DrawerHeader>
//         <Divider />
//         <List>
//   {['Slots-Booking', 'Booked Slots' , 'Add Vehicles', 'Add Users',].map((text) => (
//     <ListItem key={text} disablePadding>
//       <ListItemButton
//         onClick={() => handleItemClick(text)}
//         sx={{
//           minHeight: 48,
//           justifyContent: open ? 'initial' : 'center',
//           px: 2.5,
//         }}
//       >
//         <ListItemIcon sx={{ minWidth: 0, mr: open ? 0 : 'auto', paddingLeft: 2.5 }}>
//           {text === 'Add Vehicles' && <DirectionsCarIcon />}
//           {text === 'Booked Slots' && <EventNoteIcon />}
//           {text === 'Slots-Booking' && <EventIcon />}
//           {text === 'Add Users' && <PersonIcon />}
//         </ListItemIcon>
//         <ListItemText primary={text} sx={{ paddingLeft: 2.5 }}/>
//       </ListItemButton>
//     </ListItem>
//   ))}
// </List>
//         <Divider />
//       </Drawer>
//       <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
//         <DrawerHeader />
//         <Content selected={selectedItem} />
//       </Box>
//     </Box>
//   );
// }

import React, { useEffect, useRef, useState } from "react";
import "./dashboard.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";
import axios from "axios";
import SimpleImageSlider from "react-simple-image-slider";
import Navbar from "./Navbar";
import {
  DirectionsCarOutlined,
  Event,
  EventOutlined,
  Person2Outlined,
} from "@mui/icons-material";
import Chart from "chart.js/auto";

import { Schedule } from "@mui/icons-material";
import ListAltIcon from "@mui/icons-material/ListAlt";
import AgricultureIcon from "@mui/icons-material/Agriculture";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import { Box } from "@mui/material";

const Dashboard = () => {
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
  const [successModal, setSuccessModal] = useState(false);
  const [vehiclesData, setVehiclesData] = useState([]);

  //display vehicles card in dashboard
  const [vehicles, setVehicles] = useState(new Set());

  const areaGraphRef = useRef(null);
  const barGraphRef = useRef(null);

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

  // const [vehicleCounts, setVehicleCounts] = useState({
  //   Tractor: 0,
  //   JCB: 0,
  // });

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
      setToTime("");
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
      setFormError(true);
      return;
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
        fetchSlotData(); // Refresh slot data
        setShowSelectDate(false);
      })
      .catch((error) => {
        console.error("Error submitting form data:", error);
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
  const [selectedTime, setSelectedTime] = useState("00:00");

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
        const usernames = response.data.map((user) => user.username);
        setBookedByOptions(usernames);
      })
      .catch((error) => {
        console.error("Error fetching usernames:", error);
      });
  }, []);

  const handleBookedByChange = (event) => {
    setBookedBy(event.target.value);
  };

  useEffect(() => {
    let areaChartInstance = null;
    let barChartInstance = null;

    // Destroy existing chart instances before re-rendering
    if (areaChartInstance) {
      areaChartInstance.destroy();
    }
    if (barChartInstance) {
      barChartInstance.destroy();
    }

    // Area Graph Data
    const areaGraphData = {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [
        {
          label: "Area Graph",
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: true,
          backgroundColor: "rgba(75,192,192,0.2)",
          borderColor: "rgba(75,192,192,1)",
          borderWidth: 1,
        },
      ],
    };

    // Bar Graph Data
    const barGraphData = {
      labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
      datasets: [
        {
          label: "Bar Graph",
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
          ],
          borderWidth: 1,
        },
      ],
    };

    // Render Area Graph
    if (areaGraphRef.current) {
      areaChartInstance = new Chart(areaGraphRef.current, {
        type: "line",
        data: areaGraphData,
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: "top",
            },
            title: {
              display: true,
              text: "Area Graph",
            },
          },
        },
      });
    }

    // Render Bar Graph
    if (barGraphRef.current) {
      barChartInstance = new Chart(barGraphRef.current, {
        type: "bar",
        data: barGraphData,
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: "top",
            },
            title: {
              display: true,
              text: "Bar Graph",
            },
          },
        },
      });
    }

    
    
    return () => {
      if (areaChartInstance) {
        areaChartInstance.destroy();
      }
      if (barChartInstance) {
        barChartInstance.destroy();
      }
    };
  }, []);

  // total slots
  const [totalSlots, setTotalSlots] = useState(0);

  useEffect(() => {
    axios
      .get("http://localhost:3000/getTotalSlotCount")
      .then((res) => {
        setTotalSlots(res.data.totalSlots);
      })
      .catch((err) => {
        console.error("Error fetching total slot count:", err);
      });
  }, []);

  // total vehicles
  const [totalVehicles, setTotalVehicles] = useState(0);

  useEffect(() => {
    axios
      .get("http://localhost:3000/getTotalVehiclesCount")
      .then((res) => {
        setTotalVehicles(res.data.totalVehicles);
      })
      .catch((err) => {
        console.error("Error fetching total slot count:", err);
      });
  }, []);

  // total users
  const [totalusers, setTotalusers] = useState(0);

  useEffect(() => {
    axios
      .get("http://localhost:3000/getTotalCreateusersCount")
      .then((res) => {
        setTotalusers(res.data.totalusers);
      })
      .catch((err) => {
        console.error("Error fetching total slot count:", err);
      });
  }, []);

  //individual vehicle count
  // const [tractorCount, setTractorCount] = useState(0);

  // useEffect(() => {
  //     axios.get('http://localhost:3000/vehicles/count-Tractor')
  //         .then(response => {
  //             setTractorCount(response.data.count);
  //         })
  //         .catch(error => {
  //             console.error('Error fetching tractor count:', error);
  //         });
  // }, []);

  const [vehicleCounts, setVehicleCounts] = useState({});
  useEffect(() => {
    axios
      .get("http://localhost:3000/vehicles/counts")
      .then((response) => {
        setVehicleCounts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching vehicle counts:", error);
      });
  }, []);


    //booked slot count
    // const [slots, setSlots] = useState([]);

    // useEffect(() => {
    //     // Fetch data from backend when the component mounts
    //     axios.get('http://localhost:3000/slots')
    //         .then(response => {
    //             setSlots(response.data); // Update state with fetched data
    //         })
    //         .catch(error => {
    //             console.error('Error fetching slots:', error);
    //             // Handle error if needed
    //         });
    // }, []); 
    const [slots, setSlots] = useState([]);

    useEffect(() => {
        // Fetch data from backend when the component mounts
        axios.get('http://localhost:3000/slots')
            .then(response => {
                setSlots(response.data); // Update state with fetched data
            })
            .catch(error => {
                console.error('Error fetching slots:', error);
                // Handle error if needed
            });
    }, []);

    const countSelectedVehicles = () => {
      const vehicleCounts = {};
      slots.forEach(slot => {
          const { selectedVehicle } = slot;
          if (vehicleCounts[selectedVehicle]) {
              vehicleCounts[selectedVehicle]++;
          } else {
              vehicleCounts[selectedVehicle] = 1;
          }
      });
      return vehicleCounts;
  };
    
  


  //
  // useEffect(() => {
  //   // Fetch data from backend when the component mounts
  //   axios.get('http://localhost:3000/vehicles')
  //     .then(response => {
  //       setVehicles(response.data);
  //     })
  //     .catch(error => {
  //       console.error('Error fetching vehicle data:', error);
  //     });
  // }, []);
  
  // vehicles card display in dashboard
  useEffect(() => {
    axios.get('http://localhost:3000/vehicles')
      .then(response => {
        // Extract unique vehicle names using Set
        const uniqueVehicleNames = new Set(response.data.map(vehicle => vehicle.vehicleName));
        setVehicles(uniqueVehicleNames);
      })
      .catch(error => {
        console.error('Error fetching vehicle data:', error);
      });
  }, []); 


  //hover popup
  const [showMessage, setShowMessage] = useState(false);

  const handleMouseEnter = () => {
    setShowMessage(true);
  };

  const handleMouseLeave = () => {
    setShowMessage(false);
  };


  

  return (
    <Box sx={{ width: '100%', p:1 , height: '100vh', mt:1, borderRadius:5}}>
      {/* <div>
        <div className="grid grid-cols-4 gap-6">
          <div className="col-span-1">  
            <div className="mx-auto bg-sky-50 rounded-xl">
              <div className="d-flex justify-between">
                <div className="ml-5 mt-5">
              <ListAltIcon />
              </div>

              <div className="ml-5 mt-5">
                <h2>Progress</h2>
              </div>
                
              </div>
              <div>
                <div className="text-blue-600">
                  Total users
                </div>
                <div className="tet-3xl">
                  {totalSlots}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

<div class="grid-containers">
        {/* Slot count  */}
      <div className="grid-items">
  <div className="d-flex justify-content-between align-items-center">
    <div className="count-text">
      <h1><b>{totalSlots}</b></h1>
      <h5>Total Slots</h5>
    </div>
    <div className="icon-wrapper">
      <ListAltIcon className="list-icon" sx={{ fontSize: 55 }} />
    </div>
  </div>
</div>


   <div className="grid-items" 
  //  onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
   >
      <div className="d-flex justify-content-between align-items-center">
        <div className="count-text">
          <h1><b>{totalVehicles}</b></h1>
          <h5>Total Count of Vehicles</h5>
        </div>
        <div className="icon-wrapper">
          <AgricultureIcon className="list-icon" sx={{ fontSize: 55 }} />
        </div>
      </div>
      <div className={`message-box ${showMessage ? 'show' : ''}`}>
        
      <div>
        <h2>Vehicle Counts:</h2>
        <ul>
          {Object.keys(vehicleCounts).map((vehicleName) => (
            <li key={vehicleName}>
              {vehicleName}: {vehicleCounts[vehicleName]}
            </li>
          ))}
        </ul>
      </div>


      </div>
    </div>



{/* Total users  */}
<div className="grid-items">
  <div className="d-flex justify-content-between align-items-center">
    <div className="count-text">
      <h1><b>{totalusers}</b></h1>
      <h5>Total Users</h5>
    </div>
    <div className="icon-wrapper">
      <PeopleAltIcon className="list-icon" sx={{ fontSize: 55 }} />
    </div>
  </div>
</div>
 </div>
      {/* <hr /> */}

     

      {/* //  */}
      <div className="container-fluid mt-4">
        <div className="row">
          {/* Main Container */}
          <div className="col-lg-8">
            <div className="row">
              {/* Box 1 */}
              {/* <div className="col-xl-4 col-lg-6 col-md-6 mb-4">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex align-items-center">
                      <img
                        src="https://4.imimg.com/data4/KJ/BY/MY-14831048/john-deere-5050d-tractor.jpg"
                        alt="Tractor"
                        className="vehicle-icon"
                      />
                      <h5 className="card-title ms-2">
                        <b>Tractor</b>
                      </h5>
                    </div>
                    <div
                      value={selectedVehicle}
                      onClick={() => handleVehicleClick("Tractor")}
                      className="vehicle-details"
                    >
                      <div className="d-grid">
                       <span>Total = </span>
                        <span>Remaining = </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}

              {/* Box 2 */}
              {/* <div className="col-xl-4 col-lg-6 col-md-6 mb-4">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex align-items-center">
                      <DirectionsCarOutlined sx={{ fontSize: 40 }} />
                      <h5 className="card-title ms-2">
                        <b>JCB</b>
                      </h5>
                    </div>
                    <div
                      value={selectedVehicle}
                      onClick={() => handleVehicleClick("JCB")}
                    >
                      <div className="d-grid">
                        <span>Total = </span>
                        <span>Remaining = </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}

              {/* Box 3 */}
              {/* <div className="col-xl-4 col-lg-6 col-md-6 mb-4">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex align-items-center">
                      <DirectionsCarOutlined sx={{ fontSize: 40 }} />
                      <h5 className="card-title ms-2">
                        <b>Concrete Mixer</b>
                      </h5>
                    </div>
                    <div
                      value={selectedVehicle}
                      onClick={() => handleVehicleClick("Concrete Mixer")}
                    >
                      <div className="d-grid">
                        <span>Total = </span>
                        <span>Remaining = </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}

              {/* Box 4 */}
              {/* <div className="col-xl-4 col-lg-6 col-md-6 mb-4">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex align-items-center">
                      <DirectionsCarOutlined sx={{ fontSize: 40 }} />
                      <h5 className="card-title ms-2"><b>Bulldozer</b></h5>
                    </div>
                    <div
                      value={selectedVehicle}
                      onClick={() => handleVehicleClick("Bulldozers")}
                    >
                      <div className="d-grid">
                        <span>Total = </span>
                        <span>Remaining = </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}

              {/* Box 5 */}
              {/* <div className="col-xl-4 col-lg-6 col-md-6 mb-4">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex align-items-center">
                      <DirectionsCarOutlined sx={{ fontSize: 40 }} />
                      <h5 className="card-title ms-2">
                        <b>Crane</b>
                      </h5>
                    </div>
                    <div
                      value={selectedVehicle}
                      onClick={() => handleVehicleClick("Cranes")}
                    >
                      <div className="d-grid">
                        <span>Total = </span>
                        <span>Remaining = </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}

              {/* Box 6 */}
              {/* <div className="col-xl-4 col-lg-6 col-md-6 mb-4">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex align-items-center">
                      <DirectionsCarOutlined sx={{ fontSize: 40 }} />
                      <h5 className="card-title ms-2">
                        <b>Roller</b>
                      </h5>
                    </div>
                    <div
                      value={selectedVehicle}
                      onClick={() => handleVehicleClick("Rollers")}
                    >
                      <div className="d-grid">
                        <span>Total = </span>
                        <span>Remaining = </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}

              {/* Box 7 */}
              {/* <div className="col-xl-4 col-lg-6 col-md-6 mb-4">
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex align-items-center">
                      <DirectionsCarOutlined sx={{ fontSize: 40 }} />
                      <h5 className="card-title ms-2">
                        <b>Truck</b>
                      </h5>
                    </div>
                    <div
                      value={selectedVehicle}
                      onClick={() => handleVehicleClick("Trucks")}
                    >
                      <div className="d-grid">
                        <span>Total = </span>
                        <span>Remaining = </span>
                      </div>
                    </div>
                  </div>

                </div>
              </div> */}


             {/* mapping vehicles data */}
             <div className="row">
      {[...vehicles].map((vehicleName, index) => (
        <div key={index} className="col-xl-4 col-lg-6 col-md-6 mb-4">
          <div className="card">
            <div className="card-body">
              <div className="d-flex align-items-center">
                {/* <DirectionsCarOutlined sx={{ fontSize: 40 }} /> */}
                <img
                        src="https://4.imimg.com/data4/KJ/BY/MY-14831048/john-deere-5050d-tractor.jpg"
                        alt="Tractor"
                        className="vehicle-icon"
                      />
                <h5 className="card-title ms-2">
                  <b>{vehicleName}</b>
                </h5>
              </div>
              <div onClick={() => handleVehicleClick(vehicleName)} className="d-grid">
                <span>Total { } </span>
                {/* <span>Remaining = </span> */}
              </div>
            </div>
          </div>
        </div>
      ))}
      
    </div>
     {/* vv imp  */}
     {/* <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          // mt: 3,
          mt: 1,
        }}
      >
        {Object.keys(vehicleCounts).map((vehicleName, index) => (
          <Box
            key={index}
            sx={{
              // width: "30%",
              // width: "5%",
              // p: 1,
              // mt: 1,
              // borderRadius: 5,
              // border: "1px solid #ccc",
              // textAlign: "center",
              
            }}
          >
            <h5>
              <b>{vehicleName}</b>
            </h5>
            <p>Total = {vehicleCounts[vehicleName]}</p>
          </Box>
        ))}
      </Box> */}


{/* booked slots count */}
 {/* <div>
            <h2>Slots Data</h2>
            <div>
                {Object.entries(countSelectedVehicles()).map(([vehicle, count]) => (
                    <div key={vehicle}>
                        <p>{`${vehicle}: ${count}`}</p>
                    </div>
                ))} 
            </div>
        </div> */}
      




               {/*  */}
            </div>
          </div>

          {/* Second Container  unhide*/}
          {/* <div className="col-lg-4">
            <div className="card">
              <div className="secondcard-body">
                <h5 className="card-title">
                  <b className="thank-you1">Slot details</b>
                </h5>
                <p className="card-text d-grid">
                  <span className="thank-you">
                    {" "}
                    <b>Thank you..! Your slot has been booked.</b>
                  </span>
                  <span>
                    {" "}
                    <b>Please find the details below</b>
                  </span>
                </p>
                <form>
                 
                </form>
              </div>
            </div>
          </div> */}

          {/* //  */}
          <div class="boxes2-container"></div>

          {/* </div>   */}
          <div>
            {/* graph  */}
            {/* <div className="graph-container d-flex flex-grow-1 m-3">
  <div className="area-graph flex-grow-1">
    <canvas ref={areaGraphRef}></canvas>
  </div>
  <div className="bar-graph flex-grow-1">
    <canvas ref={barGraphRef}></canvas>
  </div>
</div> */}

            {/* <div className="date-time"></div> */}
            {/* <div class="datetime-picker">

          </div> */}

          {/* vehicle count */}
          {/* <div>
        <h2>Vehicle Counts:</h2>
        <ul>
          {Object.keys(vehicleCounts).map((vehicleName) => (
            <li key={vehicleName}>
              {vehicleName}: {vehicleCounts[vehicleName]}
            </li>
          ))}
        </ul>
      </div> */}

      

            <Modal
              isOpen={modal}
              toggle={toggleModal}
              centered={true}
              style={{ marginTop: "50px" }}
            >
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
                    <input
                      type="date"
                      value={selectedDate.toISOString().split("T")[0]}
                      onChange={handleDateChange}
                      min={getCurrentDate()}
                    />
                  </div>

                  <div className="form-group">
                    <label>From Time:</label>
                    <input
                      type="time"
                      value={fromTime}
                      onChange={handleFromTimeChange}
                    />

                    <label>To Time:</label>
                    <input
                      type="time"
                      value={toTime}
                      onChange={handleToTimeChange}
                    />
                  </div>

                  <label htmlFor="vehicleNumber">Select Vehicle Number:</label>
                  <select
                    id="vehicleNumber"
                    value={vehicleNumber}
                    onChange={handleVehicleNumberChange}
                  >
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
      </div>

     
     
      </Box>
  );
};

export default Dashboard;
