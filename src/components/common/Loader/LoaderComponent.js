import React from 'react'
import { CircularProgress } from '@mui/material';


const divStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100vw',
    height: '75vh',
    backgroundColor: "var(--black)",
    color: "var(--blue)",
    position: "absolute",
    zIndex: 1000,
    overflowY: "hidden",
    overflowX: "hidden"
}

const LoaderComponent = () => {
  return (
    <div style={divStyle}><CircularProgress /></div>
  )
}

export default LoaderComponent;