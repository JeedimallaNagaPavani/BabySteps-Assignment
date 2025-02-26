import React, { useState } from 'react';
import SlotSelector from '../components/SlotSelector';
import AppointmentForm from '../components/AppointmentForm';
import { useParams } from 'react-router-dom';

const BookAppointment = () => {
  const { doctorId } = useParams();
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedSlot, setSelectedSlot] = useState('');

  return (
    <div>
      <h1>Book Appointment</h1>
      <input type="date" onChange={(e) => setSelectedDate(e.target.value)} />
      <SlotSelector doctor={{ _id: doctorId }} date={selectedDate} onSelect={setSelectedSlot} />
      {selectedSlot && <AppointmentForm doctor={{ _id: doctorId }} date={selectedDate} slot={selectedSlot} onBooked={() => alert('Appointment booked!')} />}
    </div>
  );
};

export default BookAppointment;