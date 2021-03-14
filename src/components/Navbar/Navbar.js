import  Burger  from './Burger';
import { StyledNavbar,StyledImgContainer } from './Navbar.styled';
import logo from '../../assets/images/logoHeader.png';

const Navbar = (props) => {

  return (
    <StyledNavbar>
      <StyledImgContainer>
        <img src={logo} />
      </StyledImgContainer>
      <div ref={props.node}>
        <Burger {...props}/>
      </div>
    </StyledNavbar>
      
  )
};

export default Navbar
