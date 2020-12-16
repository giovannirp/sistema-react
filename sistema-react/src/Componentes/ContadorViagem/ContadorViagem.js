import React, { Component, Fragment } from "react";
import Display from "./Display";
import PassoForm from "./PassoForm";
import Botoes from "./Botoes";
import ResetButton from "./ResetButton";
import "./ContadorViagem.css";

class ContadorViagem extends Component {
  state = {
    numero: this.props.numeroInicial || 0,
    passo: this.props.numeroInicial || 5,
  };

  inc = () => {
    this.setState({
      numero: parseInt(this.state.numero + this.state.passo),
    });
  };

  dec = () => {
    this.setState({
      numero: this.state.numero - this.state.passo,
    });
  };

  setPasso = (novoPasso) => {
    this.setState({
      passo: novoPasso,
    });
  };

  reset = () => {
    this.setState({
      passo: "",
      numero: ""
    });
  };

  render() {
    return (
      <div className="ContadorViagem">
        <h2>Contador Viagem</h2>
        <Display numero={this.state.numero} />
        <PassoForm passo={this.state.passo} setPasso={this.setPasso} />
        <div className='Buttons'>
          <Botoes funcaoSetInc={this.inc} funcaoSetDec={this.dec} />
          <ResetButton funcaoReset={this.reset} />
        </div>
      </div>
    );
  }
}

export default ContadorViagem;
