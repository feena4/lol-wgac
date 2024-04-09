import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";

const StyledList = styled.ul`
    display: flex;
`;
const StyledListItem = styled.li`
    display: flex;
    margin-right: 9px;
    padding-left: 3px;
    box-sizing: border-box;
`;
const StyledLink = styled(Link)`
    border: 1px solid;
    border-radius: 11px;
    padding: 2px 12px;
    text-decoration: none;
    &:hover {
        border: 2px solid;
    }
`;

export function Layout() {
    return (
        <div>
            {/* A "layout route" is a good place to put markup you want to
            share across all the pages on your site, like navigation. */}
            <nav>
                <StyledList>
                    <StyledListItem>
                        <StyledLink to="/">Home</StyledLink>
                    </StyledListItem>
                    <StyledListItem>
                        <StyledLink to="/error">Nothing Here</StyledLink>
                    </StyledListItem>
                </StyledList>
            </nav>

            <hr />

            {/* An <Outlet> renders whatever child route is currently active,
            so you can think about this <Outlet> as a placeholder for
            the child routes we defined above. */}
            <Outlet />
        </div>
    );
}