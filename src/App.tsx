import React from 'react';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Gallery from "./pages/Gallery/Gallery";
import Lecturer from "./pages/Lecturer/Lecturer";
import Student from "./pages/Student/Student";
import NotificationManager from "./components/NotificationManager";


const App = () => {
    return (
        <Router>
            <NotificationManager/>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/about" element={<About/>} />
                <Route path="/about/lecturer" element={<Lecturer/>} />
                <Route path="/about/student" element={<Student/>} />
                <Route path="/gallery" element={<Gallery/>} />
            </Routes>
        </Router>
    );
};

export default App;
