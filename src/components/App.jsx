import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import MainPage from './MainPage';
import Auth from './authReg/Auth';
import Reg from './authReg/Reg';
import NavBar from './NavBar';
import AllLists from './AllLists';
import MyLists from './MyLists';
import SampleForm from './SampleForm';
import CreateList from './CreateList';

export default function App({ user, list, path }) {
  const [oneList, setOneList] = useState(list);
  return (
    <>
      <NavBar user={user} />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/signin" element={<Auth />} />
        <Route path="/signup" element={<Reg />} />
        <Route path="/list" element={<CreateList />} />
        <Route
          path="/sample"
          element={<SampleForm list={oneList} path={path} />}
        />
        <Route path="/allLists" element={<AllLists />} />
        <Route path="/myLists" element={<MyLists />} />
        {/* <Route path="/sample" element={<SampleForm />} /> */}
        <Route path="" />
      </Routes>
    </>
  );
}
