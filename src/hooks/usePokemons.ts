import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const pokemonApi = process.env.NEXT_PUBLIC_POKEMON_API_HOST;

export const useGetPokemons = (): any => {
  return useQuery({
    queryKey: ["pokemons"],
    queryFn: async (): Promise<any> => {
      const response = await axios.get(`${pokemonApi}/api/v2/pokemon`);
      // const testUrl = "https://pokeapi.co/api/v2/pokemon/20/";
      // const response = await axios.get(testUrl);
      return response.data;
    },
  });
};

export const useGetPokemonData = (url: string): any => {
  return useQuery({
    queryKey: ["pokemon", url],
    queryFn: async (): Promise<any> => {
      const response = await axios.get(url);
      return response.data;
    },
  });
};
