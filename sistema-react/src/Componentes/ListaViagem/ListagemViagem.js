import React, { Component } from "react";
import "./ListaViagem.css";
import listaViagem from "../../data/listaViagem";

class ListagemViagem extends Component {
  getLinhasViagem = () => {
    return listaViagem.map((listaViagem, id) => {
      return (
        <tr key={listaViagem.id} className={id % 2 === 0 ? "Par" : ""}>
          <td>{listaViagem.id}</td>
          <td>{listaViagem.nome}</td>
          <td>{listaViagem.preco}</td>
        </tr>
      );
    });
  };

  render() {
    return (
      <div className="tabelaViagem">
        <table>
          <tr className="tr-head">
            <th>Id</th>
            <th>Nome</th>
            <th>Promoções</th>
          </tr>
          {this.getLinhasViagem()}
        </table>
      </div>
    );
  }
}

export default ListagemViagem;
