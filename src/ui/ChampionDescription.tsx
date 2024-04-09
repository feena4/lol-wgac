import styled from "styled-components";
import { Champion } from "../data/definitions";

interface ChampionDescriptionProps {
    champion: Champion;
}

const StyledChampionDescription = styled.div`
    text-align: center
`;

const StyledChampionContainer = styled.div`
    display: inline-flex;
    flex-direction: column;
    margin: 10px;
`;

const StyledChampionName = styled.span`
    margin-bottom: 10px;
`;

export const ChampionDescription = ({ champion }: ChampionDescriptionProps) => (
    <StyledChampionDescription>
        <StyledChampionContainer>
            <StyledChampionName>Champion {champion.name}</StyledChampionName>
            <span><img src={champion.image} alt={champion.name} /></span>
        </StyledChampionContainer>
        <div dangerouslySetInnerHTML={{ __html: champion.lore }} />
    </StyledChampionDescription>
);  