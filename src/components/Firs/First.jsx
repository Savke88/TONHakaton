import zuttaxi from "./zuttaxi.png";
import crntaxi from "./crntaxi.png";
import wallet from "./wallet.png";
import "./Style.css";

function First() {
  return (
    <div className="container">
      <div className="headeri">TON TAXI</div>
      {/* Center Button */}
      <img src={crntaxi} className="image"></img>
      <button className="centerButton">Find Ride</button>

      {/* Footer with icons */}
      <footer className="footer">
        <div className="footerItem">
          <img src={wallet} className="footerImage"></img>
          <p className="footerText">WALLET</p>
        </div>
        <div className="footerItem">
          <img src={zuttaxi} className="footerImage"></img>
          <p className="footerText">FIND</p>
        </div>
      </footer>
    </div>
  );
}

export default First;
