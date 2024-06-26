import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Signup } from "./pages/Signup";
import { Signin } from "./pages/Signin";
import { Dashboard } from "./pages/Dashboard";

import { Market } from "./pages/Market";
import { Landing } from "./pages/Landing";
import { Header } from "./pages/Header";
import { FullDashboard } from "./pages/FullDashboard";
import { Login } from "./pages/login";
import Footer from "./pages/Footer";
import ApplyJob from "./pages/ApplyJob";
import ApplySmartbin from "./pages/ApplySmartbin";
import Home from "./pages/Home";
import Events from "./pages/Events";
import Learnmore from "./pages/Learnmore";

function App() {
  return (
    <>
      <BrowserRouter>
      
        <Header></Header>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/" element={<Landing />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/apply-for-job" element = {<ApplyJob />} />
          <Route path="/apply-for-smart-bin" element = {<ApplySmartbin />} />
          <Route path="/home" element= {<Home />}/>
          <Route path="/events" element = {<Events />} />
          <Route path="/learnmore" element ={<Learnmore />} />
          <Route
            path="/fulldashboard"
            element={<FullDashboard></FullDashboard>}
          />
          <Route path="/market" element={<Market />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
