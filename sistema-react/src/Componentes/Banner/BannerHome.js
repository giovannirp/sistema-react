import React, { Fragment, useEffect, useState } from "react";
import useInterval from "@use-it/interval";
import BannerImg from "../../assets/banner.jpg";

function BannerHome() {
  const words = ["Experiência em viagem", "Novas Viagem", "Boas Promoões"];
  const [currentWolrd, setCurrentWolrd] = useState(0);
  const logicWolrd = () =>
    currentWolrd + 1 < words.length ? currentWolrd + 1 : 0;

  useInterval(() => {
    setCurrentWolrd(logicWolrd())
  }, 2000)

  return (
    <div class='container-banner'>
      <img src={BannerImg} alt="Banner" />
      <div className='text-animate'>
        {words[currentWolrd]}
      </div>
    </div>
  );
}

export default BannerHome;
