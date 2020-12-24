import React from "react";
import Lis from "./Lis";

function Menu(props) {
  return (
    <div className="menus">
      <ul className="menu-list">
        <li>
          <Lis nome="Home" ancora="/home" />
          <Lis nome="Sobre" ancora="/about" />
          <Lis nome="Contato" ancora="/Contato" />
        </li>
      </ul>
    </div>
  );
}

export default Menu;
