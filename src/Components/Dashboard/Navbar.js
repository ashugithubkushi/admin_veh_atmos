// import React, { useState } from 'react';
// import './navbar.css'; // Import your CSS file for styling

// const Navbar = ({ toggleSidebar }) => {
//   return (
//     <nav className="navbar">
//         <div className="navbar-left">
//         <button className="toggle-menu" onClick={toggleSidebar}><i className="fa fa-bars"></i></button>
//         <img src="logo.png" alt="Logo" className="logo" />
//       </div>
//       <div className="navbar-right">
//         <input type="text" placeholder="Search" className="search-input" />
//         <button className="search-button"><i className="fa fa-search"></i></button>
//         <button className="settings-button"><i className="fa fa-cog"></i></button>
//         <div className="profile-icon">User Profile</div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;
    

// Navbar.js
// Navbar.js
import React from 'react';
import './navbar.css'; 
import { useLocation } from 'react-router-dom';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';

function Navbar({ toggleSidebar }) {

  const location = useLocation();
  const { username, password } = location.state || {};

  

  return (
    <div className="navbar">
      <div className="">
      <b><h2 className='text1'>ATMOS</h2></b>
        {/* <button className="toggle-menu" onClick={toggleSidebar}><i className="fa fa-bars"></i></button>
        <img src="logo.png" alt="Logo" className="logo" /> */}
      </div>
      <div className="navbar-right">
        {/* <input type="text" placeholder="Search" className="search-input" /> */}
        {/* <button className="search-button"><i className="fa fa-search"></i></button> */}
        {/* <button className="settings-button"><i className="fa fa-cog"></i></button> */}
        {/* <div className="profile-icon">User Profile</div> */}
        
      </div>

      <div className="user" style={{ marginLeft: 'auto', marginRight: '10px' }}>
      <NotificationsActiveIcon style={{ marginRight: '10px' }} />
    User {username}
         </div>

    </div>
  );
}

export default Navbar;
