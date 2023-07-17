import React, { useState } from 'react';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { createTheme, ThemeProvider } from '@mui/material';
import GridComponent from '../Grid/GridComponent';
import './tabsComponent.css';
import ListComponent from '../List/ListComponent';
import {ToastContainer,toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {motion} from 'framer-motion';


export default function TabComponent({ coins }) {

  const [value, setValue] = useState("grid");


  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const theme = createTheme({
    palette: {
      primary: {
        main: "#3a80e9"
      },
    },
  });

  const style = {
    color: "var(--white)",
    fontSize: "1.2rem",
    fontWeight: 600,
    textTransform: "capitalize"
  };
 
  if (JSON.parse(localStorage.getItem('WatchList')) === null) {
    localStorage.setItem('WatchList', JSON.stringify([]));
  }
  //This Function Check The Coin Is aleady Present Or Not..
  // function isObjectPresentInArray(arr, obj) {
  //   return arr.some(item => JSON.stringify(item[0]) === JSON.stringify(obj));
  // }

  const check = (coins,coin) => {
      for(let i=0; i<coins.length;i++){
             if(coins[i][0].id === coin.id) 
             {
              return true;
             }
      }
      return false;
  };

  const addToWatchList = (coinData) => {
      console.log(coinData)
      var data = JSON.parse(localStorage.getItem('WatchList'));
      
      if (check(data,coinData) === false) {
        const arr = [coinData,true];
        data.push(arr);
        localStorage.setItem('WatchList', JSON.stringify(data));
        toast.success('Coin added in WatchList 👍', {position: "top-center",autoClose: 1000,hideProgressBar: false,closeOnClick: true,pauseOnHover: true,draggable: true,progress: undefined,theme: "dark",});
      } else {
        const newObj = data.filter((coin) => coin[0].id !== coinData.id);
        localStorage.setItem('WatchList', JSON.stringify(newObj));
        toast.warning('Coin is Removed 👍', {position: "top-center",autoClose: 1000,hideProgressBar: false,closeOnClick: true,pauseOnHover: true,draggable: true,progress: undefined,theme: "dark",});
      }
  };

  return (
    <ThemeProvider theme={theme}>
      <TabContext value={value}>
        <TabList onChange={handleChange} variant='fullWidth'>
          <Tab label="Grid" value="grid" sx={style} />
          <Tab label="List" value="list" sx={style} />
        </TabList>
        <TabPanel value="grid">
          <div className='grid-flex'>
            {
              coins.map((coin, index) => {
                return <motion.div initial={{ opacity:0, x:-50}} animate={{ opacity:1, x:0}} transition={{ duration:0.5 ,delay:0.5}}><GridComponent coin={coin} key={index} addToWatchList={addToWatchList}  /></motion.div>
              })
            }
          </div>
        </TabPanel>
        <TabPanel value="list">
          <table className='list-table'>
            {
              coins.map((coin, index) => {
                return <motion.div initial={{ opacity:0, x:-50}} animate={{ opacity:1, x:0}} transition={{ duration:0.5 ,delay:0.5}}><ListComponent coin={coin} key={index}  /></motion.div>
              })
            }
          </table>
        </TabPanel>
      </TabContext>
      <ToastContainer />
    </ThemeProvider>
  );
}