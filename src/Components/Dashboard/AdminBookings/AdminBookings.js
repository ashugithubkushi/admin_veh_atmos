import React, { useEffect, useState } from "react";
import "./adminbookings.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";
import axios from "axios";
import { Box } from "@mui/material";

const AdminBookings = ({ setSlots }) => {
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [modal, setModal] = useState(false);
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState({
    selectedVehicle: "",
    selectedDate: null,
    fromTime: "",
    toTime: "",
    vehicleNumber: "",
    villaNumber: "",
    bookedBy: ""
  });

  //filter
  // const [startDate, setStartDate] = useState(null);
  // const [endDate, setEndDate] = useState(null);

  // const handleStartDateChange = date => {
  //     setStartDate(date);
  // };

  // const handleEndDateChange = date => {
  //     setEndDate(date);
  // };

  const handleSearch = () => {
      if (startDate && endDate) {
          const fromDateString = startDate.toISOString().split('T')[0];
          const toDateString = endDate.toISOString().split('T')[0];

          fetch(`/slots?fromDate=${fromDateString}&toDate=${toDateString}`)
              .then(response => response.json())
              .then(data => {
                  setSlots(data); // Assuming setSlots is a state updater function passed from parent component
              })
              .catch(error => console.error('Error fetching slots:', error));
      }
  };
  

  


  const [vehicleNames, setVehicleNames] = useState([]);
  const [vehicleNumbers, setVehicleNumbers] = useState([]);

  const [bookedByOptions, setBookedByOptions] = useState([]);
  const [vehiclesData, setVehiclesData] = useState([]);
  useEffect(() => {
    // Fetch data from the /vehicles endpoint
    axios.get("http://localhost:3000/vehicles")
      .then((res) => {
        const vehicles = res.data;
        const names = vehicles.map(vehicle => vehicle.vehicleName);
        const uniqueNames = [...new Set(names)]; // Remove duplicates
        const numbers = vehicles.map(vehicle => vehicle.vehicleNum);
        const uniqueNumbers = [...new Set(numbers)]; // Remove duplicates
        setVehicleNames(uniqueNames);
        setVehicleNumbers(uniqueNumbers);
        // Optionally, you can set a state variable to store all vehicle data
        setVehiclesData(vehicles);
      })
      .catch((error) => console.error("Error fetching vehicles:", error));
  }, []);



  //delete
  const [selectedRow, setSelectedRow] = useState(null);
  const [confirmDeleteModal, setConfirmDeleteModal] = useState(false);

  const toggleConfirmDeleteModal = () => setConfirmDeleteModal(!confirmDeleteModal);
  const handleDelete = (slot) => {
    setSelectedRow(slot);
    toggleConfirmDeleteModal();
  };



  const confirmDelete = () => {
    setData(data.filter(slot => slot !== selectedRow));
  
    toggleConfirmDeleteModal();
  
    axios.delete(`http://localhost:3000/deleteslots/${selectedRow._id}`)
      .then(res => {
        console.log("Slot deleted successfully:", res.data);
      })
      .catch(err => {
        console.error("Error deleting slot:", err);
      });
  };




  const toggleModal = () => setModal(!modal);

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:3000/getslots")
  //     .then((res) => setData(res.data.data))
  //     .catch((error) => console.error("Error fetching slots:", error));



  const [filter, setFilter] = useState(''); // vehicle filter
  const [filterBookedBy, setFilterBookedBy] = useState('');


  // vehicle filter 
  useEffect(() => {
    axios
      .get("http://localhost:3000/getslots")
      .then((res) => setData(res.data.data))
      .catch((error) => console.error("Error fetching slots:", error));
  }, []);

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  // bookedby useeffect

  


  //bookedby
  useEffect(() => {
    // Fetch usernames from the createusers collection
    axios
      .get("http://localhost:3000/createusers")
      .then((res) => {
        const users = res.data.map((user) => user.username);
        setBookedByOptions(users);
      })
      .catch((error) => console.error("Error fetching usernames:", error));
  }, []);





  const handleEdit = (slot) => {
    setSelectedSlot(slot);
    setFormData(slot); // Set form data with selected slot data, including fromTime and toTime
    toggleModal();
  };

  const handleFromTimeChange = (event) => {
    setFormData({ ...formData, fromTime: event.target.value });
  };
  
  const handleToTimeChange = (event) => {
    setFormData({ ...formData, toTime: event.target.value });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleDateChange = (date) => {
    setFormData({ ...formData, selectedDate: date });
  };

  // const handleSubmit = () => {
  //   console.log("Updated slot:", formData);
  //   const updatedData = data.map(slot => {
  //     if (slot === selectedSlot) {
  //       return formData;
  //     }
  //     return slot;
  //   });
  //   setData(updatedData); // Update the data state with the modified array
  //   toggleModal();
  // };

  const handleSubmit = () => {
    // Update the slot in the frontend state
    const updatedData = data.map(slot => {
      if (slot === selectedSlot) {
        return formData;
      }
      return slot;
    });
    setData(updatedData); // Update the data state with the modified array
    toggleModal();
  
    // Call handleUpdate to update the slot in the backend
    handleUpdate(selectedSlot._id, formData);
  };
  
  const handleUpdate = (slotId, updatedSlotData) => {
    axios.put(`http://localhost:3000/updateslots/${slotId}`, updatedSlotData)
      .then(res => {
        console.log("Slot updated successfully in backend:", res.data);
      })
      .catch(err => {
        console.error("Error updating slot in backend:", err);
      });
  };


  //
  const uniqueVehicleNames = [...new Set(data.map(slot => slot.selectedVehicle))];


  //date filter
  const [startDate, setStartDate] = useState(null);
const [endDate, setEndDate] = useState(null);

const handleStartDateChange = date => {
    setStartDate(date);
};

const handleEndDateChange = date => {
    setEndDate(date);
};

// const handleSearch = () => {
//     if (startDate && endDate) {
//         const fromDateString = startDate.toISOString().split('T')[0];
//         const toDateString = endDate.toISOString().split('T')[0];

//         fetch(`/slots?fromDate=${fromDateString}&toDate=${toDateString}`)
//             .then(response => response.json())
//             .then(data => {
//                 setSlots(data); // Assuming setSlots is a state updater function passed from parent component
//             })
//             .catch(error => console.error('Error fetching slots:', error));
//     }
// };



const filteredData = data.filter(slot => {
  // Filter by selected vehicle name
  if (filter !== '' && slot.selectedVehicle !== filter) {
      return false;
  }

  // Filter by selected date range
  if (startDate && endDate) {
      const slotDate = new Date(slot.selectedDate);
      return slotDate >= startDate && slotDate <= endDate;
  }

  return true; // No filters applied, show all rows
});
  
  
  
  return (
    <Box sx={{ width: '100%', p:2 , height: '100vh', mt:1, borderRadius:5}}>
<div className="table-container1">

<div className="table-container">
 

   <div className="d-flex float-end">
            <DatePicker
                selected={startDate}
                onChange={handleStartDateChange}
                selectsStart
                startDate={startDate}
                endDate={endDate}
                placeholderText="From Date"
            />
            <DatePicker
                selected={endDate}
                onChange={handleEndDateChange}
                selectsEnd
                startDate={startDate}
                endDate={endDate}
                minDate={startDate}
                placeholderText="To Date"
            />
            {/* <button className="btn btn-success" onClick={handleSearch}>Search</button> */}
        </div>



        <div className="slot m-1"><h5><b>Slot Details</b></h5></div>

        <table className="table-no-border">
        <thead>
          <tr>
            <th>Sl No</th>
            <th>Vehicle Name <br />
            <select value={filter} onChange={handleFilterChange} style={{ width: '120px' }}>
        <option value="">Show All</option>
        {uniqueVehicleNames.map((vehicleName, index) => (
          <option key={index} value={vehicleName}>{vehicleName}</option>
        ))}
      </select>
            </th>
            <th>Date </th>
            <th>Slot Time</th> 
            <th>Vehicle Number</th>
            <th>Villa Number</th>
            <th>Booked By <br />
            
            </th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((slot, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{slot.selectedVehicle}</td>
              <td>{slot.selectedDate}</td>
              <td>{slot.fromTime} - {slot.toTime}</td>
              <td>{slot.vehicleNumber}</td>
              <td>{slot.villaNumber}</td>
              <td>{slot.bookedBy}</td>
              <td>
                <select
                  value={slot.status}
                  // onChange={(e) => handleStatusChange(e, index)}
                >
                  <option value="pending">Pending</option>
                  <option value="confirmed">Confirmed</option>
                  <option value="cancelled">Cancelled</option>
                </select>
              </td>
              <td>
                <button className="btn btn-success m-2" onClick={() => handleEdit(slot)}>Edit</button>
                <button className="btn btn-danger" onClick={() => handleDelete(slot)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      </div>

      {/* delete */}
      <Modal isOpen={confirmDeleteModal} toggle={toggleConfirmDeleteModal} centered={true}>
        <ModalHeader toggle={toggleConfirmDeleteModal}>Confirm Delete</ModalHeader>
        <ModalBody>
          Are you sure you want to delete this slot?
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggleConfirmDeleteModal}>Cancel</Button>
          <Button color="danger" onClick={confirmDelete}>Delete</Button>
        </ModalFooter>
      </Modal>




      <Modal isOpen={modal} toggle={toggleModal} centered={true} style={{ marginTop: '60px' }}>
        <ModalHeader toggle={toggleModal}>Edit Slot</ModalHeader>
        <ModalBody>
        <ModalBody>
  {/* <form onSubmit={handleSubmit}> */}
  <form onSubmit={handleUpdate}>
    <div className="form-group">
      <label>Vehicle Name:</label>
      <select
        name="selectedVehicle"
        value={formData.selectedVehicle}
        onChange={handleInputChange}
      >
        <option value="">Select Vehicle</option>
        {vehicleNames.map((name, index) => (
          <option key={index} value={name}>
            {name}
          </option>
        ))}
      </select>
    </div>


{/* filter  */}
    {/* <div className="form-group">
      <label>Date:</label>
      <DatePicker
  selected={formData.selectedDate}
  onChange={(date) => handleDateChange(date)}
  dateFormat="yyyy-MM-dd"
/>
   
    <div>
            <DatePicker
                selected={startDate}
                onChange={handleStartDateChange}
                selectsStart
                startDate={startDate}
                endDate={endDate}
                placeholderText="From Date"
            />
            <DatePicker
                selected={endDate}
                onChange={handleEndDateChange}
                selectsEnd
                startDate={startDate}
                endDate={endDate}
                minDate={startDate}
                placeholderText="To Date"
            />
            <button onClick={handleSearch}>Search</button>
        </div>
        </div>   */}

    

    {/* <div className="form-group">
      <label>Vehicle Number:</label>
      <select
        name="vehicleNumber"
        value={formData.vehicleNumber}
        onChange={handleInputChange}
      >
        <option value="">Select Vehicle Number</option>
        {vehicleNumbers.map((number, index) => (
          <option key={index} value={number}>
            {number}
          </option>
        ))}
      </select>
    </div> */}
     <label>Vehicle Number:</label>
  <select
    name="vehicleNumber"
    value={formData.vehicleNumber}
    onChange={handleInputChange}
  >
    <option value="">Select Vehicle Number</option>
    {/* Filter vehicle numbers based on the selected vehicle */}
    {vehiclesData
      .filter((vehicle) => vehicle.vehicleName === formData.selectedVehicle)
      .map((vehicle) => (
        <option key={vehicle.vehicleNum} value={vehicle.vehicleNum}>
          {vehicle.vehicleNum}
        </option>
      ))}
  </select>
   


  
    <div className="form-group">
      <label>Villa Number:</label>
      <input
        type="text"
        name="villaNumber"
        value={formData.villaNumber}
        onChange={handleInputChange}
      />
    </div>
    {/* <div className="form-group">
      <label>Booked By:</label>
      <input
        type="text"
        name="bookedBy"
        value={formData.bookedBy}
        onChange={handleInputChange}
      />
    </div> */}
    <div className="form-group">
  <label>Booked By:</label>
  <select
    name="bookedBy"
    value={formData.bookedBy}
    onChange={handleInputChange}
  >
    <option value="">Select User</option>
    {bookedByOptions.map((user, index) => (
      <option key={index} value={user}>
        {user}
      </option>
    ))}
  </select>
</div>
  </form>
</ModalBody>

        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggleModal}>
            Cancel
          </Button>
          <Button color="primary" onClick={handleSubmit}>
            Save
          </Button>
        </ModalFooter>
      </Modal>
    </Box>
  );
};

export default AdminBookings;
