import ImgBox1 from "../assets/img-box1.jpg";
import ImgBox2 from "../assets/img-box2.jpg";
import ImgBox3 from "../assets/img-box3.jpg";

const data = [
  {
    titulo: "Sem Limites Viagens",
    paragrafo:
      "Por padrão, todos os elementos possuem o valor content-box para essa propriedade.",
    img: ImgBox1,
    link: "https://www.terra.com.br/",
    target: "_blank",
  },
  {
    titulo: "Passagens com nossas Milhas",
    paragrafo: "Todos os elementos essa propriedade content-box.",
    img: ImgBox2,
  },
  {
    titulo: "Melhores ofertas de viagem",
    paragrafo: (
      <small>todos os elementos possuem o valor para essa propriedade.</small>
    ),
    img: ImgBox3,
  },
];

export default data;