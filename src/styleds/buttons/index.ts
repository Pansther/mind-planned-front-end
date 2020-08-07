import styled from 'styled-components';
  
import { Link } from 'react-router-dom';

import device from '../device';
 
export const MainGhostBtnBox = styled(Link)`
    display: flex;
    background-color: rgba(0, 0, 0, 0); 
    border-radius: 25px;
    border: 2.2px solid black; 

    padding: 7px 15px 7px 15px;
    justify-content: center;

    color: black;
    font-size: 16px;
    font-family: 'Mitr', sans-serif;
    font-weight: 400;  
    text-decoration: none;

    transition: color 0.2s, border-color 0.2s;

    .icon { 
        align-self: center; 
        margin-right: 5px;
        font-size: 16px;

        @media ${device.mobileXL} {
            font-size: 14px;
        }
    }

    @media ${device.mobileXL} {
        border: 1.5px solid black; 
        padding: 4px 12px 4px 12px;
        font-size: 14px;
    }

    :hover {
        cursor: pointer;
        border-color: deeppink;
        color: deeppink; 

        transition: color 0.2s, border-color 0.2s;
    }

    :active {
        filter: brightness(90%);
    }

    :focus {
        outline: none;
    }
`;