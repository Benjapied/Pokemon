import { TitleHome } from "../components/home.js";
import Menu from "../components/menu.js";
import Liste from "../components/liste/listepkm.js";
import { Filtrage, Page3para } from "../components/para.js";
import { FormType } from "../components/form/formType.js";
import { Reset } from "../components/resetbutton.js";



export default function Page1(props) {
  return <div className="main">
    <Menu />
    <div className="title">
      <TitleHome />
      <Filtrage />
      <FormType />
      <button onClick={() => Reset()}>Reset</button>
      <Page3para />
    </div>
    <Liste />

  </div>
}