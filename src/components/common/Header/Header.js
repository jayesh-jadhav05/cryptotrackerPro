import React, { useState } from 'react'
import './header.css';
import TemporaryDrawer from './drawer'
import Button from '../Button/Button';
import { NavLink } from 'react-router-dom';
import SwitchColor from '../Switch/SwitchColor';
import { toast } from 'react-toastify';

const Header = () => {
  const [filter,setFilter] = useState(false);

  const handleColorChange = (colors) => {
    Object.entries(colors).forEach(([variable, color]) => {
      document.documentElement.style.setProperty(variable, color);
    });
  };


  const changeTheme = () => {
    if(filter)
    {
      toast.success('Dark Theme ON 👍', { position: "top-center", autoClose: 1000, hideProgressBar: false, closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined, theme: "dark", });
    } else {
      toast.success('Light Theme ON 👍', { position: "top-center", autoClose: 1000, hideProgressBar: false, closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined, theme: "dark", });
    }
    setFilter(!filter)
  };

  return (
    <div className='Header'>
      <h2 className='logo'>CryptoTrackerPro<span style={{ color: "var(--red)" }}>.</span><span style={{ color: "var(--blue)" }}>.</span><span style={{ color: "var(--green)" }}>.</span></h2>
      <div className='colorFilter'>
      <p className="toggleIcon-head" onClick={changeTheme}><SwitchColor filter={filter} handleColorChange={handleColorChange} /></p>
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
      </div>
      <div className='responsive-drawer'>
         <TemporaryDrawer />
      </div>
    </div>
  )
}

export default Header;
