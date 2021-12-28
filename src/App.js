import React from 'react';
import './App.css';
import { Routes, Route} from "react-router-dom";
import Index from "./components/Index";
import Dashboard from './components/Pages/Dashboard/Dashboard';
import PendingList from './components/Pages/Withdraw/PendingList';
import ApprovedList from './components/Pages/Withdraw/ApprovedList';
import RejectList from './components/Pages/Withdraw/RejectList';
import AllList from './components/Pages/Withdraw/AllList';
import AllUsers from './components/Pages/Users/AllUsers';
import ActiveUsers from './components/Pages/Users/ActiveUsers';
import BlockUsers from './components/Pages/Users/BlockUsers';
import Settings from './components/Pages/Settings/Settings';
import AppUpdate from './components/Pages/AppUpdate/AppUpadate';
import PaymentMethod from './components/Pages/PaymentMethod/PaymentMethod';
import ScrollToTop from './components/Pages/ScrollToTop/ScrollToTop';
import Login from './components/Auth/Login';

function App() {
  return (
    <>
        <ScrollToTop />
        <Routes>
          <Route path="/" exact element={<Login />}></Route>
          <Route path="/" element={<Index />}>
              <Route path="/dashboard" element={<Dashboard />}></Route>
              <Route path="/dashboard/withdraw/panding-list" element={<PendingList />}></Route>
              <Route path="/dashboard/withdraw/approved-list" element={<ApprovedList />}></Route>
              <Route path="/dashboard/withdraw/reject-list" element={<RejectList />}></Route>
              <Route path="/dashboard/withdraw/all-list" element={<AllList />}></Route>
              <Route path="/dashboard/users/all-users" element={<AllUsers />}></Route>
              <Route path="/dashboard/users/active-users" element={<ActiveUsers />}></Route>
              <Route path="/dashboard/users/block-users" element={<BlockUsers />}></Route>
              <Route path="/dashboard/settings" element={<Settings />}></Route>
              <Route path="/dashboard/app-updated" element={<AppUpdate />}></Route>
              <Route path="/dashboard/payment-method" element={<PaymentMethod />}></Route>
          </Route>
        </Routes>
    </>
  );
}

export default App;
