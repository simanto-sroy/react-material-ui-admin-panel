import React from 'react';
import { Box, Button, TextField } from '@mui/material';

const Search = () => {

    const handleSubmit = (e) => {

        e.preventDefault();
    }

    return (
        <Box py={2} pb={3}>
            <form onSubmit={handleSubmit}>
                <TextField sx={{width: '35%', }} id="filled-basic" label="Email" variant="outlined" focused/>
                <Button style={{ marginLeft: '40px', marginTop: '5px', boxShadow: 'none'}} type="submit" size="large" variant="contained">Search</Button>
            </form>
        </Box>
    );
}
export default Search;