export let getPokemonName = (pokemon) => `${pokemon?.name?.charAt(0).toUpperCase()}${pokemon?.name?.slice(1)}`;

export let getPokemonId = (pokemon) => `#${String(pokemon?.id).padStart(3, '0')}`;

export let getLoading = () => <img src='https://www.pngitem.com/pimgs/m/52-528163_pokemon-egg-png-transparent-png.png' alt='loading..' style={{backgroundColor: 'white', width: '300px', borderStyle: 'solid', borderRadius: '10px', marginRight: '50px'}}></img>