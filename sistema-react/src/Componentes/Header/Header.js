import React from "react";
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <div className="header">
      <div>
        <Link to='/home'>
          <img src={Logo} width='140' alt='Logo Viagem' className='imgLogo' />
        </Link>
      </div>
      {props.children}
    </div>
  );
}

export default Header;
