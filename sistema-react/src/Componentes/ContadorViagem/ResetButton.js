import React from "react";

function ResetButton(props) {
  return (
    <div>
      <button className='resetButton' onClick={props.funcaoReset}>Limpar</button>
    </div>
  );
}

export default ResetButton;
