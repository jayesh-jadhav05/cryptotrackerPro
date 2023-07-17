import React, { useState } from 'react'
import './gridstyle.css';
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import TrendingDownRoundedIcon from "@mui/icons-material/TrendingDownRounded";
import { NavLink } from 'react-router-dom';
import StarRoundedIcon from '@mui/icons-material/StarRounded';

const GridComponent = ({ coin,addToWatchList }) => {
     const [red, setRed] = useState({border: "2px solid var(--red)", borderRadius: "50%", padding: "0.3rem"})
    const [green, setGreen] = useState({border:"2px solid var(--green)", borderRadius: "50%", padding: "0.3rem"})
    const [isGreenTrue,setIsGreenTrue] = useState(true);
    const [isRedTrue,setIsRedTrue] = useState(true);

    const changeColor = (colorType) => {
        if(colorType === "red") {
            if(isRedTrue) {
                setRed({...red,color:"var(--red)"});
            }else {
                setRed({...red,color:"var(--white)"});
            }
            setIsRedTrue(!isRedTrue);
        } else {
            if(isGreenTrue) {
                setGreen({...green,color:"var(--green)"});
            }else {
                setGreen({...green,color:"var(--white)"});
            }
            setIsGreenTrue(!isGreenTrue);
        }
    }
    

    return (
        <div className={`grid-container ${coin.price_change_percentage_24h < 0 && "grid-container-red"}`} >
            <div className='first-container'>
                <NavLink to={`/coin/${coin.id}`}>
                    <div className='info-flex'>
                        <img src={coin.image} alt={coin.name} className='coin-logo' />

                        <div className='name-col'>
                            <p className='coin-symbol'>{coin.symbol}</p>
                            <p className='coin-name'>{coin.name}</p>
                        </div>

                    </div>
                </NavLink>
                {
                    coin.price_change_percentage_24h < 0 ?
                    <div className='watchlist-container' onClick={() => addToWatchList(coin)}>
                        <StarRoundedIcon style={red} onClick={() => changeColor("red")}/>
                    </div>
                    : <div className='watchlist-container' onClick={() => addToWatchList(coin)}>
                        <StarRoundedIcon style={green} onClick={() => changeColor("green")} />
                    </div>
                }
            </div>


            <NavLink to={`/coin/${coin.id}`}>
                {coin.price_change_percentage_24h > 0 ? (
                    <div className='chip-flex'>
                        <div className='price-chip'>{coin.price_change_percentage_24h.toFixed(2)}%</div>
                        <div className='icon-chip'> <TrendingUpRoundedIcon /> </div>
                    </div>
                ) : (
                    <div className='chip-flex'>
                        <div className='price-chip chip-red'>{coin.price_change_percentage_24h.toFixed(2)}%</div>
                        <div className='icon-chip chip-red'> <TrendingDownRoundedIcon /> </div>
                    </div>
                )}
                <div className='info-container'>
                    <h3 className='coin-price' style={{ color: coin.price_change_percentage_24h < 0 ? "var(--red)" : "var(--green)" }}>${coin.current_price.toLocaleString()}</h3>
                    <p className='total_volume'>Total Volume : {coin.total_volume.toLocaleString()}</p>
                    <p className='total_volume'>Market Cap : ${coin.market_cap.toLocaleString()}</p>
                </div>
            </NavLink>
        </div>
    )
}

export default GridComponent