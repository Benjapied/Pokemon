
import { App, FormChoose } from "../components/formulaire.js";
import { TitleAdmin } from "../components/home.js";
import Menu from "../components/menu.js";
import { Page3para } from "../components/para.js";



export default function PageAdmin(props) {
    return <body>
      <TitleAdmin /> 
      <Menu />
      <Page3para />
      <App />
      <FormChoose />
    </body>
}