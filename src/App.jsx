import React from "react";
import { Route } from "react-router";
import { Routes } from "react-router";
import Home from "./Page/Home";
import Proparis from "./Page/Proparis";
import Details from "./Page/Details";
import Contact from "./Page/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SinglePage from "./Page/SinglePage";

const App = () => {
  return (
    <div className="">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="properties" element={<Proparis/>}/>
        <Route path="details" element={<Details/>}/>
        <Route path="single/:id" element={<SinglePage/>}/>
        <Route path="contact" element={<Contact/>}/>
      </Routes>
      <Footer/>
    </div>
  );
};

export default App;
