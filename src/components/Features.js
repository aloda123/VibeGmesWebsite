import React from 'react';
import styled from 'styled-components';

const FeaturesSection = styled.section`
  padding: 80px 0;
  background: white;
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

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const FeatureCard = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: all 0.3s ease;
  border: 1px solid #f0f0f0;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  }
`;

const FeatureIcon = styled.div`
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  font-size: 2rem;
  color: white;
`;

const FeatureTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 1rem;
`;

const FeatureDescription = styled.p`
  color: #666;
  line-height: 1.6;
`;

function Features() {
  const features = [
    {
      icon: '🎮',
      title: 'Game Library',
      description: 'Access a vast collection of games across all genres, from action-packed adventures to relaxing puzzles.'
    },
    {
      icon: '🌐',
      title: 'Multiplayer Gaming',
      description: 'Connect with players worldwide and enjoy seamless multiplayer experiences with friends and strangers alike.'
    },
    {
      icon: '🏆',
      title: 'Achievements & Leaderboards',
      description: 'Track your progress, earn achievements, and compete on global leaderboards to showcase your skills.'
    },
    {
      icon: '💬',
      title: 'Community Features',
      description: 'Join gaming communities, participate in forums, and share your gaming experiences with like-minded players.'
    },
    {
      icon: '📱',
      title: 'Cross-Platform Play',
      description: 'Play your favorite games on any device - PC, mobile, or console - with seamless cross-platform compatibility.'
    },
    {
      icon: '🔒',
      title: 'Secure Gaming',
      description: 'Enjoy a safe and secure gaming environment with advanced anti-cheat systems and player protection.'
    }
  ];

  return (
    <FeaturesSection id="features">
      <Container>
        <SectionTitle>Why Choose Vibe Games?</SectionTitle>
        <SectionSubtitle>
          Discover the features that make our gaming platform the ultimate destination for gamers worldwide.
        </SectionSubtitle>
        
        <FeaturesGrid>
          {features.map((feature, index) => (
            <FeatureCard key={index}>
              <FeatureIcon>{feature.icon}</FeatureIcon>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
            </FeatureCard>
          ))}
        </FeaturesGrid>
      </Container>
    </FeaturesSection>
  );
}

export default Features; 