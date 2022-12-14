import { TitlePokedex } from "../components/home.js";
import Listepkd from "../components/liste/listepkd.js";
import Menu from "../components/menu.js";
import { ParaPokedex } from "../components/para.js";
import "../style.css";


export default function Page2(props) {
  return <div className="pokedex">
    <Menu />
    <div className="title colorMotisma">
      <TitlePokedex />
      <ParaPokedex />
    </div>
    <Listepkd />
  </div>
}