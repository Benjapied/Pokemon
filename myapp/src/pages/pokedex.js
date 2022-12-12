import { TitlePokedex } from "../components/home.js";
import Listepkd from "../components/listepkd.js";
import Menu from "../components/menu.js";
import { Page2para } from "../components/para.js";


export default function Page2(props) {
    return <body>
      <TitlePokedex /> 
      <Menu />
      <Page2para />
      <Listepkd />
    </body>
}