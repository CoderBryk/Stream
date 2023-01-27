import { Stack } from '@mui/material'
import { Link } from 'react-router-dom'
import { logo } from '../Utils/constants'
import Searchbar from './Searchbar'
import '../App.css'

function Navbar() {
  return (
    <Stack direction='row' alignItems='center' borderBottom ='1px solid #3d3d3d' p={2} sx={{ position: 'sticky', background: '#000', top: 0, justifyContent: 'space-between'}}>
      <Link to='/' style={{ display: 'flex', alignItems: 'center'}}>
        <img src ={ logo } alt='logo' height={40} />
        <h2 className='name'>Stream<span>Hub</span></h2>
      </Link>
      <Searchbar />
    </Stack>
  )
}

export default Navbar