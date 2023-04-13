import { Stack } from '@mui/material'
import React from 'react'
import { Data } from './BookData.js/Data'
import SingleBookItem from './SingleBookItem'

const SingleBook = () => {
  return (
    <Stack alignItems='center' sx={{marginTop:'2rem'}} >
          {Data?.map((item)=>{
            return <SingleBookItem item={item} />
          })}
        </Stack>
  )
}

export default SingleBook