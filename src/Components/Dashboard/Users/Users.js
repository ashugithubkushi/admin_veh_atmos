import React, { useEffect, useState } from 'react';
import './users.css'
import axios from 'axios';
  import { useNavigate, useParams } from 'react-router-dom';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Tooltip} from 'reactstrap';
import { Box } from '@mui/material';

const Users = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [designation, setDesignation] = useState('');
  const [contact, setContact] = useState('');
  const [errors, setErrors] = useState({});
  const [user, setUser] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editUserId, setEditUserId] = useState(null);

  const {id} = useParams()


  // create
    const validateForm = () => {
      let isValid = true;
      const newErrors = {};

      if (!username.trim()) {
        newErrors.username = 'Username is required';
        isValid = false;
      }

      if (!email.trim()) {
        newErrors.email = 'Email is required';
        isValid = false;
      }

      if (!password.trim()) {
        newErrors.password = 'Password is required';
        isValid = false;
      }

      if (!designation.trim()) {
        newErrors.designation = 'designation is required';
        isValid = false;
      }

      if (!contact.trim()) {
        newErrors.contact = 'contact is required';
        isValid = false;
      }

      setErrors(newErrors);
      return isValid;
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      if (validateForm()) {
        axios.post("http://localhost:3000/createCreateuser", { username, email, password, designation, contact })
          .then(result => {
            console.log(result);
            setUser([...user, { username, email, password, designation, contact }]);
            toggleModal();
          })
          .catch(err => console.log(err));
      }
    };
    

    const handleInputChange = (e) => {
      const { name, value } = e.target;
      if (name === 'username') {
        setErrors({ ...errors, username: '' });
        setUsername(value);
      } else if (name === 'email') {
        setErrors({ ...errors, email: '' });
        setEmail(value);
      } else if (name === 'password') {
        setErrors({ ...errors, password: '' });
        setPassword(value);
      }else if (name === 'designation') {
        setErrors({ ...errors, designation: '' });
        setDesignation(value);
      }else if (name === 'contact') {
        setErrors({ ...errors, contact: '' });
        setContact(value);
      }
    };


    const resetForm = () => {
      setUsername('');
      setEmail('');
      setPassword('');
      setDesignation('');
      setContact('');
      setErrors({});
    };


    const toggleModal = () => {
      if (!showModal) {
        setUsername('');
        setEmail('');
        setPassword('');
        setDesignation('');
        setContact('');
        setErrors({});
      }
      setShowModal(!showModal);
    };

    const toggleEditModal = (userData) => {
      if (!showEditModal) {
        setUsername(userData.username);
        setEmail(userData.email);
        setPassword(userData.password);
        setDesignation(userData.designation);
        setContact(userData.contact);
      }
      setShowEditModal(!showEditModal);
      setEditUserId(userData._id);
    };
    


  useEffect(() => {
    axios.get("http://localhost:3000/createusers")
      .then(response => {
        setUser(response.data); 
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
      });
  }, []);

  


const handleUpdate = (e) => {
  e.preventDefault();
  if (validateForm()) {
    axios.put(`http://localhost:3000/updateCreateuser/${editUserId}`, { username, email, password, designation, contact })
      .then(result => {
        console.log(result);
       
        const updatedIndex = user.findIndex(u => u._id === editUserId);
        const updatedUser = { ...user[updatedIndex], username, email, password, designation, contact };
        const updatedUsers = [...user.slice(0, updatedIndex), updatedUser, ...user.slice(updatedIndex + 1)];
        setUser(updatedUsers);
        toggleEditModal();
      })
      .catch(err => console.log(err));
  }
};


const deleteUser = (userId) => {
  axios.delete(`http://localhost:3000/deleteCreateuser/${userId}`)
    .then(result => {
      console.log(result.data); // Log successful response
      // Handle success as needed
    })
    .catch(err => {
      console.error('Delete user error:', err); // Log error for debugging
      // Handle error and provide user feedback
    });
};


  return (
    <div className="">

<Modal isOpen={showModal} toggle={toggleModal} centered={true}>
        <ModalBody>
          <form onSubmit={handleSubmit}>
          <Button className="float-end" color="secondary" onClick={toggleModal}>x</Button>
            <h2 className='align-items-center justify-content-center mb-4'>Create User data</h2>
            <div className='input'>

            <div className="mb-2">
  <input
    type="text"
    id="username"
    name="username"
    placeholder="User Name"
    className="form-control"
    value={username}
    onChange={handleInputChange}
    invalid={!!errors.username} />
  <Tooltip placement="bottom-end" isOpen={!!errors.username} target="username">
    {errors.username}
  </Tooltip>
</div>

            <div className="mb-2">
              {/* <label htmlFor="email">User Email</label> */}
              <input
                type="text"
                id="email"
                name="email"
                placeholder="Email"
                className="form-control"
                value={email}
                onChange={handleInputChange}
              />
               <Tooltip placement="bottom-end" isOpen={!!errors.email} target="email">
    {errors.email}
  </Tooltip>
            </div>
            <div className="mb-2">
              {/* <label htmlFor="password">Password</label> */}
              <input
                type="text"
                id="password"
                name="password"
                placeholder="Password"
                className="form-control"
                value={password}
                onChange={handleInputChange}
              />
              <Tooltip placement="bottom-end" isOpen={!!errors.password} target="password">
    {errors.password}
  </Tooltip>
  </div>
            <div className="mb-2">
              {/* <label htmlFor="designation">designation</label> */}
              <input
                type="text"
                id="designation"
                name="designation"
                placeholder="designation"
                className="form-control"
                value={designation}
                onChange={handleInputChange}
              />
              <Tooltip placement="bottom-end" isOpen={!!errors.designation} target="designation">
    {errors.designation}
  </Tooltip>
   </div>
            <div className="mb-2">
              {/* <label htmlFor="contact">contact</label> */}
              <input
                type="text"
                id="contact"
                name="contact"
                placeholder="contact"
                className="form-control"
                value={contact}
                onChange={handleInputChange}
              />
              <Tooltip placement="bottom-end" isOpen={!!errors.contact} target="contact">
    {errors.contact}
  </Tooltip>
              </div>



  <div className="mt-3 float-end">
          <Button color="secondary" className='m-2' onClick={resetForm}>Reset</Button>
              <Button color="primary" type='submit'>Create</Button>{' '}
          </div>
            </div>
          </form>
        </ModalBody>
        {/* <ModalFooter> */}
         
          {/* <button className="btn btn-primary">Create</button> */}
          
        {/* </ModalFooter> */}
      </Modal>

      <Box sx={{ width: '100%', p:2 , height: '100vh', mt:1, borderRadius:5}}>
<div className="table-container1">

<div className="table-container">

    <div className="name-with-button-container">
    <button className="btn btn-success float-end" onClick={toggleModal}>
          Add +
        </button>
 <span className="name"><h5><b>User Data</b></h5></span>
        </div>

      <table className="table-no-border ">
            <thead>
              <tr>
                <th>User Name</th>
                <th>Email Id</th>
                <th>Password</th>
                <th>Designation</th>
                <th>Contact</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {user.map((userData, index) => {
                return (
                  <tr key={index}>
                    <td>{userData.username}</td>
                    <td>{userData.email}</td>
                    <td>{userData.password}</td>
                    <td>{userData.designation}</td>
                    <td>{userData.contact}</td>
                    <td>
                      {/* <button to={`/update/${userData._id}`} className='btn btn-success m-1' onClick={toggleEditModal}>Edit</button> */}
                      <button className='btn btn-success m-1' onClick={() => toggleEditModal(userData)}>Edit</button>
                      {/* <button className="btn btn-danger delete-button">Delete</button> */}
                      <button className="btn btn-danger delete-button" onClick={() => deleteUser(userData._id)}>Delete</button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>



           {/* edit */}
           <Modal isOpen={showEditModal} toggle={() => setShowEditModal(!showEditModal)} centered={true}>
        <ModalBody>
        <form onSubmit={handleUpdate}>
        <h2>Update User</h2>

        <div className="mb-2">
          <label htmlFor="">Username Name</label> 
          <input type="text" placeholder='User Name' className='form-control'
          value={username}
          onChange={(e) => setUsername(e.target.value)}/>
        </div>
      
        <div className="mb-2">
          <label htmlFor="">Email</label>
          <input type="text" placeholder='Email' className='form-control'
          value={email}
          onChange={(e) => setEmail(e.target.value)}/>
        </div>
      
        <div className="mb-2">
          <label htmlFor="">Password</label>
          <input type="Password" placeholder='Password' className='form-control'
          value={password}
          onChange={(e) => setPassword(e.target.value)}/>
        </div>
      
        <div className="mb-2">
          <label htmlFor="">Designation</label>
          <input type="text" placeholder='Designation' className='form-control'
          value={designation}
          onChange={(e) => setDesignation(e.target.value)}/>
        </div>
      
        <div className="mb-2">
          <label htmlFor="">Contact Num</label>
          <input type="number" placeholder='Conatct Num' className='form-control'
          value={contact}
          onChange={(e) => setContact(e.target.value)}/>
        </div>
        <Button color="secondary" className='m-2' onClick={resetForm}>Reset</Button>
              <Button color="primary" type='submit'>Update</Button>{' '}
        {/* <button className='btn btn-primary'>Update</button> */}
      </form>
        </ModalBody>
      </Modal>
    </div>
  </div>
  </Box>
</div>
  );
}

export default Users;
