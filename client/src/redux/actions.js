import axios from "axios";

export function getPokemons(limit) {
  return async function (dispatch) {
    let json = await axios.get(
      `https://pablopokedexapi.herokuapp.com/pokemons/?limit=${limit}`
    );

    let pagination = {
      next: json.data.next,
      previous: json.data.previous,
    };
    let details = await Promise.all(
      json.data.results.map(async (el) => await axios(el.url))
    );
    details = details.map((el) => {
      let newPokemon = {
        id: el.data.id,
        name: el.data.name,
        img: el.data.sprites.other.dream_world.front_default,
        attack: el.data.stats[1].base_stat,
        defense: el.data.stats[2].base_stat,
      };
      let types = el.data.types.map((el) => el.type);
      types.map((el) => delete el.url);
      return (newPokemon = { ...newPokemon, types: types });
    });

    const fullData = {
      pagination,
      details,
    };

    return dispatch({
      type: "GET_POKEMONS",
      payload: fullData,
    });
  };
}

export function nextPage(URL) {
  return async function (dispatch) {
    let json = await axios.get(URL);

    let pagination = {
      next: json.data.next,
      previous: json.data.previous,
    };
    let details = await Promise.all(
      json.data.results.map(async (el) => await axios(el.url))
    );
    details = details.map((el) => {
      let newPokemon = {
        id: el.data.id,
        name: el.data.name,
        img: el.data.sprites.other.dream_world.front_default,
        attack: el.data.stats[1].base_stat,
        defense: el.data.stats[2].base_stat,
      };
      let types = el.data.types.map((el) => el.type);
      types.map((el) => delete el.url);
      return (newPokemon = { ...newPokemon, types: types });
    });

    const fullData = {
      pagination,
      details,
    };

    return dispatch({
      type: "GET_POKEMONS",
      payload: fullData,
    });
  };
}

export function prevPage(URL) {
  return async function (dispatch) {
    let json = await axios.get(URL);

    let pagination = {
      next: json.data.next,
      previous: json.data.previous,
    };
    let details = await Promise.all(
      json.data.results.map(async (el) => await axios(el.url))
    );
    details = details.map((el) => {
      let newPokemon = {
        id: el.data.id,
        name: el.data.name,
        img: el.data.sprites.other.dream_world.front_default,
        attack: el.data.stats[1].base_stat,
        defense: el.data.stats[2].base_stat,
      };
      let types = el.data.types.map((el) => el.type);
      types.map((el) => delete el.url);
      return (newPokemon = { ...newPokemon, types: types });
    });

    const fullData = {
      pagination,
      details,
    };

    return dispatch({
      type: "GET_POKEMONS",
      payload: fullData,
    });
  };
}

export function getPokemonByName(name) {
  return async function (dispatch) {
    let json = await axios.get(
      `https://pablopokedexapi.herokuapp.com/name/?name=${name}`
    );

    return dispatch({
      type: "POKEMON_BY_NAME",
      payload: json.data,
    });
  };
}
