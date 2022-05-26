import { Route, Routes } from "react-router-dom";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import SignUp from "./pages/Login/SignUp/SignUp";
import Footer from "./pages/Shared/Footer";
import Navbar from "./pages/Shared/Navbar";
import Blogs from "./pages/Blogs/Blogs";
import Purchase from "./pages/Purchase/Purchase";
import RequireAuth from "./pages/Login/RequireAuth";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import NotFound from "./pages/NotFound/NotFound";
import Dashboard from "./pages/Dashboard/Dashboard";
import Profile from "./pages/Dashboard/Profile";
import AddReview from "./pages/Dashboard/AddReview";
import AddProduct from "./pages/Dashboard/AddProduct";
import AllUser from "./pages/Dashboard/AllUser";
import ManageOrders from "./pages/Dashboard/ManageOrders";

function App() {
  const [product, setProduct] = useState({});
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home setProduct={setProduct}></Home>}></Route>
        <Route path="/blog" element={<Blogs></Blogs>}></Route>
        <Route
          path="/purchase"
          element={
            <RequireAuth>
              <Purchase product={product} setProduct={setProduct}></Purchase>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard></Dashboard>
            </RequireAuth>
          }
        >
          <Route index element={<Profile></Profile>}></Route>
          <Route path="addReview" element={<AddReview></AddReview>}></Route>
          <Route path="users" element={<AllUser></AllUser>}></Route>
          <Route path="addProduct" element={<AddProduct></AddProduct>}></Route>
          <Route
            path="manageOrder"
            element={<ManageOrders></ManageOrders>}
          ></Route>
        </Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
