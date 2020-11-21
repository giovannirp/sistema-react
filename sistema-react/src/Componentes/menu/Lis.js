import React, { Fragment } from "react";

function Lis(props) {
  return (
    <Fragment>
      <a href={props.href}>{props.nome}</a>
    </Fragment>
  );
}

export default Lis;
