import './App.css';
import { Container, CssBaseline, Grid, Typography } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';


function App() {

  return (
    <>
    <ThemeProvider theme={theme}>
      <h1>hello typescript</h1>
    </ThemeProvider>
    </>
  )
}

export default App
