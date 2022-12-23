import React from 'react';
import { Route, Routes } from 'react-router-dom';

import MainPage from './MainPage';
import Auth from './authReg/Auth';
import Reg from './authReg/Reg';
import NavBar from './NavBar';
import Users from './Users';
import User from './User';
// import AddCard from './AddCard';

export default function App({ user, allUsers }) {
  return (
    <>
      <NavBar user={user} />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/signin" element={<Auth />} />
        <Route path="/signup" element={<Reg />} />
        <Route path="/users" element={<Users allUsers={allUsers} />} />
        {/* <Route path="/addcard" element={<AddCard />} /> */}

      </Routes>
    </>
  );
}
