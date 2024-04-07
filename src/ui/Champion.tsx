import { Champion } from "../data/definitions";

interface ChampionDescriptionProps {
    champion: Champion;
}

export const ChampionDescription = ({ champion }: ChampionDescriptionProps) => (
    <div>
        <span> Champion {champion.id} {champion.name} </span>
        <span className="Champion-img"><img src={champion.image} alt={champion.name} /></span>
        <div dangerouslySetInnerHTML={{ __html: champion.lore }} />
    </div>
);  