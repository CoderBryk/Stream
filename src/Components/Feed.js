import { useState, useEffect } from 'react'
import { Box, Typography, Stack } from '@mui/material'
import { Sidebar, Videos } from './index'
import { fetch } from '../Utils/fetch'

function Feed() {
    const [ selectedCategory, setSelectedCategory] = useState('New');

    useEffect(() => {
    fetch(`search?part=snippet&q=${selectedCategory}`);
  }, []);

  return (
    <Stack sx={{flexDirection: {sx: 'column', md: 'row'} }}>
      <Box sx={{height: {sx: 'auto', md: '92vh'}, borderRight: '1px solid #3d3d3d', padding: {sx: 0, md: 2}}}>
        <Sidebar />
        <Typography className='copyright' variant='body2' sx={{mt: 2.5, color: '#fff' }}>
        copyright 2023 Blossom Eze
        </Typography>
      </Box>
      <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2}}>
        <Typography variant='h4' fontWeight='bold' mb={2} sx={{ color: 'white' }}>
          New<span style={{ color: '#F31503'}}>Videos</span>
        </Typography>
        <Videos />
      </Box>
    </Stack>
  )
}

export default Feed