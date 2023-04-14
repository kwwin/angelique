import { CardContent } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import './App.js';

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
  <Card sx={{ display: 'flex', width: '300px', height: '150px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)' }}>
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <CardContent sx={{ flex: '1 0 auto', padding: '8px' }}>
        <Typography component="div" variant="h6">
          21
        </Typography>
        <Typography variant="subtitle2" color="text.secondary" component="div">
          Adele
        </Typography>
      </CardContent>
    </Box>
    <CardMedia
      component="img"
      sx={{ width: 100, height: '100%' }}
      image="/static/images/cards/21.jpg"
      alt="21 album cover"
    />
  </Card>

  <Card sx={{ display: 'flex', width: '300px', height: '150px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)' }}>
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <CardContent sx={{ flex: '1 0 auto', padding: '8px' }}>
        <Typography component="div" variant="h6">
          Born to Die
        </Typography>
        <Typography variant="subtitle2" color="text.secondary" component="div">
          Lana Del Rey
        </Typography>
      </CardContent>
    </Box>
    <CardMedia
      component="img"
      sx={{ width: 100, height: '100%' }}
      image="/static/images/cards/born-to-die.jpg"
      alt="Born to Die album cover"
    />
  </Card>
</div>


<div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '20px' }}>
  <Card sx={{ display: 'flex', width: '300px', height: '150px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)' }}>
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <CardContent sx={{ flex: '1 0 auto', padding: '8px' }}>
        <Typography component="div" variant="h6">
          21
        </Typography>
        <Typography variant="subtitle2" color="text.secondary" component="div">
          Adele
        </Typography>
      </CardContent>
    </Box>
    <CardMedia
      component="img"
      sx={{ width: 100, height: '100%' }}
      image="/static/images/cards/21.jpg"
      alt="21 album cover"
    />
  </Card>

  <Card sx={{ display: 'flex', width: '300px', height: '150px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)' }}>
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <CardContent sx={{ flex: '1 0 auto', padding: '8px' }}>
        <Typography component="div" variant="h6">
          Born to Die
        </Typography>
        <Typography variant="subtitle2" color="text.secondary" component="div">
          Lana Del Rey
        </Typography>
      </CardContent>
    </Box>
    <CardMedia
      component="img"
      sx={{ width: 100, height: '100%' }}
      image="/static/images/cards/born-to-die.jpg"
      alt="Born to Die album cover"
    />
  </Card>
</div>

</div>

    )
  }
  
  export default Landingpage