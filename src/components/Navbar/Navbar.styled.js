import styled from 'styled-components';

export const StyledNavbar = styled.nav`
  width:100%;
  height: 55px;
  border-bottom: 1px solid #f1f1f1;
  padding 0 20px;
  display:flex;
  justify-content:space-between;
  align-items: center;
  background-color:rgba(250,250,250,0.8);
  position:fixed;
  z-index:10;

  div{
    display:flex;
    align-items:center;
  }
`;
export const StyledImgContainer = styled.div`
  height:50px;
  width:50px;

  img{
    height:100%;
    width:100%;
  }
`;

