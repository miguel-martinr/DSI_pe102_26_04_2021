import { PokemonType } from "../../interfaces/fighter";
import { Pokemon } from "./pokemon";

/**
 * Representa un pokemon de tipo FIRE
 */
export class FirePokemon extends Pokemon {
  constructor(name: string, weight: number, height: number,
      attack: number, defense: number,
      hp: number = 100) {
    
    super(name, weight, height, 'FIRE', attack, defense, hp);
  }

  talk(): string {
    return `My name is ${this.name}, and I'm a Fire Pokemon (${this.getHp()} HP)`;
  }
}
