import {  Outlet, Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { Dashboard, Home, Login, Register, ResetPassword, Settings, MakeACall,AnswerCall, VDashboard, Vnotification, HowItWorks, Contact, CallSearch } from './pages';
import { useSelector } from 'react-redux';


function Layout(){
  const { user } = useSelector(state => state.user)
  const location = useLocation();
  // console.log(user)

  return user?.token ? (
    <Outlet /> //Protect routes
  ) : (
    <Navigate to='/login' state={{ from: location }} replace />
  )
 
}

function App() {

  return (
    <div className="w-full min-h-[100vh]">
      <Routes>
        <Route element={<Layout />}> 
          <Route path='/dashboard' element={<Dashboard />} />  
        </Route>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/makeacall' element={<MakeACall />} />
        <Route path='/volunteer-dashboard' element={<VDashboard />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/dashboard/notification' element={<Vnotification />} />
        <Route path='/howitworks' element={<HowItWorks />} />
        <Route path='/login' element={<Login />} />
        <Route path='/reset-password' element={<ResetPassword />} />
        <Route path='/volunteer-dashboard/settings' element={<Settings />} />
        <Route path='/volutenteer-dashboard/how-it-works' element={<HowItWorks />} />
        <Route path='/volunteer-dashboard/contact' element={<Contact />} />
        <Route path='/volunteer-dashboard/answercall' element={<AnswerCall />} />
        <Route path='/dashboard/call-search' element={<CallSearch />} />
        
      </Routes>
    </div>
  );
}

export default App;
