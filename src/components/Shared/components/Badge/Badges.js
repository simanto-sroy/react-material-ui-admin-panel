import React from 'react';
import { Badge } from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';

const Badges = () => {

    return (
        <>
            <Badge badgeContent={4} sx={{ cursor: 'poiner', marginRight: '15px'}} color="primary">
                <MailIcon sx={{ color: 'white'}} color="action" />
            </Badge>
            <Badge badgeContent={2} sx={{ cursor: 'poiner', marginRight: '15px'}} color="primary">
                <CircleNotificationsIcon sx={{ color: 'white'}} color="action" />
            </Badge>
        </>
    );
}

export default Badges;