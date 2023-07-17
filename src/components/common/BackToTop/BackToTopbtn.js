import React from 'react'
import ArrowUpwardRoundedIcon from '@mui/icons-material/ArrowUpwardRounded';

// Inline Style for Back-To-Top Button...
const style = {
  position: 'fixed',
  bottom: '1.5rem',
  right: '1.5rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '2.5rem',
  height: '2.5rem',
  border: '2px solid var(--blue)',
  borderRadius: '50%',
  margin: '1.5rem',
  cursor: 'pointer'
}

const BackToTopbtn = () => {

  let myButton = document.getElementById("myBtn");

  window.onscroll = function () {
    scrollFunction();
  }

  const scrollFunction = () => {
    if (
      document.body.scrollTop > 300 ||
      document.documentElement.scrollTop > 300
    ) {
      myButton.style.display = "flex";
    } else {
      myButton.style.display = "none";
    }
  };

  const topFunction = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  return (
    <div style={style} id='myBtn' onClick={() => topFunction()}>
      <ArrowUpwardRoundedIcon style={{ color: "var(--blue)" }} />
    </div>
  )
}

export default BackToTopbtn