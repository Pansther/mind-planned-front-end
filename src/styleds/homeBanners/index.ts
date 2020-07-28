import styled from 'styled-components';
 
export const HomeBannerBox = styled.div<{ isOdd?: boolean }>`
    display: flex;
    background-color: #fbec5d; 
    width: 100%; 

    position: relative;
    padding-top: 40%; 
    margin-bottom: 50px;

    .banner-content-box {
        display: flex;
        flex-direction: ${props => props.isOdd === true ? 'row' : 'row-reverse'};
        width: 100%;
        height: 100%;

        position: absolute;
        top: 0;
        left: 0;

        .banner-img-box {
            background-color: lightgray;
            width: 60%;   

            p {

            }
        } 

        .banner-detail-box {
            display: flex;
            width: 40%;  
            justify-content: center; 

            .banner-text-box {
                display: flex;
                /* background-color: wheat; */
                width: 80%; 
                border-radius: 25px;

                margin-left: 4.5%;
                align-self: center;    
                padding: 20px 5px 30px 5px;
                flex-flow: column wrap; 

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
                }

                .sub-mes-box {
                    margin-bottom: 15px;

                    p {                
                        font-weight: 300;
                        /* font-family: 'Mitr', sans-serif; */
                    }
                }  

                .detail-btn { 
                    display: flex;
                    justify-content: center;
                    justify-self: center;
                    justify-items: center;
                }
            }
        } 
    }
`;