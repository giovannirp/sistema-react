import "./App.css";
import { Ancora, Header } from './Componentes/Header'
import { Menu } from "./Componentes/menu";
import { BannerHome } from "./Componentes/Banner";
import { BoxHome } from "./Componentes/BoxHome";

function HomePage() {
  return (
    <div className="container">
      <Header>
        <Ancora />
      </Header>

      <Menu />

      <BannerHome />

      <BoxHome />
    </div>
  );
}

export default HomePage;
