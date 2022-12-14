

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Menu() {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2560px-International_Pok%C3%A9mon_logo.svg.png" alt="logo pokémon" height="40px"/>
                    <Nav className="me-auto">
                        <Nav.Link href="/">Pokémon</Nav.Link>
                        <Nav.Link href="/pokedex">Pokédex</Nav.Link>
                        <Nav.Link href="/admin">Admin</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default Menu;




