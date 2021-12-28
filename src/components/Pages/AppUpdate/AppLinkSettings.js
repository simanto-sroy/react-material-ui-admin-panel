import React from 'react';
import { Box, Grid, Typography, TextField, Button } from '@mui/material';

const AppLinkSettings = () => {

    const handleSubmit = e => {

        e.preventDefault();
    }

    return (
        <Box mb={15}>
            <Typography mb={2} variant="body2" style={{boxShadow: '3px 1px 10px -5px rgba(0,0,0,0.75)', fontWeight: '600', color: 'gray', borderTop: '2px solid #1976D2', padding: '5px'}}>
                App link Setting's
            </Typography>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={2} mt={2}>
                    <Grid item xs={12} sm={6} md={6}>
                        <TextField label="How Work link" defaultValue="https://www.whatsapp.com/" fullWidth color="success" focused />
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                        <TextField label="Telegram Link"  defaultValue="https://telegram.org/" fullWidth color="success" focused />
                    </Grid>
                </Grid>
                <Grid container spacing={2} mt={2}>
                    <Grid item xs={12} sm={6} md={6}>
                        <TextField label="Facebook Page Link"  defaultValue="https://www.facebook.com/" fullWidth color="success" focused />
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                        <TextField label="Privacy Policy Link"  defaultValue="https://www.policy.com/" fullWidth color="success" focused />
                    </Grid>
                </Grid>
                <Button type="submit" variant="contained" color="secondary" sx={{float: 'right', marginTop: '20px'}}>Update</Button>
            </form>
        </Box>
    );
}
export default AppLinkSettings;