import React from 'react'
import './header.css';
import TemporaryDrawer from './drawer'
import Button from '../Button/Button';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div className='Header'>
      <h2 className='logo'>CryptoTrackerPro<span style={{ color: "var(--red)" }}>.</span><span style={{ color: "var(--blue)" }}>.</span><span style={{ color: "var(--green)" }}>.</span></h2>
      <div className='navLinks'>
        <NavLink to="/">
          <p className='link'>Home</p>
        </NavLink>
  
        <NavLink to="/compare">
          <p className='link'>Compare</p>
        </NavLink>
   
        <NavLink to="/watchlist">
          <p className='link'>Watchlist</p>
        </NavLink>
        
        <NavLink to="/dashboard">
           <Button btnName='Dashboard' onClick={() => console.log('btn clicked')}/>
        </NavLink>
      </div>
      <div className='responsive-drawer'>
         <TemporaryDrawer />
      </div>
    </div>
  )
}

export default Header;