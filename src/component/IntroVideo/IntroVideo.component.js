import { useState } from 'react';
import { FaPlay } from 'react-icons/fa';

import CustomModal from '../CustomModal';

import './IntroVideo.style.scss';

const IntroVideo = () => {

    const [ isModalOpen, setIsModalOpen ] = useState(false);

    const renderImage = () => {
        const url = `${process.env.PUBLIC_URL}/assets/we4u/hero_bg_1.jpg`;

        return (
            <div className='IntroVideo-Image'>
                <img
                    className='IntroVideo-Img'
                    src={url} 
                    alt='we4u background'
                />
            </div>
        );
    }

    const playVideo = () => {

        return (
            <div 
                className='IntroVideo-PlayerImage'
                onClick={() => setIsModalOpen(true)}
            >
                <FaPlay  color='white' fontSize={'20px'}  />
            </div>
        )
    }
    const renderComponents = () => {
        return (
            <section className='IntroVideo'>
                { renderImage()}
                <div className='IntroVideo-Container ContainerWrapper'>
                    <h2 className='IntroVideo-Title'>{'Watch Our Video'}</h2>
                    <p className='IntroVideo-Text'>{'View Our Services By Watching This Short Video'}</p>
                    { playVideo() }
                </div>
                { isModalOpen && 
                    <CustomModal closeModal={setIsModalOpen}>
                    {
                        !navigator.onLine ?
                            <p className='IntroVideo-Offline'>
                                {'Your Network is currently offline'}
                            </p>
                            :
                            <video className='IntroVideo-Video' controls>
                                <source
                                    type='video/mp4'
                                    src='https://we4ulogistics.co.za/videos/promo.mp4'
                                />
                            </video>
                    }
                    </CustomModal>
                }
            </section>
        );
    }

    return renderComponents();
}

export default IntroVideo;


