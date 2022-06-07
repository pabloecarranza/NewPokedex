const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const pokemons = require('./routes/pokemons');
const pokemonByName = require('./routes/pokemonByName');
const pokemonById = require('./routes/pokemonById');
const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);
app.use('/pokemons', pokemons);
app.use('/name', pokemonByName);
app.use('/pokemon', pokemonById);

module.exports = app;
