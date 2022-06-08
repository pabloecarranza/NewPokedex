import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getPokemonByName } from "../../redux/actions";

const SearchBar = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState(false);

  function handleSubmit(e) {
 
      dispatch(getPokemonByName(name));
      setName(e.target.value);
      setName("");
    
  }

  const onKeyPress = (event) => {
    if (event.charCode === 13) {
      if (!name) {
       // setPopUp2(() => true);
      } else {
        dispatch(getPokemonByName(name));
        setName("");
      }
    }
  };

  function handleInputChange(e) {
    e.preventDefault();
    setName(e.target.value);
  }

  return (
    <>
      <div >
        <input
          id="inputsearch"
          className="input"
          type="search"
          value={name}
          placeholder="busca por nombre o ID..."
          onChange={(e) => handleInputChange(e)}
          autoComplete="off"
          onKeyPress={(e) => onKeyPress(e)}
        />

        <button type="submit" onClick={(e) => handleSubmit(e)} >
          <span >Buscar</span>
        </button>
      </div>
    </>
  );
};

export default SearchBar;
