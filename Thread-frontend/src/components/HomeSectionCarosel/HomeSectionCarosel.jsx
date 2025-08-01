/*import React, { useState } from 'react'
import AliceCarousel from 'react-alice-carousel';
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';
import { Button } from "@mui/material";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { mens_kurta } from '../../Data/mens_kurta';

const HomeSectionCarosel = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const responsive = {
        0: { items: 1 },
        720: { items: 3 },
        1024: { items: 5.5 },

    };

    const slidePrev = () => setActiveIndex(activeIndex-1);
    const slideNext = () => setActiveIndex(activeIndex+1)

    const syncActiveIndex = ({item}) => setActiveIndex(item)

    const items = mens_kurta.slice(0,10).map((item) => <HomeSectionCard product={item}/>)
    return (
        <div className='border-amber-50'>
            <div className='relative p-5 '>
                <AliceCarousel
                    items={items}
                    disableButtonsControls
                    responsive={responsive}
                    disableDotsControls
                    onSlideChange={syncActiveIndex}
                    activeIndex={activeIndex}
                />
                {activeIndex !== items.length-5 && <Button variant='contained' className='z-50 bg-white'
                    onClick={slideNext}
                    sx={{ position: 'absolute', top: '8rem', right: '0rem', transform: "translateX(50%) rotate(90deg)", bgcolor: 'white' }} aria-label='next'>
                    <KeyboardArrowLeftIcon sx={{ transform: 'rotate(90deg)', color: "black" }} />
                </Button>}

                <Button variant='contained' className='z-50 bg-white'
                    onClick={slidePrev}
                    sx={{
                        position: 'absolute', top: '8rem', left: '0rem',
                        transform: "translateX(-50%) rotate(-90deg)",
                        bgcolor: 'white'
                    }} aria-label='next'>
                    <KeyboardArrowLeftIcon sx={{ transform: 'rotate(90deg)', color: "black" }} />
                </Button>
            </div>
        </div>
    )
}

export default HomeSectionCarosel*/ 

import React, { useRef, useState, useEffect } from 'react';
import AliceCarousel from 'react-alice-carousel';
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';
import { Button } from "@mui/material";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { mens_kurta } from '../../Data/mens_kurta';

const HomeSectionCarosel = ({data, sectionName}) => {
    const carouselRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(1); // Adjusts based on screen width

    const responsive = {
        0: { items: 1 },
        720: { items: 3 },
        1024: { items: 5.5 },
    };

    const items = mens_kurta.slice(0, 10).map((item, index) => (
        <HomeSectionCard key={index} product={item} />
    ));

    const totalItems = items.length;

    const updateItemsPerPage = () => {
        const width = window.innerWidth;
        if (width >= 1024) setItemsPerPage(5.5);
        else if (width >= 720) setItemsPerPage(3);
        else setItemsPerPage(1);
    };

    useEffect(() => {
        updateItemsPerPage();
        window.addEventListener('resize', updateItemsPerPage);
        return () => window.removeEventListener('resize', updateItemsPerPage);
    }, []);

    const handleSlideChanged = (e) => {
        setActiveIndex(e.item);
    };

    const isPrevVisible = activeIndex > 0;
    const isNextVisible = activeIndex < totalItems - itemsPerPage;

    return (
        <div className='border border-amber-50'>
            <h2 className='text-2xl font-extrabold text-gray-800 py-5'>{sectionName}</h2>
            <div className='relative p-5'>
                <AliceCarousel
                    items={items}
                    disableButtonsControls
                    responsive={responsive}
                    disableDotsControls
                    mouseTracking
                    ref={carouselRef}
                    onSlideChanged={handleSlideChanged}
                />

                {/* Show Next Button only if not on last */}
                {isNextVisible && (
                    <Button
                        variant='contained'
                        className='z-50 bg-white'
                        onClick={() => carouselRef.current?.slideNext()}
                        sx={{
                            position: 'absolute',
                            top: '8rem',
                            right: '0rem',
                            transform: "translateX(50%) rotate(90deg)",
                            bgcolor: 'white',
                        }}
                        aria-label='next'
                    >
                        <KeyboardArrowLeftIcon sx={{ transform: 'rotate(90deg)', color: "black" }} />
                    </Button>
                )}

                {/* Show Prev Button only if not on first */}
                {isPrevVisible && (
                    <Button
                        variant='contained'
                        className='z-50 bg-white'
                        onClick={() => carouselRef.current?.slidePrev()}
                        sx={{
                            position: 'absolute',
                            top: '8rem',
                            left: '0rem',
                            transform: "translateX(-50%) rotate(-90deg)",
                            bgcolor: 'white',
                        }}
                        aria-label='prev'
                    >
                        <KeyboardArrowLeftIcon sx={{ transform: 'rotate(90deg)', color: "black" }} />
                    </Button>
                )}
            </div>
        </div>
    );
};

export default HomeSectionCarosel;

