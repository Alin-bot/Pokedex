export let getPokemonName = (pokemon) => pokemon?.name?.charAt(0).toUpperCase() + pokemon?.name?.slice(1);

export let getPokemonId = (pokemon) => '#' + String(pokemon?.id).padStart(3, '0');