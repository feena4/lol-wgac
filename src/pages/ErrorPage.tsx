import { Link } from "react-router-dom";

export const ErrorPage = () => {

    return (
        <div id="error-page">
            <h1>Crap!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>Page not found</i>
                <p>
                    <Link to="/">Go back Home</Link>
                </p>
            </p>
        </div>
    );
}