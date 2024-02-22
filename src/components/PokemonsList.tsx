import Pokemon from "./Pokemon";

export type PokemonType = {
  name: string;
};

type PokemonsListProps = {
  pokemons: PokemonType[];
};

const PokemonsList = ({ pokemons }: PokemonsListProps) => {
  return (
    <div>
      {pokemons.map((pokemon, i) => (
        <Pokemon pokemon={pokemon} key={`pokemon-${i}`} />
      ))}
    </div>
  );
};

export default PokemonsList;
