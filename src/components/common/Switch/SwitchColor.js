import React from "react";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

const SwitchColor = ({ handleColorChange,filter }) => {
   
    return (
       <React.Fragment>
            {
                filter ? 
                <p onClick={() => handleColorChange({ "--black": "#111", "--white": "#fff","--darkgrey":"#1b1b1b","--blue":"#3a80e9","--grey":"#888"})}><DarkModeIcon  style={{ fontSize: '2rem',paddingTop:"0.5rem" }} /></p> 
                : <p onClick={() => handleColorChange({ "--black": "#fff", "--white": "#111","--darkgrey":"#CCCCFF","--blue":"#0ef","--grey":"#454545"})}><LightModeIcon  style={{ fontSize: '2rem',paddingTop:"0.5rem",color:"FFDE59"}} /></p>
            }
        </React.Fragment>   
    )
};

export default SwitchColor;