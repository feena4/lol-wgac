import { Params, useLoaderData } from 'react-router-dom';
import { fetchChampion } from '../data/champions';
import { Champion } from '../data/definitions';
import { ChampionDescription } from '../ui/ChampionDescription';

export type ChampionParams = {
    id: string;
}

export const championLoader = async ({ params }: { params: Params }) => {
    const { id } = params as ChampionParams;
    if (id) {
        try {
            return await fetchChampion(id);
        }
        catch (error) {
            throw new Response(`Something went wrong fetching the champion ${id}`);
        }
    }
    return null;
}

export const ChampionPage = () => {
    const champion = useLoaderData() as Champion;
    return <ChampionDescription champion={champion} />
};