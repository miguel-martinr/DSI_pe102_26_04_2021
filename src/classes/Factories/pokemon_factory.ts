import { Pokemon } from "../Pokemon";

/**
 * Facotría abstracta de Pokémons
 */
export abstract class PokemonFactory {

  /**
   * Crea y devuelve un objeto Pokemon
   */
  public abstract factoryMethod(): Pokemon;

  /**
   * Imprime por consola el saludo de un pokémon creado por el objeto
   */
  logic() {
    console.log(this.greetings());
  }

  /**
   * 
   * @returns Saludo de un pokeḿon creado por el objeto
   */
  greetings(): string {
    const pokemon = this.factoryMethod();
    return pokemon.talk();
  }
}
