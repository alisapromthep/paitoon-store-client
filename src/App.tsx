import './App.scss';
import { ThemeProvider } from '@mui/material/styles';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import theme from './theme';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import DashBoardPage from './pages/DashBoardPage/DashBoardPage';
import LoginPage from './pages/LoginPage/LoginPage';
import InventoryPage from './pages/InventoryPage/InventoryPage';
import PurchaseFormPage from './pages/PurchaseFormPage/PurchaseFormPage';

function App() {

  return (
    <>
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Router>
          <NavBar/>
            <Routes> 
              <Route path ="/" element={<LoginPage/>}/>
              <Route path ="/dashboard" element={<DashBoardPage/>}/>
              <Route path ="/inventory" element={<InventoryPage/>}/>
              <Route path="/purchase" element={<PurchaseFormPage/>}/>
            </Routes>
          </Router>
        </LocalizationProvider>
      </ThemeProvider>
    </>
  )
}

export default App
