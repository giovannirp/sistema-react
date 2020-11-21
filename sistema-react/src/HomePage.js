import "./App.css";
import { Header } from './Componentes/Header'
import { Menu } from "./Componentes/menu";

function HomePage() {
  return (
    <div className="container">
      <Header />

      <Menu />
    </div>
  );
}

export default HomePage;
