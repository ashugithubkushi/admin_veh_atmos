import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { Button, Modal, ModalBody, Tooltip } from 'reactstrap';

const Addvehicles = () => {
  const [vehicleName, setVehicleName] = useState('');
  const [vehicleNum, setVehicleNum] = useState('');
  const [contactNum, setContactNum] = useState('');
  const [errors, setErrors] = useState({});
  const [vehicles, setVehicles] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editVehicleId, setEditVehicleId] = useState(null);

  const {id} = useParams()

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};
    
    if (!vehicleName.trim()) {
      newErrors.vehicleName = 'vehicleName is required';
      isValid = false;
    }

    if (!vehicleNum.trim()) {
      newErrors.vehicleNum = 'vehicleNum is required';
      isValid = false;
    }

    if (!contactNum.trim()) {
      newErrors.contactNum = 'contactNum is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      axios.post("http://localhost:3000/createVehicle", { vehicleName, vehicleNum, contactNum })
        .then(result => {
          console.log(result);
          setVehicles([...vehicles, { vehicleName, vehicleNum, contactNum }]);
          toggleModal();
        })
        .catch(err => console.log(err));
    }
  };


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'vehicleName') {
      setVehicleName(value);
    } else if (name === 'vehicleNum') {
      setVehicleNum(value);
    } else if (name === 'contactNum') {
      setContactNum(value);
    }
  };

  const resetForm = () => {
    setVehicleName('');
    setVehicleNum('');
    setContactNum('');
  };


  
  const toggleModal = () => {
    if(!showModal){
      setVehicleName('');
      setVehicleNum('');
      setContactNum('');
    }
    setShowModal(!showModal);
  };

  const toggleEditModal = (vehicleData) => {
    if(!showEditModal) {
    setVehicleName(vehicleData.vehicleName);
    setVehicleNum(vehicleData.vehicleNum);
    setContactNum(vehicleData.contactNum);
    }
    setShowEditModal(!showEditModal);
    setEditVehicleId(vehicleData._id);
    // setShowModal(!showModal);
  };
  
  useEffect(() => {
    axios.get("http://localhost:3000/vehicles")
      .then(response => {
        setVehicles(response.data); 
      })
      .catch(error => {
        console.error('Error fetching vehicle data:', error);
      });
  }, []);

 


  const handleUpdate = (e) => {
    e.preventDefault();
    if (validateForm()) {
      axios.put(`http://localhost:3000/updateVehicles/${editVehicleId}`, { vehicleName, vehicleNum, contactNum })
        .then(result => {
          console.log(result);
          const updatedIndex = vehicles.findIndex(v => v._id === editVehicleId);
          const updatedVehicle = { ...vehicles[updatedIndex], vehicleName, vehicleNum, contactNum };
          const updatedVehicles = [...vehicles.slice(0, updatedIndex), updatedVehicle, ...vehicles.slice(updatedIndex + 1)];
          setVehicles(updatedVehicles);
          toggleEditModal();
        })
        .catch(err => console.log(err));
    }
  };

  // const handleDelete = (id) => {
  //   axios.delete(`http://localhost:3000/deleteVehicle/${id}`)
  //     .then(result => {
  //       console.log(result);
  //       const updatedVehicles = vehicles.filter(vehicle => vehicle._id !== id);
  //       setVehicles(updatedVehicles);
  //     })
  //     .catch(err => console.log(err));
  // };
  const handleDelete = (id) => {
    // Use window.confirm to display a confirmation dialog
    const isConfirmed = window.confirm('Are you sure you want to delete?');
    if (isConfirmed) {
      axios.delete(`http://localhost:3000/deleteVehicle/${id}`)
        .then(result => {
          console.log(result);
          // Update the state to remove the deleted vehicle
          setVehicles(prevVehicles => prevVehicles.filter(vehicle => vehicle._id !== id));
        })
        .catch(err => console.log(err));
    }
  };

  return (
    <div className="position-relative vh-100">
      <Modal isOpen={showModal} toggle={toggleModal} centered={true}>
        <ModalBody>
          <form onSubmit={handleSubmit}>
            <Button className="float-end" color="secondary" onClick={toggleModal}>x</Button>
            <h2 className='align-items-center justify-content-center mb-4'>Add Vehicle</h2>
            <div className='input'>
              <div className="mb-2">
                <input
                  type="text"
                  id="vehicleName"
                  name="vehicleName"
                  placeholder="Vehicle Name"
                  className="form-control"
                  value={vehicleName}
                  onChange={handleInputChange}
                  invalid={!!errors.vehicleName}
                />
                <Tooltip placement="bottom-end" isOpen={!!errors.vehicleName} target="vehicleName">
    {errors.vehicleName}
  </Tooltip>
              </div>
              <div className="mb-2">
                <input
                  type="text"
                  id="vehicleNum"
                  name="vehicleNum"
                  placeholder="Vehicle Number"
                  className="form-control"
                  value={vehicleNum}
                  onChange={handleInputChange}
                  invalid={!!errors.vehicleNum}
                  />
                  <Tooltip placement="bottom-end" isOpen={!!errors.vehicleNum} target="vehicleNum">
      {errors.vehicleNum}
    </Tooltip>
              </div>
              <div className="mb-2">
                <input
                  type="text"
                  id="contactNum"
                  name="contactNum"
                  placeholder="Contact Number"
                  className="form-control"
                  value={contactNum}
                  onChange={handleInputChange}
                  invalid={!!errors.contactNum}
                  />
                  <Tooltip placement="bottom-end" isOpen={!!errors.contactNum} target="contactNum">
      {errors.contactNum}
    </Tooltip>
              </div>
              <div className="mt-3 float-end">
                <Button color="secondary" className='m-2' onClick={resetForm}>Reset</Button>
                <Button color="primary" type='submit'>Add</Button>{' '}
              </div>
            </div>
          </form>
        </ModalBody>
      </Modal>

      <div className="position-absolute top-0 end-0 p-3">
        <button className="btn btn-success float-end" onClick={toggleModal}>Add +</button>
      </div>
      <br /> <br /> <br />
      <div className="d-flex h-100">
        <div className="w-100 bg-white">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Vehicle Name</th>
                <th>Vehicle Number</th>
                <th>Contact Number</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {vehicles.map((vehicle, index) => (
                <tr key={index}>
                  <td>{vehicle.vehicleName}</td>
                  <td>{vehicle.vehicleNum}</td>
                  <td>{vehicle.contactNum}</td>
                  <td>
                    <button className='btn btn-success m-1' onClick={() => toggleEditModal(vehicle)}>Edit</button>
                    <button className="btn btn-danger delete-button" onClick={() => handleDelete(vehicle._id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <Modal isOpen={showEditModal} toggle={toggleEditModal} centered={true}>
        <ModalBody>
          <form onSubmit={handleUpdate}>
            <Button className="float-end" color="secondary" onClick={toggleEditModal}>x</Button>
            <h2 className='align-items-center justify-content-center mb-4'>Update Vehicle</h2>
            <div className='input'>
              <div className="mb-2">
                <input
                  type="text"
                  id="vehicleName"
                  name="vehicleName"
                  placeholder="Vehicle Name"
                  className="form-control"
                  value={vehicleName}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-2">
                <input
                  type="text"
                  id="vehicleNum"
                  name="vehicleNum"
                  placeholder="Vehicle Number"
                  className="form-control"
                  value={vehicleNum}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-2">
                <input
                  type="text"
                  id="contactNum"
                  name="contactNum"
                  placeholder="Contact Number"
                  className="form-control"
                  value={contactNum}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mt-3 float-end">
                <Button color="secondary" className='m-2' onClick={toggleEditModal}>Cancel</Button>
                <Button color="primary" type='submit'>Update</Button>{' '}
              </div>
            </div>
          </form>
        </ModalBody>
      </Modal>
    </div>
  );
}

export default Addvehicles;
