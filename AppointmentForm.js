import React, { useState } from 'react';
import { bookAppointment } from '../api';

const AppointmentForm = ({ doctor, date, slot, onBooked }) => {
  const [patientName, setPatientName] = useState('');
  const [appointmentType, setAppointmentType] = useState('Routine Check-Up');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    bookAppointment({ doctorId: doctor._id, date, time: slot, patientName, appointmentType }).then(onBooked);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Book Appointment</h2>
      <input type="text" placeholder="Patient Name" value={patientName} onChange={(e) => setPatientName(e.target.value)} required />
      <select value={appointmentType} onChange={(e) => setAppointmentType(e.target.value)}>
        <option>Routine Check-Up</option>
        <option>Ultrasound</option>
      </select>
      <button type="submit">Book</button>
    </form>
  );
};

export default AppointmentForm;