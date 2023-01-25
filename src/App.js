import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Body from './components/bodyHome/Body';
import BodyUs from './components/bodyUs/BodyUs';
import BodyService from './components/bodyService/BodyService';
import BodyCampus from './components/bodyCampus/BodyCampus';
import BodyContact from './components/bodyContact/BodyContact';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Router>
          <Navbar/>

          <Routes>
            <Route exact={true} path='/' element={<Body/>}/>
            <Route exact={true} path='/Nosotros' element={<BodyUs/>}/>
            <Route exact={true} path='/Servicios' element={<BodyService/>}/>
            <Route exact={true} path='/Sedes' element={<BodyCampus/>}/>
            <Route exact={true} path='/Contacto' element={<BodyContact/>}/>
          </Routes>

          <Footer/>
      </Router>   
    </div>
  );
}

export default App;