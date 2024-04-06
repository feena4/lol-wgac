import { useEffect, useState } from "react";
import { ChampionSearchBar } from "./ChampionSearchBar";
import { Champions } from "./Champions";
import { Champion } from "../data/definitions";
import { fetchChampions } from "../data/champions";

export function FilterableChampionsList() {
    const [items, setItems] = useState<Champion[]>([]);

    useEffect(() => {
        fetchChampions().then((data) => setItems(data));
    }, []);

    const [filterText, setFilterText] = useState('');

    return (
        <div>
            <ChampionSearchBar filterText={filterText} onFilterTextChange={setFilterText} />
            <Champions filterText={filterText} champions={items} />
        </div>
    )
}