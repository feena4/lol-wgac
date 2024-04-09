import { FilterableChampionsList } from "../ui/FilterableChampionsList"
import { fetchChampions } from "../data/champions";
import { Champion } from "../data/definitions";
import { useLoaderData } from "react-router-dom";

export const championsLoader = async () => {
    let champions
    try {
        champions = await fetchChampions();
    } catch (err) {
        throw new Response("Something went wrong fetching the champions");
    }
    return champions;
}

export const ChampionsPage = () => {
    const champions = useLoaderData() as Champion[];
    return <FilterableChampionsList champions={champions} />
}