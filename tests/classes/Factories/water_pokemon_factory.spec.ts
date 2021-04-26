import 'mocha';
import { expect } from 'chai';
import { WaterPokemonFactory } from '../../../src/classes/Factories/water_pokemon_factory';
import { WaterPokemon, Pokemon } from '../../../src/classes/Pokemon';


describe('WaterPokemonFactory', () => {
  const waterPokemonFactory = new WaterPokemonFactory('Squirtle', 10, 0.6, 100, 70, 100);

  it('Creates a Pokemon', () => {
    expect(waterPokemonFactory.factoryMethod() instanceof Pokemon).to.be.true;
  });

  it('Creates a WaterPokemon', () => {
    expect(waterPokemonFactory.factoryMethod() instanceof WaterPokemon).to.be.true;
  });

  it('Creates a WaterPokemon called Squirtle', () => {
    expect(waterPokemonFactory.factoryMethod().getName()).to.be.eq('Squirtle');
  });
});
