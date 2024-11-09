import { Link } from "../Link/Link";
import "./Header1.scss";

export function Header() {
  let header = (
    <>
      {/* <div className="logo">
        <Link to="/">
          <img src="" alt="logo" />
        </Link>
      </div>
      <div className="navbar">
        <ul>
          <Link to="/ton-connect">ton-connect</Link>
          <Link to="/init-data">init-data</Link>
          <Link to="/launch-params">launch-params</Link>
          <Link to="/theme-params">theme-params</Link>
        </ul>
      </div>
     */}
    <h1 className="headerTon">TON TAXI</h1>
    </>
  );

  return <header className="header">{header}</header>;
}
