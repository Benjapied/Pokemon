import { Link } from "react-router-dom";

function Menu(){
    return <nav>
        <ul>
            <li><Link to="/">Pokemon</Link></li>
            <li><Link to="/pokedex">Pokedex</Link></li>
            <li><Link to="/admin">Admin</Link></li>
        </ul>
    </nav>
}

export default Menu;