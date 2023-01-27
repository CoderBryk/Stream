import { useState, useEffect } from 'react'
import { Box, Typography, Stack } from '@mui/material'
import Sidebar from './Sidebar'

function Feed() {
  return (
    <Stack sx={{flexDirection: {sx: 'column', md: 'row'} }}>
      <Box sx={{height: {sx: 'auto', md: '92vh'}, borderRight: '1px solid #3d3d3d', padding: {sx: 0, md: 2}}}>
        <Sidebar />
        <Typography className='copyright' variant='body2' sx={{mt: 1.5, color: '#fff' }}>
        copyright 2023 Blossom Eze
        </Typography>
      </Box>
    </Stack>
  )
}

export default Feed