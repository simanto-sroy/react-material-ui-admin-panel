import React from 'react';
import { Box, Grid, Typography, TextField, Button} from '@mui/material';

const MathQuizSettings = () => {

    const handleSubmit = (e) => {

        e.preventDefault();
    }

    return (
        <Box mb={15}>
            <Typography mb={2} variant="body2" style={{boxShadow: '3px 1px 10px -5px rgba(0,0,0,0.75)', fontWeight: '600', color: 'gray', borderTop: '2px solid #1976D2', padding: '5px'}}>
                Math Quiz Setting
            </Typography>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={2} mb={2}>
                    <Grid item xs={12} sm={6} md={6}>
                        <TextField fullWidth defaultValue="3" label="Math Quiz One Limit" variant="outlined" color="success" focused required/>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                        <TextField fullWidth defaultValue="10" label="Math Quiz Two Limit" variant="outlined" color="success" focused required/>
                    </Grid>
                </Grid>
                <Grid container spacing={2} mb={2}>
                    <Grid item xs={12} sm={6} md={6}>
                        <TextField fullWidth defaultValue="3" label="Math Quiz One Impression Time" variant="outlined" color="success" focused required/>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                        <TextField fullWidth defaultValue="7" label="Math Quiz Two Impression Time" variant="outlined" color="success" focused required/>
                    </Grid>
                </Grid>
                <Grid container spacing={2} mb={2}>
                    <Grid item xs={12} sm={6} md={6}>
                        <TextField fullWidth defaultValue="5" label="Math Quiz One Click Time" variant="outlined" color="success" focused required/>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                        <TextField fullWidth defaultValue="10" label="Math Quiz Two Click Time" variant="outlined" color="success" focused required/>
                    </Grid>
                </Grid>
                <Grid container spacing={2} mb={2}>
                    <Grid item xs={12} sm={6} md={6}>
                        <TextField fullWidth defaultValue="10" label="Math Quiz One Break Time" variant="outlined" color="success" focused required/>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                        <TextField fullWidth defaultValue="10" label="Math Quiz Two Break Time" variant="outlined" color="success" focused required/>
                    </Grid>
                </Grid>
                <Grid container spacing={2} mb={2}>
                    <Grid item xs={12} sm={6} md={6}>
                        <TextField fullWidth defaultValue="10" label="Math Quiz One Point" variant="outlined" color="success" focused required/>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                        <TextField fullWidth defaultValue="10" label="Math Quiz Two Point" variant="outlined" color="success" focused required/>
                    </Grid>
                </Grid>
                <Button type="submit" variant="contained" sx={{float: 'right'}}>Update</Button>
            </form>
        </Box>
    );
}
export default MathQuizSettings;