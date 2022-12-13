
import { App } from "../components/form/formulaire.js";
import { FormChoose } from "../components/form/formChoose";
import { TitleAdmin } from "../components/home.js";
import ListeAdmin from "../components/liste/listeadmin.js";
import Menu from "../components/menu.js";
import { Page3para } from "../components/para.js";



export default function PageAdmin(props) {
  return <div>
    <TitleAdmin />
    <Menu />
    <Page3para />
    <App />
    <p>Quel pokemon voulez-vous modifier ?</p>
    <FormChoose />
    <ListeAdmin />
  </div>
}