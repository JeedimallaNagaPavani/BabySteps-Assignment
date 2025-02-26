import React, { useEffect, useState } from 'react';
import { fetchAvailableSlots } from '../api';

const SlotSelector = ({ doctor, date, onSelect }) => {
  const [slots, setSlots] = useState([]);

  useEffect(() => {
    if (doctor && date) {
      fetchAvailableSlots(doctor._id, date).then(setSlots);
    }
  }, [doctor, date]);

  return (
    <div>
      <h2>Available Slots</h2>
      <ul>
        {slots.map((slot, index) => (
          <li key={index} onClick={() => onSelect(slot)}>
            {slot}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SlotSelector;
