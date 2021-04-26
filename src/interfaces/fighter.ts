

export type PokemonType = 'FIRE' | 'WATER' | 'ELECTRIC' | 'GRASS';

/**
 * Represents a pokemon.
 */
export interface FighterInterface {
  getName(): string;
  getWeight(): number;
  getHeight(): number;
  getType(): PokemonType;
  getAttack(): number;
  getDefense(): number;
  getHp(): number;
};
