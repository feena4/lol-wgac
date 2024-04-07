import { Champion } from "./definitions";

export const CHAMPIONS_URL = "https://ddragon.leagueoflegends.com/cdn/6.24.1/data/en_US/champion.json";

const getChampion = (championData: any): Champion => {
    return {
        id: championData.id,
        key: championData.key,
        name: championData.name,
        image: `https://ddragon.leagueoflegends.com/cdn/14.7.1/img/champion/${championData.image.full}`,
        lore: championData.lore,
    };
}

export async function fetchChampions(): Promise<Champion[]> {
    const response = await fetch(CHAMPIONS_URL);
    const data = await response.json();
    const champions: Champion[] = [];
    Object.keys(data.data).map(key => {
        const championData = data.data[key];
        champions.push(getChampion(championData))
    });
    return champions;
}

export async function fetchChampion(id: string): Promise<Champion> {
    const response = await fetch(`https://ddragon.leagueoflegends.com/cdn/6.24.1/data/en_US/champion/${id}.json`);
    const data = await response.json();
    const championData = data.data[id];
    return getChampion(championData);
}
