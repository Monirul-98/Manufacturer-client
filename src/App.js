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
