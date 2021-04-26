import 'mocha';
import { expect } from 'chai';
import { FirePokemonFactory } from '../../../src/classes/Factories/fire_pokemon_factory';
import { FirePokemon, Pokemon } from '../../../src/classes/Pokemon';


describe('FirePokemonFactory', () => {
  const firePokemonFactory = new FirePokemonFactory('Charizard', 10, 0.6, 100, 70, 100);

  it('Creates a Pokemon', () => {
    expect(firePokemonFactory.factoryMethod() instanceof Pokemon).to.be.true;
  });

  it('Creates a FirePokemon', () => {
    expect(firePokemonFactory.factoryMethod() instanceof FirePokemon).to.be.true;
  });

  it('Creates a FirePokemon called Charizard', () => {
    expect(firePokemonFactory.factoryMethod().getName()).to.be.eq('Charizard');
  });
});
