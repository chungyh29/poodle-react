//Carousel.js
import { StyledCarousel, ChevronLeft, ChevronRight, ImageWrapper, StyledText } from './Carousel.styled';
import React , { useState, useEffect } from 'react';


const Carousel = ({slides}) => {

  const [current, setCurrent] = useState(0);
  const length = slides.length;
  useEffect(() => {
    const id  = setTimeout(() => clickNext(), 3000);
    return () => clearTimeout(id);
  }, [current]);

  if (!Array.isArray(slides) || length <= 0 ) {
    return null};

  const clickNext = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  }

  const clickPrevious = () => {
    setCurrent(current === 0 ? length - 1 : current -1);
  }
  return (
    <StyledCarousel>
        <ChevronLeft onClick={clickPrevious}/>
        <ChevronRight onClick={clickNext}/>
          {slides.map((slide,index) => {
            return (
              <ImageWrapper keys={index} index={index} current={current}>
                {index === current && (<img src={slide.image} alt='carousel image'/>)}
              </ImageWrapper>
            );
          })}

          <StyledText>
            <p> LOVE PETS? SO DO WE!</p>
          </StyledText>
        
    </StyledCarousel >
)};

export default Carousel;