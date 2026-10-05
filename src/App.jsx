
import {BrowserRouter,Routes,Route, useLocation} from "react-router-dom";

import Navbar from "./Component/Navbar";
import Home from './Pages/Home';
import Login from './Pages/Login';
import Movies from './Pages/Movies';
import './App.css'
import MovieDetails from "./Pages/MovieDetails";
import SeatSelection from "./Pages/SeatSelection";
import Services from "./Pages/Services";
import BookingSummary from "./Pages/BookingSummary";
import MyBookings from "./Pages/MyBookings";


function AppContent(){
  const location = useLocation();
  const hideNavebar = location.pathname ==="/Login";

  return(
    <>
    {!hideNavebar && <Navbar/>}

    <Routes>
       
       <Route path="/" element={<Home />} />
       <Route path="/Movies" element={<Movies />} />
       <Route path="/Login" element={<Login />} />
       <Route path="/MovieDetails" element={<MovieDetails />} />
       <Route path="/SeatSelection" element={<SeatSelection />}/>
       <Route path="/Services" element={<Services />}/>
       <Route path="/BookingSummary" element={<BookingSummary />}/>
       <Route path="/MyBookings" element={<MyBookings />}/>

    </Routes>
    </>
  );
}


function App() {


  return (
    <>
    
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
    </>

  )
}

export default App;
