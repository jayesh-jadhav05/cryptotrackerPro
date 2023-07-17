import React, { useEffect, useState } from 'react'
import GridComponent from '../components/Dashboard/Grid/GridComponent';
import {ToastContainer,toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from '../components/common/Header/Header';

const Watchlist = () => {
  const [CoinsData,setCoinsData] = useState([]);

  useEffect(() => {
    setCoinsData(JSON.parse(localStorage.getItem('WatchList')));
  },[])

  const removeWatchList = (coin) => {
    const newCoinsData = CoinsData.filter((singleCoin) => singleCoin[0].id !== coin.id)
      localStorage.setItem('WatchList',JSON.stringify(newCoinsData));
      setCoinsData(newCoinsData);
      toast.warning('Coin is Removed 👍', {position: "top-center",autoClose: 1000,hideProgressBar: false,closeOnClick: true,pauseOnHover: true,draggable: true,progress: undefined,theme: "dark",});
  };
 
  return (
      <>
    <Header />
    <div className='grid-flex'>
      {
        CoinsData.map((coin, index) => {
          return <GridComponent coin={coin[0]} key={index} addToWatchList={removeWatchList}/>
        })
      }
      <ToastContainer />
    </div>
    </>
  )
}

export default Watchlist