import './App.css';
import { BrowserRouter, Route, Routes } from'react-router-dom';
import Dashboard from './Components/Dashboard/Dashboard';
import AdminLogin from './Components/AdminLogin/AdminLogin';
import Create from './Components/Dashboard/Addvehicles/Create';
import Update from './Components/Dashboard/Addvehicles/Update';
import Createuser from './Components/Dashboard/Users/Createuser';
import Updateuser from './Components/Dashboard/Users/Updateuser';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element= {< AdminLogin />} />
    <Route path='/create' element= {< Create />} />
    <Route path='/update/:id' element= {< Update />} />
    <Route path='/createuser' element= {< Createuser />} />
    <Route path='/updateuser/:id' element= {< Updateuser />} />
    <Route path='/dashboard' element= {< Dashboard />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
