import { useEffect, useState } from 'react';
import {  getAll } from '../api/pokemon.js';
import { UpdateForm } from './formulaire.js';


export default function ListeAdmin (props){
    const [ pokemons, setPokemons ] = useState([]);

    //va s'executer seulement au lancement du composant (dep: [])
    useEffect(() => {
      // récupérer la liste des users seulement au chargement du composant ! 
      const pokemonsFetched = getAll();
      pokemonsFetched
        .then(result => setPokemons(result))
        .catch(error=>console.error("Erreur avec notre API :",error.message));
    },[]);
    
    var str = document.location.href; 

    var url = new URL(str);
    var num = url.searchParams.get("numero");
    console.log(num);

    return <>
    <div>
        <div>
          {
            pokemons.map((pokemon,key) =>{
                if (pokemon.numero === num) {
                    return <div key={key} className="bloc-pokemon">
                        <img  alt={pokemon.name} src={pokemon.img}/>
                        <p>#{pokemon.numero}</p>
                        <h2>{pokemon.name}</h2>
                        <div><UpdateForm /></div>
                        </div>
                    } else {
                        return console.log("error")
                    } 
                }
            )
          }
         </div>
    </div>
    </>
}

