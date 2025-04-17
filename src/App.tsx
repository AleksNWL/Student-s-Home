import React from 'react';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Lecturer from "./pages/Lecturer/Lecturer";
import Student from "./pages/Student/Student";


const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/about" element={<About/>} />
                <Route path="/about/lecturer" element={<Lecturer/>} />
                <Route path="/about/student" element={<Student/>} />
            </Routes>
        </Router>
    );
};

export default App;
