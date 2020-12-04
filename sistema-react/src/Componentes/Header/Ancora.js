import React from "react";
import LinksAcc from "./linksAcc";

function Ancora() {
  return (
    <div className="divAncora">
      <LinksAcc nome="Turismo Brasil" color="#00008B" link="http://www.turismo.gov.br/" />
      <LinksAcc
        nome="Acessibilidade"
        color="#8B008B"
        link="https://www.politize.com.br/acessibilidade-e-o-direito-das-pessoas-com-deficiencia/"
      />
    </div>
  );
}

export default Ancora
