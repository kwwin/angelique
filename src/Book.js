import React from 'react'
import { useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import two from './photos/two.png';
import three from './photos/three.png';


function Book()  {
    const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
    
  
    return (
      <div sx={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
        <Card sx={{ display: 'flex', maxWidth: 285, mt: 5 }}>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <CardContent sx={{ flex: '1 0 auto' }}>
              <Typography component="div" variant="h7">
                MUNTING BATA MANGARAP KA
              </Typography>
              <Button size="small" color="primary" onClick={handleOpen}>
            READ VIEW
          </Button>
            </CardContent>
          </Box>
          <CardMedia component="img" sx={{ width: 155, height: 190 }} image={two} alt="" />
          
        </Card>
        <Modal open={open} onClose={handleClose}>
          <Box >
            {/* <Typography variant="h6" component="h2">
             Munting Bata Mangarap ka
            </Typography> */}
            <h6>
             Munting Bata Mangarap ka   
            </h6>
            <p>
            By:Queen Angelique Santiago.
            </p>
            <Typography sx={{ mt: 2, textAlign: 'justify' }}>
            Magsimula tayo sa umpisa. teka, umpisa?
tila hindi na umpisa ang ating sisimulan sapagkat tayo ay haharap na sa pagbabago
tama – pagbabago
magsisimula tayo sa pagbabago.
Pagbabago na kung saan tayo ay naninibago.
Pagbabagong kay hirap, ay nangyari sa isang iglap.
Gigising ng maaga at gadget ang kaharap,
Dali daling pipindutin ang asul, na tila isang hugis balota.

Oo na, eto na.
Andito nanaman ang panibagong umaga
Na kung sa’ay may ibat ibang problema.

Maaring Madali sa iba,
Subalit hindi lahat ay kayang sumabay
Ngunit kami ay patuloy na lumalaban,
Pangarap ay ipagpapatuloy para sa magandang kinabukasan,
Magtutulungan, Magbibigayan at hinding hindi magpapataasan,
Lahat ay kakayanin dahil Diyos ay kaagapay. Sa kanya’y aming tiwala’y buong pusong ibinibigay.
Isang grupong minsan lang nagkasama sama,
Nguniit turingan ay parang isang pamilya,
Kung kayat ang mga problema ay piangdadamayan
Ikaw

Ako!
Tayo!
padayon mga pag asa ng bayan
kabataang titindig ano man ang hamon ng buhay
pag asa’y di mawawala sapagkat ang tiwala ay nasa diyos na may likha
ating sama samang haharapin ang kinabuksang sasapit

Kaakibat ang Diyos -
Tayo ay magtatagumpay.
            </Typography>
            <Button sx={{ mt: 2 }} onClick={handleClose}>
              Close
            </Button>
          
          </Box>
        </Modal>

        <Card sx={{ display: 'flex', maxWidth: 285, mt: 5 }}>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <CardContent sx={{ flex: '1 0 auto' }}>
              <Typography component="div" variant="h7">
                FACING THE FUTURE TOGETHER
              </Typography>
              <Button size="small" color="primary" onClick={handleOpen}>
            READ VIEW
          </Button>
            </CardContent>
          </Box>
          <CardMedia component="img" sx={{ width: 155, height: 190 }} image={three} alt="" />
        </Card>
        <Modal open={open} onClose={handleClose}>
          <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', bgcolor: 'background.paper', boxShadow: 24, p: 4 }}>
            <Typography variant="h6" component="h4">
            Facing the Future Together
            </Typography>
            <p>
            By:Queen Angelique Santiago.
            </p>
            <Typography sx={{ mt: 2, textAlign: 'justify' }}>
            Magsimula tayo sa umpisa. teka, umpisa?
tila hindi na umpisa ang ating sisimulan sapagkat tayo ay haharap na sa pagbabago
tama – pagbabago
magsisimula tayo sa pagbabago.
Pagbabago na kung saan tayo ay naninibago.
Pagbabagong kay hirap, ay nangyari sa isang iglap.
Gigising ng maaga at gadget ang kaharap,
Dali daling pipindutin ang asul, na tila isang hugis balota.

Oo na, eto na.
Andito nanaman ang panibagong umaga
Na kung sa’ay may ibat ibang problema.

Maaring Madali sa iba,
Subalit hindi lahat ay kayang sumabay
Ngunit kami ay patuloy na lumalaban,
Pangarap ay ipagpapatuloy para sa magandang kinabukasan,
Magtutulungan, Magbibigayan at hinding hindi magpapataasan,
Lahat ay kakayanin dahil Diyos ay kaagapay. Sa kanya’y aming tiwala’y buong pusong ibinibigay.
Isang grupong minsan lang nagkasama sama,
Nguniit turingan ay parang isang pamilya,
Kung kayat ang mga problema ay piangdadamayan
Ikaw

Ako!
Tayo!
padayon mga pag asa ng bayan
kabataang titindig ano man ang hamon ng buhay
pag asa’y di mawawala sapagkat ang tiwala ay nasa diyos na may likha
ating sama samang haharapin ang kinabuksang sasapit

Kaakibat ang Diyos -
Tayo ay magtatagumpay.
            </Typography>
            <Button sx={{ mt: 2 }} onClick={handleClose}>
              Close
            </Button>
          
          </Box>
        </Modal>

        
        {/* <div>
<footer className="footer">
<a href="https://https://www.facebook.com/angelique.santiago.908?mibextid=ZbWKwL
.facebook.com/"><img src="facebook-icon.png" alt="Facebook" style={{ marginRight: "20px" }} /></a>
    <a href="https://instagram.com/angelique_santiago28?igshid=YmMyMTA2M2Y=://www.instagram.com/"><img src="instagram-icon.png" alt="Instagram" /></a>
  </footer>     </div> */}
     </div>
      
  )
}

export default Book