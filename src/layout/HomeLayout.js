import React from 'react'
import { Button } from '@mui/material'
import {Outlet} from 'react-router-dom'
import Landing from '../landing.png'

const HomeLayout = () => {

    const Nav = () => {
        return (
            <>
                <nav style={{display: "flex", justifyContent: "center"}}>
                    <Button href="/" style={{color: "black"}}>Home</Button>
                    <Button href="/Book" style={{color: "black"}}>Book</Button>
                    <Button href="/Events" style={{color: "black"}}>Events</Button>
                </nav> 
                <header className="App-header ">
                    <img src={Landing} alt="landing" className="image-size" style={{width: '100%', height: '50%'}} />
                </header>

                {/* ito yung nag ddisplay nung children */}
                <Outlet/>
            </>
        )
    }
  return (
    <div>
        <Nav/>
    </div>
  )
}

export default HomeLayout