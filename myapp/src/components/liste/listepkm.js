import { useEffect, useState } from 'react';
import { addToPokedex, getAll } from '../../api/pokemon.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "../../style.css";

//Affiche la liste des pokemons dans la base de donnée pokemon
export default function Liste(props) {
  const [pokemons, setPokemons] = useState([]);

  //va s'executer seulement au lancement du composant (dep: [])
  useEffect(() => {
    // récupérer la liste des users seulement au chargement du composant ! 
    const pokemonsFetched = getAll();
    pokemonsFetched
      .then(result => setPokemons(result))
      .catch(error => console.error("Erreur avec notre API :", error.message));
  }, []);

  var str = document.location.href;

  var url = new URL(str);
  var type = url.searchParams.get("type");
  return <>
    <div>
      <Container>
        <Row >
          {
            pokemons.map((pokemon, key) => {
              if (type === null) {
                if (pokemon.type2 === "None") {
                  return <Col xs={6} md={4} key={key} className="bloc-pokemon ">
                    <div className='pokebox'>
                      <p>#{pokemon.numero}</p>
                      <img alt={pokemon.name} src={pokemon.img} />
                      <h2>{pokemon.name}</h2>
                      <p>{pokemon.type1}</p>
                      <button onClick={() => addToPokedex(pokemon)}>Capturer !</button>
                    </div>
                  </Col>
                } else {
                  return <Col xs={6} md={4} key={key} className="bloc-pokemon ">
                    <div className='pokebox'>
                      <p>#{pokemon.numero}</p>
                      <img alt={pokemon.name} src={pokemon.img} />
                      <h2>{pokemon.name}</h2>
                      <p>{pokemon.type1}, {pokemon.type2}</p>
                      <button onClick={() => addToPokedex(pokemon)}>Capturer !</button>
                    </div>
                  </Col>
                }
              } else {
                if (pokemon.type1 === type || pokemon.type2 === type) {
                  if (pokemon.type2 === "None") {
                    return <Col xs={6} md={4} key={key} className="bloc-pokemon ">
                      <div className='pokebox'>
                        <p>#{pokemon.numero}</p>
                        <img alt={pokemon.name} src={pokemon.img} />
                        <h2>{pokemon.name}</h2>
                        <p>{pokemon.type1}</p>
                        <button onClick={() => addToPokedex(pokemon)}>Capturer !</button>
                      </div>
                    </Col>
                  } else {
                    return <Col xs={6} md={4} key={key} className="bloc-pokemon ">
                      <div className='pokebox'>
                        <p>#{pokemon.numero}</p>
                        <img alt={pokemon.name} src={pokemon.img} />
                        <h2>{pokemon.name}</h2>
                        <p>{pokemon.type1}, {pokemon.type2}</p>
                        <button onClick={() => addToPokedex(pokemon)}>Capturer !</button>
                      </div>
                    </Col>
                  }
                } else {
                  return null;
                }
              }
            })
          }
        </Row>
      </Container>
    </div>
  </>
}

