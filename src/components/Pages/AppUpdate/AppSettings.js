import React from 'react';
import {Box, Grid, Typography, TextField, Button} from '@mui/material'

const AppSettings = () => {

    const handleSubmit = (e) => {

        e.preventDefault();
    }


    return (
        <Box mb={15}>
            <Typography mb={2} variant="body2" style={{boxShadow: '3px 1px 10px -5px rgba(0,0,0,0.75)', fontWeight: '600', color: 'gray', borderTop: '2px solid #1976D2', padding: '5px'}}>
                App Setting
            </Typography>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={2} mt={2}>
                    <Grid item xs={12} sm={6} md={6}>
                        <TextField
                            id="outlined-multiline-static"
                            label="Main Notice"
                            multiline
                            fullWidth
                            rows={3}
                            defaultValue="This is noticed from admin...keep an eye on to notice box for an update"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                        <TextField
                            id="outlined-multiline-static"
                            label="Withdraw Notice"
                            multiline
                            fullWidth
                            rows={3}
                            defaultValue="আপনি সর্বনিম্ন 1000 পয়েন্ট হলে ডলারে রূপান্তর করতে পারবেন। প্রতি 1000 পয়েন্ট সমান $0.05 থেকে 0.15 $ USD. আপনার ব্যালেন্সে সর্বনিম্ন ৫ পয়েন্ট রেখে উইথড্রো দিতে পারবেন।ধন্যবাদ।"
                        />
                    </Grid>
                </Grid>
                <Grid container spacing={2} mt={2}>
                    <Grid item xs={12} sm={6} md={6}>
                        <TextField
                            id="outlined-multiline-static"
                            label="Convert Notice"
                            multiline
                            fullWidth
                            rows={3}
                            defaultValue="test 1 "
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                        <TextField
                            id="outlined-multiline-static"
                            label="Video Notice"
                            multiline
                            fullWidth
                            rows={3}
                            defaultValue="test 1 "
                        />
                    </Grid>
                </Grid>
                <Button type="submit" variant="contained" color="secondary" sx={{float: 'right', marginTop: '20px'}}>Update</Button>
            </form>
        </Box>
    )
}
export default AppSettings;