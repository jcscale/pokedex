import Image from "next/image";

interface Pokemon {
  src: string;
  name: string;
}

const PokemonFrame = ({ pokemon }: { pokemon: Pokemon }) => {
  return (
    <div className="ml-5 mt-5 h-80 w-full rounded border bg-gold p-2">
      <Image
        className="m-auto h-44 w-44 object-cover"
        src={pokemon.src}
        alt={pokemon.name}
        width={400}
        height={400}
      />
      <p className="text-center text-deepShadePurple">{pokemon.name}</p>
    </div>
  );
};

export default PokemonFrame;
