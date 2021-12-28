import React from 'react';
import { Box, Grid, Typography, TextField, Button } from '@mui/material';
import SwitchCheckBox from '../../Shared/components/Switch/SwitchCheckBox';


const AppUpdateSettings = () => {

    const handleSubmit = e => {

        e.preventDefault();
    }

    return (
        <Box mb={15}>
            <Typography mb={2} variant="body2" style={{boxShadow: '3px 1px 10px -5px rgba(0,0,0,0.75)', fontWeight: '600', color: 'gray', borderTop: '2px solid #1976D2', padding: '5px'}}>
                App Update Setting
            </Typography>
            <Box ml={2}>
                <Typography variant="body2">
                    Maintance Mode
                </Typography>
                <SwitchCheckBox />
                <Typography variant="body2">
                    Task ON OFF
                </Typography>
                <SwitchCheckBox />
            </Box>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={2} mt={2}>
                    <Grid item xs={12} sm={6} md={6}>
                        <TextField label="Current App Version"  defaultValue="1.00" fullWidth color="success" focused />
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                        <TextField label="App Download link"  defaultValue="https://play.google.com/store/apps/details?id=com.example.example" fullWidth color="success" focused />
                    </Grid>
                </Grid>
                <Button type="submit" variant="contained" color="secondary" sx={{float: 'right', marginTop: '20px'}}>Update</Button>
            </form>
        </Box>
    );
}
export default AppUpdateSettings;