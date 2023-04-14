import React from 'react'
import './App.js';
import Button from '@mui/material/Button';
import {  Card, CardActions, CardContent, Typography } from '@mui/material';
import two from './photos/two.png';
import four from './photos/four.png';
import Container from '@mui/material/Container';

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
            <img src={four} alt="" width="350" height="450" />
          </div>
          <Typography gutterBottom variant="h6" component="div" style={{ fontFamily: 'Arial', fontStyle: 'italic', marginTop: '20px' }}>
            Posible o Imposible
          </Typography>
  
          <p style={{ fontSize: '18px' }}>
            The theme of this love story is the use of suffering to achieve the seemingly impossible.
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
            <img src={two} alt="" width="350" height="450" />
          </div>
          <Typography gutterBottom variant="h6" component="div" style={{ fontFamily: 'Arial', fontStyle: 'italic', marginTop: '20px' }}>
            Munting Bata Mangarap ka
          </Typography>
  
          <p style={{ fontSize: '18px' }}>
            A better future is possible for hardworking street youngsters who have a dream.
          </p>
  
        </CardContent>
        <CardActions>
          <Button size="small"></Button>
        </CardActions>
      </Card>
    </div>
  </div>
</div>

  

    
    
  )
}

export default Events