import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route
  } from "react-router-dom";
import Dashboard from '../../Pages/Dashboard';
import Login from '../../Pages/Login';
import Signup from '../../Pages/Signup';

const Routing = () => {
  return (
    <>
    <Router>
        <Routes>
            <Route path='/' element={<Login/>}></Route>
            <Route path='SignUp' element={<Signup/>}></Route>
            <Route path='Dashboard/*' element={<Dashboard/>}></Route>
        </Routes>
    </Router>
    </>
  )
}

export default Routing