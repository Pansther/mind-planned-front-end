import styled from 'styled-components';

import { navbarMainColour } from '../navbar';
import device from '../device';

export const subNavbarMainColour = `snow`;
// export const subNavbarMainColour = `rgb(240, 240, 240)`;

export const SubNavbarBigBox = styled.div<{ open?: boolean }>`
     
    @media ${device.tablet} { 
        display: flex;  
        background-color: rgba(0, 0, 0, 0.8); 
        height: calc(100vh - 60px);  
        transition: opacity 0.4s;  
        z-index: 99;

        position: fixed; 

        ${
            props => props.open === true ?
            `   
                width: 100%;
                opacity: 1;  
            `
            :
            `
                width: 0;
                opacity: 0; 
            `
        }
    } 
`;

export const SubNavbarBox = styled.div<{ isLoading: boolean, open?: boolean }>`
    display: flex; 
    flex-flow: row wrap;
    background-color: ${subNavbarMainColour}; 
    width: 100%;
    height: 50px; 
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    z-index: 99;

    align-items: center;
    justify-content: center;
    padding-bottom: 0px;
    padding: 10px 0 0 0;
    margin: 0;

    transition: transform 0.8s ease-out, opacity 1.5s;

    @media ${device.tablet} {
        display: flex; 
        background-color: palegoldenrod; 
        height: calc(100vh - 60px - 10px); 
        z-index: 10; 
        border-radius: 50%;
        
        overflow: auto;
        position: fixed;
        top: 60px;  
        right: -50%; 

        transition: width 0.2s ease-in, opacity 0.2s;

        ${
            props => props.open === true ? 
            ` 
                width: 100%;   
                opacity: 1;  
                 
                transition: width 0.2s ease-in, opacity 0.2s;
            `
            :
            ` 
                width: 0;
                opacity: 0;  
                
                transition: width 0.2s ease-in, opacity 0.2s;
            `
        }
    } 

    @media ${device.mobileL} {
        right: -70%; 

        ${
            props => props.open === true ?
            ` 
                width: 140%;   
                opacity: 1;  
                
                transition: width 0.2s ease-in, opacity 0.2s;
            `
            :
            ` 
                width: 0;
                opacity: 0;  
                
                transition: width 0.2s ease-in, opacity 0.2s;
            `
        }
    }

    ${
        props => props.isLoading === true ?
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
        padding: 0;

        @media ${device.tablet} {  
            width: 95%;
            flex-flow: column wrap;
            text-align: center; 
            margin-left: -45%;
        }

        @media ${device.mobileL} {   
            margin-left: -50%;
        }

        .menu-item-box {
            box-sizing: border-box;
            border-bottom: 6px solid ${subNavbarMainColour}; 
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
                    font-size: 22px;  
                } 
            } 

            @media ${device.tablet} { 
                width: 100%;  
                border-bottom: none;
                border-radius: 0px;
 
                margin: 0 0 4px 0;
                padding: 16px 0 16px 0;

                transition: color 0.2s, background-color 0.2s, border 0.2s;
            }

            :hover {
                border-bottom: 6px solid ${navbarMainColour};
                transition: border-color 0.1s;

                @media ${device.tablet} { 
                    color: deeppink;
                    border-bottom: none;
                    border-radius: 5px;
                    background-color: white; 

                    transition: color 0.2s, background-color 0.2s, border 0.2s;
                }
            }
        }
    }
`;