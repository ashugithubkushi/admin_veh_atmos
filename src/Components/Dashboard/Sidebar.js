// import React from 'react';
// import './sidebar.css'

// const Sidebar = (props) => {
//   return (
//     <div className='side-menu inactive'>
//       <div className="top-section">
//         <div className="logo">
//           <img></img>
//         </div>


//         <div className="toggle-menu-btn">
//           <i className='bi bi-arrow-left-square-fill'></i>
//         </div>
//       </div>


// <div className="divider">

// </div>

//     </div>
//   )
// }

// export default Sidebar



// import React, { useState } from 'react';
// import { Link } from 'react-router-dom'; // If you're using React Router for navigation
// import './sidebar.css'; // Import your CSS file for styling
// import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';

// const Sidebar = ({ isOpen, toggleSidebar }) => {
//   return (
//     <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
//       {/* <ul className="sidebar-list">
//         <li>
//           <DirectionsCarIcon />
//           <Link to="/dashboard1">Dashboard 1</Link>
//         </li>
//         <li>
//           <DirectionsCarIcon />
//           <Link to="/dashboard2">Dashboard 2</Link>
//         </li>
//       </ul> */}
//         <div className="sidebar">
//       <Link to="/dashboard/home">Home</Link>
//       <Link to="/dashboard/profile">Profile</Link>
//       <Link to="/dashboard/settings">Settings</Link>
//       {/* Add more links as needed */}
//     </div>
//     </div>
//   );
// };

// export default Sidebar;

import React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { useLocation, useNavigate } from 'react-router-dom';

import DashboardIconOutlined from '@mui/icons-material/DashboardOutlined';
import ReceiptIconOutlined from '@mui/icons-material/ReceiptOutlined';
import AssignmentIconOutlined from '@mui/icons-material/AssignmentOutlined';

import './sidebar.css'


import { Dashboard as DashboardIcon, DirectionsCarOutlined, Receipt as OrdersIcon, Person2Outlined, Assignment as RegisterDataIcon } from '@mui/icons-material'; // Importing icons


const drawerWidth = 250;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function Sidebar() {
 

  const theme = useTheme();
  const location = useLocation();
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();

  

  if (location.pathname === "/") {
    return null;
  }


return (
  <Box   sx={{ 
    display: 'flex', 
    backgroundColor: '#f0f0f0', // Background color
    boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)', // Box shadow
    // Add any other CSS properties you need
  }}>
    <CssBaseline />
    <Drawer variant="permanent" open={open}>
      <DrawerHeader >
        {/* Toggle button */}
        <IconButton onClick={() => setOpen(!open)}>
          {/* {open ? <ChevronLeftIcon /> : <MenuIcon />} */}
          {open ? <MenuIcon /> : <MenuIcon />}
        </IconButton>
      </DrawerHeader>
      
      <Divider />
      
      <Divider />
      <List>

  <br />
        

        {/* dashboard  */}
        <ListItem 
          disablePadding 
          sx={{ display: 'block' }} 
          onClick={() => {navigate("/dashboard")}}
        >
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: open ? 'initial' : 'center',
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : 'auto',
                justifyContent: 'center',
                color: '#000', // Default color
              }}
            >
              <DashboardIconOutlined 
                 sx={{
                  color: location.pathname === "/dashboard" ? '#926c9a' : 'inherit', // Change color if selected to purple
              }}/> {/* Dashboard Icon */}
            </ListItemIcon>
            <ListItemText primary={<Typography variant="body1" fontWeight="bold">Dashboard</Typography>} sx={{ opacity: open ? 1 : 0 }} />
          </ListItemButton>
        </ListItem>


        <ListItem 
          disablePadding 
          sx={{ display: 'block' }} 
          onClick={() => {navigate("/Adminbookings")}}
        >
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: open ? 'initial' : 'center',
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : 'auto',
                justifyContent: 'center',
                color: '#000', // Default color
              }}
            >
              <AssignmentIconOutlined  
                sx={{
                  color: location.pathname === "/Adminbookings" ? '#926c9a' : 'inherit', // Change color if selected to purple
              }}/> {/* Orders Icon */}
            </ListItemIcon>
            <ListItemText primary={<Typography variant="body1" fontWeight="bold" marginRight="20px">Booked Slots data</Typography>} sx={{ opacity: open ? 1 : 0 }} />
          </ListItemButton>


        </ListItem>
          
        <ListItem 
          disablePadding 
          sx={{ display: 'block' }} 
          onClick={() => {navigate("/Addvehicles")}}
        >
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: open ? 'initial' : 'center',
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : 'auto',
                justifyContent: 'center',
                color: '#000', // Default color
              }}
            >
              < DirectionsCarOutlined
                sx={{
                  color: location.pathname === "/Addvehicles" ? '#926c9a' : 'inherit', // Change color if selected to purple
              }}/> {/* Register Data Icon */}
            </ListItemIcon>
            <ListItemText primary={<Typography variant="body1" fontWeight="bold">Add vehicles</Typography>} sx={{ opacity: open ? 1 : 0 }} />
          </ListItemButton>
        </ListItem>


        <ListItem 
          disablePadding 
          sx={{ display: 'block' }} 
          onClick={() => {navigate("/Users")}}
          // sx={{ '&.Mui-selected': { backgroundColor: 'rgba(0, 0, 0, 0.08)' } }}
          // selected={location.pathname === "/registerdata"}
        >
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: open ? 'initial' : 'center',
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : 'auto',
                justifyContent: 'center',
                color: '#000', // Default color
              }}
            >
              <Person2Outlined 
                sx={{
                  color: location.pathname === "/Users" ? '#926c9a' : 'inherit', // Change color if selected to purple
              }}/>
            </ListItemIcon>
            <ListItemText primary={<Typography variant="body1" fontWeight="bold">Add Users</Typography>} sx={{ opacity: open ? 1 : 0 }} />
          </ListItemButton>
        </ListItem>
       </List>
    </Drawer>
  </Box>
);
}




// Sidebar.js
// import React from 'react';
// import './sidebar.css'

// function Sidebar({ isOpen, toggleSidebar, handleNavigation }) {
//   return (
//     <div className={`sidebar ${isOpen ? 'open' : ''}`}>
//       <button className="toggle-btn" onClick={toggleSidebar}>☰</button>
//       <ul>
//         <li><a href="#" onClick={() => handleNavigation('home')}>Home</a></li>
//         <li><a href="#" onClick={() => handleNavigation('home1')}>Home1</a></li>
//         {/* Add more sidebar links here */}
//       </ul>
//     </div>
//   );
// }

// export default Sidebar;
