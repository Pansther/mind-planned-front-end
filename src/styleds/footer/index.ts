import styled from 'styled-components';

import device from '../../styleds/device';
import { navbarMainColour } from '../../styleds/navbar';

// export const footerMainColour = '#FFDB58';
export const footerMainColour = '#222';

export const FooterBox = styled.div`
    display: flex;
    background: ${footerMainColour}; 
    min-height: 350px;
    width: 100%;
 
    margin-top: 25px; 
    justify-content: center;

    .footer-content {
        display: flex;
        flex-flow: row nowrap;
        min-width: 70%;

        margin-top: 40px;  

        @media ${device.tablet} {
            flex-flow: row wrap;
        }

        .content-box { 
            color: white;
            max-width: 230px;

            margin-right: 60px;

            @media ${device.tablet} {
                min-width: 280px;
                margin-right: 0px;
            }

            @media ${device.mobileXL} {
                width: 230px;
                margin-right: 0px;
                margin-bottom: 40px;
                margin-left: 30px;
            }

            .sub-content-box {
                a {
                    color: white;
                    text-decoration: none;
                }

                i {
                    font-size: 30px;

                    margin-top: 15px;
                    margin-right: 15px;
                    transition: color 0.1s;
                }
                
                i:hover {
                    color: ${navbarMainColour};
                    transition: color 0.1s;
                }
            }

            .header {
                padding: 0;
                margin: 0 0 15px 0;
                line-height: 20px; 
            }

            .sub-header {  
                font-size: 13px;
                font-weight: 400px;

                padding: 0;
                margin: 0 0 3px 0;
                transition: color 0.1s;
            }

            .sub-header:hover {
                color: ${navbarMainColour}; 
                transition: color 0.1s;
            }
        } 
    }
`;