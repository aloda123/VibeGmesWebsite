import React from 'react';
import styled from 'styled-components';

const AboutSection = styled.section`
  padding: 80px 0;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 1rem;
`;

const SectionSubtitle = styled.p`
  text-align: center;
  font-size: 1.1rem;
  color: #666;
  margin-bottom: 3rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  margin-top: 3rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const AboutText = styled.div`
  h3 {
    font-size: 1.8rem;
    font-weight: 600;
    color: #333;
    margin-bottom: 1rem;
  }
  
  p {
    color: #666;
    line-height: 1.8;
    margin-bottom: 1.5rem;
  }
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-top: 2rem;
`;

const StatCard = styled.div`
  text-align: center;
  padding: 1.5rem;
  background: white;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
`;

const StatNumber = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  color: #667eea;
  margin-bottom: 0.5rem;
`;

const StatLabel = styled.div`
  color: #666;
  font-weight: 500;
`;

const AboutImage = styled.div`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  height: 400px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 4rem;
  box-shadow: 0 20px 40px rgba(102, 126, 234, 0.3);
`;

function About() {
  return (
    <AboutSection id="about">
      <Container>
        <SectionTitle>About Vibe Games</SectionTitle>
        <SectionSubtitle>
          We're passionate about creating the ultimate gaming experience for players worldwide.
        </SectionSubtitle>
        
        <AboutContent>
          <AboutText>
            <h3>Our Mission</h3>
            <p>
              At Vibe Games, we believe that gaming is more than just entertainment—it's a way to connect, 
              compete, and create unforgettable experiences. Our mission is to build the most innovative 
              and user-friendly gaming platform that brings players together from around the world.
            </p>
            <p>
              Founded by a team of passionate gamers and developers, we understand what players want: 
              seamless gameplay, vibrant communities, and cutting-edge features that enhance the gaming experience.
            </p>
            
            <StatsGrid>
              <StatCard>
                <StatNumber>1M+</StatNumber>
                <StatLabel>Active Players</StatLabel>
              </StatCard>
              <StatCard>
                <StatNumber>500+</StatNumber>
                <StatLabel>Games Available</StatLabel>
              </StatCard>
              <StatCard>
                <StatNumber>50+</StatNumber>
                <StatLabel>Countries</StatLabel>
              </StatCard>
              <StatCard>
                <StatNumber>24/7</StatNumber>
                <StatLabel>Support</StatLabel>
              </StatCard>
            </StatsGrid>
          </AboutText>
          
          <AboutImage>
            🎮
          </AboutImage>
        </AboutContent>
      </Container>
    </AboutSection>
  );
}

export default About; 