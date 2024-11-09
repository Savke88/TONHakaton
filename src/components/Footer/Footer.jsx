import { Link } from "../Link/Link";
import "./Footer.css";
import wallet from "../images/wallet.png";
import zuttaxi from "../images/zuttaxi.png";
export function Footer() {
  let footer = <>
<div className='footerItem'>
              <img src={wallet} className='footerImage'></img>
              <p className='footerText'>WALLET</p>
              </div>
              <div className='footerItem'>
              <img src={zuttaxi} className='footerImage'></img>
              <p className='footerText'>FIND</p>
              </div>
  </>;
  return <footer className="footer">{footer}</footer>;
}
