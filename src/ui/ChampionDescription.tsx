import { Champion } from "../data/definitions";

interface ChampionDescriptionProps {
    champion: Champion;
}

export const ChampionDescription = ({ champion }: ChampionDescriptionProps) => (
    <div className="Champion-description">
        <div className="Champion-container">
            <span className="Champion-name">Champion {champion.name}</span>
            <span className="Champion-img"><img src={champion.image} alt={champion.name} /></span>
        </div>
        <div dangerouslySetInnerHTML={{ __html: champion.lore }} />
    </div>
);  