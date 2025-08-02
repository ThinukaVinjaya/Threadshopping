import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { mainCarouselData } from './MainCaroselData';


const MainCrosel = () => {

    const items = mainCarouselData.map((item) => <img className='cursor-pointer -z-10' role='presentation' src={item.image} alt='' />)

    return (
        <div style={{ width: '100vw', overflow: 'hidden' }}>
            <AliceCarousel
                items={items}
                disableButtonsControls
                autoPlay
                autoPlayInterval={7000}
                infinite
            />
        </div>

    )
}
export default MainCrosel

