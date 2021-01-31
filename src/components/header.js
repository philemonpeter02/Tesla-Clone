import React from "react";
import styled from 'styled-components';
import { Link } from 'gatsby';
import { menuData, menuDataRight } from '../data/MenuData'
import MenuIcon from '@material-ui/icons/Menu';
import TeslaLogo from '../assets/teslaLogoSmall.svg'


const Header = ({toggle}) => {
  
  return(
  <Nav >
    <NavLogo >
      <img src={TeslaLogo} alt="Tesla Logo" />   
    </NavLogo>
    
    <NavMenu>
      {menuData.map((item, index) => (
        <NavLink to={item.link} key={index}>
          {item.title}
        </NavLink>
      ))}
    </NavMenu>
    
    <NavBtn>
    {menuDataRight.map((item, index) => (
        <NavLink to={item.link} key={index}>
          {item.title}
        </NavLink>
      ))}
    <Bars onClick={toggle} />
    </NavBtn>
  </Nav>
  
)
}
export default Header

const Nav = styled.nav`
transition: 0.5s all ease-in-out;
background: transparent;
align-items: center;
margin: 10px;
width: 100%;
display: flex;
justify-content: space-between;
padding: 0.5rem calc((100vw - 1500px) / 2);
z-index: 999;
top: 0;
position: fixed;
@media screen and (max-width: 1200px) {
  padding: 0.5rem calc((100vw - 1100px) / 2);
}
@media screen and (max-width: 1000px) {
  padding: 0.5rem calc((100vw - 900px) / 2);
}
@media screen and (max-width: 768px) {
  padding: 0.5rem calc((100vw - 664px) / 2);
}

`
const NavLogo = styled.div`
height: 14px;
width: 100px;
img{
  height: 13px;
  width: 100px;
}

`
const NavLink = styled(Link)`
color: #000;
display: flex;
font-size: 0.9rem;
align-items: center;
text-decoration: none;
padding: 0 0.7rem;
height: 100%;
cursor: pointer;
@media screen and (max-width: 1200px) {
  display: none;
}

`

const Bars = styled(MenuIcon)`
color: #000;
cursor: pointer;

`
const NavMenu = styled.div`
display: flex;
align-items: center;
margin-right: -100px;

`
const NavBtn = styled.div`
display:flex;
align-items: center;
margin-right: 24px;

`