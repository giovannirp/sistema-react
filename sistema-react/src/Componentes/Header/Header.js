import React from "react";
import Logo from "../../assets/logo.png";
import LinksAcc from "./linksAcc";


function Header() {
  return (
    <div className="header">
      <div>
        <img src={Logo} width='160' />
      </div>
      <div className='divAncora'>
        <LinksAcc nome="Turismo Brasil" link="http://www.turismo.gov.br/" />
        <LinksAcc nome="Acessibilidade" link="https://www.politize.com.br/acessibilidade-e-o-direito-das-pessoas-com-deficiencia/" />
      </div>
    </div>
  );
}

export default Header;
