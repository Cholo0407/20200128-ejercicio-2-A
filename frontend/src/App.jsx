import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Welcome from "./pages/Welcome";
import HomePage from "./pages/Home"; // Asegúrate de crear esta página
import Courses from "./pages/courses"
import toast, { Toaster } from 'react-hot-toast';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/cursos/crear" element={<Courses />} />
        <Route path="/cursos/:id" element={<Courses />} />
      </Routes>
      <Toaster />
    </Router>
  );
}

export default App;
