const initialState = {
  AllPokemons: [],
 
  NextPage: "",
  previousPage: "",
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
   case "POKEMON_BY_NAME":
     return {
       ...state,
       AllPokemons: action.payload
     }

    case "GET_POKEMONS":
      return {
        ...state,
        AllPokemons: action.payload.details,
        NextPage: action.payload.pagination.next,
        previousPage: action.payload.pagination.previous,
      };
    default:
      return state;
  }
}
