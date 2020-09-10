import styled from 'styled-components'; 

import device from '../device';

export const navbarMainColour = `#f5c71a`;

export const NavbarBox = styled.div<{ open?: boolean }>`
    display: flex;
    background-color: ${navbarMainColour};
    /* background-color: snow; */
    width: 100%;
    height: 60px;
    z-index: 99;

    position: sticky;
    top: 0;
    flex-flow: column wrap;
    align-items: center;
    justify-content: center;

    @media ${device.tablet} {
        flex-flow: row wrap;
        justify-content: space-between; 
    }

    .name-box {
        text-decoration: none;

        p {
            color: snow;
            /* color: ${navbarMainColour}; */
            font-size: 34px;
            font-weight: 700;
            padding: 0;
            margin: 0;

            @media ${device.mobileL} {
                font-size: 28px; 
            }

            @media ${device.tablet} {
                margin-left: 15px;
            }
        }

        :hover {
            cursor: pointer;
        }
    }

    i {  
        transition: transform 0.6s;
        
        ${
            props => props.open ?
            `
                transform: rotate(270deg);
            `
            :
            ` 
                transform: rotate(90deg);
            `
        }

        @media ${device.desktopL} {
            display: none;
        }

        @media ${device.tablet} {
            display: block;
            color: white;
            font-size: 32px;

            margin-right: 15px;
        }

        :hover {
            cursor: pointer;
            filter: brightness(95%);
        }

        :active {
            filter: brightness(90%);
        }
    }
`; 