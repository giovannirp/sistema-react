import React, { Fragment } from "react";
import { Link } from "react-router-dom"

function Lis(props) {
  return (
    <Fragment>
      <Link to={props.ancora}>{props.nome}</Link>
    </Fragment>
  );
}

export default Lis;
