import "./App.css";
import { Ancora, Header } from './Componentes/Header'
import { Menu } from "./Componentes/menu";
import { BannerHome } from "./Componentes/Banner";
import { BoxHome } from "./Componentes/BoxHome";
import BoxActivity from "./Componentes/BoxActivity/BoxActivity";

function HomePage() {
  return (
    <div className="container">
      <Header>
        <Ancora />
      </Header>

      <Menu />

      <BannerHome />

      <BoxHome />

      <BoxActivity />

    </div>
  );
}

export default HomePage;
