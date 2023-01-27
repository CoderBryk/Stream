import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Box } from '@mui/material'
import Navbar from './Components/Navbar'
import Feed from './Components/Feed'
import Videoplay from './Components/Videoplay'
import Channel from './Components/Channel'
import Search from './Components/Search'

function App() {
  return (
    <BrowserRouter>
      <Box sx={{backgroundColor: '#000'}}>
      <Navbar />
        <Routes>
          <Route path='/' element={<Feed />} />
          <Route path='video/:id' element={<Videoplay />} />
          <Route path='channel/:id' element={<Channel />} />
          <Route path='search/:searchitem' element={<Search />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
