import type { MetaFunction } from "@remix-run/node";
import { json, useLoaderData } from "@remix-run/react";
import PokemonsList from "src/components/PokemonsList";

export const meta: MetaFunction = () => {
  return [
    { title: "Pokemons" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

/**
 * Only works in routes folder
 */
export const loader = async () => {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=10");
  const pokemons = await response.json();

  return json({ pokemons });
};

export default function Index() {
  const { pokemons } = useLoaderData<typeof loader>();
  return (
    <div>
      <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
        <p className="text-3xl font-bold underline">Pokemons!!</p>
      </div>

      <section>
        <PokemonsList pokemons={pokemons.results} />
      </section>
    </div>
  );
}
