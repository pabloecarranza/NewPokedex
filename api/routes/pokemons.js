var express = require('express');
var router = express.Router();
const axios = require("axios");

/* GET users listing. */
router.get('/', async (req, res) => {
  let limit = req.query.limit;
  
  const urlApi = await axios.get(
    `http://pokeapi.co/api/v2/pokemon?limit=${limit}`
  );
  let details = await Promise.all(
    urlApi.data.results.map(async (el) => await axios(el.url))
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

  return res.status(200).send(details);
});

module.exports = router;
