import React from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

const AppContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
`;

function App() {
  return (
    <AppContainer>
      <Header />
      <Hero />
      <Features />
      <About />
      <Contact />
      <Footer />
    </AppContainer>
  );
}

export default App; 