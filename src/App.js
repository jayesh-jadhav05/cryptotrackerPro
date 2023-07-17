import React from 'react';
import './App.css';
import Home from './pages/Home';
import Compare from './pages/Compare';
import Watchlist from './pages/Watchlist';
import DashboardPage from './pages/DashboardPage';
import { Routes, Route } from 'react-router-dom';
import Coin from './pages/Coin';

function App() {
  return (
    <Routes>
      <Route path='/' element={ <Home /> } />
      <Route path='/compare' element={ <Compare /> } />
      <Route path='/watchlist' element={ <Watchlist /> } />
      <Route path='/dashboard' element={ <DashboardPage /> } />
      <Route path='/coin/:id' element={ <Coin />} />
    </Routes>
  );
}

export default App;
