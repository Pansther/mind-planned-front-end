import React from 'react';

import { MainGhostBtn } from '../buttons'; 

import { HomeBannerProps } from '../../pages/home/type';

import { HomeBannerBox } from '../../styleds/homeBanners'; 

const HomeBanner = (props: HomeBannerProps): React.ReactElement => {
    return (
        <HomeBannerBox isOdd={props.id % 2 === 1}>
            <div className='banner-content-box'> 
                <div className='banner-img-box'>
                    <img src={props.img} alt={`banner-img-${props.id}`} />
                </div>

                <div className='banner-detail-box'>
                    <div className='banner-text-box'>
                        <div className='main-mes-box'>
                            <p>{props.message}</p>
                        </div>

                        <div className='sub-mes-box'>
                            <p>{props.sub_message}</p>
                        </div>

                        <div className='detail-btn'>
                            <MainGhostBtn path={props.path} icon='fas fa-arrow-circle-right' text='รายละเอียด' />
                        </div>
                    </div>
                </div>
            </div>
        </HomeBannerBox>
    );
}

export default HomeBanner;