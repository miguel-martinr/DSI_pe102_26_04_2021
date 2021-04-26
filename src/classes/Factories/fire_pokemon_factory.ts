import { PokemonType } from "../../interfaces/fighter";
import { Pokemon, FirePokemon } from "../Pokemon";
import { PokemonFactory } from "./pokemon_factory";

/**
 * Factoría de pokemons tipo FIRE
 */
export class FirePokemonFactory extends PokemonFactory {
  constructor(private readonly name: string, private readonly weight: number, private readonly height: number,
    private readonly attack: number, private readonly defense: number,
    private readonly hp: number = 100) {

    super();
  }

  /**
   * Crea y devuelve un objeto Pokemon con los atirbutos pasados al constructor de la factoría
   */
  factoryMethod(): Pokemon {
    return new FirePokemon(this.name, this.weight, this.height, this.attack, this.defense, this.hp); 
  }
}
