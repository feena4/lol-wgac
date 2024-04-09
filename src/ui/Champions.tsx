import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Champion } from "../data/definitions";

const StyledChampionLink = styled(Link)`
    display: inline-flex;
    flex-direction: column;
    margin: 10px;
`;

export const Champions = ({ champions, filterText }: { champions: Champion[], filterText: string }) => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(true);

    if (error) {
        return <div>Error: {error}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
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
}