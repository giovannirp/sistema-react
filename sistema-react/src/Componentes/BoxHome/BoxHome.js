import React, { Fragment } from "react";
import dataBox from "../../data/dataBox";
import "./BoxHome.css";

function BoxHome() {
  return (
    <Fragment>
      <h1 className='title-news'>Novidades de turismo</h1>
      <div className="contanerBox">
        {dataBox.map((itens) => {
          return (
            <a href={itens['link']} target={itens['target']}>
              <div className='box'>
                <img src={itens['img']} alt={itens['titulo']} />
                <h1>{itens['titulo']}</h1>
                <p>{itens['paragrafo']}</p>
              </div>
            </a>
          );
        })}
      </div>
    </Fragment>
  );
}

export default BoxHome;
