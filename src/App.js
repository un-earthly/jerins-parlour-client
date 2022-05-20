import "react-responsive-carousel/lib/styles/carousel.min.css";
import Helmet from 'react-helmet'
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
function App() {
  return (
    <div className="App">
      <Helmet>
        <title>Home - Jarin's Parlour</title>
      </Helmet>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route />
        <Route />
        <Route />
      </Routes>


    </div>
  );
}

export default App;
