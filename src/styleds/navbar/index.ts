import styled from 'styled-components';

export const navbarMainColour = `#f5c71a`;

export const NavbarBox = styled.div`
    display: flex;
    background-color: ${navbarMainColour};
    width: 100%;
    height: 60px;
    flex-flow: column wrap;
    align-items: center;
    justify-content: center;

    .name-box {
        text-decoration: none;

        p {
            color: snow;
            font-size: 34px;
            font-weight: 700;
        }

        :hover {
            cursor: pointer;
        }
    }
`;