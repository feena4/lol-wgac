import { Params, useLoaderData } from 'react-router-dom';
import { fetchChampion } from '../data/champions';
import { Champion } from '../data/definitions';

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
    return (
        <div>
            <span> Champion {champion.id} {champion.name} </span>
            <span className="Champion-img"><img src={champion.image} alt={champion.name} /></span>
            <div dangerouslySetInnerHTML={{ __html: champion.lore }} />
        </div>
    )
};