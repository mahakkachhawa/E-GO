import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import Start from './pages/Start'
import UserLogin from './pages/UserLogin'
import UserSignup from './pages/UserSignup'
import Captainlogin from './pages/Captainlogin'
import CaptainSignup from './pages/CaptainSignup'
import Home from './pages/Home'
import UserProtectWrapper from './pages/UserProtectWrapper'
import UserLogout from './pages/UserLogout'
import CaptainHome from './pages/CaptainHome'
import CaptainProtectWrapper from './pages/CaptainProtectWrapper'
import CaptainLogout from './pages/CaptainLogout'
import Riding from './pages/Riding'
import CaptainRiding from './pages/CaptainRiding'
import 'remixicon/fonts/remixicon.css'
import Header from './components/Header'; // Import the Header
import About from "./pages/About";
import Help from "./pages/Help";
import Riders from "./components/Riders";
import Driving from "./components/Driving";
import Bikes from "./components/Bikes";
import Bussiness from "./components/Bussiness";
import CarbonFootprint from "./pages/CarbonFootprint";
import SendSMS from './pages/SendMessage';


const App = () => {

  return (
    <div>
        <Header /> {/* Add Header at the top */}
      <Routes>
        <Route path='/' element={<Start />} />
        <Route path="/about" element={<About />} />
        <Route path="/help" element={<Help />} />
        <Route path="/help/riders" element={<Riders />} />
        <Route path="/help/driving" element={<Driving />} />
        <Route path="/help/bikes" element={<Bikes />} />
        <Route path="/help/bussiness" element={<Bussiness />} />
        <Route path='/login' element={<UserLogin />} />
        <Route path='/riding' element={<Riding />} />
        <Route path='/captain-riding' element={<CaptainRiding />} />
        <Route path="/carbon-footprint" element={<CarbonFootprint />} />

        <Route path='/signup' element={<UserSignup />} />
        <Route path='/send-message' element={<SendSMS />} />
        <Route path='/captain-login' element={<Captainlogin />} />
        <Route path='/captain-signup' element={<CaptainSignup />} />
        <Route path='/home'
          element={
            <UserProtectWrapper>
              <Home />
            </UserProtectWrapper>
          } />
        <Route path='/user/logout'
          element={<UserProtectWrapper>
            <UserLogout />
          </UserProtectWrapper>
          } />
        <Route path='/captain-home' element={
          <CaptainProtectWrapper>
            <CaptainHome />
          </CaptainProtectWrapper>

        } />
        <Route path='/captain/logout' element={
          <CaptainProtectWrapper>
            <CaptainLogout />
          </CaptainProtectWrapper>
        } />
      </Routes>
    </div>
  )
}

export default App