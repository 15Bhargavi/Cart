import React, { useState } from "react";
import Login from "./component/Login";
import Product from "./component/Product";
import LogOut from "./component/LogOut";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import "./App.css";
import Register from "./component/Register";
import { Snackbar, useSnackbar } from "@mui/material";
import { MaterialDesignContent, SnackbarProvider } from "notistack";
import styled from "@emotion/styled";
import UserProduct from "./component/UserProduct";
import ProductList from "./component/ProductList";





function App() {
  const StyledMaterialDesignContent = styled(MaterialDesignContent)(() => ({
    "&.notistack-MuiContent-success": {
      backgroundColor: "#2D7738",
    },
    "&.notistack-MuiContent-error": {
      backgroundColor: "#970C0C",
    },
  }));

  const [cartItems, setCartItem] = useState([]);
  return (
    <div>
      <SnackbarProvider
        Components={{
          success: StyledMaterialDesignContent,
          error: StyledMaterialDesignContent,
        }}
      >
        <Router>
          {/* <Navbar/> */}
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/LogOut" element={<LogOut />} />
            <Route path="/product/add" element={<UserProduct />} />
            <Route path="/Register" element={<Register />} />
            <Route  path='/ProductList' element={<ProductList/>}/>
            <Route  path='/product/edit/:id' element={<UserProduct/>}/>
          </Routes>
        </Router>
      </SnackbarProvider>
    </div>
  );
}
export default App;
