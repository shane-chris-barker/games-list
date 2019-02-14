import React from 'react';
import logo from './images/games-list-logo.png'

const Footer = () => (
    <div className='mt-5' id='footer'>
        <div className='container'>
            <div className='row'>
                <div className='col-md-4 col-12'>
                    <img src={logo} />
                </div>
                <div className='col-md-4 col-12 offset-4'>
                    <div className='row'>
                        <ul>
                            <li>
                                API kindly provided by
                                <a href='https://www.giantbomb.com/' target='_blank'>
                                    GiantBomb
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
)
export default Footer
