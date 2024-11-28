import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const pokemonApi = process.env.NEXT_PUBLIC_POKEMON_API_HOST;

/**
 * Custom hook to fetch a list of Pokémon using React Query.
 *
 * @returns {any} The result of the query, which includes the fetched data, status, and other properties provided by React Query.
 *
 * @example
 * const { data, error, isLoading } = useGetPokemons();
 *
 * @see https://react-query.tanstack.com/overview for more details on how to use React Query.
 */
export const useGetPokemons = (): any => {
  return useQuery({
    queryKey: ["pokemons"],
    queryFn: async (): Promise<any> => {
      const response = await axios.get(`${pokemonApi}/api/v2/pokemon`);
      return response.data;
    },
  });
};

/**
 * Custom hook to fetch Pokemon data from a given URL using React Query.
 *
 * @param {string} url - The URL to fetch the Pokemon data from.
 * @returns {any} - The data fetched from the given URL.
 */
export const useGetPokemonData = (url: string): any => {
  return useQuery({
    queryKey: ["pokemon", url],
    queryFn: async (): Promise<any> => {
      const response = await axios.get(url);
      return response.data;
    },
  });
};
