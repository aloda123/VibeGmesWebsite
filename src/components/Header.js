import React, { useState } from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  z-index: 1000;
  padding: 1rem 0;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
`;

const Nav = styled.nav`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: #667eea;
  cursor: pointer;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.a`
  text-decoration: none;
  color: #333;
  font-weight: 500;
  transition: color 0.3s ease;
  cursor: pointer;
  
  &:hover {
    color: #667eea;
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #333;
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled.div`
  display: ${props => props.isOpen ? 'flex' : 'none'};
  flex-direction: column;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  padding: 1rem;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
  
  @media (min-width: 769px) {
    display: none;
  }
`;

const MobileNavLink = styled.a`
  text-decoration: none;
  color: #333;
  font-weight: 500;
  padding: 0.5rem 0;
  border-bottom: 1px solid #eee;
  cursor: pointer;
  
  &:hover {
    color: #667eea;
  }
`;

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <HeaderContainer>
      <Nav>
        <Logo onClick={() => scrollToSection('hero')}>Vibe Games</Logo>
        <NavLinks>
          <NavLink onClick={() => scrollToSection('hero')}>Home</NavLink>
          <NavLink onClick={() => scrollToSection('features')}>Features</NavLink>
          <NavLink onClick={() => scrollToSection('about')}>About</NavLink>
          <NavLink onClick={() => scrollToSection('contact')}>Contact</NavLink>
        </NavLinks>
        <MobileMenuButton onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          ☰
        </MobileMenuButton>
      </Nav>
      <MobileMenu isOpen={isMobileMenuOpen}>
        <MobileNavLink onClick={() => scrollToSection('hero')}>Home</MobileNavLink>
        <MobileNavLink onClick={() => scrollToSection('features')}>Features</MobileNavLink>
        <MobileNavLink onClick={() => scrollToSection('about')}>About</MobileNavLink>
        <MobileNavLink onClick={() => scrollToSection('contact')}>Contact</MobileNavLink>
      </MobileMenu>
    </HeaderContainer>
  );
}

export default Header; 