import { useState } from "react";
import { ChampionSearchBar } from "./ChampionSearchBar";
import { Champions } from "./Champions";
import { Champion } from "../data/definitions";

export function FilterableChampionsList({ champions }: { champions: Champion[] }) {
    const [filterText, setFilterText] = useState('');

    return (
        <div>
            <ChampionSearchBar filterText={filterText} onFilterTextChange={setFilterText} />
            <Champions filterText={filterText} champions={champions} />
        </div>
    )
}