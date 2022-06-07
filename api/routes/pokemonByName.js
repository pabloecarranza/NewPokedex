var express = require("express");
var router = express.Router();
const axios = require("axios");

router.get("/", async (req, res) => {
  let pokemon = {};
  let name = req.query.name;
try {
  if (name) {

    const urlName = await axios.get(
      "https://pokeapi.co/api/v2/pokemon/" + name
    );

    pokemon = {
      id: urlName.data.id,
      name: urlName.data.name,
      img: urlName.data.sprites.other.dream_world.front_default,
      hp: urlName.data.stats[0].base_stat,
      attack: urlName.data.stats[1].base_stat,
      defense: urlName.data.stats[2].base_stat,
      speed: urlName.data.stats[5].base_stat,
      height: urlName.data.height,
      weight: urlName.data.weight,
    };
    let types = urlName.data.types.map((el) => el.type.name);
    pokemon = { ...pokemon, types: types };
    return res.json(pokemon);
  }
} catch (error) {
  res.status(404).send("Pokemon dont exists");
}
  
});

module.exports = router;
