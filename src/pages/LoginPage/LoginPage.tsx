import './LoginPage.scss';
import {Container, Box, TextField, Typography, Button } from '@mui/material';

const LoginPage = () => {
    return (
        <Container className='login__container' component='main' maxWidth='xs'>
            <Typography variant='h1' className='login__heading'>Login</Typography>
            <Box
            component='form'
            className='column'
            >
                <TextField
                    required
                    id='outlined-username'
                    label='username'
                    />
                <TextField
                required
                id='outlined-password'
                label='password'
                />
                <Button>Login</Button>
            </Box>
        </Container>

    )
}

export default LoginPage