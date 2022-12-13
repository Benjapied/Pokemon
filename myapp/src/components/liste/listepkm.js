import { useEffect, useState } from 'react';
import { addToPokedex, getAll } from '../../api/pokemon.js';

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
  console.log(type);

  return <>
    <div>
      <div>
        {
          pokemons.map((pokemon, key) => {
            if (window.location.href = "http://localhost:3000") {
              if (pokemon.type2 === "None") {
                return <div key={key} className="bloc-pokemon">
                  <img alt={pokemon.name} src={pokemon.img} />
                  <p>#{pokemon.numero}</p>
                  <h2>{pokemon.name}</h2>
                  <p>{pokemon.type1}</p>
                  <button onClick={() => addToPokedex(pokemon)}>Capturer !</button>
                </div>
              } else {
                return <div key={key} className="bloc-pokemon">
                  <img alt={pokemon.name} src={pokemon.img} />
                  <p>#{pokemon.numero}</p>
                  <h2>{pokemon.name}</h2>
                  <p>{pokemon.type1}, {pokemon.type2}</p>
                  <button onClick={() => addToPokedex(pokemon)}>Capturer !</button>
                </div>
              }
            } else {
              if (pokemon.type1 === type || pokemon.type2 === type) {
                if (pokemon.type2 === "None") {
                  return <div key={key} className="bloc-pokemon">
                    <img alt={pokemon.name} src={pokemon.img} />
                    <p>#{pokemon.numero}</p>
                    <h2>{pokemon.name}</h2>
                    <p>{pokemon.type1}</p>
                    <button onClick={() => addToPokedex(pokemon)}>Capturer !</button>
                  </div>
                } else {
                  return <div key={key} className="bloc-pokemon">
                    <img alt={pokemon.name} src={pokemon.img} />
                    <p>#{pokemon.numero}</p>
                    <h2>{pokemon.name}</h2>
                    <p>{pokemon.type1}, {pokemon.type2}</p>
                    <button onClick={() => addToPokedex(pokemon)}>Capturer !</button>
                  </div>
                }
              } else {
                return
              }
            }
          })
        }
      </div>
    </div>
  </>
}

