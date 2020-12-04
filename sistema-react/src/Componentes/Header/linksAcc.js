import React, { Fragment } from "react";

function LinksAcc(props) {
  const colorStyle = {
    color: props.color || "#F00",
  };

  return (
    <Fragment>
      <a href={props.link} target="_blank" style={colorStyle}>
        {props.nome}
      </a>
    </Fragment>
  );
}

export default LinksAcc;
