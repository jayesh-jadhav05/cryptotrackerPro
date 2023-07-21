import React, { useEffect, useState } from 'react'
import GridComponent from '../components/Dashboard/Grid/GridComponent';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from '../components/common/Header/Header';
import Button from '../components/common/Button/Button';
import { NavLink } from 'react-router-dom';

const Watchlist = () => {
  const [CoinsData, setCoinsData] = useState([]);


 const obj = {
  display:"flex",
  justifyContent:"center",
  marginTop:"5rem"
 }

  useEffect(() => {
    setCoinsData(JSON.parse(localStorage.getItem('WatchList')));
  }, [])

  const removeWatchList = (coin) => {
    toast.warning('Coin is Removed 👍', { position: "top-center", autoClose: 1000, hideProgressBar: false, closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined, theme: "dark", });
    const newCoinsData = CoinsData.filter((singleCoin) => singleCoin[0].id !== coin.id)
    localStorage.setItem('WatchList', JSON.stringify(newCoinsData));
    setCoinsData(newCoinsData);
  };


  const Empty = () => {
    return (
      <div className='empty-div' style={obj}>
        <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
        <h5 style={{fontSize:"2rem"}}>Please add Coins..</h5>
        <NavLink to="/dashboard"><Button btnName="Dashboard"/></NavLink>
        </div>
      </div>
    )
  };

  return (
    <React.Fragment>
      <Header />
      {
        CoinsData.length <= 0 ? (<Empty />) :

          (<div className='grid-flex'>
            {
              CoinsData.map((coin, index) => {
                return <GridComponent coin={coin[0]} key={index} addToWatchList={removeWatchList} />
              })
            }
          </div>
          )
      }
    </React.Fragment>
  )
}

export default Watchlist