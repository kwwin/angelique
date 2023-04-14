import React from 'react'
import './App.js';
import Button from '@mui/material/Button';
import {  Card, CardActions, CardContent, Typography } from '@mui/material';
import nine from './photos/nine.png';
import seven from './photos/seven.png';


// import Button from '@mui/material/Button';
// import Home from "./Home";
// import Book from "./Book";
// import {Route, Routes} from "react-router-dom";


const Events = () => {
  return (
    <div>
  <div style={{ backgroundColor: '#ffe4e1', width: '80vw', height: '50vh', margin: '0 auto', marginLeft: '150px', marginTop: '100px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <div className="card" style={{ textAlign: 'center' }}>
      <h2 className="card-title">Upcoming Events</h2>
      <h3 className="card-subtitle">No events now!</h3>
    </div>
  </div>
  
  <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginBottom: '100px' }}>
    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
      <Card sx={{ maxWidth: 'auto', maxHeight: 'auto' }} className="carditem">
      <h2 style={{ color: 'saddlebrown', fontFamily: 'Arial', textAlign: 'center' }}>
          - Latest Release -
        </h2>
        <CardContent style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img src={nine} alt="" width="350" height="450" />
          </div>
          <Typography gutterBottom variant="h6" component="div" style={{ fontFamily: 'Arial', fontStyle: 'italic', marginTop: '20px' }}>
            Tadhana
          </Typography>
  
          <p style={{ fontSize: '18px', textAlign: 'center' }}>
          The theme of this love story is that two people who love each other become separated, but at the end they are together.
          </p>
  
        </CardContent>
        <CardActions>
          <Button size="small"></Button>
        </CardActions>
      </Card>
  
      <Card sx={{ maxWidth: 'auto', maxHeight: 'auto' }} className="carditem">
      <h2 style={{ color: 'saddlebrown', fontFamily: 'Arial', textAlign: 'center' }}>
          - Latest Release -
        </h2>
        <CardContent style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img src={seven} alt="" width="350" height="450" />
          </div>
          <Typography gutterBottom variant="h6" component="div" style={{ fontFamily: 'Arial', fontStyle: 'italic', marginTop: '20px' }}>
            Pangako
          </Typography>
  
          <p style={{ fontSize: '18px', textAlign: 'center' }}>
       People stay not because of love; they stay because of commitment and promises.
          </p>
  
        </CardContent>
        <CardActions>
          <Button size="small"></Button>
        </CardActions>
      </Card>
    </div>
  </div>

  <div>
  <footer className="footer">
    <a href="https://m.facebook.com/angelique.santiago.908">Facebook</a> &nbsp;&nbsp;&nbsp;&nbsp;
    <a href="https://instagram.com/angelique_santiago28?igshid=YmMyMTA2M2Y=://www.instagram.com/">Instagram</a> &nbsp;&nbsp;&nbsp;&nbsp;
    <a href="www.linkedin.com/in/angelique-santiago-65a831272">LinkedIn</a> &nbsp;&nbsp;&nbsp;&nbsp;
    <a href="mailto:qasantiago8@gmail.com">Email</a>
  </footer>
</div>

</div>

  

    
    
  )
}

export default Events