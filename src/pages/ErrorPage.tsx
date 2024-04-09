import { Link, isRouteErrorResponse, useRouteError } from "react-router-dom";

export const ErrorPage = () => {
    let message = "There is nothing here.";
    const error = useRouteError();
    if (isRouteErrorResponse(error)) {
        message = error.data;
    }
    return (
        <div id="error-page">
            <h1>Crap!</h1>
            <p>{message}</p>
            <p>
                <Link to="/">Go back Home</Link>
            </p>
        </div>
    );
}