import React, { Fragment, useEffect, useState } from "react";
import useInterval from '@use-it/interval';
import BannerImg from "../../assets/banner.jpg";

function BannerHome() {
  const words = ['Experiência em viagem', 'Novas Viagem', 'tudo te']
  const [currentWolrd, setCurrentWolrd] = useState(0)

  const logicWolrd = () => (currentWolrd + 1 < words.length ? currentWolrd + 1 : 0) 

  useInterval(() => {
    setCurrentWolrd(logicWolrd())
  }, 2000)

  return (
    <div>
      <img src={BannerImg} />
      <div>
       {words[currentWolrd]}
        <br />
      </div>
    </div>
  );
}

export default BannerHome;
