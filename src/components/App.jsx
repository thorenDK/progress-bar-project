import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Auth from './authReg/Auth';
import Reg from './authReg/Reg';
import NavBar from './NavBar';
import AllLists from './AllLists';
import MyLists from './MyLists';

export default function App({ user }) {
  console.log(user);
  return (
    <>
      <NavBar user={user} />
      <Routes>
        <Route path="/signin" element={<Auth />} />
        <Route path="/signup" element={<Reg />} />
        <Route path="/allLists" element={<AllLists />} />
        <Route path="/myLists" element={<MyLists />} />
      </Routes>
    </>
  );
}
