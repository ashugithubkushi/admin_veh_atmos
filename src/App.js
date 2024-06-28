import './App.css';
import { BrowserRouter, Route, Routes } from'react-router-dom';
import AdminLogin from './Components/AdminLogin/AdminLogin';
import Dashboard from './Components/Dashboard/Dashboard';
import Users from './Components/Dashboard/Users/Users';
import Sidebar from './Components/Dashboard/Sidebar';
import AdminBookings from './Components/Dashboard/AdminBookings/AdminBookings';
import Addvehicles from './Components/Dashboard/Addvehicles/Addvehicles';
import Navbar from './Components/Dashboard/Navbar';
function App() {
  
  
  return (
    
<BrowserRouter>
<div className="d-flex app">
 {/* <div className="w-auto"> */}
   <Sidebar/>
{/* <Sidenav/> */}
 {/* </div> */}
 <div className='col'
 
 >
  <div className='app'>
<Navbar/>

   <Routes>
     <Route path="/" element={<AdminLogin />} />
     <Route path="/dashboard" element={<Dashboard />} />
     <Route path="/adminbookings" element={<AdminBookings />} />
     <Route path="/addvehicles" element={<Addvehicles />} />
     <Route path="/users" element={<Users />} />

   </Routes>
   </div>
   </div>
   </div>
 </BrowserRouter>
  );
}

export default App;
