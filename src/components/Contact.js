import React, { useState } from 'react';
import styled from 'styled-components';

const ContactSection = styled.section`
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

const ContactContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  margin-top: 3rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  font-weight: 600;
  color: #333;
`;

const Input = styled.input`
  padding: 12px 16px;
  border: 2px solid #e1e5e9;
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: #667eea;
  }
`;

const TextArea = styled.textarea`
  padding: 12px 16px;
  border: 2px solid #e1e5e9;
  border-radius: 8px;
  font-size: 1rem;
  min-height: 120px;
  resize: vertical;
  transition: border-color 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: #667eea;
  }
`;

const SubmitButton = styled.button`
  padding: 15px 30px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(102, 126, 234, 0.3);
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem;
  background: #f8f9fa;
  border-radius: 10px;
  transition: all 0.3s ease;
  
  &:hover {
    background: #e9ecef;
    transform: translateX(5px);
  }
`;

const ContactIcon = styled.div`
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.2rem;
`;

const ContactText = styled.div`
  h4 {
    font-weight: 600;
    color: #333;
    margin-bottom: 0.25rem;
  }
  
  p {
    color: #666;
  }
`;

const SuccessMessage = styled.div`
  padding: 1rem;
  background: #d4edda;
  color: #155724;
  border-radius: 8px;
  margin-bottom: 1rem;
  text-align: center;
`;

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      setTimeout(() => {
        setShowSuccess(false);
      }, 5000);
    }, 2000);
  };

  return (
    <ContactSection id="contact">
      <Container>
        <SectionTitle>Get In Touch</SectionTitle>
        <SectionSubtitle>
          Have questions or feedback? We'd love to hear from you!
        </SectionSubtitle>
        
        <ContactContent>
          <ContactForm onSubmit={handleSubmit}>
            {showSuccess && (
              <SuccessMessage>
                Thank you for your message! We'll get back to you soon.
              </SuccessMessage>
            )}
            
            <FormGroup>
              <Label htmlFor="name">Name</Label>
              <Input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </FormGroup>
            
            <FormGroup>
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </FormGroup>
            
            <FormGroup>
              <Label htmlFor="subject">Subject</Label>
              <Input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </FormGroup>
            
            <FormGroup>
              <Label htmlFor="message">Message</Label>
              <TextArea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </FormGroup>
            
            <SubmitButton type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </SubmitButton>
          </ContactForm>
          
          <ContactInfo>
            <ContactItem>
              <ContactIcon>📧</ContactIcon>
              <ContactText>
                <h4>Email</h4>
                <p>hello@vibegames.com</p>
              </ContactText>
            </ContactItem>
            
            <ContactItem>
              <ContactIcon>📞</ContactIcon>
              <ContactText>
                <h4>Phone</h4>
                <p>+1 (555) 123-4567</p>
              </ContactText>
            </ContactItem>
            
            <ContactItem>
              <ContactIcon>📍</ContactIcon>
              <ContactText>
                <h4>Address</h4>
                <p>123 Gaming Street<br />Digital City, DC 12345</p>
              </ContactText>
            </ContactItem>
            
            <ContactItem>
              <ContactIcon>⏰</ContactIcon>
              <ContactText>
                <h4>Support Hours</h4>
                <p>24/7 Customer Support</p>
              </ContactText>
            </ContactItem>
          </ContactInfo>
        </ContactContent>
      </Container>
    </ContactSection>
  );
}

export default Contact; 