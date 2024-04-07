import { Params, useLoaderData } from 'react-router-dom';
import { fetchChampion } from '../data/champions';
import { Champion } from '../data/definitions';
import { ChampionDescription } from '../ui/Champion';

export type ChampionParams = {
    id: string;
}

export const championLoader = async ({ params }: { params: Params }) => {
    const { id } = params as ChampionParams;
    if (id) {
        return await fetchChampion(id);
    }
    return null;
}

export const ChampionPage = () => {
    const champion = useLoaderData() as Champion;
    return <ChampionDescription champion={champion} />
};