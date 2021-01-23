import React, { Component } from "react";
import BtnWordDay from "../BtnWord/BtnWordDay";
import "../WordDay/WordDay.css";

class WordDays extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textPhrases: "Descubra a frase do dia"
    };

    this.smash = this.smash.bind(this);
    this.clean = this.clean.bind(this);

    this.phrases = [
      "O importante não é vencer todos os dias, mas lutar sempre.",
      "Maior que a tristeza de não haver vencido é a vergonha de não ter lutado!",
      "É melhor conquistar a si mesmo do que vencer mil batalhas.",
      "Quem ousou conquistar e saiu pra lutar, chega mais longe!",
    ];
  }

  smash() {
    let state = this.state;
    let numbeRandom = Math.floor(Math.random() * this.phrases.length);
    state.textPhrases = '"' + this.phrases[numbeRandom] + '"';
    this.setState(state);
  }

  clean() {
    let state = this.state;
    state.textPhrases = "Descubra novamente a frase do dia";
    this.setState(state);
  }

  render() {
    return (
      <div className="ContentWord">
        <h2>"Descubra sua palavra do Dia"</h2>
        <p>{this.state.textPhrases}</p>
        <div className="containerBtn">
          <BtnWordDay
            style="btnStyle"
            name="Descubra sua palavra da sorte"
            actionBtn={this.smash}
          />
          <BtnWordDay style="btnClean" actionBtn={this.clean} name="Limpar" />
        </div>
      </div>
    );
  }
}

export default WordDays;
