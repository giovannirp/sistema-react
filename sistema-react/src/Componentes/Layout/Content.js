import React from "react";
import { Switch, Route } from "react-router-dom";
import About from "../About/About";
import { BannerHome } from "../Banner";
import BoxActivity from "../BoxActivity/BoxActivity";
import { BoxHome } from "../BoxHome";
import Footer from "../Footer/Footer";

const Content = (props) => {
  return (
    <main className="Content">
      <Switch>
        <Route path="/" exact={true}>
          <BannerHome />
          <BoxHome />
          <BoxActivity />
        </Route>
        <Route path="/home">
          <BannerHome />
          <BoxHome />
          <BoxActivity />
        </Route>
        <Route path="/about">
          <About />
        </Route>
      </Switch>
    </main>
  );
};

export default Content;
