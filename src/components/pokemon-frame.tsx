import Image from "next/image";
import { pokemonTypeColors } from "@/utils/pokemon-types";

interface PokemonFrameProps {
  src: string;
  name: string;
  types: Array<{ type: { name: string } }>;
}

const PokemonFrame = ({ pokemon }: { pokemon: PokemonFrameProps }) => {
  const bgColor = pokemon.types[0]?.type?.name
    ? pokemonTypeColors[pokemon.types[0].type.name]
    : "gold";
  return (
    <div
      className="ml-5 mt-5 h-96 w-64 rounded p-2"
      style={{ backgroundColor: bgColor }}
    >
      <p className="text-black">
        {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
      </p>
      <Image
        className="h-56 w-full border border-black object-cover"
        src={pokemon.src}
        alt={pokemon.name}
        width={400}
        height={400}
      />
      {pokemon.types.map((type) => {
        return (
          <>
            <p>{type.type.name}</p>
          </>
        );
      })}
    </div>
  );
};

export default PokemonFrame;
