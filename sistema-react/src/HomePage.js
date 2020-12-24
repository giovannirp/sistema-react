import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Ancora, Header } from "./Componentes/Header";
import { Menu } from "./Componentes/menu";
import Footer from "./Componentes/Footer/Footer";
import Content from "./Componentes/Layout/Content";

function HomePage() {
  return (
    <div className="container">
      <Router>
        <Header>
          <Ancora />
        </Header>
        <Menu />
        <Content />
        <Footer texto="Todos os direito resevados" /> 
      </Router>
    </div>
  );
}

export default HomePage;
