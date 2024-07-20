import logo from './logo.svg';
import './App.css';

import Menu from "./Components/Menu";
import About from "./Components/About";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import {Route,Routes} from "react-router-dom";
import Vehiclelist from "./Components/Vehicle-list";

function App() {
  return (
    <>
    <Menu/>
    
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/Vehicles" element={<Vehiclelist/>}/>
    </Routes>
    <Footer/>
    </>
  )

 
}

export default App;


