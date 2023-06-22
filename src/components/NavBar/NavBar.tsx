import './NavBar.scss';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {AppBar, Toolbar, Box, Menu, MenuItem, Button, Typography} from '@mui/material';


const NavBar = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);

    }

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
                    flexGrow: 1
                }}>
                    <MenuItem>
                        <NavLink to ="/dashboard" className='nav__link'>
                            <Typography textAlign='center' >Dashboard</Typography>
                        </NavLink>
                    </MenuItem>
                    <MenuItem onClick={handleOpen}>
                        <Typography textAlign='center'>Forms</Typography>
                    </MenuItem>
                    <Menu open={Boolean(anchorEl)}
                    onClose={handleClose}
                    anchorEl = {anchorEl}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center'
                    }}
                    className='nav__menu-list'
                    >
                        {forms.map((form, i)=>{
                            return (
                                <MenuItem key={i}>
                                    <Typography textAlign="center">{form}</Typography>
                                </MenuItem>
                            )
                        })
                        }
                    </Menu>
                </Box>
                <Box sx={{flexGrow:0}}>
                    <NavLink to="login" className='nav__link'> Login</NavLink>
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default NavBar