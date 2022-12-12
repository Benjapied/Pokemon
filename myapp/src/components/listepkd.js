import { useEffect, useState } from 'react';
import { DeletePokedex, getALLPokedex } from '../api/pokemon.js';


export default function Listepkd (props){
    const [ pokemons, setPokemons ] = useState([]);

    //va s'executer seulement au lancement du composant (dep: [])
    useEffect(() => {
      // récupérer la liste des users seulement au chargement du composant ! 
      const pokemonsFetched = getALLPokedex();
      pokemonsFetched
        .then(result => setPokemons(result))
        .catch(error=>console.error("Erreur avec notre API :",error.message));
    },[]);
    
    return <>
    <div>
        <div>
          {
            pokemons.map((pokemon,key) =>{
              return <div key={key} className="bloc-pokemon">
                <img  alt={pokemon.name} src={pokemon.img}/>
                <h2>{pokemon.name}</h2>
                <button onClick={()=>DeletePokedex(pokemon)}>Supprimer</button>
              </div>
            })
          }
         </div>
    </div>
    </>
}

