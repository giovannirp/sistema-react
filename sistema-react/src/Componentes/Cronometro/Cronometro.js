import React, { Component } from "react";
import "../Cronometro/Cronometro.css";
import ImgCronometro from "../../assets/cronometro.png";

class Cronometro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numero: 0,
      button: "Next Goo",
      textClear: "Limpar",
    };

    this.timer = null;
    this.go = this.go.bind(this);
    this.clear = this.clear.bind(this);
  }

  go() {
    let state = this.state;

    if (this.timer !== null) {
      clearInterval(this.timer);
      this.timer = null;
      state.button = "Next Goo";
    } else {
      this.timer = setInterval(() => {
        let state = this.state;
        state.numero += 0.1;
        this.setState(state);
      }, 100);
      state.button = "Pausar";
    }

    this.setState(state);
  }

  clear() {
    if (this.timer !== null) {
      clearInterval(this.timer);
      this.timer = null;
    } 

    let state = this.state;
    state.numero = 0;
    state.button = "Next Goo";

    this.setState(state)
  }

  render() {
    return (
      <div className="ContainerCronometro">
        <div className="ContentContronometro">
          <div className="containerObjtcs">
            <img
              src={ImgCronometro}
              alt="Img do cronometro"
              className="imgCronometro"
            />
            <span className="timer">{this.state.numero.toFixed(1)}</span>
            <div className="placeBtn">
              <button className="button" onClick={this.go}>
                {this.state.button}
              </button>
              <button className="button" onClick={this.clear}>
                {this.state.textClear}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Cronometro;
