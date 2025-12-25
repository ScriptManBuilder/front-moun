import styled from 'styled-components';

export const CareerFormContainer = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 120px 20px 80px;
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #0f0f1e 100%);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle at 30% 40%, rgba(138, 43, 226, 0.15) 0%, transparent 40%),
                radial-gradient(circle at 70% 60%, rgba(218, 112, 214, 0.1) 0%, transparent 40%),
                radial-gradient(circle at 50% 80%, rgba(138, 43, 226, 0.12) 0%, transparent 35%);
    animation: gradientShift 20s ease infinite;
    pointer-events: none;
  }

  @keyframes gradientShift {
    0%, 100% { transform: translate(0, 0) rotate(0deg); }
    50% { transform: translate(10px, 10px) rotate(5deg); }
  }

  @media (max-width: 768px) {
    padding: 90px 18px 50px;
  }

  @media (max-width: 425px) {
    padding: 75px 14px 40px;
  }

  @media (max-width: 375px) {
    padding: 70px 12px 35px;
  }

  @media (max-width: 320px) {
    padding: 65px 10px 30px;
  }
`;

export const CareerFormWrapper = styled.div`
  max-width: 750px;
  width: 100%;
  background: rgba(26, 26, 46, 0.85);
  backdrop-filter: blur(20px);
  border-radius: 24px;
  padding: 60px 50px;
  box-shadow: 0 20px 60px rgba(138, 43, 226, 0.25),
              0 0 0 1px rgba(138, 43, 226, 0.15);
  border: 1px solid rgba(138, 43, 226, 0.2);
  position: relative;
  z-index: 1;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #8a2be2, #da70d6, #8a2be2);
    border-radius: 24px 24px 0 0;
  }

  @media (max-width: 768px) {
    padding: 35px 22px;
    border-radius: 18px;
    max-width: 95%;
    
    &::before {
      height: 3px;
      border-radius: 18px 18px 0 0;
    }
  }

  @media (max-width: 425px) {
    padding: 28px 16px;
    border-radius: 16px;
    
    &::before {
      height: 2.5px;
      border-radius: 16px 16px 0 0;
    }
  }

  @media (max-width: 375px) {
    padding: 24px 14px;
    border-radius: 14px;
    
    &::before {
      height: 2px;
      border-radius: 14px 14px 0 0;
    }
  }

  @media (max-width: 320px) {
    padding: 18px 10px;
    border-radius: 12px;
    
    &::before {
      height: 2px;
      border-radius: 12px 12px 0 0;
    }
  }
`;

export const FormTitle = styled.h1`
  font-size: 2.8rem;
  font-weight: 700;
  color: #ffffff;
  text-align: center;
  margin-bottom: 12px;
  background: linear-gradient(135deg, #8a2be2, #da70d6, #b57aed);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: -0.5px;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 1.85rem;
    margin-bottom: 8px;
  }

  @media (max-width: 425px) {
    font-size: 1.6rem;
    margin-bottom: 6px;
    letter-spacing: -0.2px;
  }

  @media (max-width: 375px) {
    font-size: 1.45rem;
    margin-bottom: 5px;
    letter-spacing: -0.2px;
  }

  @media (max-width: 320px) {
    font-size: 1.25rem;
    margin-bottom: 4px;
    letter-spacing: 0;
  }
`;

export const FormSubtitle = styled.p`
  font-size: 1.15rem;
  color: rgba(255, 255, 255, 0.75);
  text-align: center;
  margin-bottom: 45px;
  line-height: 1.7;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 768px) {
    font-size: 0.95rem;
    margin-bottom: 25px;
    line-height: 1.5;
  }

  @media (max-width: 425px) {
    font-size: 0.88rem;
    margin-bottom: 20px;
    line-height: 1.45;
  }

  @media (max-width: 375px) {
    font-size: 0.84rem;
    margin-bottom: 18px;
    line-height: 1.4;
  }

  @media (max-width: 320px) {
    font-size: 0.78rem;
    margin-bottom: 12px;
    line-height: 1.35;
  }
`;

export const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  margin-bottom: 8px;
  max-width: 85%;

  @media (max-width: 768px) {
    gap: 20px;
    margin-bottom: 6px;
    max-width: 90%;
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 0;
    margin-bottom: 0;
    max-width: 100%;
  }
`;

export const FirstFormRow = styled.div`
  display: grid;
  grid-template-columns: 0.7fr 1.3fr;
  gap: 60px;
  margin-bottom: 8px;
  max-width: 55%;

  @media (max-width: 768px) {
    gap: 40px;
    margin-bottom: 6px;
    max-width: 65%;
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 0;
    margin-bottom: 0;
    max-width: 100%;
  }
`;

export const SecondFormRow = styled.div`
  display: grid;
  grid-template-columns: 0.4fr 1.2fr;
  gap: 60px;
  margin-bottom: 8px;
  max-width: 70%;

  @media (max-width: 768px) {
    gap: 40px;
    margin-bottom: 6px;
    max-width: 80%;
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 0;
    margin-bottom: 0;
    max-width: 100%;
  }
`;

export const FormGroup = styled.div`
  margin-bottom: 28px;
  position: relative;

  @media (max-width: 768px) {
    margin-bottom: 20px;
  }

  @media (max-width: 425px) {
    margin-bottom: 16px;
  }

  @media (max-width: 375px) {
    margin-bottom: 14px;
  }

  @media (max-width: 320px) {
    margin-bottom: 10px;
  }
`;

export const ShortFormGroup = styled.div`
  margin-bottom: 28px;
  position: relative;
  max-width: 50%;

  @media (max-width: 768px) {
    margin-bottom: 20px;
    max-width: 100%;
  }

  @media (max-width: 425px) {
    margin-bottom: 16px;
    max-width: 100%;
  }

  @media (max-width: 375px) {
    margin-bottom: 14px;
    max-width: 100%;
  }

  @media (max-width: 320px) {
    margin-bottom: 10px;
    max-width: 100%;
  }
`;

export const FormLabel = styled.label<{ $hasValue?: boolean; $isFocused?: boolean }>`
  position: absolute;
  left: 18px;
  top: ${props => (props.$hasValue || props.$isFocused) ? '-10px' : '14px'};
  font-size: ${props => (props.$hasValue || props.$isFocused) ? '0.68rem' : '0.9rem'};
  font-weight: 600;
  color: ${props => props.$isFocused ? '#a855f7' : 'rgba(255, 255, 255, 0.7)'};
  background: ${props => (props.$hasValue || props.$isFocused) ? 'linear-gradient(to bottom, transparent 50%, rgba(26, 26, 46, 0.95) 50%)' : 'transparent'};
  padding: 0 5px;
  letter-spacing: 0.1px;
  text-transform: uppercase;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  pointer-events: none;
  z-index: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: calc(100% - 24px);

  @media (max-width: 425px) {
    font-size: ${props => (props.$hasValue || props.$isFocused) ? '0.55rem' : '0.72rem'};
    top: ${props => (props.$hasValue || props.$isFocused) ? '-7px' : '9px'};
    left: 10px;
    letter-spacing: 0;
    max-width: calc(100% - 18px);
    padding: 0 4px;
    text-transform: none;
    font-weight: 700;
  }

  @media (max-width: 375px) {
    font-size: ${props => (props.$hasValue || props.$isFocused) ? '0.52rem' : '0.7rem'};
    top: ${props => (props.$hasValue || props.$isFocused) ? '-7px' : '9px'};
    left: 9px;
    letter-spacing: 0;
    max-width: calc(100% - 16px);
    padding: 0 3px;
    text-transform: none;
    font-weight: 700;
  }

  @media (max-width: 320px) {
    font-size: ${props => (props.$hasValue || props.$isFocused) ? '0.5rem' : '0.68rem'};
    top: ${props => (props.$hasValue || props.$isFocused) ? '-6px' : '8px'};
    left: 8px;
    letter-spacing: -0.2px;
    max-width: calc(100% - 14px);
    padding: 0 3px;
    text-transform: none;
    font-weight: 700;
  }
`;

const inputStyles = `
  width: 100%;
  box-sizing: border-box;
  padding: 16px 18px 12px 18px;
  font-size: 0.98rem;
  color: #ffffff;
  background: rgba(20, 20, 35, 0.7);
  border: 2px solid rgba(138, 43, 226, 0.25);
  border-radius: 11px;
  outline: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  font-family: inherit;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);

  &::placeholder {
    color: rgba(255, 255, 255, 0.35);
    font-size: 0.9rem;
  }

  &:focus {
    border-color: #a855f7;
    background: rgba(20, 20, 35, 0.9);
    box-shadow: 0 0 0 3px rgba(168, 85, 247, 0.25),
                inset 0 2px 4px rgba(0, 0, 0, 0.1);
    transform: translateY(-1px);
  }

  &:hover:not(:focus) {
    border-color: rgba(168, 85, 247, 0.4);
    background: rgba(20, 20, 35, 0.8);
  }

  @media (max-width: 768px) {
    padding: 13px 15px 10px 15px;
    font-size: 0.94rem;
    border-radius: 9px;
  }

  @media (max-width: 425px) {
    padding: 10px 10px 7px 10px;
    font-size: 14px;
    border-radius: 7px;
    border-width: 1.5px;
  }

  @media (max-width: 375px) {
    padding: 9px 9px 7px 9px;
    font-size: 13px;
    border-radius: 7px;
    border-width: 1.5px;
  }

  @media (max-width: 320px) {
    padding: 8px 8px 6px 8px;
    font-size: 12.5px;
    border-radius: 6px;
    border-width: 1.5px;
  }
`;

export const FormInput = styled.input`
  ${inputStyles}
`;

export const FormSelect = styled.select`
  ${inputStyles}
  cursor: pointer;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='%238a2be2' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 18px center;
  background-size: 16px;
  padding-right: 50px;

  option {
    background: #1a1a2e;
    color: #ffffff;
    padding: 12px;
    font-size: 1rem;
  }

  @media (max-width: 768px) {
    background-position: right 16px center;
    background-size: 14px;
    padding-right: 45px;
  }

  @media (max-width: 480px) {
    background-position: right 14px center;
    background-size: 13px;
    padding-right: 42px;
  }
`;

export const FormTextarea = styled.textarea`
  ${inputStyles}
  min-height: 140px;
  max-height: 250px;
  resize: vertical;
  line-height: 1.7;
  padding-top: 16px;

  @media (max-width: 768px) {
    min-height: 110px;
    max-height: 180px;
    line-height: 1.55;
  }

  @media (max-width: 425px) {
    min-height: 95px;
    max-height: 150px;
    line-height: 1.45;
    padding-top: 11px;
  }

  @media (max-width: 375px) {
    min-height: 90px;
    max-height: 140px;
    line-height: 1.45;
    padding-top: 10px;
  }

  @media (max-width: 320px) {
    min-height: 85px;
    max-height: 130px;
    line-height: 1.4;
    padding-top: 9px;
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 18px 36px;
  font-size: 1.15rem;
  font-weight: 700;
  color: #ffffff;
  background: linear-gradient(135deg, #8a2be2 0%, #b57aed 50%, #da70d6 100%);
  background-size: 200% 100%;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  margin-top: 15px;
  letter-spacing: 0.8px;
  text-transform: uppercase;
  font-size: 0.95rem;
  box-shadow: 0 8px 24px rgba(138, 43, 226, 0.3);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.5s;
  }

  &:hover:not(:disabled) {
    transform: translateY(-3px);
    box-shadow: 0 12px 32px rgba(138, 43, 226, 0.45);
    background-position: 100% 0;
    
    &::before {
      left: 100%;
    }
  }

  &:active:not(:disabled) {
    transform: translateY(-1px);
    box-shadow: 0 6px 20px rgba(138, 43, 226, 0.35);
  }

  &:disabled {
    opacity: 0.65;
    cursor: not-allowed;
    transform: none;
  }

  @media (max-width: 768px) {
    padding: 14px 28px;
    font-size: 0.88rem;
    border-radius: 10px;
  }

  @media (max-width: 425px) {
    padding: 12px 20px;
    font-size: 0.8rem;
    border-radius: 8px;
    letter-spacing: 0.3px;
    margin-top: 6px;
  }

  @media (max-width: 375px) {
    padding: 11px 18px;
    font-size: 0.78rem;
    border-radius: 7px;
    letter-spacing: 0.2px;
    margin-top: 5px;
  }

  @media (max-width: 320px) {
    padding: 10px 16px;
    font-size: 0.76rem;
    border-radius: 7px;
    letter-spacing: 0.2px;
    margin-top: 4px;
  }
`;

export const PrivacyNote = styled.p`
  text-align: center;
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.6);
  margin-top: 20px;
  line-height: 1.6;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  @media (max-width: 425px) {
    font-size: 0.74rem;
    margin-top: 10px;
    gap: 4px;
  }

  @media (max-width: 375px) {
    font-size: 0.72rem;
    margin-top: 8px;
    gap: 3px;
    line-height: 1.4;
  }

  @media (max-width: 320px) {
    font-size: 0.7rem;
    margin-top: 6px;
    gap: 3px;
    line-height: 1.35;
  }
`;
