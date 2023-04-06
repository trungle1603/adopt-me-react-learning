import { QueryStatus, useQuery } from "@tanstack/react-query";
import { fetchBreedList } from "../fetchs/fetchBreedList";

type BreedListHook = [string[], QueryStatus];

export function useBreedList(animal: string): BreedListHook {
    const results = useQuery(["breeds", animal], fetchBreedList);
    return [results?.data?.breeds ?? [], results.status];
}
