import React, { useEffect, useState } from 'react'
import { get100Coins } from '../../../functions/get100Coins'
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import './selectcoinstyle.css';

const SelectCoinsComponent = ({crypto1,crypto2,handleCoinChange}) => {

    const [allCoins, setAllCoins] = useState([]);

    const styles = {
        height: "2.5rem",
        color: "var(--white)",
        "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "var(--white)",
        },
        "& .MuiSvgIcon-root": {
            color: "var(--white)",
        },
        "&:hover": {
            "&& fieldset": {
                borderColor: "#3a80e9",
            },
        },
    }

    useEffect(() => {
        getData();
    }, [])

    async function getData() {
        const myCoins = await get100Coins();
        setAllCoins(myCoins);
    }

    return (
        <div className='coin-flex'>
            <p>Coin1</p>
            <Select sx={styles} label="Crypto1" value={crypto1} onChange={(event) => handleCoinChange(event,false)}>
                {allCoins.filter((item) => item.id !== crypto2).map((coin) => (
                    <MenuItem value={coin.id}>{coin.name}</MenuItem>
                ))}
            </Select>

            <p>Coin2</p>
            <Select sx={styles} label="Crypto2" value={crypto2} onChange={(event) => handleCoinChange(event,true)}>
                {allCoins.filter((item) => item.id !== crypto1).map((coin) => (
                    <MenuItem value={coin.id}>{coin.name}</MenuItem>
                ))}
            </Select>
        </div>
    )
}

export default SelectCoinsComponent