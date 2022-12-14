import { TitlePokedex } from "../components/home.js";
import Listepkd from "../components/liste/listepkd.js";
import Menu from "../components/menu.js";
import { Page2para } from "../components/para.js";


export default function Page2(props) {
  return <div>
    <Menu />
    <TitlePokedex />
    <Page2para />
    <Listepkd />
  </div>
}