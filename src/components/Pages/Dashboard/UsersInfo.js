import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import TopUsersTable from './Table/TopUsersTable';
import PaymentDetailsTable from './Table/PaymentDetailsTable';

const UserInfo = () => {

    return (
      <Box>
          <Grid container spacing={2}>
              <Grid item xs={12} sm={8} md={8}>
                <Typography mb={2} variant="body2" style={{boxShadow: '3px 1px 10px -5px rgba(0,0,0,0.75)', fontWeight: '600', color: 'gray', borderTop: '2px solid #1976D2', padding: '5px'}}>
                    Top Users
                </Typography>
                <TopUsersTable />
              </Grid>
              <Grid item xs={12} sm={4} md={4}>
                <Typography mb={2} variant="body2" style={{boxShadow: '3px 1px 10px -5px rgba(0,0,0,0.75)', fontWeight: '600', color: 'gray', borderTop: '2px solid #1976D2', padding: '5px'}}>
                    Payments Details
                </Typography>
                <PaymentDetailsTable />
              </Grid>
         </Grid>
      </Box>
  );
}
export default UserInfo;