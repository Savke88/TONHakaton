import React, { useState } from 'react';
import wallet from './images/wallet.png';
import zuttaxi from './images/zuttaxi.png';
import withdraw from './images/withdraw.png';
import deposit from './images/deposit.png';
import coin from './images/coin.png';
import './styles.css';

function Second() {
    const [showPopup, setShowPopup] = useState(false);
    const togglePopup = () => {
        setShowPopup(!showPopup);
    };
    return(
        <div className="app-container">
        <div className='headeri'>WALLET</div>

        {/* Balance Box */}
        <div className="boxouter">
            <p className="balance-label">Balance</p>
            <div className="boxinner">
                <img src={coin} className='coinImage'></img>
                <p className="balance-amount">$1,250.00</p>
            </div>
        </div>

        <div className="transaction-icons">
            <img src={deposit} className='transaction'></img>
            <img src={withdraw} className='transaction'></img>
        </div>

        {/* Orders Box */}
        <div className="orders-box">
            <h2>Orders</h2>
            <p>No recent orders.</p>
            <button className="order-button" onClick={togglePopup}>Show All</button>
        </div>
        {showPopup && (
                <div className="popup-overlay" onClick={togglePopup}>
                    <div className="popup-content" onClick={(e) => e.stopPropagation()}>
                        <h3>Order Details</h3>
                        <p>Here are the details of your order...</p>
                        <button className="close-button" onClick={togglePopup}>Close</button>
                    </div>
                </div>
            )}

        {/* Footer */}
        <footer className='footer'>
              <div className='footerItem'>
              <img src={wallet} className='footerImage'></img>
              <p className='footerText'>WALLET</p>
              </div>
              <div className='footerItem'>
              <img src={zuttaxi} className='footerImage'></img>
              <p className='footerText'>FIND</p>
              </div>
            </footer>
    </div>
    );
}

export default Second;