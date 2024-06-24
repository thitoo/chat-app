import { createTheme } from '@mui/material/styles';
import { deepPurple, amber, red } from '@mui/material/colors';

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: deepPurple[500],
    },
    secondary: {
      main: amber[500],
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;