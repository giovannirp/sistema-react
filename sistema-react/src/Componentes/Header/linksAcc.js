import React, { Fragment } from "react";

function LinksAcc(props) {
  console.log(props);
  return (
    <Fragment>
      <a href={props.link} target="_blank">{props.nome}</a>
    </Fragment>
  );
}

export default LinksAcc;
