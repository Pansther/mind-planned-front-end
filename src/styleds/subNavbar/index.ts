import styled from 'styled-components';

import { navbarMainColour } from '../navbar';

export const SubNavbarBox = styled.div<{ loading: boolean }>`
    display: flex; 
    /* background-color: red; */
    width: 100%;
    height: 60px;
    flex-flow: row wrap;
    align-items: center;
    justify-content: center;
    transition: transform 0.8s ease-out, opacity 1.5s;

    ${
        props => props.loading === true ?
        `
            visibility: hidden;
            opacity: 0;
            transform: translateY(-60px);
        `
        :
        `
            visibility: visible;
            opacity: 1;
            transform: translateY(0px);
        `
    }

    .menu-box {
        display: flex;
        flex-flow: row wrap;
        margin-top: 5px;

        .menu-item-box {
            box-sizing: border-box;
            border-bottom: 6px solid snow;
            transition: border-color 0.1s;
            
            margin-left: 25px;
            margin-right: 25px;

            text-decoration: none;
            
            p {
                padding: 14px 0 12px 0;
                margin: 0;

                color: black;
                font-size: 24px;
                font-weight: 700;
            }

            :hover {
                border-bottom: 6px solid ${navbarMainColour};
                transition: border-color 0.1s;
            }
        }
    }
`;