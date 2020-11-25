import React, { Fragment } from "react";
import ImgBox1 from "../../assets/img-box1.jpg";
import ImgBox2 from "../../assets/img-box2.jpg";
import ImgBox3 from "../../assets/img-box3.jpg";

function BoxHome() {
  return (
    <Fragment>
      <h1>Novidades de turismo</h1>
      <div className="contanerBox">
        <div className="box">
          <img src={ImgBox1} />
          <h1>Titulo</h1>
          <p>
            Por padrão, todos os elementos possuem o valor content-box para essa
            propriedade.
          </p>
        </div>
        <div className="box">
          <img src={ImgBox2} />
          <h1>Titulo</h1>
          <p>
            Por padrão, todos os elementos possuem o valor content-box para essa
            propriedade.
          </p>
        </div>
        <div className="box">
          <img src={ImgBox3} />
          <h1>Titulo</h1>
          <p>
            Por padrão, todos os elementos possuem o valor content-box para essa
            propriedade.
          </p>
        </div>
      </div>
    </Fragment>
  );
}

export default BoxHome;
