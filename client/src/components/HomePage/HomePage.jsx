import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PokemonCard from "../PokemonCard/PokemonCard";
import Styles from "./HomePage.module.css";
import SearchBar from "../SearchBar/SearchBar";
import { useSelector, useDispatch } from "react-redux";
import { getPokemons, nextPage, prevPage } from "../../redux/actions";

function HomePage() {
  const dispatch = useDispatch();
  const allPokemons = useSelector((state) => state.AllPokemons);
  const NextPageURL = useSelector((state) => state.NextPage);
  const PrevPageURL = useSelector((state) => state.previousPage);
  console.log(allPokemons.name);

  useEffect(() => {
    dispatch(getPokemons(20));
  }, [dispatch]);

  function handleShow(e) {
    e.preventDefault();
    dispatch(getPokemons(e.target.value));
  }

  function handleNext(e) {
    e.preventDefault();
    dispatch(nextPage(NextPageURL));
  }

  function handlePrev(e) {
    e.preventDefault();
    dispatch(prevPage(PrevPageURL));
  }

  console.log(allPokemons);

  return (
    <div>
      <div className={Styles.navbar}>
        <h1>Pokedex</h1>
        <SearchBar />
        <div className={Styles.counter}>
          <h3>Cantidad por pagina</h3>

          <select onChange={(e) => handleShow(e)}>
            <option value="none">20</option>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>

          <div>
            {PrevPageURL ? (
              <button onClick={handlePrev}>Pagina Anterior</button>
            ) : (
              <button disabled={true} onClick={handlePrev}>
                Pagina Anterior
              </button>
            )}

            <button onClick={handleNext}>Pagina Siguente</button>
          </div>
        </div>

        <nav>
          <Link to="/about">Acerca de Mi</Link>
        </nav>
      </div>

      <div className={Styles.CardZone}>
        {allPokemons.length ? (
          allPokemons.map((pokemon) => (
            <PokemonCard
              key={pokemon.id}
              attack={pokemon.attack}
              defense={pokemon.defense}
              id={pokemon.id}
              img={pokemon.img}
              name={pokemon.name}
              types={pokemon.types}
            />
          ))
        ) : (
          <div>
            {allPokemons ? (
              <PokemonCard
                key={allPokemons.id}
                attack={allPokemons.attack}
                defense={allPokemons.defense}
                id={allPokemons.id}
                img={allPokemons.img}
                name={allPokemons.name}
                types={allPokemons.types}
              />
            ) : (
              <h1>Cargando...</h1>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default HomePage;
