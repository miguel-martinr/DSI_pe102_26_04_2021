import { FighterInterface, PokemonType } from "../../interfaces/fighter";

/**
 * Representa un Pokémon genérico
 */
export abstract class Pokemon implements FighterInterface {
  constructor(protected name: string, protected weight: number, protected height: number,
    protected type: PokemonType, protected attack: number, protected defense: number,
    protected hp: number = 100) {

  }

  /**
   * Retorna una cadena específica de cada pokémon
   */
  abstract talk(): string;
  
  /**
   * 
   * @returns Nombre del pokémon
   */
  getName(): string {
    return this.name;
  }

  /**
   * 
   * @returns Peso del pokémon
   */
  getWeight(): number {
    return this.weight;
  }

  /**
   * 
   * @returns Altura del pokémon
   */
  getHeight(): number {
    return this.height;
  }

  /**
   * 
   * @returns Tipo del pokémon
   */
  getType(): PokemonType {
    return this.type;
  }

  /**
   * 
   * @returns Nivel de ataque del pokémon
   */
  getAttack(): number {
    return this.attack;
  }

  /**
   * 
   * @returns Nivel de defensa del pokémon
   */
  getDefense(): number {
    return this.defense;
  }

  /**
   * 
   * @returns Vida actual del pokémon
   */
  getHp(): number {
    return this.hp;
  }
}
