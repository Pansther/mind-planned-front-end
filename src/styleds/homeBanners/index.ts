import styled from 'styled-components';
 
import device from '../device';

export const HomeBannerBox = styled.div<{ isOdd?: boolean }>`
    display: flex;
    background-color: lightgoldenrodyellow; 
    width: 100%; 

    position: relative;
    padding-top: 40%; 
    /* margin-bottom: 50px; */

    @media ${device.tablet} {
        padding-top: 115%; 
    }

    .banner-content-box {
        display: flex;
        flex-direction: ${props => props.isOdd === true ? 'row' : 'row-reverse'};
        width: 100%;
        height: 100%;
        
        position: absolute;
        top: 0;
        left: 0;

        @media ${device.tablet} {
            flex-flow: row wrap; 
            /* width: 50%; */
        }

        .banner-img-box {
            background-color: lightgoldenrodyellow;
            width: 55%;     
            text-align: center; 

            overflow: hidden;
            position: relative; 
            align-self: center;

            img {
                width: 85%;
            }

            @media ${device.tablet} {
                width: 100%;    
                height: 66%;
            }
        } 
 
        .banner-detail-box {
            display: flex;
            /* background-color: red; */
            background-color: #fbec5d;
            width: 40%;  
            height: 100%; 

            position: absolute;

            ${props => props.isOdd ? `
                border-top-left-radius: 20%;
                border-bottom-left-radius: 20%;
                right: 0px;
                padding-right: 50px;
            ` : `
                border-top-right-radius: 20%;
                border-bottom-right-radius: 20%;
                left: 0px;
                padding-left: 50px;
            `}

            justify-content: center; 
            align-items: center;

            @media ${device.tablet} {
                width: 100%;  
                height: 40%;
                border-radius: 50px;

                padding: 0; 
                bottom: 0;  
            }

            .banner-text-box {
                display: flex;
                /* background-color: wheat; */
                width: 100%; 
 
                align-content: center;    
                padding: 20px 5px 30px 5px;

                ${props => props.isOdd ? `
                    margin-left: 50px;
                ` : `
                    margin-right: 50px;
                `}
                

                flex-flow: column wrap; 

                @media ${device.tablet} {
                    ${props => props.isOdd ? 
                        `
                            margin-left: 0px;
                        ` 
                        : 
                        `
                            margin-right: 0px;
                        `
                    }
                }

                @media ${device.mobileXL} {
                    width: 80%;
                }

                p {            
                    text-align: center;    
                    font-family: 'Mitr', sans-serif;
                    margin: 0;
                    padding: 0;
                }
    
                .main-mes-box {
                    margin-bottom: 5px;

                    p {                
                        font-size: 32px;
                        /* font-family: 'Mitr', sans-serif; */
                    } 

                    @media ${device.mobileXL} {
                        p {
                            font-size: 26px;
                        }
                    }

                    @media ${device.mobileL} {
                        p {
                            font-size: 18px;
                        }
                    }
                }

                .sub-mes-box {
                    margin-bottom: 15px;

                    p {                
                        font-weight: 300;
                        /* font-family: 'Mitr', sans-serif; */
                    }

                    @media ${device.mobileXL} {
                        p {
                            font-size: 14px;
                        }
                    }

                    @media ${device.mobileL} {
                        p {
                            font-size: 12px;
                        }
                    }
                }  

                .detail-btn { 
                    display: flex;
                    justify-content: center; 
                }
            }

            @media ${device.tablet} {
                width: 100%;  
            }
        } 
    } 
`;