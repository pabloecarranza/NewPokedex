var express = require("express");
var router = express.Router();
const axios = require("axios");

/* GET users listing. */
router.get("/", async (req, res) => {
  const { limit } = req.query;
  const urlApi = await axios.get(`http://pokeapi.co/api/v2/pokemon?limit=${limit}`);

  return res.status(200).send(urlApi.data);
});

module.exports = router;


