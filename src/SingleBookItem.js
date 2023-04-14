import { Box, Stack, Typography } from '@mui/material'
import Reac, {useState} from 'react'

const SingleBookItem = ({item, showMoreText, showMore}) => {
    
    const [showText, setShowText] = useState(false);


  return (
    <>
        {/* <Modal open={open} onClose={handleClose}> */}
        <Box sx={{width:'500px',margin:'0 1rem 1rem', boxShadow:'0px 0px 5px', padding:'6rem'}}>
                <Stack direction="row">
                    <img src={item.img} width='200px' style={{borderRadius:'20px', marginRight:'1rem'}}/>
                    <Box>
                        <h6>{item.title}</h6>
                        <p>{item.author}</p>
                    </Box>
                </Stack>
                
                <Typography sx={{ mt: 2, textAlign: 'justify' }}>
                    
                    {!showText ? item.body.substring(0,300):item.body}
                </Typography>
                <button onClick={()=>setShowText(!showText)}>Read more</button>

                
                
            </Box>
        {/* </Modal> */}
    </>
  )
}

export default SingleBookItem