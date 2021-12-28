import React from 'react';
import { Box, Grid, Typography, TextField, Button} from '@mui/material';

const ScratchCardSettings = () => {

    const handleSubmit = (e) => {

        e.preventDefault();
    }

    return (
        <Box mb={15}>
            <Typography mb={2} variant="body2" style={{boxShadow: '3px 1px 10px -5px rgba(0,0,0,0.75)', fontWeight: '600', color: 'gray', borderTop: '2px solid #1976D2', padding: '5px'}}>
                Scratch Card Setting
            </Typography>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={2} mb={2}>
                    <Grid item xs={12} sm={6} md={6}>
                        <TextField fullWidth defaultValue="10" label="Scratch Card One Limit" variant="outlined" color="success" focused required/>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                        <TextField fullWidth defaultValue="10" label="Scratch Card Two Limit " variant="outlined" color="success" focused required/>
                    </Grid>
                </Grid>
                <Grid container spacing={2} mb={2}>
                    <Grid item xs={12} sm={6} md={6}>
                        <TextField fullWidth defaultValue="7" label="Scratch Card One Impression Time" variant="outlined" color="success" focused required/>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                        <TextField fullWidth defaultValue="7" label="Scratch Card Two Impression Time" variant="outlined" color="success" focused required/>
                    </Grid>
                </Grid>
                <Grid container spacing={2} mb={2}>
                    <Grid item xs={12} sm={6} md={6}>
                        <TextField fullWidth defaultValue="10" label="Scratch Card One Click Time" variant="outlined" color="success" focused required/>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                        <TextField fullWidth defaultValue="10" label="Scratch Card Two Click Time" variant="outlined" color="success" focused required/>
                    </Grid>
                </Grid>
                <Grid container spacing={2} mb={2}>
                    <Grid item xs={12} sm={6} md={6}>
                        <TextField fullWidth defaultValue="10" label="Scratch Card One Break Time" variant="outlined" color="success" focused required/>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                        <TextField fullWidth defaultValue="10" label="Scratch Card Two Break Time" variant="outlined" color="success" focused required/>
                    </Grid>
                </Grid>
                <Grid container spacing={2} mb={2}>
                    <Grid item xs={12} sm={6} md={6}>
                        <TextField fullWidth defaultValue="10" label="Scratch Card One Point" variant="outlined" color="success" focused required/>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                        <TextField fullWidth defaultValue="10" label="Scratch Card Two Point" variant="outlined" color="success" focused required/>
                    </Grid>
                </Grid>
                <Button type="submit" variant="contained" sx={{float: 'right'}}>Update</Button>
            </form>
        </Box>
    );
}
export default ScratchCardSettings;