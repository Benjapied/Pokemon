export const getAll = async () => {
    const response = await fetch(
        'http://localhost:4444/pokemon/select', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }
    )
    const pokemons = await response.json()
    return pokemons
}


export const getALLPokedex = async () => {
    const response = await fetch(
        'http://localhost:4444/pokedex/select', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }
    )
    const pokemons = await response.json()
    return pokemons
}

export const addToPokedex = async (pokemon) => {
    console.log(pokemon.numero)
    await fetch(
        'http://localhost:4444/pokedex/insert', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(pokemon)
    }
    )
        .then(response => response.json())
        .then(response => console.log(JSON.stringify(response)))
}

export const DeletePokedex = async (pokemon) => {
    console.log(pokemon.numero)
    await fetch(
        'http://localhost:4444/pokedex/delete', {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(pokemon)
    }
    )
        .then(response => response.json())
        .then(response => console.log(JSON.stringify(response)))
}

export const addToPokemon = async (pokemon) => {
    console.log(pokemon.numero)
    await fetch(
        'http://localhost:4444/pokemon/insert', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(pokemon)
    }
    )
        .then(response => response.json())
        .then(response => console.log(JSON.stringify(response)))
}

export const UpdatePokemon = async (pokemon) => {
    console.log(pokemon)
    await fetch(
        'http://localhost:4444/pokemon/replace', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(pokemon)
    }
    )
        .then(response => response.json())
        .then(response => console.log(JSON.stringify(response)))
}

export const DeletePokemon = async (pokemon) => {
    console.log(pokemon.numero)
    await fetch(
        'http://localhost:4444/pokemon/delete', {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(pokemon)
    }
    )
        .then(response => response.json())
        .then(response => console.log(JSON.stringify(response)))
}