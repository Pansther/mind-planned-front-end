import styled from 'styled-components';

import { navbarMainColour } from '../navbar';
import device from '../device';

export const SubNavbarBox = styled.div<{ loading: boolean }>`
    display: flex; 
    background-color: lightgoldenrodyellow;
    width: 100%;
    height: 50px;
    box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.07);

    flex-flow: row wrap;
    align-items: center;
    justify-content: center;
    transition: transform 0.8s ease-out, opacity 1.5s;
    padding-bottom: 0px;
    padding: 10px 0 0 0;
    margin: 0;

    @media ${device.mobileL} {
        height: 35px;
        padding: 5px 0 0 0;
    }

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
        /* margin-top: 5px; */
        padding: 0;

        .menu-item-box {
            box-sizing: border-box;
            border-bottom: 6px solid lightgoldenrodyellow;
            transition: border-color 0.1s;
            
            margin-left: 25px;
            margin-right: 25px;
            padding-bottom: 10px;

            color: black;
            text-decoration: none;
            
            p {
                padding: 0;
                margin: 0;
 
                font-size: 24px;
                font-weight: 700;

                @media ${device.mobileL} {
                    font-size: 18px;  
                }
            }

            @media ${device.mobileL} {
                margin-left: 12px;
                margin-right: 12px; 
                padding-bottom: 3px;
            }

            :hover {
                border-bottom: 6px solid ${navbarMainColour};
                transition: border-color 0.1s;
            }
        }
    }
`;