import { TitleHome } from "../components/home.js";
import Menu from "../components/menu.js";
import Liste from "../components/liste/listepkm.js";
import { Page3para } from "../components/para.js";
import { FormType } from "../components/form/formType.js";



export default function Page1(props) {
    return <body>
      <TitleHome /> 
      <Menu />
      <FormType />
      <Page3para />
      <Liste />
      
    </body>
}