import React, {useState, useEffect} from 'react'
import {FaBars} from 'react-icons/fa'
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink} from './NavbarElements';

const Navbar = ({ toogle }) => {
  const [scrollNav, setScrollNav] = useState(false)

  const changeNav = ()=> {
    if(window.scrollY >= 80) {
      setScrollNav(true)
    } else {
      setScrollNav(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNav)
  }, [])

  return (
    <>
     <Nav scroolNav={scrollNav}>
       <NavbarContainer>
         <NavLogo to='/'>Bongwe Bank</NavLogo>
         <MobileIcon onClick={toogle}>
           <FaBars />
         </MobileIcon>
         <NavMenu>
           <NavItem>
             <NavLinks to='about'>About</NavLinks>
           </NavItem>
           <NavItem>
             <NavLinks to='discover'>Discover</NavLinks>
           </NavItem>
           <NavItem>
             <NavLinks to='services'>Services</NavLinks>
           </NavItem>
           <NavItem>
             <NavLinks to='signup'>Sign Up</NavLinks>
           </NavItem>
         </NavMenu>
         <NavBtn>
           <NavBtnLink to='/signin'>Sign In</NavBtnLink>
         </NavBtn>
       </NavbarContainer>
     </Nav>
    
    </>
  );
};

export default Navbar
