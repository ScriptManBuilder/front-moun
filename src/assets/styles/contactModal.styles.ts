import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    radial-gradient(circle at 30% 80%, rgba(0, 212, 170, 0.15) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(150, 230, 161, 0.12) 0%, transparent 50%),
    radial-gradient(circle at 40% 40%, rgba(212, 252, 121, 0.08) 0%, transparent 50%),
    rgba(17, 24, 39, 0.85);
  backdrop-filter: blur(16px) saturate(180%);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999999;
  padding: 20px;
  animation: premiumFadeIn 0.5s cubic-bezier(0.23, 1, 0.32, 1);
  
  /* Улучшенная адаптивность для маленьких экранов */
  @media (max-width: 420px) {
    padding: 12px;
    align-items: flex-start;
    padding-top: 20px;
  }
  
  @media (max-width: 360px) {
    padding: 8px;
    padding-top: 16px;
  }
  
  @media (max-height: 640px) {
    align-items: flex-start;
    padding-top: 16px;
  }
  
  @media (max-height: 568px) {
    padding-top: 12px;
  }
  
  @keyframes premiumFadeIn {
    from {
      opacity: 0;
      backdrop-filter: blur(0px) saturate(100%);
    }
    to {
      opacity: 1;
      backdrop-filter: blur(16px) saturate(180%);
    }
  }
`;

export const ModalContainer = styled.div`
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px) saturate(180%);
  border-radius: 24px;
  width: 100%;
  max-width: 480px;
  max-height: 85vh;
  overflow-y: auto;
  box-shadow: 
    0 32px 64px rgba(0, 0, 0, 0.12),
    0 16px 32px rgba(0, 212, 170, 0.08),
    0 0 0 1px rgba(255, 255, 255, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.8);
  animation: premiumSlideUp 0.6s cubic-bezier(0.23, 1, 0.32, 1);
  position: relative;
  z-index: 1000000;
  border: 1px solid rgba(0, 212, 170, 0.1);
  
  /* Добавляем тонкий внутренний градиент */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      135deg,
      rgba(0, 212, 170, 0.02) 0%,
      rgba(150, 230, 161, 0.01) 50%,
      rgba(212, 252, 121, 0.02) 100%
    );
    border-radius: 24px;
    pointer-events: none;
    z-index: -1;
  }
  
  @keyframes premiumSlideUp {
    from {
      transform: translateY(60px) scale(0.96);
      opacity: 0;
      filter: blur(8px);
    }
    to {
      transform: translateY(0) scale(1);
      opacity: 1;
      filter: blur(0);
    }
  }
  
  @media (max-width: 480px) {
    max-width: calc(100vw - 24px);
    border-radius: 20px;
    max-height: 90vh;
    
    &::before {
      border-radius: 20px;
    }
  }
  
  @media (max-width: 420px) {
    max-width: calc(100vw - 16px);
    border-radius: 18px;
    max-height: 92vh;
    
    &::before {
      border-radius: 18px;
    }
  }
  
  @media (max-width: 360px) {
    max-width: calc(100vw - 12px);
    border-radius: 16px;
    max-height: 94vh;
    
    &::before {
      border-radius: 16px;
    }
  }
  
  @media (max-height: 640px) {
    max-height: 88vh;
  }
  
  @media (max-height: 568px) {
    max-height: 92vh;
  }
  
  @media (max-height: 480px) {
    max-height: 95vh;
  }
`;

export const ModalHeader = styled.div`
  padding: 32px 32px 24px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  border-bottom: 1px solid rgba(0, 212, 170, 0.08);
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.8) 0%,
    rgba(250, 250, 250, 0.4) 100%
  );
  backdrop-filter: blur(10px);
  position: relative;
  
  /* Добавляем тонкое свечение сверху */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(0, 212, 170, 0.3),
      transparent
    );
  }
  
  @media (max-width: 480px) {
    padding: 24px 20px 18px;
  }
  
  @media (max-width: 420px) {
    padding: 20px 16px 16px;
  }
  
  @media (max-width: 360px) {
    padding: 18px 14px 14px;
  }
  
  @media (max-height: 568px) {
    padding: 16px 20px 12px;
  }
`;

export const ModalTitle = styled.h2`
  font-size: 20px;
  font-weight: 700;
  color: #111827;
  margin: 0;
  line-height: 1.3;
  text-align: center;
  flex: 1;
  padding-right: 20px;
  font-family: 'Inter', 'Montserrat', 'Roboto', sans-serif;
  letter-spacing: -0.02em;
  
  /* Разделение текста на строки с разными стилями */
  span.main-text {
    display: block;
    font-size: 24px;
    font-weight: 800;
    background: linear-gradient(135deg, #111827 0%, #00d4aa 50%, #96e6a1 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 6px;
    filter: drop-shadow(0 2px 4px rgba(0, 212, 170, 0.1));
  }
  
  span.sub-text {
    display: block;
    font-size: 14px;
    font-weight: 500;
    color: #6B7280;
    opacity: 0.9;
    background: rgba(107, 114, 128, 0.05);
    padding: 4px 12px;
    border-radius: 8px;
    border: 1px solid rgba(0, 212, 170, 0.1);
    backdrop-filter: blur(5px);
  }
  
  @media (max-width: 480px) {
    span.main-text {
      font-size: 20px;
    }
    
    span.sub-text {
      font-size: 12px;
      padding: 3px 10px;
    }
    
    padding-right: 15px;
  }
  
  @media (max-width: 420px) {
    span.main-text {
      font-size: 18px;
    }
    
    span.sub-text {
      font-size: 11px;
      padding: 2px 8px;
    }
    
    padding-right: 12px;
  }
  
  @media (max-width: 360px) {
    span.main-text {
      font-size: 16px;
    }
    
    span.sub-text {
      font-size: 10px;
      padding: 2px 6px;
    }
    
    padding-right: 10px;
  }
`;

export const CloseButton = styled.button`
  background: rgba(107, 114, 128, 0.1);
  border: 1px solid rgba(107, 114, 128, 0.2);
  border-radius: 12px;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  color: #6B7280;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
  flex-shrink: 0;
  backdrop-filter: blur(10px);
  
  &:hover {
    background: rgba(239, 68, 68, 0.1);
    border-color: rgba(239, 68, 68, 0.3);
    color: #EF4444;
    transform: scale(1.05) rotate(90deg);
    box-shadow: 0 4px 12px rgba(239, 68, 68, 0.2);
  }
  
  &:active {
    transform: scale(0.95) rotate(90deg);
  }
  
  @media (max-width: 480px) {
    width: 36px;
    height: 36px;
    font-size: 18px;
  }
  
  @media (max-width: 420px) {
    width: 34px;
    height: 34px;
    font-size: 16px;
  }
  
  @media (max-width: 360px) {
    width: 32px;
    height: 32px;
    font-size: 16px;
  }
`;

export const ModalForm = styled.form`
  padding: 30px;
  
  @media (max-width: 480px) {
    padding: 20px;
  }
  
  @media (max-width: 420px) {
    padding: 16px;
  }
  
  @media (max-width: 360px) {
    padding: 14px;
  }
  
  @media (max-height: 568px) {
    padding: 16px;
  }
`;

export const FormGroup = styled.div`
  margin-bottom: 20px;
  position: relative;
`;

export const FormLabel = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
  color: #333;
  font-size: 14px;
`;

export const FormInput = styled.input`
  width: 100%;
  padding: 20px 24px;
  border: 2px solid rgba(0, 212, 170, 0.12);
  border-radius: 16px;
  font-size: 16px;
  font-weight: 500;
  color: #1F2937;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  box-sizing: border-box;
  transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
  position: relative;
  
  &:focus {
    outline: none;
    border-color: rgba(0, 212, 170, 0.5);
    background: rgba(255, 255, 255, 0.95);
    box-shadow: 
      0 0 0 4px rgba(0, 212, 170, 0.1),
      0 8px 24px rgba(0, 212, 170, 0.1),
      inset 0 1px 0 rgba(255, 255, 255, 0.8);
    transform: translateY(-2px);
  }
  
  &:hover:not(:focus) {
    border-color: rgba(0, 212, 170, 0.25);
    background: rgba(255, 255, 255, 0.9);
    transform: translateY(-1px);
  }
  
  &::placeholder {
    color: #9CA3AF;
    font-weight: 400;
  }
  
  @media (max-width: 480px) {
    padding: 18px 20px;
    font-size: 16px;
  }
  
  @media (max-width: 420px) {
    padding: 16px 18px;
    font-size: 16px;
    border-radius: 14px;
  }
  
  @media (max-width: 360px) {
    padding: 14px 16px;
    font-size: 16px;
    border-radius: 12px;
  }
`;

export const FormTextarea = styled.textarea`
  width: 100%;
  padding: 20px 24px;
  border: 2px solid rgba(0, 212, 170, 0.12);
  border-radius: 16px;
  font-size: 16px;
  font-weight: 500;
  color: #1F2937;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  box-sizing: border-box;
  font-family: inherit;
  resize: vertical;
  min-height: 120px;
  transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
  
  &:focus {
    outline: none;
    border-color: rgba(0, 212, 170, 0.5);
    background: rgba(255, 255, 255, 0.95);
    box-shadow: 
      0 0 0 4px rgba(0, 212, 170, 0.1),
      0 8px 24px rgba(0, 212, 170, 0.1),
      inset 0 1px 0 rgba(255, 255, 255, 0.8);
    transform: translateY(-2px);
  }
  
  &:hover:not(:focus) {
    border-color: rgba(0, 212, 170, 0.25);
    background: rgba(255, 255, 255, 0.9);
    transform: translateY(-1px);
  }
  
  &::placeholder {
    color: #9CA3AF;
    font-weight: 400;
  }
  
  @media (max-width: 480px) {
    padding: 18px 20px;
    font-size: 16px;
    min-height: 100px;
  }
  
  @media (max-width: 420px) {
    padding: 16px 18px;
    font-size: 16px;
    min-height: 90px;
    border-radius: 14px;
  }
  
  @media (max-width: 360px) {
    padding: 14px 16px;
    font-size: 16px;
    min-height: 80px;
    border-radius: 12px;
  }
  
  @media (max-height: 568px) {
    min-height: 70px;
  }
`;

export const FormSelect = styled.select`
  width: 100%;
  padding: 15px 20px;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  font-size: 16px;
  background: #fafafa;
  cursor: pointer;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
  box-sizing: border-box;
  appearance: none;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6,9 12,15 18,9'%3e%3c/polyline%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 15px center;
  background-size: 16px;
  padding-right: 45px;
  
  &:focus {
    outline: none;
    border-color: #d4fc79;
    box-shadow: 0 0 0 3px rgba(212, 252, 121, 0.1);
    background-color: white;
  }
  
  option {
    background: white;
    color: #333;
  }
`;

export const PhoneInputWrapper = styled.div`
  display: flex;
  align-items: center;
  border: 2px solid #e0e0e0;
  border-radius: 16px;
  background: #fafafa;
  transition: all 0.2s ease;
  position: relative;
  
  &:focus-within {
    border-color: #d4fc79;
    background: white;
    box-shadow: 0 0 0 3px rgba(212, 252, 121, 0.1);
  }
  
  &:hover:not(:focus-within) {
    border-color: #c8c8c8;
  }
  
  /* Стили для input внутри PhoneInputWrapper */
  input {
    flex: 1;
    border: none;
    background: transparent;
    padding: 18px 24px 18px 16px;
    font-size: 16px;
    font-weight: 500;
    color: #333;
    outline: none;
    
    &::placeholder {
      color: #999;
      font-weight: 400;
    }
  }
  
  /* Стили для состояния ошибки */
  &.error {
    border-color: #ff6b6b;
    background: rgba(255, 107, 107, 0.05);
    animation: shake 0.3s ease-in-out;
    
    input {
      color: #d63031;
    }
    
    input::placeholder {
      color: #ff6b6b;
    }
  }
  
  @keyframes shake {
    0%, 100% { transform: translateX(0); }
    25% { transform: translateX(-2px); }
    75% { transform: translateX(2px); }
  }
`;

export const CountryCodeSelect = styled.div`
  display: flex;
  align-items: center;
  padding: 18px 20px 18px 24px;
  cursor: pointer;
  user-select: none;
  border-right: 2px solid #e0e0e0;
  transition: border-right-color 0.15s ease;
  position: relative;
  font-weight: 500;
  background: transparent;
  
  &:hover {
    border-right-color: #d4fc79;
  }
  
  &.open {
    border-right-color: #d4fc79;
  }
  
  span:first-child {
    margin-right: 10px;
    font-size: 20px;
  }
  
  span:last-child {
    color: #666;
    font-weight: 600;
    min-width: 50px;
  }
  
  &::after {
    content: '';
    margin-left: 12px;
    border: solid #999;
    border-width: 0 2px 2px 0;
    display: inline-block;
    padding: 3px;
    transform: rotate(45deg);
    transition: transform 0.2s ease;
  }
  
  &.open::after {
    transform: rotate(-135deg);
  }
  
  @media (max-width: 480px) {
    padding: 16px 16px 16px 20px;
    
    span:first-child {
      font-size: 18px;
      margin-right: 8px;
    }
    
    span:last-child {
      font-size: 14px;
      min-width: 45px;
    }
  }
`;

export const CountryDropdown = styled.div`
  position: absolute;
  top: calc(100% + 8px);
  left: 0;
  right: 0;
  background: white;
  border: 2px solid #d4fc79;
  border-radius: 16px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.12);
  z-index: 1000001;
  max-height: 240px;
  overflow: hidden;
  opacity: 1;
  transform: translateY(0);
`;

export const CountrySearchInput = styled.input`
  width: 100%;
  padding: 16px 20px;
  border: none;
  border-bottom: 2px solid #f0f0f0;
  font-size: 15px;
  font-weight: 500;
  background: rgba(212, 252, 121, 0.02);
  box-sizing: border-box;
  outline: none;
  transition: border-bottom-color 0.15s ease;
  
  &:focus {
    background: rgba(212, 252, 121, 0.05);
    border-bottom-color: #d4fc79;
  }
  
  &::placeholder {
    color: #999;
    font-weight: 400;
  }
`;

export const CountryList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  max-height: 180px;
  overflow-y: auto;
  
  &::-webkit-scrollbar {
    width: 6px;
  }
  
  &::-webkit-scrollbar-track {
    background: rgba(212, 252, 121, 0.1);
    border-radius: 3px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: #d4fc79;
    border-radius: 3px;
  }
  
  &::-webkit-scrollbar-thumb:hover {
    background: #96e6a1;
  }
`;

export const CountryItem = styled.li`
  display: flex;
  align-items: center;
  padding: 12px 20px;
  cursor: pointer;
  transition: background-color 0.2s ease;
  border-radius: 8px;
  margin: 2px 8px;
  position: relative;
  
  &:hover {
    background: rgba(212, 252, 121, 0.08);
  }
  
  &.selected {
    background: rgba(212, 252, 121, 0.15);
    font-weight: 600;
    
    &::after {
      content: '✓';
      position: absolute;
      right: 20px;
      color: #96e6a1;
      font-weight: bold;
      font-size: 16px;
    }
  }
  
  .country-flag {
    margin-right: 12px;
    font-size: 18px;
  }
  
  .country-name {
    flex: 1;
    font-size: 15px;
    color: #333;
    font-weight: 500;
  }
  
  .country-code {
    color: #666;
    font-size: 14px;
    font-weight: 600;
    background: rgba(212, 252, 121, 0.1);
    padding: 2px 8px;
    border-radius: 6px;
    margin-left: 8px;
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  display: inline-block;
  padding: 18px 32px;
  background: linear-gradient(135deg, #1F2937 0%, #374151 100%);
  color: #fff;
  border: 2px solid transparent;
  border-radius: 16px;
  text-decoration: none;
  font-weight: 700;
  font-size: 16px;
  transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
  cursor: pointer;
  font-family: 'Inter', 'Montserrat', 'Roboto', sans-serif;
  box-shadow: 
    0 8px 32px rgba(31, 41, 55, 0.2),
    0 4px 16px rgba(0, 0, 0, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
  margin-bottom: 8px; /* Еще более компактно */
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(10px);
  
  /* Добавляем анимированный градиент на hover */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, #00d4aa 0%, #96e6a1 50%, #d4fc79 100%);
    transition: left 0.4s cubic-bezier(0.23, 1, 0.32, 1);
    z-index: -1;
  }

  &:hover:not(:disabled) {
    color: #1F2937;
    transform: translateY(-3px) scale(1.02);
    box-shadow: 
      0 16px 48px rgba(0, 212, 170, 0.25),
      0 8px 32px rgba(0, 0, 0, 0.1),
      inset 0 1px 0 rgba(255, 255, 255, 0.2);
    border-color: rgba(0, 212, 170, 0.3);
    
    &::before {
      left: 0;
    }
  }
  
  &:active:not(:disabled) {
    transform: translateY(-1px) scale(1.01);
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    background: linear-gradient(135deg, #6B7280 0%, #9CA3AF 100%);
    transform: none;
    
    &::before {
      display: none;
    }
  }
`;

export const OrText = styled.div`
  text-align: center;
  color: #374151;
  font-size: 13px;
  font-weight: 700;
  margin: 8px 0 6px;
  position: relative;
  background: rgba(0, 212, 170, 0.08);
  padding: 6px 14px;
  border-radius: 10px;
  border: 1px solid rgba(0, 212, 170, 0.2);
  backdrop-filter: blur(8px);
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  
  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    width: 30%;
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(0, 212, 170, 0.3),
      transparent
    );
  }
  
  &::before {
    left: 8%;
  }
  
  &::after {
    right: 8%;
  }
  
  @media (max-width: 480px) {
    font-size: 12px;
    margin: 6px 0 4px;
    padding: 4px 10px;
    
    &::before,
    &::after {
      width: 25%;
    }
  }
`;

export const TelegramButton = styled.button`
  width: 100%;
  display: inline-block;
  padding: 18px 40px;
  background: linear-gradient(135deg, #0088cc 0%, #006fa8 100%);
  color: white;
  border: 2px solid transparent;
  border-radius: 16px;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  font-family: 'Inter', 'Montserrat', 'Roboto', sans-serif;
  box-shadow: 
    0 8px 32px rgba(0, 136, 204, 0.25),
    0 4px 16px rgba(0, 0, 0, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
  margin-bottom: 8px; /* Добавляем небольшой отступ снизу */
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(10px);
  
  /* Добавляем shimmer эффект */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    transition: left 0.6s ease;
  }
  
  &:hover {
    background: linear-gradient(135deg, #229ED9 0%, #0088cc 100%);
    transform: translateY(-3px) scale(1.02);
    box-shadow: 
      0 16px 48px rgba(0, 136, 204, 0.3),
      0 8px 32px rgba(0, 0, 0, 0.1),
      inset 0 1px 0 rgba(255, 255, 255, 0.3);
    border-color: rgba(34, 158, 217, 0.3);
    
    &::before {
      left: 100%;
    }
  }
  
  &:active {
    transform: translateY(-1px) scale(1.01);
  }
`;

// Стили для интерактивных дополнительных услуг
export const ServicesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 20px;
`;

export const ServicesTitle = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: #333;
  margin: 0 0 12px 0;
  display: flex;
  align-items: center;
  gap: 8px;
  
  &::before {
    content: '⚡';
    font-size: 18px;
  }
`;

export const ServiceItem = styled.div<{ selected: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px;
  border: 2px solid ${props => props.selected ? '#d4fc79' : '#e0e0e0'};
  border-radius: 16px;
  background: ${props => props.selected ? 'rgba(212, 252, 121, 0.1)' : '#fafafa'};
  cursor: pointer;
  transition: all 0.2s ease;
  margin-bottom: 12px;
  
  &:hover {
    border-color: #d4fc79;
    background: rgba(212, 252, 121, 0.05);
  }
`;

export const ServicesToggle = styled.div<{ isOpen: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px;
  border: 2px solid #e0e0e0;
  border-radius: 16px;
  background: #fafafa;
  cursor: pointer;
  transition: all 0.2s ease;
  margin-bottom: ${props => props.isOpen ? '16px' : '0'};
  
  &:hover {
    border-color: #d4fc79;
    background: rgba(212, 252, 121, 0.05);
  }
`;

export const ServicesToggleTitle = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: #333;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 8px;
  
  &::before {
    content: '⚡';
    font-size: 18px;
  }
`;

export const ServicesToggleIcon = styled.div<{ isOpen: boolean }>`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  border: 2px solid #d4fc79;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: bold;
  color: #96e6a1;
  transition: transform 0.2s ease;
  transform: ${props => props.isOpen ? 'rotate(45deg)' : 'rotate(0deg)'};
  
  &::after {
    content: '+';
  }
`;

export const ServicesDropdown = styled.div<{ isOpen: boolean }>`
  max-height: ${props => props.isOpen ? '500px' : '0'};
  overflow: hidden;
  transition: max-height 0.3s ease;
  opacity: ${props => props.isOpen ? '1' : '0'};
`;

export const ServiceLabel = styled.span`
  font-size: 16px;
  font-weight: 500;
  color: #333;
  flex: 1;
  margin-left: 12px;
`;

export const ServiceIcon = styled.div<{ selected: boolean }>`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 2px solid ${props => props.selected ? '#96e6a1' : '#d4fc79'};
  background: ${props => props.selected ? '#d4fc79' : 'white'};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: bold;
  color: ${props => props.selected ? '#23272f' : '#96e6a1'};
  transition: all 0.2s ease;
  position: relative;
  flex-shrink: 0;
  
  &::after {
    content: '${props => props.selected ? '✓' : '+'}';
    position: absolute;
  }
`;

export const ServicePrice = styled.span<{ selected: boolean }>`
  font-size: 14px;
  font-weight: 600;
  color: ${props => props.selected ? '#96e6a1' : '#666'};
  background: ${props => props.selected ? 'rgba(150, 230, 161, 0.1)' : 'transparent'};
  padding: 4px 8px;
  border-radius: 8px;
  transition: all 0.3s ease;
  margin-left: 12px;
`;

export const SubmitMessage = styled.div<{ type: 'success' | 'error' }>`
  margin: 15px 0;
  padding: 12px 16px;
  border-radius: 12px;
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  animation: slideIn 0.3s ease-out;
  
  background: ${({ type }) => 
    type === 'success' 
      ? 'linear-gradient(135deg, rgba(150, 230, 161, 0.1), rgba(212, 252, 121, 0.1))'
      : 'rgba(255, 107, 107, 0.1)'
  };
  
  color: ${({ type }) => 
    type === 'success' ? '#2d5016' : '#d32f2f'
  };
  
  border: 1px solid ${({ type }) => 
    type === 'success' 
      ? 'rgba(150, 230, 161, 0.3)' 
      : 'rgba(255, 107, 107, 0.3)'
  };
  
  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
