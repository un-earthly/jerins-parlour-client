import "react-responsive-carousel/lib/styles/carousel.min.css";
import Helmet from 'react-helmet'
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Login from "./Pages/Login/Login";
import Dashboard from "./Pages/Dashboard/Dashboard";
import MyAppointment from "./Pages/Dashboard/MyAppointment";
import MyBookings from "./Pages/Dashboard/MyBookings";
import MyReview from "./Pages/Dashboard/MyReview";
import { useEffect } from "react";
import HomeContact from "./Pages/Home/HomeContact";
import Team from "./Components/Team";
import Nav from "./Shared/Nav";
function App() {
  useEffect(() => {

  }, [])

  //  "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.6.1/gsap.js" 

     
  return (
    <div className="App">
      <Helmet>
        <title>Home - Jarin's Parlour</title>
      </Helmet>
      <Routes>
        <Route />
        <Route path='/' element={<Nav><Home /> </Nav>} />
        <Route path="/contact" element={<Nav> <HomeContact /></Nav>} />
        <Route path="/team" element={<Nav><Team /></Nav>} />
        <Route path='/dashboard' element={<Dashboard />}>
          <Route index element={<MyAppointment />} />
          <Route path='/dashboard/my-appointment' element={<MyAppointment />} />
          <Route path='/dashboard/my-bookings' element={<MyBookings />} />
          <Route path='/dashboard/my-review' element={<MyReview />} />
        </Route>
        <Route path='/login' element={<Nav><Login /></Nav>} />
      </Routes>

    </div>
  );
}

export default App;
