import { Route, Routes } from "react-router-dom";
import "./App.css";
import Banner from "./pages/Home/Banner";
import Navbar from "./pages/Shared/Navbar";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Banner></Banner>}></Route>
      </Routes>
    </div>
  );
}

export default App;
