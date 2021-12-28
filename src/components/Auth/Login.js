import React from 'react';
import { Box, Typography, TextField, Button, FormControlLabel } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';



const LoginPageStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100vh',
    backgroundColor: '#EBEDEF',
    overflow: 'hidden',
}

const LoginBoxStyle = {
    width: '420px',
    height: 'auto',
    backgroundColor: '#FFFFFF',
    margin: 'auto',
    padding: '30px',
    boxShadow: '3px 1px 10px -5px rgba(0,0,0,0.75)',
}


const InputBoxStyle = {
    marginBottom: '25px',
    width: '100%',
}

const Login = () => {

    const handleSubmit = (e) => {

        e.preventDefault();
    }

    return (
        <Box style={LoginPageStyle}>
            <Box style={LoginBoxStyle}>
                <Typography mb={1} sx={{textAlign: 'center', fontWeight:'600'}} variant='h4'>Login</Typography>
                <Typography mb={5} sx={{textAlign: 'center', color: 'gray', fontWeight:'500'}} variant='body2'>Sine In to your account</Typography>
                <form onSubmit={handleSubmit}>
                    <TextField
                        required
                        id="outlined-required"
                        label="Email"
                        style={InputBoxStyle}
                    />
                    <TextField
                        required
                        id="outlined-required"
                        label="Password"
                        type="password"
                        style={InputBoxStyle}
                    />
                    <FormControlLabel required control={<Checkbox />} label="Remember Me" />
                    <Button type="submit" variant="contained" sx={{width: '100%', marginTop: '5px', marginBottom: '5px', bgcolor:'#321FDB'}}>Log In</Button>
                    <Typography sx={{textAlign: 'center', color: '#321FDB'}} variant="body2">Forgot your password?</Typography>
                </form>
            </Box>
        </Box>
    );
}
export default Login;