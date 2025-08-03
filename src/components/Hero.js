import React from 'react';
import styled, { keyframes } from 'styled-components';

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const float = keyframes`
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
`;

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 80px 20px 20px;
  position: relative;
  overflow: hidden;
`;

const HeroContent = styled.div`
  max-width: 800px;
  z-index: 2;
`;

const HeroTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  color: white;
  margin-bottom: 1rem;
  animation: ${fadeInUp} 1s ease-out;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.25rem;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 2rem;
  line-height: 1.6;
  animation: ${fadeInUp} 1s ease-out 0.2s both;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  animation: ${fadeInUp} 1s ease-out 0.4s both;
`;

const CTAButton = styled.button`
  padding: 15px 30px;
  border: none;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  display: inline-block;
  
  &.primary {
    background: linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%);
    color: white;
    box-shadow: 0 10px 30px rgba(255, 107, 107, 0.3);
  }
  
  &.secondary {
    background: transparent;
    color: white;
    border: 2px solid white;
  }
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
  }
`;

const FloatingElement = styled.div`
  position: absolute;
  width: 100px;
  height: 100px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  animation: ${float} 6s ease-in-out infinite;
  
  &.element1 {
    top: 20%;
    left: 10%;
    animation-delay: 0s;
  }
  
  &.element2 {
    top: 60%;
    right: 15%;
    animation-delay: 2s;
  }
  
  &.element3 {
    bottom: 20%;
    left: 20%;
    animation-delay: 4s;
  }
`;

function Hero() {
  return (
    <HeroSection id="hero">
      <FloatingElement className="element1" />
      <FloatingElement className="element2" />
      <FloatingElement className="element3" />
      
      <HeroContent>
        <HeroTitle>Welcome to Vibe Games</HeroTitle>
        <HeroSubtitle>
          Experience the future of gaming with our innovative platform. 
          Discover amazing games, connect with players worldwide, and create unforgettable memories.
        </HeroSubtitle>
        <ButtonGroup>
          <CTAButton className="primary" onClick={() => document.getElementById('features').scrollIntoView({ behavior: 'smooth' })}>
            Explore Games
          </CTAButton>
          <CTAButton className="secondary" onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}>
            Learn More
          </CTAButton>
        </ButtonGroup>
      </HeroContent>
    </HeroSection>
  );
}

export default Hero; 