
import { App } from "../components/form/formulaire.js";
import { FormChoose } from "../components/form/formChoose";
import { TitleAdmin } from "../components/home.js";
import ListeAdmin from "../components/liste/listeadmin.js";
import Menu from "../components/menu.js";
import { ParaInsert } from "../components/para.js";



export default function PageAdmin(props) {
  return <div className="labo">
    <Menu />
    <TitleAdmin />
    <ParaInsert />
    <App />
    <p>Quel pokemon voulez-vous modifier ?</p>
    <FormChoose />
    <ListeAdmin />
  </div>
}