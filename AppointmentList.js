import React, { useEffect, useState } from 'react';
import { fetchAppointments } from '../api';

const AppointmentList = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    fetchAppointments().then(setAppointments);
  }, []);

  return (
    <div>
      <h2>Upcoming Appointments</h2>
      <ul>
        {appointments.map((appt) => (
          <li key={appt._id}>{appt.patientName} - {appt.date}</li>
        ))}
      </ul>
    </div>
  );
};

export default AppointmentList;