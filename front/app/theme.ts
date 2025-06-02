import { red } from '@mui/material/colors'
import { createTheme } from '@mui/material/styles'

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#3A7CA5',
    },
    secondary: {
      main: '#A6C9D7',
    },
    info: {
      main: '#F4B942',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#FDFDFD',
      paper: '#FFFFFF',
    },
  },
})

export default theme
