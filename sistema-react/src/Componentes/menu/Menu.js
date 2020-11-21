import React from "react";

function Menu(props) {
console.log(props)
  return (
    <div className="menus">
      <ul className="menu-list">
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">Sobre</a>
        </li>
        <li>
          <a href="">Artigos</a>
        </li>
        <li>
          <a href="">Estudos</a>
        </li>
        <li>
          <a href="">Diretório</a>
        </li>
        <li>
          <a href="">CURSO</a>
        </li>
        <li>
          <a href="">Links</a>
        </li>
        <li>
          <a href="">Contato</a>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
