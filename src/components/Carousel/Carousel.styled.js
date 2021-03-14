// Carousel.styled.js
import styled , {keyframes } from 'styled-components';
import {FaChevronCircleLeft, FaChevronCircleRight} from 'react-icons/fa';

const kf = keyframes`
  from{
    opacity:0;
  }
  to{
    opacity:1;
  }`;

export const StyledCarousel = styled.div`
  width:100vw;
  aspect-ratio:3/2;
  // position:relative;
  position:absolute;
  top:0;
  left:0;
  overflow:hidden;

  p{
    padding:0;
  }

`;

export const ChevronLeft = styled(FaChevronCircleLeft)`
  position:absolute;
  top:50%;
  left:3vw;
  font-size:3rem;
  color:#000;
  z-index:10;
  cursor:pointer;
  user-select:none;

  @media (max-width:768px){
    font-size:1.5rem;
  }
`;

export const ChevronRight = styled(FaChevronCircleRight)`
  position:absolute;
  top:50%;
  right:3vw;
  font-size:3rem;
  color:#000;
  z-index:10;
  cursor:pointer;
  user-select:none;

  @media (max-width:768px){
    font-size:1.5rem;
  }
`;

export const ImageWrapper = styled.div`
  opacity: ${({index, current}) => current === index ? 1 : 0 };
  transition: 1.2s ease-in-out;
  width:100vw;
  aspect-ratio:3:2;
  
  img{
    width:100%;
    height:100%;
  }

`;

export const StyledText = styled.div`
  width:20vw;
  color:white;
  position:absolute;
  left:8%;
  top:28%;
  display:flex;
  flex-direction: column;
  align-items: center;
  font-size:2em;
  text-align:center;
  font-weight:bold;
  background-color: rgba(25,25,25,0.5);
  border-radius: 30px 5px;
  padding:20px;
  border:3px solid rgba(5,5,5,0.5);

  @media (max-width:768px){
    display:none;
  }
`;