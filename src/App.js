import React from 'react';
import { Routes, Route } from 'react-router';

import Ordenes from './components/page/Ordenes';
import Menu from './components/page/Menu';
import NuevoPlatillo from './components/page/NuevoPlatillo';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={ <Ordenes /> } />
        <Route path="/menu" element={ <Menu /> } />
        <Route path="/nuevo-platillo" element={ <NuevoPlatillo /> } />
      </Routes>
    </div>
  );
}



export default App;
