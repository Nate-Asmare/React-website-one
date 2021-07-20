import React from 'react';
import {FaBars} from 'react-icons/fa';
import { 
    Nav, 
    NavbarContainer, 
    NavLogo, 
    MobileIcon, 
    NavMenu, 
    NavItem, 
    NavLinks,
    NavBtn,
    NavBtnLink } from './NavbarElements';

const index = () => {
    return (
        <>
            <Nav >
                <NavbarContainer>
                    <NavLogo to='/'>
                        dolla
                    </NavLogo>
                    <MobileIcon>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="about">About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="about">Discover</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="about">Services</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="about">Sign Up</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to="/signin">Sign In</NavBtnLink>
                    </NavBtn>
                </NavbarContainer >
            </Nav>
        </>
    )
}

export default index
 