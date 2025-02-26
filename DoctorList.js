/* src/components/DoctorList.js */
import React, { useEffect, useState } from 'react';
import { fetchDoctors } from '../api';

const DoctorList = ({ onSelect }) => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    fetchDoctors().then(setDoctors);
  }, []);

  return (
    <div>
      <h2>Select a Doctor</h2>
      <ul>
        {doctors.map((doctor) => (
          <li key={doctor._id} onClick={() => onSelect(doctor)}>
            {doctor.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DoctorList;