import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import AdminDashboard from "./pages/AdminDashboard";
import Models from "./pages/Models";
import Login from "./pages/Login";

function App() {
  return (
    <Router>
    <Header />
    <main>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/models" element={<Models />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<AdminDashboard />} />
        </Routes>
    </main>
    <Footer />
</Router>
  );
}

export default App;
