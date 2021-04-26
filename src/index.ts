import { FirePokemonFactory, PokemonFactory, WaterPokemonFactory } from "./classes/Factories";


function clientCode(pokemonFactory: PokemonFactory) {
  pokemonFactory.logic();
};


clientCode(new WaterPokemonFactory('Squirtle', 10, 0.6, 100, 70, 50));
clientCode(new FirePokemonFactory('Charizard', 10, 0.6, 100, 70, 100));
