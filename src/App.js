import "react-responsive-carousel/lib/styles/carousel.min.css";
import Helmet from 'react-helmet'
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Login from "./Pages/Login/Login";
import Dashboard from "./Pages/Dashboard/Dashboard";
import MyTreatment from "./Pages/Dashboard/MyTreatment";
import MyBookings from "./Pages/Dashboard/MyBookings";
import MyReview from "./Pages/Dashboard/MyReview";
function App() {
  return (
    <div className="App">
      <Helmet>
        <title>Home - Jarin's Parlour</title>
      </Helmet>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route />
        <Route path='/dashboard' element={<Dashboard />}>
          <Route index element={<MyTreatment />} />
          <Route path='/dashboard/my-treatment' element={<MyTreatment />} />
          <Route path='/dashboard/my-bookings' element={<MyBookings />} />
          <Route path='/dashboard/my-revirw' element={<MyReview />} />
        </Route>
        <Route path='/login' element={<Login />} />
      </Routes>


    </div>
  );
}

export default App;
