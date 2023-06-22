import './App.css';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import DashBoardPage from './pages/DashBoardPage/DashBoardPage';
import LoginPage from './pages/LoginPage/LoginPage';

function App() {

  return (
    <>
    <ThemeProvider theme={theme}>
      <Router>
      <NavBar/>
        <Routes> 
          <Route path ="/" element={<LoginPage/>}/>
          <Route path ="/dashboard" element={<DashBoardPage/>}/>
        </Routes>
      </Router>
    </ThemeProvider>
    </>
  )
}

export default App
