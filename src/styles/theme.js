import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
  palette: {
   
    primary: {
      light: '#4ba79a',
      main: '#0a786c',
      dark: '#004b41',
      contrastText: '#ffffff',
      mainGradient: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    },
  
    secondary: {
      light: '#33eb91',
      main: '#00e676',
      dark: '#00a152',
      contrastText: '#ffffff',
    },
  },
  mixins: {
  
    toolbar: {
      minHeight: 64,
    },
  },
 
  props: {
    MuiCheckbox: {
      color: 'primary',
    },
    MuiList: {
      dense: true,
    },
    MuiTable: {
      size: 'small',
    },
    MuiTextField: {
      variant: 'outlined',
    },
  },
});

export default theme;