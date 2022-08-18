import "./Styles/Menu.css";
import React, { useEffect } from "react";
import playButton from './assets/button.png'
import useState from 'react-usestateref'


export const NightModeToggle = (props) => {

    const [nightModeStatus, toggleNightMode, nightModeRef] = useState(true);
    let propsFunc = props.func;


    const handleClick = () => {
        toggleNightMode(!nightModeStatus);
        propsFunc();
    }

    const nightModeChecker = () => {
        if (nightModeStatus === false) {
            return 'OFF'
        } else {
            return 'ON'
        }
    }


    return (
        <>
          <div className="buttonLabelDiv" style={{
            backgroundImage: `url(${playButton})`,
            backgroundSize: 'cover'
          }}
          onClick={handleClick}>
            
            <span id="NightModeLabel">Night mode: <strong>{nightModeChecker()}</strong></span>
            </div>
        </>
    )
}

export const ManualRefreshButton = (props) => {
    const [refreshStatus, toggleRefreshAnimation] = useState('Refresh All')
    

    const refreshAnimation = () => {
        setTimeout(() => {
            toggleRefreshAnimation('Refreshing')
            setTimeout(() => {
                toggleRefreshAnimation('Refreshing.')
                setTimeout(() => {
                    toggleRefreshAnimation('Refreshing..')
                    setTimeout(() => {
                        toggleRefreshAnimation('Refreshing...')
                        setTimeout(() => {
                            toggleRefreshAnimation('Refresh All')
                        }, 350);
                    }, 400);
                }, 400);
            }, 400);
        }, 5);
    }

    return (
        <>
        
        <div onClick={() => {
            refreshAnimation();
            props.refresh();
        }} className="buttonLabelDiv2" style={{
            backgroundImage: `url(${playButton})`,
            backgroundSize: 'cover'
          }}
          >
            <span id="ManualRefreshLabel">{refreshStatus}</span>
          </div>
        </>
    )
}

export const AutoRefreshButton = (props) => {
    const [refreshStatus, toggleRefreshStatus] = useState(false);
    const [clickedTimer, setTimer] = useState(300000)
    const [defaultChecked, setDefaultChecked, defaultCheckRef] = useState(false) 


    const clickedChecker = () => {
        if (defaultChecked === false) {
            return false;
        } else {
            return true;
        }
    }
    //style handling
    const autoRefreshStatusSpan = () => {
        if (refreshStatus === true) {
            return 'ON'
        } else {
            return 'OFF'
        }
    }
    //gets the input value for the timer
    const handleChange = (e) => {
        let inputTimer = e.target.value;
        console.log(e.target.value);
        setTimer(inputTimer);
        props.intervalFunc(clickedTimer)
    }

    useEffect(() => {

    }, [])
    


    return (
        <>
        <div className="autorefreshoptions">
            <div className="auto1" id="1" ><input  onChange={handleChange} type="radio" name="uo" id="demo" value="180000"/>
<label className="a1label" htmlFor="demo"><span>3m</span></label></div>
            <div className="auto2" id="2"  ><input  onChange={handleChange}type="radio" name="uo" checked={defaultChecked} id="demo2" value="300000"/>
<label className="a2label" htmlFor="demo2"><span>5m</span></label></div>
            <div className="auto3" id="3"  ><input  onChange={handleChange}type="radio" name="uo" id="demo3" value="600000"/>
<label className="a3label" htmlFor="demo3"><span>10m</span></label></div>
        </div>
        <div onClick={() => {
            toggleRefreshStatus(!refreshStatus)
            setDefaultChecked(!defaultChecked)
            props.func();
        }} className="buttonLabelDiv3" style={{
            backgroundImage: `url(${playButton})`,
            backgroundSize: 'cover'
          }}
          >
            <span id="AutoRefreshLabel">Auto-Refresh: {autoRefreshStatusSpan()}</span>
          </div>
        </>
    )
}


export function ETHPrice(props) {
    //usestate for eth price
    const [ethPrice, setETHPrice] = useState();
    const [spanText, setSpanText] = useState("")



    const fetchETHPrice = () => {
        const options = {method: 'GET'};
        setTimeout(() => {
            setETHPrice("")
           setSpanText("Updating")
                setTimeout(() => {
                    setSpanText("Updating.")
                        setTimeout(() => {
                           setSpanText("Updating..")
                           setTimeout(() => {
                            setSpanText("ETH:$ ")
                            fetch("https://api.coinbase.com/v2/prices/ETH-USD/spot", options)
                            .then(response => response.json())
                            .then(response => {
                            let eth = response.data.amount;
                            console.log(response)
                            setETHPrice(eth);
                            })
                           }, 777);
            }, 555);
           }, 555);
        }, 100);
      }
      
    useEffect(() => {
        fetchETHPrice();
    }, [])

    
    return (
        <>
        <div className="buttonLabelDiv4" style={{
            backgroundImage: `url(${playButton})`,
            backgroundSize: 'cover'
          }}
          onClick = {()=> {fetchETHPrice()}} 
          >
            <span id="ETHPriceUSD">{spanText}<strong>{ethPrice}</strong></span>
          </div>
        </>
    )
}