import { FilterableChampionsList } from "../ui/FilterableChampionsList"
import { fetchChampions } from "../data/champions";
import { Champion } from "../data/definitions";
import { useLoaderData } from "react-router-dom";

export const championsLoader = async () => {
    return await fetchChampions();
}

export const ChampionsPage = () => {
    const champions = useLoaderData() as Champion[];
    return <FilterableChampionsList champions={champions} />
}