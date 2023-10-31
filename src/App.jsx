import {  Outlet, Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { Dashboard, Home, Login, Profile, Register, ResetPassword } from './pages';
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
  const { theme } = useSelector((state) => state.theme);
  console.log(theme);
  return (
    <div data-theme = {theme} className="w-full min-h-[100vh]">
      <Routes>
        <Route element={<Layout />}> 
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/profile/:id?' element={<Profile />} >    
          </Route>
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
