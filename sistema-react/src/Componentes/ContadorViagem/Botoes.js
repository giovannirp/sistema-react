import React from "react";

function Botoes(props) {
  return (
    <div>
      <button className='decremento rigth' onClick={props.funcaoSetDec}>-</button>
      <button className='incremento' onClick={props.funcaoSetInc}>+</button>
    </div>
  );
}

export default Botoes;
