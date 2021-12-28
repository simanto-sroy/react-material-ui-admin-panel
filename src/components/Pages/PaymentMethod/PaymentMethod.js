import React from 'react';
import { Box, Typography } from '@mui/material';
import PaymentDialog from './PaymentDialog';
import PaymentData from './PaymentData';

const PaymentMethod = () => {

    return (
        <Box>
            <Box  mb={2} style={{display: 'flex', boxShadow: '3px 1px 10px -5px rgba(0,0,0,0.75)', borderTop: '2px solid #1976D2', padding: '5px'}}>
                <Typography mt={1} sx={{flexGrow: '1', fontWeight: '600', color: 'gray',}} variant="body2">
                    Payment Method List
                </Typography>
                <PaymentDialog />
            </Box>
            <PaymentData />
        </Box>
    )
}
export default PaymentMethod;