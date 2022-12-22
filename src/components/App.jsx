import React from 'react';
import { Route, Routes } from 'react-router-dom';

import MainPage from './MainPage';
import Auth from './authReg/Auth';
import Reg from './authReg/Reg';
import NavBar from './NavBar';

export default function App({ user }) {
  return (
    <>
      <NavBar user={user} />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/signin" element={<Auth />} />
        <Route path="/signup" element={<Reg />} />
        <Route path="" />
        <Route path="" />
      </Routes>
    </>
  );
}
