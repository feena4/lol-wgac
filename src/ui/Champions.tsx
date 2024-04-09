import styled from "styled-components";
import { Link } from "react-router-dom";
import { Champion } from "../data/definitions";

const StyledChampionLink = styled(Link)`
    display: inline-flex;
    flex-direction: column;
    margin: 10px;
`;

export const Champions = ({ champions, filterText }: { champions: Champion[], filterText: string }) => {
    return (
        <div>
            <div>Champions</div>
            <div>
                {champions.map(champion => {
                    if (
                        champion.name.toLowerCase().indexOf(
                            filterText.toLowerCase()
                        ) === -1
                    ) {
                        return <></>;
                    }
                    const championLink = `champions/${champion.id}`;
                    return (
                        <span key={champion.id} >
                            <StyledChampionLink to={championLink}>
                                <span className="Champion-img"><img src={champion.image} alt={champion.name} /></span>
                                <span>{champion.name}</span>
                            </StyledChampionLink>
                        </span>
                    )
                }
                )}
            </div>
        </div>
    );
}