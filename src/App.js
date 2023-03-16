import {BrowserRouter as Router, Route, Routes } from "react-router-dom";

import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import JobsContainer from "./components/Jobs/JobsContainer";
import SideBar from "./components/SideBar";
import AddJobs from "./components/AddJobs/AddJobs";
import EditJob from "./components/EditJob/EditJob";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar></Navbar>
        <SideBar></SideBar>

        <Routes>
          <Route path="/" element={<JobsContainer></JobsContainer>} />
          <Route path="/addNewJob/:id" element={<AddJobs></AddJobs>} />
          <Route path="/editJob/:id" element={<EditJob></EditJob>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
