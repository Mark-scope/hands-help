import {  Outlet, Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { Dashboard, Home, Login, Register, ResetPassword, Settings, MakeACall } from './pages';
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
        <Route path='/login' element={<Login />} />
        <Route path='/reset-password' element={<ResetPassword />} />
        <Route path='/settings' element={<Settings />} />
        
      </Routes>
    </div>
  );
}

export default App;