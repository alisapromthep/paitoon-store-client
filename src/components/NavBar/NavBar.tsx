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

    const forms: string[] = ['purchase', 'income', 'cost']
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
                            <Typography textAlign='center'>Dashboard</Typography>
                        </NavLink>
                    </MenuItem>
                    <MenuItem>
                        <NavLink to ="/inventory" className='nav__link'>
                            <Typography textAlign='center'>Inventory</Typography>
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
                                    <NavLink to= {form} className='nav__link nav__link--black'>
                                    <Typography textAlign="center">{form} Form</Typography>
                                    </NavLink>
                                </MenuItem>
                            )
                        })
                        }
                    </Menu>
                </Box>
                <Box sx={{flexGrow:0}}>
                    <NavLink to="/" className='nav__link'> 
                        <Typography> Login </Typography>
                    </NavLink>
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default NavBar