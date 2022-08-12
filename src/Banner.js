import React from 'react';
import bannerPNG from './assets/nftpalbanner.png'
import './Styles/Banner.css'



export function Banner (props) {
    return (
        <div className="header">
            <div className="banner">
                <img alt="NFTPal Banner" src={bannerPNG}/>
                <div className="menu">
                    <div className="buttonHolder"><button class="button-74" role="button"><span id="About">About</span></button></div>
                    <div className="buttonHolder2"><button class="button-74" role="button"><span id="Help">Help</span></button></div>
                </div>
            </div>
 
        </div>
    )
}
