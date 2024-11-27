"use client";
import { useGetPokemons, useGetPokemonData } from "@/hooks/usePokemons";
import PokemonFrame from "@/components/pokemo-frame";

export default function Home() {
  const { data: pokemons, isFetching: isFetchingPokemons } = useGetPokemons();

  if (isFetchingPokemons) {
    return <div>Loading...</div>;
  }

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
      {pokemons.results.map((pokemon: { name: string; url: string }) => (
        <PokemonItem key={pokemon.name} url={pokemon.url} />
      ))}
    </div>
  );
}

const PokemonItem = ({ url }: { url: string }) => {
  const { data: pokemonData, isFetching: isFetchingPokemonData } =
    useGetPokemonData(url);

  if (isFetchingPokemonData) {
    return <div>Loading...</div>;
  }

  const pokemon = {
    src: pokemonData.sprites.other.showdown.front_default,
    name: pokemonData.name,
  };

  return <PokemonFrame pokemon={pokemon} />;
};
