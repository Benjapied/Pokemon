import { TitleHome } from "../components/home.js";
import Menu from "../components/menu.js";
import Liste from "../components/liste/listepkm.js";
import { Page3para } from "../components/para.js";
import { FormType } from "../components/form/formType.js";
import { Reset } from "../components/resetbutton.js";



export default function Page1(props) {
  return <div>
    <TitleHome />
    <Menu />
    <FormType />
    <button onClick={() => Reset()}>Reset</button>
    <Page3para />
    <Liste />

  </div>
}