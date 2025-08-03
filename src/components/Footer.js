import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background: #2c3e50;
  color: white;
  padding: 3rem 0 1rem;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
`;

const FooterSection = styled.div`
  h3 {
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 1rem;
    color: #ecf0f1;
  }
  
  p {
    color: #bdc3c7;
    line-height: 1.6;
    margin-bottom: 0.5rem;
  }
  
  a {
    color: #bdc3c7;
    text-decoration: none;
    transition: color 0.3s ease;
    
    &:hover {
      color: #3498db;
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const SocialLink = styled.a`
  width: 40px;
  height: 40px;
  background: #34495e;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-decoration: none;
  transition: all 0.3s ease;
  
  &:hover {
    background: #3498db;
    transform: translateY(-2px);
  }
`;

const FooterBottom = styled.div`
  border-top: 1px solid #34495e;
  padding-top: 1rem;
  text-align: center;
  color: #bdc3c7;
`;

const FooterLink = styled.a`
  color: #3498db;
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`;

function Footer() {
  return (
    <FooterContainer>
      <Container>
        <FooterContent>
          <FooterSection>
            <h3>Vibe Games</h3>
            <p>
              Your ultimate destination for gaming excellence. Connect, compete, and create 
              unforgettable gaming experiences with players worldwide.
            </p>
            <SocialLinks>
              <SocialLink href="#" aria-label="Facebook">📘</SocialLink>
              <SocialLink href="#" aria-label="Twitter">🐦</SocialLink>
              <SocialLink href="#" aria-label="Instagram">📷</SocialLink>
              <SocialLink href="#" aria-label="Discord">🎮</SocialLink>
            </SocialLinks>
          </FooterSection>
          
          <FooterSection>
            <h3>Quick Links</h3>
            <p><a href="#hero">Home</a></p>
            <p><a href="#features">Features</a></p>
            <p><a href="#about">About</a></p>
            <p><a href="#contact">Contact</a></p>
          </FooterSection>
          
          <FooterSection>
            <h3>Support</h3>
            <p><a href="#">Help Center</a></p>
            <p><a href="#">Community Guidelines</a></p>
            <p><a href="#">Privacy Policy</a></p>
            <p><a href="#">Terms of Service</a></p>
          </FooterSection>
          
          <FooterSection>
            <h3>Contact Info</h3>
            <p>📧 hello@vibegames.com</p>
            <p>📞 +1 (555) 123-4567</p>
            <p>📍 123 Gaming Street</p>
            <p>Digital City, DC 12345</p>
          </FooterSection>
        </FooterContent>
        
        <FooterBottom>
          <p>
            © 2024 Vibe Games. All rights reserved. | 
            <FooterLink href="#"> Privacy Policy</FooterLink> | 
            <FooterLink href="#"> Terms of Service</FooterLink>
          </p>
        </FooterBottom>
      </Container>
    </FooterContainer>
  );
}

export default Footer; 