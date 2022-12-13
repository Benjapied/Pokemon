import { useEffect, useState } from 'react';
import { DeletePokedex, getALLPokedex } from '../../api/pokemon.js';

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
        {
          pokemons.map((pokemon, key) => {
            if (pokemon.type2 === "None") {
              return <div key={key} className="bloc-pokemon">
              <img alt={pokemon.name} src={pokemon.img} />
              <h2>{pokemon.name}</h2>
              <p>{pokemon.type1}</p>
              <button onClick={() => DeletePokedex(pokemon)}>Supprimer</button>
            </div>
            } else {
              return <div key={key} className="bloc-pokemon">
              <img alt={pokemon.name} src={pokemon.img} />
              <h2>{pokemon.name}</h2>
              <p>{pokemon.type1},{pokemon.type2}</p>
              <button onClick={() => DeletePokedex(pokemon)}>Supprimer</button>
            </div>
            }
          })
        }
      </div>
    </div>
  </>
}

