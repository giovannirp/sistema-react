import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import About from "../About/About";
import { BannerHome } from "../Banner";
import BoxActivity from "../BoxActivity/BoxActivity";
import { BoxHome } from "../BoxHome";
import NotFound from "../NotFound.js/NotFound";
import UserCrud from "../User/UserCrud";

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
        <Route path="/user">
          <UserCrud />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
        {/* <Redirect from="*" to="/" /> */}
      </Switch>
    </main>
  );
};

export default Content;
