import React, { useEffect } from 'react';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Homeview from './views/Homeview';
import Link from './views/Link';

const App = () => {

  useEffect(()=>{
    Link();
  })
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Homeview />} />       
        </Routes>
    </BrowserRouter>
  )
}

export default App