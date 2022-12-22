import React from 'react';
import { Route, Routes } from 'react-router-dom';

import MainPage from './MainPage';
import Auth from './authReg/Auth';
import Reg from './authReg/Reg';
import NavBar from './NavBar';
import SampleForm from './SampleForm';
import CreateList from './CreateList';

export default function App({ user }) {
  return (
    <>
      <NavBar user={user} />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/signin" element={<Auth />} />
        <Route path="/signup" element={<Reg />} />
        <Route path="/list" element={<CreateList />} />
        <Route path="/sample" element={<SampleForm />} />
        <Route path="" />
      </Routes>
    </>
  );
}
