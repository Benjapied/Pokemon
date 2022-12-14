import Page1 from "./pages/home.js";
import Page2 from "./pages/pokedex.js";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import PageAdmin from "./pages/admin.js";
import 'bootstrap/dist/css/bootstrap.min.css';


function App(props) {
  return <Router>
    <Switch>
      <Route exact path="/">
        <Page1 />
      </Route>
      <Route path="/pokedex">
        <Page2 />
      </Route>
      <Route path="/admin">
        <PageAdmin />
      </Route>
    </Switch>
  </Router>
}

export default App;
