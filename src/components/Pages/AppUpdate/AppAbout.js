import React from 'react';
import { Box, Grid, Typography, TextField, Button } from '@mui/material';

const AppAbout = () => {


    const handleSubmit = e => {

        e.preventDefault();
    }

    return (
        <Box mb={15}>
            <Typography mb={2} variant="body2" style={{boxShadow: '3px 1px 10px -5px rgba(0,0,0,0.75)', fontWeight: '600', color: 'gray', borderTop: '2px solid #1976D2', padding: '5px'}}>
                Apps About Setting
            </Typography>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={2} mt={2}>
                    <Grid item xs={12} sm={12} md={12}>
                        <TextField
                            id="outlined-multiline-static"
                            label="About Us"
                            multiline
                            fullWidth
                            rows={3}
                            defaultValue="<b> #About Us </b> <br>"
                        />
                    </Grid>
                </Grid>
                <Button type="submit" variant="contained" color="secondary" sx={{float: 'right', marginTop: '20px'}}>Update</Button>
            </form>
        </Box>
    )
}
export default AppAbout;