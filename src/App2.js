import React from 'react'
import {Routes, Route} from 'react-router-dom'

// components

import Home from "./Home";
import Book from "./Book";
import Events from "./Events";
import HomeLayout from './layout/HomeLayout';
// img


const App2 = () => {
  return (
    <>
        <Routes>
            <Route path="/" element={<HomeLayout />} >
                <Route index element={<Home />} />
                <Route path="/book" element={<Book />} />
                <Route path="/events" element={<Events />} />
            </Route>
       </Routes>
    </>
  )
}

export default App2