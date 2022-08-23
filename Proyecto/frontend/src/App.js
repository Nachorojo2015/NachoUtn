
import './App.css';
import Header from './components/layout/Header';
import Nav from './components/layout/Nav';
import Footer from './components/layout/Footer';
import ContactoPage from './pages/ContactoPage';
import HomePage from './pages/HomePage';
import NosotrosPage from './pages/NosotrosPage';
import NovedadesPage from './pages/NovedadesPage';



import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      
      <Header/>
      <BrowserRouter>
       <Nav/>
       <Routes>
         <Route path='/' element={<HomePage/>}></Route>
         <Route path='/nosotros' element={<NosotrosPage/>}></Route>
         <Route path='/contacto' element={<ContactoPage/>}></Route>
         <Route path='/novedades' element={<NovedadesPage/>}></Route>
       </Routes>

      </BrowserRouter>
      <Footer/>


     
      
    </div>
  );
}

export default App;
