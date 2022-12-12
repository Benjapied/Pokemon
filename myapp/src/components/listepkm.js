import { useEffect, useState } from 'react';
import { addToPokedex, getAll } from '../api/pokemon.js';


export default function Liste (props){
    const [ pokemons, setPokemons ] = useState([]);

    //va s'executer seulement au lancement du composant (dep: [])
    useEffect(() => {
      // récupérer la liste des users seulement au chargement du composant ! 
      const pokemonsFetched = getAll();
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
                <p>#{pokemon.numero}</p>
                <h2>{pokemon.name}</h2>
                <h2>{pokemon.type1},{pokemon.type2}</h2>
                <button onClick={()=>addToPokedex(pokemon)}>Capturer !</button>
              </div>
            })
          }
         </div>
    </div>
    </>
}

