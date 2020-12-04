import React, { Fragment } from "react";
import ImgBox1 from "../../assets/img-box1.jpg";
import ImgBox2 from "../../assets/img-box2.jpg";
import ImgBox3 from "../../assets/img-box3.jpg";
import "./BoxHome.css";

function BoxHome() {
  const data = [
    {
      titulo: "Sem Limites Viagens",
      paragrafo:
        "Por padrão, todos os elementos possuem o valor content-box para essa propriedade.",
      img: ImgBox1,
      link: "https://www.terra.com.br/",
      target: "_blank"
    },
    {
      titulo: "Passagens com nossas Milhas",
      paragrafo: "Todos os elementos essa propriedade content-box.",
      img: ImgBox2,
    },
    {
      titulo: "Melhores ofertas de viagem",
      paragrafo: <small>todos os elementos possuem o valor para essa propriedade.</small>,
      img: ImgBox3,
    },
  ];
  return (
    <Fragment>
      <h1 className='title-news'>Novidades de turismo</h1>
      <div className="contanerBox">
        {data.map((itens) => {
          return (
            <a href={itens["link"]} target={itens["target"]}>
              <div className="box">
                <img src={itens["img"]} />
                <h1>{itens["titulo"]}</h1>
                <p>{itens["paragrafo"]}</p>
              </div>
            </a>
          );
        })}
      </div>
    </Fragment>
  );
}

export default BoxHome;
