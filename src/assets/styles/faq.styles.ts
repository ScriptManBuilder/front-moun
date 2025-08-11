import styled from 'styled-components';

export const FAQSection = styled.section`
  background-color: #171717;
  padding: 30px 0;
  min-height: auto;
  
  @media (max-width: 768px) {
    padding: 40px 0;
  }
`;

export const FAQContainer = styled.div`
  max-width: 700px;
  margin: 0 auto;
  padding: 0 20px;
`;

export const FAQTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  color: white;
  margin-bottom: 12px;
  position: relative;
  
  /* Добавляем подчеркивание как на изображении */
  &::after {
    content: '';
    position: absolute;
    bottom: -6px;
    left: 50%;
    transform: translateX(-50%);
    width: 50px;
    height: 3px;
    background: linear-gradient(90deg, #00d4aa, #00b4d8);
    border-radius: 2px;
  }
  
  @media (max-width: 768px) {
    font-size: 2rem;
    
    &::after {
      width: 40px;
      height: 3px;
      bottom: -5px;
    }
  }
  
  @media (max-width: 480px) {
    font-size: 1.8rem;
    
    &::after {
      width: 35px;
      height: 2px;
      bottom: -4px;
    }
  }
`;

export const FAQSubtitle = styled.p`
  text-align: center;
  font-size: 1rem;
  color: #a0aec0;
  margin-bottom: 40px;
  font-weight: 400;
  
  @media (max-width: 768px) {
    font-size: 0.9rem;
    margin-bottom: 30px;
  }
`;

export const FAQList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const FAQItem = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  backdrop-filter: blur(10px);
  
  &:hover {
    border-color: rgba(0, 212, 170, 0.3);
    box-shadow: 0 6px 24px rgba(0, 212, 170, 0.1);
    transform: translateY(-1px);
    background: rgba(255, 255, 255, 0.08);
  }
`;

export const FAQQuestion = styled.button`
  width: 100%;
  padding: 18px 22px;
  background: transparent;
  border: none;
  color: #ffffff;
  font-size: 1rem;
  font-weight: 600;
  text-align: left;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  
  &:hover {
    color: #00d4aa;
    background: rgba(0, 212, 170, 0.05);
  }
  
  &:focus {
    outline: none;
    background: rgba(0, 212, 170, 0.08);
  }
  
  @media (max-width: 768px) {
    padding: 16px 20px;
    font-size: 0.95rem;
  }
  
  @media (max-width: 480px) {
    padding: 14px 18px;
    font-size: 0.9rem;
  }
`;

export const FAQIcon = styled.div<{ isOpen: boolean }>`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  background: ${props => props.isOpen 
    ? 'linear-gradient(135deg, #00d4aa, #00b4d8)' 
    : 'rgba(255, 255, 255, 0.1)'};
  color: white;
  font-weight: bold;
  font-size: 14px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  transform: ${props => props.isOpen ? 'rotate(180deg)' : 'rotate(0deg)'};
  border: 1px solid ${props => props.isOpen 
    ? 'rgba(0, 212, 170, 0.3)' 
    : 'rgba(255, 255, 255, 0.15)'};
  
  &::before {
    content: '▼';
    transition: all 0.3s ease;
  }
  
  &:hover {
    background: linear-gradient(135deg, #00d4aa, #00b4d8);
    border-color: rgba(0, 212, 170, 0.5);
    box-shadow: 0 3px 12px rgba(0, 212, 170, 0.2);
  }
`;

export const FAQAnswer = styled.div<{ isOpen: boolean }>`
  max-height: ${props => props.isOpen ? '400px' : '0'};
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  background: rgba(0, 0, 0, 0.15);
  border-top: ${props => props.isOpen ? '1px solid rgba(255, 255, 255, 0.08)' : 'none'};
`;

export const FAQAnswerContent = styled.div`
  padding: 0 22px 20px;
  color: #e2e8f0;
  font-size: 0.95rem;
  line-height: 1.6;
  border-left: 3px solid #00d4aa;
  margin-left: 22px;
  position: relative;
  
  /* Добавляем легкий fade-in эффект */
  animation: fadeInUp 0.4s ease-out;
  
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(8px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @media (max-width: 768px) {
    padding: 0 20px 18px;
    margin-left: 20px;
    font-size: 0.9rem;
  }
  
  @media (max-width: 480px) {
    padding: 0 18px 16px;
    margin-left: 18px;
    font-size: 0.85rem;
    line-height: 1.5;
  }
`;

// Компонент цитаты
export const QuoteSection = styled.div`
  margin-top: 50px;
  padding: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  
  @media (max-width: 768px) {
    margin-top: 40px;
    padding: 25px 20px;
  }
  
  @media (max-width: 480px) {
    margin-top: 30px;
    padding: 20px 15px;
  }
`;

export const QuoteContainer = styled.blockquote`
  max-width: 600px;
  background: linear-gradient(135deg, rgba(0, 212, 170, 0.08) 0%, rgba(150, 230, 161, 0.04) 100%);
  border: 1px solid rgba(0, 212, 170, 0.2);
  border-radius: 16px;
  padding: 40px 35px;
  margin: 0;
  position: relative;
  backdrop-filter: blur(10px);
  box-shadow: 
    0 8px 32px rgba(0, 212, 170, 0.15),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 
      0 12px 40px rgba(0, 212, 170, 0.2),
      inset 0 1px 0 rgba(255, 255, 255, 0.15);
  }
  
  &::before {
    content: '"';
    position: absolute;
    top: -5px;
    left: 20px;
    font-size: 5rem;
    color: #00d4aa;
    font-family: Georgia, serif;
    opacity: 0.3;
    line-height: 1;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, #00d4aa, #96e6a1, #d4fc79);
    border-radius: 16px 16px 0 0;
  }
  
  @media (max-width: 768px) {
    padding: 30px 25px;
    
    &::before {
      font-size: 4rem;
      top: -3px;
      left: 15px;
    }
  }
  
  @media (max-width: 480px) {
    padding: 25px 20px;
    border-radius: 12px;
    
    &::before {
      font-size: 3.5rem;
      top: -2px;
      left: 12px;
    }
    
    &::after {
      border-radius: 12px 12px 0 0;
    }
  }
`;

export const QuoteText = styled.p`
  font-size: 1.4rem;
  line-height: 1.4;
  color: #f0f0f0;
  margin: 0 0 25px 0;
  font-style: italic;
  font-weight: 500;
  text-align: center;
  letter-spacing: 0.3px;
  font-family: 'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica Neue', Arial, sans-serif;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
  
  @media (max-width: 768px) {
    font-size: 1.25rem;
    line-height: 1.35;
    margin-bottom: 20px;
    letter-spacing: 0.2px;
  }
  
  @media (max-width: 480px) {
    font-size: 1.15rem;
    line-height: 1.3;
    margin-bottom: 18px;
    letter-spacing: 0.1px;
  }
`;

export const QuoteAuthor = styled.cite`
  display: block;
  text-align: center;
  font-size: 1rem;
  color: #96e6a1;
  font-weight: 600;
  font-style: normal;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  position: relative;
  font-family: 'SF Pro Text', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica Neue', Arial, sans-serif;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  
  &::before {
    content: '';
    position: absolute;
    top: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 50px;
    height: 2px;
    background: linear-gradient(90deg, #00d4aa, #96e6a1);
    border-radius: 1px;
    box-shadow: 0 1px 3px rgba(0, 212, 170, 0.3);
  }
  
  @media (max-width: 768px) {
    font-size: 0.9rem;
    letter-spacing: 1.2px;
    
    &::before {
      width: 40px;
      top: -9px;
    }
  }
  
  @media (max-width: 480px) {
    font-size: 0.85rem;
    letter-spacing: 1px;
    
    &::before {
      width: 35px;
      top: -8px;
    }
  }
`;
