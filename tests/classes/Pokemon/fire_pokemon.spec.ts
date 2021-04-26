import 'mocha';
import { expect } from 'chai';
import { FirePokemon, Pokemon } from '../../../src/classes/Pokemon';

describe('FirePokemon tests', () => {
  const pokemon = new FirePokemon('Charizard', 10, 0.6, 100, 70);
  it('Object is a Pokemon', () => {
    expect(pokemon instanceof Pokemon).to.be.true;
  });

  it('Object is a FirePokemon', () => {
    expect(pokemon instanceof FirePokemon).to.be.true;
  });

  it('Pokemon talks', () => {
    expect(typeof pokemon.talk() === 'string').to.be.true;
  });
});
