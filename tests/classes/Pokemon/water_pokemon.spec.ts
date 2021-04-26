import 'mocha';
import { expect } from 'chai';
import { WaterPokemon, Pokemon } from '../../../src/classes/Pokemon';

describe('WaterPokemon tests', () => {
  const pokemon = new WaterPokemon('Squirtle', 10, 0.6, 100, 70);
  it('Object is a Pokemon', () => {
    expect(pokemon instanceof Pokemon).to.be.true;
  });

  it('Object is a FirePokemon', () => {
    expect(pokemon instanceof WaterPokemon).to.be.true;
  });

  it('Pokemon talks', () => {
    expect(typeof pokemon.talk() === 'string').to.be.true;
    expect(typeof pokemon.talk() === 'string').to.be.true;
  });
});
