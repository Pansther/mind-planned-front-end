import React from 'react';
import { Link } from 'react-router-dom';

import { FooterBox } from '../../styleds/footer';

const Footer = (): React.ReactElement => {
    return (
        <FooterBox>
            <div className='footer-content'>

                <div className='content-box'>
                    <h1 className='header'>
                        Mind Planned
                    </h1>
                </div>

                {
                    footerData?.map(footer => (
                        <div key={footer.id} className='content-box'>
                            <h3 className='header'>
                                {footer.header.toUpperCase()}
                            </h3>
                            {
                                footer?.content.map(content => (
                                    <div key={content.id} className='sub-content-box'>
                                        <Link to={content.link} className='sub-header'>
                                            {content.header}
                                        </Link>
                                    </div>
                                ))
                            } 
                        </div>
                    ))
                }

                <div className='content-box'>
                    <h3 className='header'>
                        FOLLOW MIND-PLANNED
                        <div className='sub-content-box'>
                            <Link to='#'>
                                <i className="fab fa-facebook"></i>
                            </Link> 
                            
                            <Link to='#'>
                                <i className="fab fa-instagram"></i>
                            </Link> 

                            <Link to='#'>
                                <i className="fab fa-twitter"></i>
                            </Link>  
                        </div>
                    </h3>
                </div>

            </div>
        </FooterBox>
    )
}

const footerData = [
    {
        id: 1,
        header: 'about',
        content: [
            {
                id: 1,
                header: 'About Mind-Planned',
                link: '#'
            },
            {
                id: 2,
                header: 'About Mind-Planned Studio',
                link: '#'
            },
            {
                id: 3,
                header: 'Careers',
                link: '#'
            },
            {
                id: 4,
                header: 'Contact',
                link: '#'
            }
        ]
    },
    {
        id: 2,
        header: 'collaborate with us',
        content: [
            {
                id: 1,
                header: 'For Brands & Designers',
                link: '#'
            }
        ]
    },
    {
        id: 3,
        header: 'support',
        content: [
            {
                id: 1,
                header: 'Community Guidelines',
                link: '#'
            },
            {
                id: 2,
                header: 'Help Center',
                link: '#'
            },
            {
                id: 3,
                header: 'Sitemap',
                link: '#'
            }
        ]
    }
];

export default Footer;