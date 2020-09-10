import React from 'react';

import HomeBanner from '../../components/homeBanners'; 

import { HomeBox } from '../../styleds/home';

import { HomeBannerProps } from './type';

import { IMG } from '../../api';

const Home = (): React.ReactElement => { 
    return (
        <HomeBox> 
            <div className='banner-lists'>
                {
                    homeBannerData!.map((banner, index) => (
                        <HomeBanner key={index} { ...banner } />
                    ))
                }
            </div> 
        </HomeBox>
    );
}

const homeBannerData: HomeBannerProps[] = [
    {
        id: 1,
        message: 'กำหนดกิจกรรมของคุณ',
        sub_message: 'สร้างกำหนดการ และกำหนดได้ทุกอย่างด้วยตัวของคุณเอง',
        img: `${IMG}/home-banner-1.png`,
        path: '/my-plan/'
    },
    {
        id: 2,
        message: 'หลากหลายรูปแบบ',
        sub_message: 'สร้างและเลือกใช้งาน Templates และ Stickers หลากหลายรูปแบบมากมาย',
        img: `${IMG}/home-banner-2.png`,
        path: '/template/'
    }, 
    {
        id: 3,
        message: 'เริ่มต้น',
        sub_message: 'คลิกเพื่อเริ่มสร้างกำหนดการแรกของคุณได้เลย',
        img: `${IMG}/home-banner-3.png`,
        path: '/my-plan/'
    }
];

export default Home;