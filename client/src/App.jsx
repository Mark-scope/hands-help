import React from 'react';
import { Outlet, Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { Dashboard, Home, Login, Register, ResetPassword, Settings, MakeACall, AnswerCall, VDashboard, Vnotification, HowItWorks, Contact, CallSearch } from './pages';
import { useSelector } from 'react-redux';

function Layout({user}) {

  const location = useLocation();


  return user[0]?.token ? (
    <Outlet /> // Protect routes
  ) : (
    <Navigate to='/login' state={{ from: location }} replace />
  )
}

function App() {
  const { user } = useSelector(state => state.user);

  return (
    <div className="w-full min-h-[100vh]">
      <Routes>
        <Route element={<Layout user={user} />}>
          <Route path='/dashboard' element={user[0]?.accountType === 'volunteer' ? <VDashboard /> : <Dashboard />} />
          <Route path='/makeacall' element={<MakeACall />} />
          <Route path='/dashboard/contact' element={<Contact />} />
          <Route path='/dashboard/notification' element={<Vnotification />} />
          <Route path='/dashboard/how-it-works' element={<HowItWorks />} />
          <Route path='/dashboard/settings' element={<Settings />} />
          <Route path='/dashboard/call-search' element={<CallSearch />} />
          <Route path='/dashboard/answercall' element={<AnswerCall />} />
        </Route>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/reset-password' element={<ResetPassword />} />
      </Routes>
    </div>
  );
}

export default App;