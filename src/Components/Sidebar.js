import { categories } from '../Utils/constants'
import { Stack } from '@mui/material'

function Sidebar() {
  return (
    <Stack direction='row' sx={{overflowY: 'auto', height: {sx: 'auto', md: '92%'}, flexDirection: {md:'column'}, }}>
       { categories.map((category) => (
        <button className='sidebar_buttons'>
            <span>{ category.icon }</span>
            <span>{ category.name }</span>
        </button>
       )) }
    </Stack>
  )
 }

export default Sidebar