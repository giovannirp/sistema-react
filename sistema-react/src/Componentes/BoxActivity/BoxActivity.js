import React from "react";
import ContadorViagem from "../ContadorViagem/ContadorViagem";
import ListagemViagem from "../ListaViagem/ListagemViagem";

function BoxActivity() {
  return (
    <div className='d-flex-box'>
      <ContadorViagem numeroInicial={3} />
      <ListagemViagem />
    </div>
  );
}

export default BoxActivity;
