import styled from 'styled-components';

import { navbarMainColour } from '../../styleds/navbar';

// export const footerMainColour = '#FFDB58';
export const footerMainColour = '#222';

export const FooterBox = styled.div`
    display: flex;
    background: ${footerMainColour}; 
    height: 400px;
    width: 100%;

    margin-top: 25px; 
    justify-content: center;

    .footer-content {
        display: flex;
        width: 70%;

        margin-top: 40px;
        justify-content: space-around;

        .content-box { 
            color: white;

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