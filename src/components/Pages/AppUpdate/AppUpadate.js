import React from 'react';
import AppAbout from './AppAbout';
import AppAdsUnit from './AppAdsUnit';
import AppLinkSettings from './AppLinkSettings';
import AppSettings from './AppSettings';
import AppUpdateSettings from './AppUpdateSettings'
import TopTenLinkSettings from './TopTenLinkSettings';

const AppUpdate = () => {

    return (
        <>
            <AppUpdateSettings />
            <AppSettings />
            <AppAdsUnit />
            <AppLinkSettings />
            <TopTenLinkSettings />
            <AppAbout />
        </>
    );
}
export default AppUpdate;