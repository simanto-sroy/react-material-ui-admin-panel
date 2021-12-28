import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import {PersonAddAlt} from '@mui/icons-material';

const UserRgData = () => {

    return (
        <Box style={{boxShadow: '3px 1px 10px -5px rgba(0,0,0,0.75)'}} mb={5}>
            <Typography variant="body2" style={{ fontWeight: '600', color: 'gray', borderTop: '2px solid #1976D2', padding: '5px', borderBottom: '1px solid #1976D2'}}>
                User Register
            </Typography>
            <Grid container spacing={1}>
                <Grid item xs={12} sm={6} md={3} py={2} px={5}>
                    <Box mt={2} ml={2} sx={{display: 'flex', border: '1px solid #2719B5', borderRadius: '5px'}}>
                        <PersonAddAlt sx={{fontSize: '80px',backgroundColor: '#2719B5', color: 'white', padding: '15px', width: '40%'}}/>
                        <Box ml={2} mt={2}>
                            <Typography variant="body2" style={{fontWeight: '600', color: 'gray', textTransform: 'uppercase'}}>today</Typography>
                            <Typography style={{fontWeight: '600', color: 'gray'}}>0.00</Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={3} py={2} px={5}>
                    <Box mt={2} ml={2} sx={{display: 'flex', border: '1px solid #69339c', borderRadius: '5px'}}>
                        <PersonAddAlt sx={{fontSize: '80px',backgroundColor: '#69339c', color: 'white', padding: '15px', width: '40%'}}/>
                        <Box ml={1} mt={2}>
                            <Typography variant="body2" style={{fontWeight: '600', color: 'gray', textTransform: 'uppercase'}}>previous day</Typography>
                            <Typography style={{fontWeight: '600', color: 'gray'}}>0.00</Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={3} py={2} px={5}>
                    <Box mt={2} ml={2} sx={{display: 'flex', border: '1px solid #369bf9', borderRadius: '5px'}}>
                        <PersonAddAlt sx={{fontSize: '80px',backgroundColor: '#369bf9', color: 'white', padding: '15px', width: '40%'}}/>
                        <Box ml={2} mt={2}>
                            <Typography variant="body2" style={{fontWeight: '600', color: 'gray', textTransform: 'uppercase'}}>this month</Typography>
                            <Typography style={{fontWeight: '600', color: 'gray'}}>0.00</Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={3} py={2} px={5}>
                    <Box mt={2} ml={2} sx={{display: 'flex', border: '1px solid #F8AA12', borderRadius: '5px'}}>
                        <PersonAddAlt sx={{fontSize: '80px',backgroundColor: '#F8AA12', color: 'white', padding: '15px', width: '40%'}}/>
                        <Box ml={2} mt={2}>
                            <Typography variant="body2" style={{fontWeight: '600', color: 'gray', textTransform: 'uppercase'}}>all users</Typography>
                            <Typography style={{fontWeight: '600', color: 'gray'}}>0.00</Typography>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}
export default UserRgData;