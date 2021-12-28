import React from 'react';
import TaskCompleteData from './TaskCompleteData';
import UserInfo from './UsersInfo';
import UserRgData from './UserRgData';
import ClickComplete from './ClickComplete';

const Dashboard = () => {

    return (
        <>
            <UserRgData />
            <TaskCompleteData />
            <ClickComplete/>
            <UserInfo />
        </>
    );
}

export default Dashboard;