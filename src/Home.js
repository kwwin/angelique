// import './App.css';
import React from 'react'
import Container from '@mui/material/Container';


function App() {
  return (
    <div className="App">
       
       <Container sx={{ backgroundColor: 'burlywood', width: '80%', height: '400px', marginTop: 10 }}>
  <h1 style={{display: "flex", justifyContent: "center", fontFamily: "cursive"}}>
    Digital Poster
  </h1>   
  <p style={{textAlign: 'center', textJustify: 'inter-word', margin: '30px 20px'}}>
  Simply a digital poster for school purposes. As such, incorporating multimedia,conferences, events, even logos and certificates, There are countless design options, some of which are more effective than others.   </p>

  <Container sx={{ backgroundColor: 'cornsilk', width: '80%', height: '500px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}> 
  <iframe width="900" height="450" src="https://www.youtube.com/embed/ZULiWmrJeXk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>  </Container>
</Container>    

       <Container sx={{ backgroundColor: 'burlywood', width: '80%', height: '400px', marginTop: '400PX' }}>
  <h1 style={{display: "flex", justifyContent: "center", fontFamily: "cursive"}}>
    About Poet by Thee
  </h1>   
  <p style={{textAlign: 'center', textJustify: 'inter-word', margin: '30px 20px'}}>
    Poet's "written" by Thee "you". The owner and author of "Poet's by Thee" is Queen A, she is a student in one of the university in the Phillippines. She loves Singing and writting a spoken poetrys based on her  experinces in life.
  </p>

  <Container sx={{ backgroundColor: 'cornsilk', width: '80%', height: '500px', display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '1rem' }}> 
 <iframe width="900" height="450"  src="https://www.youtube.com/embed/e1SHsU3f32w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>  </Container>
</Container>    

      


<div>
  <footer className="footer">
    <a href="https://m.facebook.com/angelique.santiago.908">Facebook</a> &nbsp;&nbsp;&nbsp;&nbsp;
    <a href="https://instagram.com/angelique_santiago28?igshid=YmMyMTA2M2Y=://www.instagram.com/">Instagram</a> &nbsp;&nbsp;&nbsp;&nbsp;
    <a href="www.linkedin.com/in/angelique-santiago-65a831272">LinkedIn</a> &nbsp;&nbsp;&nbsp;&nbsp;
    <a href="mailto:qasantiago8@gmail.com">Email</a>
  </footer>
</div>



  
     </div>


     
  );
}

export default App;
