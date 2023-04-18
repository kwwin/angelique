import "./App.css";
import "./Home.js";
import bgmain from "./bgmain.png";
import Home from "./Home";
import Book from "./Book";
import Events from "./Events";
import { Route, Routes, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import React from "react";
// import {  Card, CardActions, CardContent, Typography } from '@mui/material';
// import three from './photos/three.png';
// import four from './photos/four.png';
// import Container from '@mui/material/Container';

// function Footer() {
//   return (
//     <div className="footer" style={{ display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "burlywood", height: "80px" }}>
//       <a href="https://www.facebook.com/"><img src="facebook-icon.png" alt="Facebook" style={{ marginRight: "20px" }} /></a>
//       <a href="https://www.instagram.com/"><img src="instagram-icon.png" alt="Instagram" /></a>
//     </div>
//   );
// }

function App() {
  const navigate = useNavigate();
  return (
    <div className="App">
      <header className="App-header ">
        <img
          src={bgmain}
          alt="bgmain"
          className="image-size"
          style={{ width: "100%", height: "100%" }}
        />
      </header>
      <nav style={{ display: "flex", justifyContent: "center" }}>
        <Button onClick={() => navigate('/')} style={{ color: "black" }}>
          Home
        </Button>
        {/* <Button onClick={() => navigate('/digiposter')} style={{ color: "black" }}>
          Poster
        </Button> */}
        <Button onClick={() => navigate('/book')} style={{ color: "black" }}>
          Book
        </Button>
        <Button onClick={() => navigate('/events')} style={{ color: "black" }}>
          Events
        </Button>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/book" element={<Book />} />
        <Route path="/events" element={<Events />} />
      </Routes>
    </div>
  );
}

export default App;
