import { LoaderFunction, useLoaderData, useParams } from 'react-router-dom';
import { fetchChampion } from '../data/champions';
import { Champion } from '../data/definitions';

export type ChampionParams = {
    id: string;
}

interface LoaderData {
    champion: Champion;
}

export const championLoader = async (id: string) => {
    const champion: Champion = await fetchChampion(id);
    return champion;
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