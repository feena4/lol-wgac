import { Link } from "react-router-dom";

export const ErrorPage = () => {

    return (
        <div id="error-page">
            <h1>Crap!</h1>
            <p>There is nothing here.</p>
            <p>
                <Link to="/">Go back Home</Link>
            </p>
        </div>
    );
}