import React, { useState } from 'react';
import DoctorList from '../components/DoctorList';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  return (
    <div>
      <h1>Welcome to BabySteps</h1>
      <DoctorList onSelect={(doctor) => {
        setSelectedDoctor(doctor);
        navigate(`/book/${doctor._id}`);
      }} />
    </div>
  );
};

export default Home;
