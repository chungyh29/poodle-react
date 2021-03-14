// Menu.styled.js
import styled from 'styled-components';
import { device } from '../../assets/styles/device';

export const StyledMenu = styled.ul`
  list-style:none;
  display:flex;
  flex-flow: row nowrap;
  align-items:center;

  @media (max-width: 768px){
    flex-flow:column nowrap;
    background-color:${({ theme }) => theme.primaryDark};
    position:absolute;
    top:0;
    right:0;
    height:100vh;
    padding:3.5rem 2rem;
    transition: transform 0.3s ease-in-out;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    margin:0;
  }

  li{
    padding:10px 10px;
    margin 5px;
  }

  a {
    font-size: 1rem;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing:0.1em;
    color: ${({ theme }) => theme.primaryDark};
    text-decoration: none;
    transition: color 0.3s linear;
    
    @media (max-width: 768px) {
      font-size: 1.5rem;
      text-align: center;
      color: ${({ theme }) => theme.primaryLight};
    }

    &:hover {
      color: ${({ theme }) => theme.primaryHover};
    }
  }
`;