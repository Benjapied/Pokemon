import { useEffect, useState } from 'react';
import { DeletePokedex, getALLPokedex } from '../../api/pokemon.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

//Affiche les pokemmons dans pokedex
export default function Listepkd(props) {
  const [pokemons, setPokemons] = useState([]);

  //va s'executer seulement au lancement du composant (dep: [])
  useEffect(() => {
    // récupérer la liste des users seulement au chargement du composant ! 
    const pokemonsFetched = getALLPokedex();
    pokemonsFetched
      .then(result => setPokemons(result))
      .catch(error => console.error("Erreur avec notre API :", error.message));
  }, []);

  return <>
    <div>
      <div>
        <Container>
          <Row >
            {
              pokemons.map((pokemon, key) => {
                if (pokemon.type2 === "None") {
                  return <Col xs={6} md={4} key={key} className="bloc-pokemon">
                    <div className='pokebox colorMotisma'>
                    <p>#{pokemon.numero}</p>
                    <img alt={pokemon.name} src={pokemon.img} />
                    <h2>{pokemon.name}</h2>
                    <p>{pokemon.type1}</p>
                    <button onClick={() => DeletePokedex(pokemon)}>Supprimer</button>
                    </div>
                  </Col>
                } else {
                  return <Col xs={6} md={4} key={key} className="bloc-pokemon">
                    <div className='pokebox colorMotisma'>
                    <p>#{pokemon.numero}</p>
                    <img alt={pokemon.name} src={pokemon.img} />
                    <h2>{pokemon.name}</h2>
                    <p>{pokemon.type1},{pokemon.type2}</p>
                    <button onClick={() => DeletePokedex(pokemon)}>Supprimer</button>
                    </div>
                  </Col>
                }
              })
            }
          </Row>
        </Container>
      </div>
    </div>
  </>
}

