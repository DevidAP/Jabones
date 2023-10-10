import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Soap from './pages/Soap';
import NotFound from './pages/NotFound';
import Navbar from './components/Navbar';
import Shampoo from './pages/Shampoo';
import OilMacerated from './pages/OilMacerated';
import Tonics from './pages/Tonics';

export default function App() {
  return (
    <BrowserRouter>
    <Navbar/>
        <Routes>
            <Route path='/' element={ <Home />  }/>
            <Route path='/soap' element={ <Soap /> }/>
            <Route path='*' element={<NotFound/>}/>
            <Route path='/shampoo' element={<Shampoo />} />
            <Route path='/oilmacerated' element={<OilMacerated />} />
            <Route path='/tonics' element={<Tonics />} />

        </Routes>
    </BrowserRouter>

    )
}
