import './NavBar.scss';
import { NavLink } from 'react-router-dom';
import {AppBar, Toolbar, Box, Menu, MenuItem, IconButton, Typography} from '@mui/material';


const NavBar = () => {
    const forms: string[] = ['Purchase Form', 'Income Form', 'Cost Form']
    return (
        <AppBar>
            <Toolbar>
                <Typography variant = 'button'>
                    Paitoon Panit
                </Typography>
                <Box 
                sx={{
                    display: 'flex',
                }}>
                    <NavLink to ="/dashboard">
                        <Typography>Dashboard</Typography>
                    </NavLink>
                    <IconButton>Forms</IconButton>
                    <Menu open={true}>
                        {forms.map((form, i)=>{
                            return (
                                <MenuItem key={i}>
                                    <Typography textAlign="center"> {form}</Typography>
                                </MenuItem>
                            )
                        })
                        }
                    </Menu>
                </Box>
                <NavLink to="login" > Login</NavLink>
            </Toolbar>
        </AppBar>
    )
}

export default NavBar