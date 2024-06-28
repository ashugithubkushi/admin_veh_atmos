// import React, { useState } from 'react';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';

// const Time = () => {
//   const [fromTime, setFromTime] = useState(null);
//   const [toTime, setToTime] = useState(null);
//   const [error, setError] = useState('');

//   const handleFromTimeChange = (time) => {
//     setFromTime(time);
//     // Clear error message when changing From Time
//     setError('');
//     // Clear toTime if it's less than fromTime
//     if (toTime && time >= toTime) {
//       setToTime(null);
//     }
//   };

//   const handleToTimeChange = (time) => {
//     // Check if selected time is before or equal to fromTime
//     if (fromTime && time <= fromTime) {
//       setError('You cannot select a time less than or equal to From Time');
//       setToTime(null); // Clear toTime state
//     } else if (fromTime && time < new Date(fromTime.getTime() + 2 * 60 * 60 * 1000)) {
//       setError('Slot should not be less than two hours');
//       setToTime(null); // Clear toTime state
//     } else {
//       setToTime(time);
//       setError('');
//     }
//   };

//   return (
//     <div>
//       <div>
//         <label>From Time:</label>{' '}
//         <DatePicker
//           selected={fromTime}
//           onChange={handleFromTimeChange}
//           showTimeSelect
//           showTimeSelectOnly
//           timeIntervals={1}
//           timeFormat="h:mm aa"
//           dateFormat="h:mm aa"
//           placeholderText="Select from time"
//         />
//       </div>
//       <div>
//         <label>To Time:</label>{' '}
//         <DatePicker
//           selected={toTime}
//           onChange={handleToTimeChange}
//           showTimeSelect
//           showTimeSelectOnly
//           timeIntervals={1}
//           timeFormat="h:mm aa"
//           dateFormat="h:mm aa"
//           placeholderText="Select to time"
//         />
//       </div>
//       {error && <p style={{ color: 'red' }}>{error}</p>}
//       {fromTime && toTime && (
//         <p>
//           Selected time range: {fromTime.toLocaleTimeString()} to{' '}
//           {toTime.toLocaleTimeString()}
//         </p>
//       )}
//     </div>
//   );
// };

// export default Time;



// import React, { useState } from 'react';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';

// const Time = () => {
//   const [fromDateTime, setFromDateTime] = useState(null);
//   const [toDateTime, setToDateTime] = useState(null);
//   const [error, setError] = useState('');

//   const handleFromDateTimeChange = (dateTime) => {
//     setFromDateTime(dateTime);
//     // Clear error message when changing From DateTime
//     setError('');
//     // Clear toDateTime if it's before or equal to fromDateTime (including date comparison)
//     if (toDateTime && dateTime >= toDateTime) {
//       setToDateTime(null);
//     }
//   };
  
//   const handleToDateTimeChange = (dateTime) => {
//     // Check if fromDateTime is set and selected dateTime is before or equal to fromDateTime (including date comparison)
//     if (fromDateTime && dateTime <= fromDateTime) {
//       setError('To DateTime must be after From DateTime');
//       setToDateTime(null); // Clear toDateTime state
//     } else if (fromDateTime && (dateTime.getTime() - fromDateTime.getTime()) < 2 * 60 * 60 * 1000) {
//       setError('Slot should not be less than two hours');
//       setToDateTime(null); // Clear toDateTime state
//     } else {
//       setToDateTime(dateTime);
//       setError('');
//     }
//   };
  

//   return (
//     <div>
//       <div>
//         <label>From Date and Time:</label>{' '}
//         <DatePicker
//           selected={fromDateTime}
//           onChange={handleFromDateTimeChange}
//           showTimeSelect
//           timeIntervals={1}
//           timeFormat="h:mm aa"
//           dateFormat="MMMM d, yyyy h:mm aa"
//           placeholderText="Select from date and time"
//         />
//       </div>
//       <div>
//         <label>To Date and Time:</label>{' '}
//         <DatePicker
//           selected={toDateTime}
//           onChange={handleToDateTimeChange}
//           showTimeSelect
//           timeIntervals={1}
//           timeFormat="h:mm aa"
//           dateFormat="MMMM d, yyyy h:mm aa"
//           placeholderText="Select to date and time"
//           minDate={fromDateTime ? new Date(fromDateTime.setHours(0, 0, 0, 0)) : null} // Set minDate based on fromDateTime's date
//         />
//       </div>
//       {error && <p style={{ color: 'red' }}>{error}</p>}
//       {fromDateTime && toDateTime && (
//         <p>
//           Selected date range: {fromDateTime.toLocaleString()} to {toDateTime.toLocaleString()}
//         </p>
//       )}
//     </div>
//   );
// };

// export default Time;





import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Time = () => {
  const [fromDateTime, setFromDateTime] = useState(new Date()); 
  const [toDateTime, setToDateTime] = useState(null);
  const [error, setError] = useState('');

  const handleFromDateTimeChange = (dateTime) => {
    setFromDateTime(dateTime);
   
    setError('');

    if (toDateTime && dateTime >= toDateTime) {
      setToDateTime(null);
    }
  };

  const handleToDateTimeChange = (dateTime) => {
    if (fromDateTime && dateTime < fromDateTime) {
      setError('To DateTime must be after From DateTime');
      setToDateTime(null); 
    } else {
    
      const timeDiffMs = dateTime.getTime() - fromDateTime.getTime();
      const timeDiffHours = timeDiffMs / (1000 * 60 * 60);
      if (timeDiffHours < 2) {
        setError('Slot should not be less than two hours');
        setToDateTime(null);
      } else if (timeDiffHours > 4) {
        setError('Slot should not be more than four hours');
        setToDateTime(null); 
      } else {
        setToDateTime(dateTime);
        setError('');
      }
    }
  };


  const getCurrentTime = () => {
    const now = new Date();
    now.setSeconds(0, 0); 
    return now;
  };

  // Function to get max time for selection (in this case, 23:59)
  const getMaxTime = () => {
    const maxTime = new Date();
    maxTime.setHours(23, 59, 0, 0); // Set hours and minutes to maximum time of the day
    return maxTime;
  };

  return (
    <div>
      <div>
        <label>From Date and Time:</label>{' '}
        <DatePicker
          selected={fromDateTime}
          onChange={handleFromDateTimeChange}
          showTimeSelect
          timeIntervals={1}
          timeFormat="h:mm aa"
          dateFormat="MMMM d, yyyy h:mm aa"
          placeholderText="Select from date and time"
          minDate={new Date()} // Allow selection from today onwards
          minTime={getCurrentTime()} // Set minimum time to current time
          maxTime={getMaxTime()} // Set maximum time to end of the day
        />
      </div>
      <div>
        <label>To Date and Time:</label>{' '}
        <DatePicker
          selected={toDateTime}
          onChange={handleToDateTimeChange}
          showTimeSelect
          timeIntervals={1}
          timeFormat="h:mm aa"
          dateFormat="MMMM d, yyyy h:mm aa"
          placeholderText="Select to date and time"
          minDate={fromDateTime} // Set minDate based on fromDateTime
          minTime={getCurrentTime()} // Set minimum time to current time
          maxTime={getMaxTime()} // Set maximum time to end of the day
        />
      </div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {(fromDateTime && toDateTime) && (
        <p>
          Selected date and time range: {fromDateTime.toLocaleString()} to {toDateTime.toLocaleString()}
        </p>
      )}
    </div>
  );
};

export default Time;














// import React, { useState } from 'react';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';

    
// const Time = () => {
//     const [startDate, setStartDate] = useState(new Date());
//     const [endDate, setEndDate] = useState(null);  
//     return (
//       <div className="time-picker-container">
//         <div className="date-picker">
//           <label>From Date and Time:</label>
//           <DatePicker
//             selected={startDate}
//             onChange={date => setStartDate(date)}
//             showTimeSelect
//             timeFormat="HH:mm"
//             timeIntervals={15}
//             dateFormat="MMMM d, yyyy h:mm aa"
//             timeCaption="time"
//           />
//         </div>
//         <div className="date-picker">
//           <label>To Date and Time:</label>
//           <DatePicker
//             selected={endDate}
//             onChange={date => setEndDate(date)}
//             showTimeSelect
//             timeFormat="HH:mm"
//             timeIntervals={15}
//             dateFormat="MMMM d, yyyy h:mm aa"
//             timeCaption="time"
//           />
//         </div>


//         <div className="selected-dates">
//         {startDate && endDate && (
//           <p>
//             Selected From: {startDate.toLocaleString()} <br />
//             Selected To: {endDate.toLocaleString()}
//           </p>
//         )}
//       </div>
//       </div>
//     );
//   };
  
//   export default Time;
  