import React from 'react';
import { Box, Grid, Typography, TextField, Button } from '@mui/material';

const TopTenLinkSettings = () => {

    const handleSubmit = e => {

        e.preventDefault();
    }

    return (
        <Box mb={15}>
            <Typography mb={2} variant="body2" style={{boxShadow: '3px 1px 10px -5px rgba(0,0,0,0.75)', fontWeight: '600', color: 'gray', borderTop: '2px solid #1976D2', padding: '5px'}}>
                App 10 link Setting's
            </Typography>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={2} mt={2}>
                    <Grid item xs={12} sm={6} md={6}>
                        <TextField label="Visit Link 1" defaultValue="1" fullWidth color="success" focused />
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                        <TextField label="Visit Link 2" defaultValue="2" fullWidth color="success" focused />
                    </Grid>
                </Grid>
                <Grid container spacing={2} mt={2}>
                    <Grid item xs={12} sm={6} md={6}>
                        <TextField label="Visit Link 3" defaultValue="3" fullWidth color="success" focused />
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                        <TextField label="Visit Link 4" defaultValue="4" fullWidth color="success" focused />
                    </Grid>
                </Grid>
                <Grid container spacing={2} mt={2}>
                    <Grid item xs={12} sm={6} md={6}>
                        <TextField label="Visit Link 5" defaultValue="5" fullWidth color="success" focused />
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                        <TextField label="Visit Link 6" defaultValue="6" fullWidth color="success" focused />
                    </Grid>
                </Grid>
                <Grid container spacing={2} mt={2}>
                    <Grid item xs={12} sm={6} md={6}>
                        <TextField label="Visit Link 7" defaultValue="7" fullWidth color="success" focused />
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                        <TextField label="Visit Link 8" defaultValue="8" fullWidth color="success" focused />
                    </Grid>
                </Grid>
                <Grid container spacing={2} mt={2}>
                    <Grid item xs={12} sm={6} md={6}>
                        <TextField label="Visit Link 9" defaultValue="9" fullWidth color="success" focused />
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                        <TextField label="Visit Link 10" defaultValue="10" fullWidth color="success" focused />
                    </Grid>
                </Grid>
                <Button type="submit" variant="contained" color="secondary" sx={{float: 'right', marginTop: '20px'}}>Update</Button>
            </form>
        </Box>
    );
}
export default TopTenLinkSettings;