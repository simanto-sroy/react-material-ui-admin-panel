import React from 'react';
import MainSettings from './MainSettings';
import MathQuizSettings from './MathQuizSettings';
import ScratchCardSettings from './ScratchCardSettings';
import SpinSettings from './SpinSettings';
import WatchVideoSettings from './WatchVideoSettings';

const Settings = () => {

    return (
        <>
            <MainSettings />
            <SpinSettings />
            <MathQuizSettings />
            <WatchVideoSettings />
            <ScratchCardSettings />
        </>
    );
}
export default Settings;