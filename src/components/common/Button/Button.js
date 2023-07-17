import React from 'react'

const Button = ({btnName,onClick,outlinebtn}) => {
  return (
    <div className={outlinebtn?'outlined-btn':'btn'} onClick={onClick}>{btnName}</div>
  )
}

export default Button;