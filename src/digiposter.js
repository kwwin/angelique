import { CardContent } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import './App.js';
import Digicover from './digicover.png';

const Landingpage = () => {
    return (
      // <div>
      //   <card>
      //     <CardContent>

      //     </CardContent>
      //   </card>
      //     </div>
      <div>\
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
  <Card sx={{ display: 'flex', width: '300px', height: '150px', boxShadow: '0 0 50px rgba(0, 0, 0, 0.5)' }}>
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <CardContent sx={{ flex: '1 0 auto', padding: '8px' }}>
        <Typography component="div" variant="h6">
          3
        </Typography>
        <Typography variant="subtitle2" color="text.secondary" component="div">
          <a href="https://drive.google.com/drive/folders/17JLWw3t269MIAZovYcWpZ9T8DoJsxpWQ?usp=share_link">
          Logo
          </a>
        </Typography>
      </CardContent>
    </Box>
    <CardMedia
      component="img"
      sx={{ width: 100, height: '100%' }}
      img src={Digicover}  
      alt="Digital Poster"
      style={{ width: '300px', height: '150px' }}
    />
     
  </Card>

  <Card sx={{ display: 'flex', width: '300px', height: '150px', boxShadow: '0 0 50px rgba(0, 0, 0, 0.5)' }}>
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <CardContent sx={{ flex: '1 0 auto', padding: '8px' }}>
        <Typography component="div" variant="h6">
          5
        </Typography>
        <Typography variant="subtitle2" color="text.secondary" component="div">
          <a href="https://drive.google.com/drive/folders/1LlKQmZ2BwbCwHm5OSM927znakTMZ2Vap?usp=share_link">
          Cerificate
          </a>
        </Typography>
      </CardContent>
    </Box>
    <CardMedia
      component="img"
      sx={{ width: 100, height: '100%' }}
      img src={Digicover}  
      alt="Digital Poster"
      style={{ width: '300px', height: '150px' }}
    />
  </Card>
</div>


<div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '20px' }}>
<Card sx={{ display: 'flex', width: '300px', height: '150px', boxShadow: '0 0 50px rgba(0, 0, 0, 0.5)' }}>
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <CardContent sx={{ flex: '1 0 auto', padding: '8px' }}>
        <Typography component="div" variant="h6">
          8
        </Typography>
        <Typography variant="subtitle2" color="text.secondary" component="div">
          <a href="https://drive.google.com/drive/folders/1CRXA51lTswclndWLzwcYHkEPt3TZa2QN?usp=share_link">
          Poster
          </a>
        </Typography>
      </CardContent>
    </Box>
    <CardMedia
      component="img"
      sx={{ width: 100, height: '100%' }}
      img src={Digicover}  
      alt="Digital Poster"
      style={{ width: '300px', height: '150px' }}
    />
  </Card>

  <Card sx={{ display: 'flex', width: '300px', height: '150px', boxShadow: '0 0 50px rgba(0, 0, 0, 0.5)' }}>
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <CardContent sx={{ flex: '1 0 auto', padding: '8px' }}>
        <Typography component="div" variant="h6">
          5
        </Typography>
        <Typography variant="subtitle2" color="text.secondary" component="div">
          <a href="https://drive.google.com/drive/folders/1kFsulGMomqMbceZUEADCU_7lysQDxQAO?usp=share_link">
          Typing Master
          </a>
        </Typography>
      </CardContent>
    </Box>
    <CardMedia
      component="img"
      sx={{ width: 100, height: '100%' }}
      img src={Digicover}  
      alt="Digital Poster"
      style={{ width: '300px', height: '150px' }}
    />
  </Card>
</div>


<div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '20px' }}>
<Card sx={{ display: 'flex', width: '300px', height: '150px', boxShadow: '0 0 50px rgba(0, 0, 0, 0.5)' }}>
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <CardContent sx={{ flex: '1 0 auto', padding: '8px' }}>
        <Typography component="div" variant="h6">
          6
        </Typography>
        <Typography variant="subtitle2" color="text.secondary" component="div">
          <a href="https://drive.google.com/drive/folders/1oZbA881j6nten2fnDXZnQu2T9GkcMAxp?usp=share_link">
          Tech Talk Est 2021
          </a>
        </Typography>
      </CardContent>
    </Box>
    <CardMedia
      component="img"
      sx={{ width: 100, height: '100%' }}
      img src={Digicover}  
      alt="Digital Poster"
      style={{ width: '300px', height: '150px' }}
    />
  </Card>

  <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginBottom: '100px' }}>
  <Card sx={{ display: 'flex', width: '300px', height: '150px', boxShadow: '0 0 50px rgba(0, 0, 0, 0.5)' }}>
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <CardContent sx={{ flex: '1 0 auto', padding: '8px' }}>
        <Typography component="div" variant="h6">
          1
        </Typography>
        <Typography variant="subtitle2" color="text.secondary" component="div">
        <a href="https://drive.google.com/drive/folders/1oZbA881j6nten2fnDXZnQu2T9GkcMAxp?usp=share_link" style={{color: 'blue'}}>
  Website
</a>
        </Typography>
      </CardContent>
    </Box>
    <CardMedia
      component="img"
      sx={{ width: 100, height: '100%' }}
      img src={Digicover}  
      alt="Digital Poster"
      style={{ width: '300px', height: '150px' }}
    />
  </Card>
</div>

</div>

</div>

    )
  }
  
  export default Landingpage