import { createMuiTheme } from '@material-ui/core'

const theme = createMuiTheme({
  typography: {
    // fontFamily: ['Roboto', 'Arial', 'sans-serif'].join(','),
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    h2: {
      fontWeight: 500
    },
    h3: {
      fontWeight: 600
    },
    h4: {
      fontWeight: 600
    },
    h5: {
      fontWeight: 700
    },
    h6: {
      fontWeight: 700
    },
    body1: {
      fontFamily: 'Roboto, Arial, sans-serif'
    },
    body2: {
      fontFamily: 'Roboto, Arial, sans-serif'
    }
  },
  palette: {
    primary: {
      light: '#ffc077',
      main: '#ff8800'
    },
    secondary: {
      main: '#505050'
    },
    background: {
      default: '#F1F2F2'
    }
  },
  props: {
    MuiButtonBase: {
      disableRipple: true
    }
  },
  overrides: {
    MuiFilledInput: {
      underline: {
        borderRadius: 6,
        backgroundColor: 'white',
        boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.03)',
        '& input': {
          padding: '18px 12px 18px'
        },
        '&:before': {
          display: 'none'
        },
        '&:hover': {
          backgroundColor: 'white'
        },
        '&.Mui-focused': {
          backgroundColor: 'white'
        },
        '&:focus': {
          backgroundColor: 'white'
        }
      }
    },
    MuiPaper: {
      rounded: {
        borderRadius: 6
      },
      elevation1: {
        boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.03)'
      },
      elevation8: {
        boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.03)'
      }
    },
    MuiButton: {
      root: {
        borderRadius: 6,
        textTransform: 'initial'
      },
      contained: {
        boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.03)',
        '&:hover': {
          boxShadow: 'none'
        }
      },
      containedPrimary: {
        '&:hover': {
          backgroundColor: '#f08000'
        },
        color: 'white'
      }
    },
    MuiIconButton: {
      root: {
        padding: '0px'
      }
    }
  }
})

export default theme
