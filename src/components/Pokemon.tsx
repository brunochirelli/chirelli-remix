import { PokemonType } from "./PokemonsList";

type PokemonProps = {
  pokemon: PokemonType;
};

const Pokemon = ({ pokemon }: PokemonProps) => {
  return <div>{pokemon.name}</div>;
};

export default Pokemon;
