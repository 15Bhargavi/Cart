import React from 'react'
import Login from './component/Login';
//import Navbar from "./component/Navbar";
import Home from './component/Home';
 import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

import './App.css';
import Register from './component/Register';

function App() {

  return (
    <div>
      <Router>
        {/* <Navbar/> */}
        <Routes>
        <Route path='/' element={<Login />} />
           <Route path='/Login' element={<Login />} />
           <Route path='/Register' element={<Register />} />
           <Route path='/Home' element={<Home />} />
        </Routes>
      </Router>
 
    </div>
  )
}
export default App;



