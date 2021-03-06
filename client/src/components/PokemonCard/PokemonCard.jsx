import React from "react";
import Styles from "./PokemonCard.module.css";

function PokemonCard({ attack, defense, id, img, name, types }) {
  const newD = types
    ?.map((types) => {
      return types.name;
    })
    .join(", ");

  return (
    <>
      <div className={Styles.card}>
        <h1>{name}</h1>

        <h1>Attack {attack}</h1>
        <h1> Defense {defense}</h1>
        <img src={img} alt="" />
        <h1>Type</h1>
        <h1> {newD}</h1>
      </div>
    </>
  );
}

export default PokemonCard;
