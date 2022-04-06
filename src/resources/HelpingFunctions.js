export let getPokemonName = (pokemon) => `${pokemon?.name?.charAt(0).toUpperCase()}${pokemon?.name?.slice(1)}`;

export let getPokemonId = (pokemon) => `#${String(pokemon?.id).padStart(3, '0')}`;

export let getLoading = () => <div style={{backgroundColor: 'white', width: '300px', height: '300px', borderStyle: 'solid', borderRadius: '10px', marginRight: '50px'}}></div>