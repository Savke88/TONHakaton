import { Link } from "../Link/Link";
import "./Footer.scss";
import wallet from "../images/wallet.png";
import zuttaxi from "../images/zuttaxi.png";
import { useNavigate } from "react-router-dom";
export function Footer() {
  const navigate = useNavigate();
  let footer = <>
              <div className='footerItem'>
              <img src={wallet} className='footerImage'></img>
              <p className='footerText'>WALLET</p>
              </div>

              <div className='footerItem'>
              <img src={zuttaxi} 
              className='footerImage'
               onClick={() => navigate('/find-ride')}
               alt='Taxi'>

               </img>
              <p className='footerText'
               onClick={() => navigate('/find-ride')}
               >FIND</p>
              </div>
  </>;
  return <footer className="footer">{footer}</footer>;
}
