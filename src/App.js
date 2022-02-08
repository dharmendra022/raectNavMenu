import React from 'react';
import Menu from './Menu';
import Service from './Service';
import About from './About';
import { Link, Route, Routes } from 'react-router-dom';
import Mess from './Mess';

const App = () => {

  return (
    <>
    <Menu/>
    <h1>This is App Page</h1>
     <Routes>
     <Route exact path='/about' element={<About/>} />
       <Route path='/service' element={<Service/>} />
       <Route path='/mess' element={<Mess/>} />

     </Routes>
    </>
  )
};

export default App;
