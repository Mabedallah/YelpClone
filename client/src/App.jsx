import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./routs/Home";
import {RestaurantdetailsPage} from "./routs/RestaurantdetailsPage";
import {UpdatePage} from "./routs/UpdatePage";
import { RestaurantProvider } from "./context/RestaurantContext";

const App=()=> {
  return( 
  <RestaurantProvider>
  <div className='container'>
    <Router>
      {/* <Routes/> */}
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/restaurants/:id/update" element={<UpdatePage/>}/>
        <Route exact path="/restaurants/:id" element={<RestaurantdetailsPage/>}/>
      </Routes>
    </Router>
  </div>
  </RestaurantProvider>
  )}
export default App;