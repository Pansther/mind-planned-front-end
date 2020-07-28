import React from 'react';

import HomeBanner from '../../components/homeBanners';

import { HomeBox } from '../../styleds/home';

import { HomeBannerProps } from './type';

const Home = (): React.ReactElement => { 
    return (
        <HomeBox>
            <h1>Hello from Home.</h1>
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
        path: '#'
    },
    {
        id: 2,
        message: 'หลากหลายรูปแบบ',
        sub_message: 'สร้างและเลือกใช้งาน Templates และ Stickers หลากหลายรูปแบบมากมาย',
        path: '#'
    }, 
    {
        id: 3,
        message: 'เริ่มต้น',
        sub_message: 'คลิกเพื่อเริ่มสร้างกำหนดการแรกของคุณได้เลย',
        path: '#'
    }
];

export default Home;