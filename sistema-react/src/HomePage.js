import "./App.css";
import { Header } from './Componentes/Header'
import { Menu } from "./Componentes/menu";
import { BannerHome } from "./Componentes/Banner";

function HomePage() {
  return (
    <div className="container">
      <Header />

      <Menu />

      <BannerHome />
    </div>
  );
}

export default HomePage;
