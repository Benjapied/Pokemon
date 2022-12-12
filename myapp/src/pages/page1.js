import Home from "../components/home.js";
import Menu from "../components/menu.js";
import Page1para from "../components/page1p.js";
import Liste from "../components/liste.js";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";



export default function Page1(props) {
    return <Router>
      <Switch>
        <Route exact path="/">
          <Home /> 
          <Menu />
          <Page1para />
          <Liste />
        </Route>
      </Switch>
  </Router>
}