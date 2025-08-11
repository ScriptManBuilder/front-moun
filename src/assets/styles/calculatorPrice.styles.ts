import styled from 'styled-components';

export const CalculatorSection = styled.section`
  background: linear-gradient(135deg, #171717 0%, #1a1a1a 100%);
  padding: 60px 0;
  position: relative;
  
  /* Добавляем градиентный фон с низкой непрозрачностью */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at top left, rgba(0, 212, 170, 0.03), transparent 60%),
                radial-gradient(circle at bottom right, rgba(212, 252, 121, 0.03), transparent 60%);
    pointer-events: none;
  }
  
  @media (max-width: 768px) {
    padding: 40px 0;
  }
`;

export const CalculatorTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  font-weight: 700;
  color: white;
  margin-bottom: 15px;
  position: relative;
  letter-spacing: -0.02em;
  line-height: 1.2;
  z-index: 1;
  
  /* Добавляем подчеркивание */
  &::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: linear-gradient(90deg, #00d4aa, #96e6a1);
    border-radius: 2px;
    opacity: 0.8;
  }
  
  /* Добавляем свечение при hover */
  &:hover {
    cursor: default;
    
    &::after {
      opacity: 1;
      box-shadow: 0 0 20px rgba(0, 212, 170, 0.4);
    }
  }
  
  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 20px;
    
    &::after {
      width: 60px;
      height: 3px;
      bottom: -6px;
    }
  }
  
  @media (max-width: 480px) {
    font-size: 1.8rem;
    
    &::after {
      width: 50px;
      height: 3px;
      bottom: -5px;
    }
  }
`;

export const CalculatorSubtitle = styled.p`
  text-align: center;
  font-size: 16px;
  color: #b3b3b3;
  margin-bottom: 15px;
  margin-top: 15px;
  font-weight: 400;
  line-height: 1.6;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  opacity: 0.9;
  z-index: 1;
  position: relative;
  
  @media (max-width: 768px) {
    font-size: 14px;
    margin-bottom: 30px;
    margin-top: 20px;
    max-width: 90%;
  }
`;

export const CalculatorContainer = styled.div`
  display: flex;
  gap: 30px;
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
  z-index: 1;
  position: relative;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
    padding: 10px;
  }
`;

export const CalculatorForm = styled.div`
  flex: 1;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  padding: 20px;
  color: white;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  
  &:hover {
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(0, 212, 170, 0.3);
    box-shadow: 0 8px 32px rgba(0, 212, 170, 0.1);
    transform: translateY(-2px);
  }
`;

export const CalculatorResult = styled.div`
  flex: 1;
  background: rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  padding: 20px;
  color: white;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(0, 212, 170, 0.2);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #00d4aa, #96e6a1, #d4fc79);
    border-radius: 16px 16px 0 0;
  }
  
  &:hover {
    background: rgba(255, 255, 255, 0.12);
    border-color: rgba(0, 212, 170, 0.4);
    box-shadow: 0 8px 32px rgba(0, 212, 170, 0.15);
    transform: translateY(-2px);
  }
`;

export const FormGroup = styled.div`
  margin-bottom: 16px;
`;

export const FormLabel = styled.label`
  display: block;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 6px;
  color: #e2e8f0;
`;

export const Select = styled.select`
  width: 100%;
  padding: 12px 16px;
  background: rgba(0, 0, 0, 0.2);
  border: 2px solid rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  color: white;
  font-size: 15px;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(5px);
  
  &:focus {
    outline: none;
    border-color: #00d4aa;
    background: rgba(0, 0, 0, 0.3);
    box-shadow: 0 0 0 3px rgba(0, 212, 170, 0.1);
    transform: translateY(-1px);
  }
  
  &:hover {
    border-color: rgba(255, 255, 255, 0.2);
    transform: translateY(-1px);
    background: rgba(0, 0, 0, 0.25);
  }
  
  option {
    background: #1a1a1a;
    color: white;
    padding: 8px;
  }
`;

export const SliderContainer = styled.div`
  margin-top: 16px;
  padding: 6px;
  background: rgba(0, 0, 0, 0.15);
  border-radius: 10px;
  border: 1px solid rgba(0, 212, 170, 0.1);
`;

export const Slider = styled.input`
  width: 100%;
  height: 6px;
  background: rgba(255, 255, 255, 0.2) !important;
  border-radius: 3px;
  outline: none;
  -webkit-appearance: none;
  appearance: none;
  
  /* Для WebKit браузеров (Chrome, Safari, Edge) */
  &::-webkit-slider-track {
    background: rgba(255, 255, 255, 0.2) !important;
    height: 6px;
    border-radius: 3px;
    border: none;
  }
  
  &::-webkit-slider-runnable-track {
    background: linear-gradient(to right, #00d4aa 0%, #00d4aa var(--slider-progress, 50%), rgba(255, 255, 255, 0.2) var(--slider-progress, 50%), rgba(255, 255, 255, 0.2) 100%) !important;
    height: 6px;
    border-radius: 3px;
  }
  
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 20px;
    height: 20px;
    background: #00d4aa !important;
    border-radius: 50%;
    cursor: pointer;
    box-shadow: 0 2px 6px rgba(0, 212, 170, 0.3);
    border: none;
    margin-top: -7px;
  }
  
  /* Для Firefox */
  &::-moz-range-track {
    background: rgba(255, 255, 255, 0.2) !important;
    height: 6px;
    border-radius: 3px;
    border: none;
  }
  
  &::-moz-range-progress {
    background: #00d4aa !important;
    height: 6px;
    border-radius: 3px;
  }
  
  &::-moz-range-thumb {
    width: 20px;
    height: 20px;
    background: #00d4aa !important;
    border-radius: 50%;
    cursor: pointer;
    border: none;
    box-shadow: 0 2px 6px rgba(0, 212, 170, 0.3);
    margin-top: -7px;
  }
`;

export const SliderLabels = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  font-size: 12px;
  color: #b3b3b3;
`;

export const SliderValue = styled.div`
  font-size: 16px;
  font-weight: 700;
  font-family: 'EuclidRegular', sans-serif;
  background: linear-gradient(135deg, #00d4aa, #96e6a1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-top: 8px;
  line-height: 1.4;
  letter-spacing: 0.01em;
  text-align: left;
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.05);
  }
`;

export const CheckboxGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const CheckboxItem = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  padding: 1px;
  border-radius: 10px;
  transition: all 0.3s ease;
  border: 2px solid transparent;
  background: rgba(0, 0, 0, 0.15);
  margin-bottom: 2px;
  
  &:hover {
    background: rgba(0, 0, 0, 0.25);
    border-color: rgba(0, 212, 170, 0.2);
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(0, 212, 170, 0.08);
  }
  
  &:has(input:checked) {
    background: rgba(0, 212, 170, 0.1);
    border-color: rgba(0, 212, 170, 0.3);
    box-shadow: 0 4px 12px rgba(0, 212, 170, 0.15);
  }
`;

export const Checkbox = styled.input`
  margin-right: 12px;
  width: 18px;
  height: 18px;
  accent-color: #00d4aa;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    transform: scale(1.1);
  }
`;

export const CheckboxLabel = styled.span`
  flex: 1;
  font-size: 14px;
  color: #e2e8f0;
`;

export const CheckboxPrice = styled.span`
  font-size: 14px;
  color: #b3b3b3;
  font-weight: 500;
`;

export const ResultTitle = styled.h3`
  font-size: 16px;
  margin-bottom: 16px;
  color: #e2e8f0;
`;

export const PriceDisplay = styled.div`
  font-size: 36px;
  font-weight: 700;
  font-family: 'EuclidRegular', sans-serif;
  background: linear-gradient(135deg, #00d4aa, #96e6a1, #d4fc79);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin: 12px 0;
  line-height: 1.4;
  letter-spacing: 0.01em;
  text-align: left;
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.02);
  }
`;

export const PriceLabel = styled.div`
  font-size: 12px;
  color: #b3b3b3;
  margin-bottom: 12px;
`;

export const Summary = styled.div`
  margin-top: 16px;
  padding-top: 12px;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
`;

export const SummaryItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 6px;
  font-size: 13px;
  color: #b3b3b3;
`;

export const GetQuoteButton = styled.button`
  width: 100%;
  padding: 14px 28px;
  background: linear-gradient(135deg, #23272f 0%, #1a1d24 100%);
  color: #fff;
  border: 2px solid transparent;
  border-radius: 12px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  margin-top: 16px;
  font-family: 'Inter', 'Montserrat', 'Roboto', sans-serif;
  box-shadow: 0 6px 20px rgba(35, 39, 47, 0.25);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    border: 2px solid transparent;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
    transition: left 0.6s ease;
  }
  
  &:hover {
    border: 2px solid transparent;
    background: linear-gradient(135deg, #d4fc79 0%, #96e6a1 100%);
    color: #23272f;
    box-shadow: 0 10px 28px rgba(212, 252, 121, 0.4);
    border-color: rgba(35, 39, 47, 0.1);
    transform: translateY(-3px) scale(1.02);
    
    &::before {
      left: 100%;
    }
  }
  
  &:active {
    transform: translateY(-1px) scale(0.98);
    box-shadow: 0 4px 16px rgba(212, 252, 121, 0.3);
  }
  
  @media (max-width: 768px) {
    padding: 14px 24px;
    font-size: 14px;
    border-radius: 10px;
  }
`;

// Пустой экспорт для TypeScript модуля
export {};