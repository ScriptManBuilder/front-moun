import styled from 'styled-components';

export const WhyChooseUsSection = styled.section`
  padding: 15px 0 50px 0;
  background: linear-gradient(135deg, #fafafa 0%, #f5f5f5 100%);
  text-align: center;
  width: 100%;
  box-sizing: border-box;
  overflow-x: hidden;
  position: relative;
  
  /* Добавляем сложный паттерн */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: 
      radial-gradient(circle at 20% 80%, rgba(0, 212, 170, 0.04) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(150, 230, 161, 0.04) 0%, transparent 50%),
      radial-gradient(circle at 40% 40%, rgba(212, 252, 121, 0.03) 0%, transparent 50%);
    pointer-events: none;
  }
  
  /* Добавляем тонкий шум для текстуры */
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: 
      radial-gradient(circle at 1px 1px, rgba(0, 212, 170, 0.1) 1px, transparent 0);
    background-size: 20px 20px;
    opacity: 0.02;
    pointer-events: none;
  }
  
  /* Laptop L (1440px+) */
  @media (min-width: 1440px) {
    padding: 30px 0 60px 0;
  }
  
  /* Mobile L and smaller */
  @media (max-width: 425px) {
    padding: 15px 0 35px 0;
  }
  
  /* Mobile S */
  @media (max-width: 320px) {
    padding: 10px 0 30px 0;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 2.2rem;
  margin-bottom: 20px;
  font-weight: 800;
  color: #111827;
  width: 100%;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 20px;
  box-sizing: border-box;
  position: relative;
  z-index: 1;
  letter-spacing: -0.03em;
  line-height: 1.1;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  
  /* Более изысканное подчеркивание */
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 3px;
    background: linear-gradient(90deg, #00d4aa 0%, #96e6a1 50%, #d4fc79 100%);
    border-radius: 2px;
    opacity: 0.9;
    box-shadow: 0 2px 8px rgba(0, 212, 170, 0.3);
  }
  
  /* Добавляем hover эффект */
  &:hover::after {
    opacity: 1;
    box-shadow: 0 4px 16px rgba(0, 212, 170, 0.4);
    transform: translateX(-50%) scale(1.05);
    transition: all 0.3s ease;
  }
  
  /* Laptop L */
  @media (min-width: 1440px) {
    font-size: 2.5rem;
    margin-bottom: 25px;
    
    &::after {
      width: 120px;
      height: 4px;
      bottom: -12px;
    }
  }
  
  /* Tablet */
  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 18px;
    padding: 0 20px;
    max-width: 600px;
    
    &::after {
      width: 80px;
      height: 3px;
      bottom: -8px;
    }
  }
  
  /* Mobile L */
  @media (max-width: 425px) {
    font-size: 1.7rem;
    margin-bottom: 15px;
    width: 90%;
    
    &::after {
      width: 70px;
      height: 3px;
      bottom: -6px;
    }
  }
  
  /* Mobile M */
  @media (max-width: 375px) {
    font-size: 1.6rem;
    padding: 0;
  }
  
  /* Mobile S */
  @media (max-width: 320px) {
    font-size: 1.5rem;
    margin-bottom: 12px;
    width: 95%;
    
    &::after {
      width: 60px;
      height: 3px;
    }
  }
`;

export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
  max-width: 850px;
  margin: 0 auto;
  padding: 0 15px;
  width: 100%;
  box-sizing: border-box;
  position: relative;
  z-index: 1;
  
  /* Laptop L */
  @media (min-width: 1440px) {
    max-width: 950px;
    gap: 18px;
    padding: 0 20px;
  }
  
  /* Laptop */
  @media (max-width: 1024px) {
    gap: 16px;
    max-width: 750px;
  }
  
  /* Tablet */
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
    max-width: 550px;
  }
  
  /* Mobile L */
  @media (max-width: 768px) {
    gap: 12px;
    padding: 0 20px;
    max-width: 450px;
  }
  
  /* Mobile M and S */
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 100%;
    gap: 10px;
    padding: 0;
  }
`;

export const FeatureItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 20px;
  background: rgba(255, 255, 255, 0.85);
  border-radius: 16px;
  backdrop-filter: blur(15px);
  border: 1px solid rgba(0, 212, 170, 0.08);
  box-shadow: 
    0 6px 24px rgba(0, 0, 0, 0.06),
    0 1px 2px rgba(0, 0, 0, 0.04),
    inset 0 1px 0 rgba(255, 255, 255, 0.7);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  
  /* Добавляем внутреннее свечение */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(0, 212, 170, 0.3), transparent);
    opacity: 0;
    transition: opacity 0.4s ease;
  }
  
  &:hover {
    background: rgba(255, 255, 255, 0.95);
    border-color: rgba(0, 212, 170, 0.25);
    box-shadow: 
      0 16px 48px rgba(0, 212, 170, 0.12),
      0 6px 24px rgba(0, 0, 0, 0.08),
      inset 0 1px 0 rgba(255, 255, 255, 0.8);
    transform: translateY(-6px) scale(1.02);
    
    &::before {
      opacity: 1;
    }
  }
  
  /* Добавляем легкую анимацию появления */
  animation: fadeInUp 0.6s ease-out;
  
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  /* Задержка анимации для каждой карточки */
  &:nth-child(1) { animation-delay: 0.1s; }
  &:nth-child(2) { animation-delay: 0.2s; }
  &:nth-child(3) { animation-delay: 0.3s; }
  
  /* All mobile sizes */
  @media (max-width: 767px) {
    width: 260px;
    max-width: calc(100vw - 40px);
    margin-left: auto;
    margin-right: auto;
    padding: 18px 18px;
  }
  
  /* Mobile L */
  @media (max-width: 425px) {
    width: 240px;
    max-width: calc(100vw - 30px);
    padding: 16px 15px;
  }
  
  /* Mobile M */
  @media (max-width: 375px) {
    width: 220px;
    max-width: calc(100vw - 30px);
  }
  
  /* Mobile S */
  @media (max-width: 320px) {
    width: 200px;
    max-width: calc(100vw - 30px);
    padding: 15px 12px;
  }
  
  /* Laptop L */
  @media (min-width: 1440px) {
    padding: 25px 25px;
  }
  
  /* Tablet */
  @media (max-width: 768px) {
    padding: 18px 16px;
  }
`;

export const FeatureIcon = styled.div`
  font-size: 2.2rem;
  margin-bottom: 12px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  
  /* Добавляем многослойное свечение */
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80px;
    height: 80px;
    background: radial-gradient(
      circle,
      rgba(0, 212, 170, 0.15) 0%,
      rgba(150, 230, 161, 0.1) 40%,
      transparent 70%
    );
    border-radius: 50%;
    opacity: 0;
    transition: all 0.4s ease;
    z-index: -1;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 120px;
    height: 120px;
    background: radial-gradient(
      circle,
      rgba(212, 252, 121, 0.08) 0%,
      transparent 60%
    );
    border-radius: 50%;
    opacity: 0;
    transition: all 0.4s ease 0.1s;
    z-index: -2;
  }
  
  ${FeatureItem}:hover & {
    transform: scale(1.15) rotate(5deg);
    
    &::before {
      opacity: 1;
      transform: translate(-50%, -50%) scale(1.2);
    }
    
    &::after {
      opacity: 1;
      transform: translate(-50%, -50%) scale(1.1);
    }
  }
  
  /* Laptop L */
  @media (min-width: 1440px) {
    font-size: 2.6rem;
    margin-bottom: 15px;
    
    &::before {
      width: 75px;
      height: 75px;
    }
    
    &::after {
      width: 100px;
      height: 100px;
    }
  }
  
  /* Tablet */
  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 10px;
    
    &::before {
      width: 55px;
      height: 55px;
    }
    
    &::after {
      width: 75px;
      height: 75px;
    }
  }
  
  /* Mobile L */
  @media (max-width: 425px) {
    font-size: 1.8rem;
    margin-bottom: 8px;
    
    &::before {
      width: 50px;
      height: 50px;
    }
    
    &::after {
      width: 70px;
      height: 70px;
    }
  }
  
  /* Mobile S */
  @media (max-width: 320px) {
    font-size: 1.6rem;
    margin-bottom: 6px;
    
    &::before {
      width: 45px;
      height: 45px;
    }
    
    &::after {
      width: 65px;
      height: 65px;
    }
  }
`;

export const FeatureTitle = styled.h3`
  font-size: 1.1rem;
  margin-bottom: 8px;
  font-weight: 700;
  color: #111827;
  transition: all 0.3s ease;
  letter-spacing: -0.01em;
  line-height: 1.3;
  text-align: center;
  
  ${FeatureItem}:hover & {
    color: #00d4aa;
    transform: translateY(-2px);
  }
  
  /* Laptop L */
  @media (min-width: 1440px) {
    font-size: 1.2rem;
    margin-bottom: 10px;
  }
  
  /* Tablet */
  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 6px;
  }
  
  /* Mobile L */
  @media (max-width: 425px) {
    font-size: 0.95rem;
    margin-bottom: 5px;
  }
  
  /* Mobile S */
  @media (max-width: 320px) {
    font-size: 0.9rem;
    margin-bottom: 4px;
  }
`;

export const FeatureDescription = styled.p`
  font-size: 0.85rem;
  color: #6B7280;
  line-height: 1.4;
  max-width: 220px;
  margin: 0 auto;
  padding: 0 5px;
  box-sizing: border-box;
  text-align: center;
  transition: all 0.3s ease;
  font-weight: 400;
  
  ${FeatureItem}:hover & {
    color: #374151;
    transform: translateY(-1px);
  }
  
  /* Laptop L */
  @media (min-width: 1440px) {
    font-size: 0.95rem;
    max-width: 260px;
    line-height: 1.5;
  }
  
  /* Tablet */
  @media (max-width: 768px) {
    max-width: 100%;
    padding: 0 8px;
    font-size: 0.8rem;
    line-height: 1.3;
  }
  
  /* Mobile L */
  @media (max-width: 425px) {
    font-size: 0.75rem;
    line-height: 1.3;
    padding: 0 6px;
    width: 100%;
  }
  
  /* Mobile S */
  @media (max-width: 320px) {
    font-size: 0.7rem;
    padding: 0 4px;
    line-height: 1.2;
  }
`;
