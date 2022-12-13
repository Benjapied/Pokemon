import { TitleHome } from "../components/home.js";
import Menu from "../components/menu.js";
import Liste from "../components/liste/listepkm.js";
import { Page3para } from "../components/para.js";



export default function Page1(props) {
    return <body>
      <TitleHome /> 
      <Menu />
      <Page3para />
      <Liste />
      
    </body>
}