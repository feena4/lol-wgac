import { useState } from "react";
import './Champions.css';
import { Champion } from "../data/definitions";
import { Link } from "react-router-dom";

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
                            <span key={champion.id} className="Champion-container">
                                <Link to={championLink}>
                                    <span className="Champion-img"><img src={champion.image} alt={champion.name} /></span>
                                    <span>{champion.name}</span>
                                </Link>
                            </span>
                        )
                    }
                    )}
                </div>
            </div>
        );
    }
}