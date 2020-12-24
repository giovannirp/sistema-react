import React from "react";
import { Switch, Route } from "react-router-dom";
import About from "../About/About";
import { BannerHome } from "../Banner";
import BoxActivity from "../BoxActivity/BoxActivity";
import { BoxHome } from "../BoxHome";
import NotFound from "../NotFound.js/NotFound";

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
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </main>
  );
};

export default Content;
