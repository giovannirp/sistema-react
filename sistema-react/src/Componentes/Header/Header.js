import React from "react";
import Logo from "../../assets/logo.png";
import Ancora from "./Ancora";
import LinksAcc from "./linksAcc";

function Header(props) {
  return (
    <div className="header">
      <div>
        <img src={Logo} width='140' className='imgLogo' />
      </div>
      {props.children}
    </div>
  );
}

export default Header;
