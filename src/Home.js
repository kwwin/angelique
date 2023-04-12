// import './App.css';
import Home from "./Home";
import Book from "./Book";
import Events from "./Events";
import {Route, Routes} from "react-router-dom";
import Button from '@mui/material/Button';
import React from 'react'
import {  Card, CardActions, CardContent, Typography } from '@mui/material';
import two from './photos/two.png';
import four from './photos/four.png';
import Container from '@mui/material/Container';
import HomeLayout from "./layout/HomeLayout";


function App() {
  return (
    <div className="App">
       
       <Routes>
        <Route path="/Home" element={<HomeLayout />} >
        <Route path="/Book" element={<Book />} />
        <Route path="/Events" element={<Events />} />
          <Route/>
       
       </Routes>
      

<div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', ml: 2 }}>
      <Card sx={{ maxWidth: 'auto', maxHeight: 'auto' }} className="carditem">
        <h2 style={{ color: 'saddlebrown', fontFamily: 'Arial' }}>
          - Latest Release -
        </h2>
        <CardContent>
          <img src={four} alt="" width="350" height="450" />
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
        <h2 style={{ color: 'saddlebrown', fontFamily: 'Arial' }}>
          - Latest Release -
        </h2>
        <CardContent>
          <img src={two} alt="" width="350" height="450" />
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
      
      <Container sx={{ backgroundColor: 'burlywood', width: '80%', height: '400px', marginTop: 10 }}>
  <h1 style={{display: "flex", justifyContent: "center", fontFamily: "cursive"}}>
    About Poet by Thee
  </h1>   
  <p style={{textAlign: 'center', textJustify: 'inter-word', margin: '30px 20px'}}>
    Poet's "written" by Thee "you". The owner and author of "Poet's by Thee" is Queen A, she is a student in one of the university in the Phillippines. She loves Singing and writting a spoken poetrys based on her  experinces in life.
  </p>

  <Container sx={{ backgroundColor: 'cornsilk', width: '80%', height: '500px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}> 
 <iframe width="900" height="450"  src="https://www.youtube.com/embed/e1SHsU3f32w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>  </Container>
</Container>    

<div>
<footer className="footer">
<a href="https://https://www.facebook.com/angelique.santiago.908?mibextid=ZbWKwL
.facebook.com/"><img src="facebook-icon.png" alt="Facebook" style={{ marginRight: "20px" }} /></a>
    <a href="https://instagram.com/angelique_santiago28?igshid=YmMyMTA2M2Y=://www.instagram.com/"><img src="instagram-icon.png" alt="Instagram" /></a>
  </footer>     </div>
     </div>
  );
}

export default App;
