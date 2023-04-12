import React from 'react'
import { Button } from '@mui/material'


const HomeLayout = () => {

    const Nav = () => {
        return (
            <nav style={{display: "flex", justifyContent: "center"}}>
                <Button href="/Home" style={{color: "black"}}>Home</Button>
                <Button href="/Book" style={{color: "black"}}>Book</Button>
                <Button href="/Events" style={{color: "black"}}>Events</Button>
            </nav>
        )
    }
  return (
    <div>
        <Nav/>
    </div>
  )
}

export default HomeLayout