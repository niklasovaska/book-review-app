import { createTheme } from "@mui/material"

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#a2d2d2',
      contrastText: '#101919',
    },
    secondary: {
      main: '#2d7a7c',
      contrastText: '#101919',
    },
    graph: {
      peach: '#f66e5f',
      orange: '#f24e1e',
      lavender: '#9e57f8',
      green: '#0ac97f',
      blue: '#19b6f6',
    },
    divider: '#55d3d3',
    text: {
      primary: 'rgb(238, 241, 241)',
      secondary: 'rgba(238, 241, 241, 0.6)',
      disabled: 'rgba(238, 241, 241, 0.38)',
      hint: 'rgb(85, 211, 211)',
    },
    background: {
      default: '#101919',
      paper: '#162c2d'
    },
  },
});

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#2d5d5d',
      contrastText: '#e6efef',
    },
    secondary: {
      main: '#83d0d2',
      contrastText: '#0e2525',
    },
    graph: {
      peach: '#f66e5f',
      orange: '#f24e1e',
      lavender: '#9e57f8',
      green: '#0ac97f',
      blue: '#19b6f6',
    },
    divider: '#2caaaa',
    text: {
      primary: 'rgb(14, 37, 37)',
      secondary: 'rgba(14, 37, 37, 0.6)',
      disabled: 'rgba(14, 37, 37, 0.38)',
      hint: 'rgb(44, 170, 170)',
    },
    background: {
      default: '#e6efef',
      paper: '#d2e9e9'
    },
  },
})

export default {darkTheme, lightTheme}

