import styled from 'styled-components';

export const CareerFormContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 120px 20px 80px;
  background: linear-gradient(135deg, #f0f4f8 0%, #e8f5e9 25%, #f1f8e9 50%, #e0f2f1 75%, #f3f4f6 100%);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle at 30% 40%, rgba(212, 252, 121, 0.12) 0%, transparent 40%),
                radial-gradient(circle at 70% 60%, rgba(212, 252, 121, 0.08) 0%, transparent 40%),
                radial-gradient(circle at 50% 80%, rgba(150, 230, 161, 0.1) 0%, transparent 35%),
                radial-gradient(circle at 20% 70%, rgba(35, 39, 47, 0.05) 0%, transparent 30%);
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
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.98) 0%, rgba(248, 252, 248, 0.96) 50%, rgba(250, 254, 250, 0.98) 100%);
  backdrop-filter: blur(20px);
  border-radius: 24px;
  padding: 25px 40px 40px;
  box-shadow: 0 20px 60px rgba(35, 39, 47, 0.15),
              0 8px 16px rgba(35, 39, 47, 0.1),
              0 0 0 1px rgba(35, 39, 47, 0.08);
  border: 1px solid rgba(35, 39, 47, 0.12);
  position: relative;
  z-index: 1;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  @media (max-width: 768px) {
    padding: 35px 22px;
    border-radius: 18px;
    max-width: 95%;
  }

  @media (max-width: 425px) {
    padding: 28px 16px;
    border-radius: 16px;
  }

  @media (max-width: 375px) {
    padding: 24px 14px;
    border-radius: 14px;
  }

  @media (max-width: 320px) {
    padding: 18px 10px;
    border-radius: 12px;
  }
`;

export const FormTitle = styled.h1`
  font-size: 3rem;
  font-weight: 600;
  color: #1e293b;
  text-align: center;
  margin-bottom: 16px;
  margin-top: 20px;
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
  font-size: 1.2rem;
  color: rgba(51, 65, 85, 0.8);
  text-align: center;
  margin-bottom: 50px;
  line-height: 1.8;
  max-width: 650px;
  margin-left: auto;
  margin-right: auto;
  font-weight: 400;
  padding: 0 20px;

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

export const Divider = styled.div`
  width: 80px;
  height: 3px;
  background: linear-gradient(90deg, #96e6a1, #d4fc79);
  margin: 20px auto;
  border-radius: 2px;

  @media (max-width: 768px) {
    width: 60px;
    height: 2.5px;
    margin: 16px auto;
  }

  @media (max-width: 425px) {
    width: 50px;
    height: 2px;
    margin: 12px auto;
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
  margin-bottom: 20px;
  position: relative;

  @media (max-width: 768px) {
    margin-bottom: 16px;
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
  margin-bottom: 20px;
  position: relative;
  max-width: 50%;

  @media (max-width: 768px) {
    margin-bottom: 16px;
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

export const CompactFormRow = styled.div`
  display: flex;
  gap: 18px;
  width: 100%;

  ${ShortFormGroup} {
    max-width: 44%;
    margin-bottom: 20px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0;

    ${ShortFormGroup} {
      max-width: 100%;
      margin-bottom: 20px;
    }
  }

  @media (max-width: 425px) {
    ${ShortFormGroup} {
      margin-bottom: 16px;
    }
  }

  @media (max-width: 375px) {
    ${ShortFormGroup} {
      margin-bottom: 14px;
    }
  }

  @media (max-width: 320px) {
    ${ShortFormGroup} {
      margin-bottom: 10px;
    }
  }
`;

export const FullWidthGroup = styled.div`
  margin-bottom: 28px;
  position: relative;
  width: 100%;
  max-width: 100%;

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

export const FormSection = styled.div`
  margin-bottom: 24px;

  &:last-of-type {
    margin-bottom: 16px;
  }

  @media (max-width: 768px) {
    margin-bottom: 20px;

    &:last-of-type {
      margin-bottom: 14px;
    }
  }

  @media (max-width: 425px) {
    margin-bottom: 22px;

    &:last-of-type {
      margin-bottom: 14px;
    }
  }
`;

export const SectionTitle = styled.h3`
  font-size: 0.95rem;
  font-weight: 600;
  color: #23272f;
  text-transform: uppercase;
  letter-spacing: 1.2px;
  margin: 0 0 14px 0;
  padding-bottom: 8px;
  border-bottom: 2px solid rgba(35, 39, 47, 0.2);
  background: linear-gradient(90deg, rgba(212, 252, 121, 0.15) 0%, transparent 100%);
  padding-left: 8px;
  margin-left: -8px;
  border-radius: 4px;

  @media (max-width: 768px) {
    font-size: 0.88rem;
    margin-bottom: 12px;
    padding-bottom: 6px;
    letter-spacing: 1px;
  }

  @media (max-width: 425px) {
    font-size: 0.82rem;
    margin-bottom: 14px;
    padding-bottom: 7px;
    letter-spacing: 0.8px;
  }

  @media (max-width: 320px) {
    font-size: 0.78rem;
    margin-bottom: 12px;
    padding-bottom: 6px;
    letter-spacing: 0.6px;
  }
`;

export const FormLabel = styled.label<{ $hasValue?: boolean; $isFocused?: boolean }>`
  position: absolute;
  left: 18px;
  top: ${props => (props.$hasValue || props.$isFocused) ? '-10px' : '14px'};
  font-size: ${props => (props.$hasValue || props.$isFocused) ? '0.68rem' : '0.9rem'};
  font-weight: 600;
  color: ${props => props.$isFocused ? '#23272f' : 'rgba(51, 65, 85, 0.65)'};
  background: ${props => (props.$hasValue || props.$isFocused) ? 'linear-gradient(to bottom, transparent 50%, rgba(255, 255, 255, 0.95) 50%)' : 'transparent'};
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
  color: #1e293b;
  background: linear-gradient(135deg, rgba(248, 252, 248, 0.6) 0%, rgba(245, 250, 245, 0.7) 100%);
  border: 2px solid rgba(35, 39, 47, 0.2);
  border-radius: 11px;
  outline: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  font-family: inherit;
  box-shadow: inset 0 1px 3px rgba(35, 39, 47, 0.05),
              0 2px 4px rgba(35, 39, 47, 0.03);

  &::placeholder {
    color: rgba(35, 39, 47, 0.4);
    font-size: 0.9rem;
  }

  &:focus {
    border-color: #23272f;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(250, 254, 250, 0.95) 100%);
    box-shadow: 0 0 0 3px rgba(212, 252, 121, 0.2),
                0 4px 12px rgba(35, 39, 47, 0.15),
                inset 0 1px 3px rgba(35, 39, 47, 0.05);
    transform: translateY(-2px);
  }

  &:hover:not(:focus) {
    border-color: rgba(35, 39, 47, 0.3);
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.8) 0%, rgba(250, 254, 250, 0.85) 100%);
    box-shadow: 0 2px 8px rgba(35, 39, 47, 0.1),
                inset 0 1px 3px rgba(35, 39, 47, 0.05);
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
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='%2323272f' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 18px center;
  background-size: 16px;
  padding-right: 50px;

  option {
    background: #f8fafc;
    color: #1e293b;
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
  color: #18181b;
  background: linear-gradient(135deg, #d4fc79 0%, #96e6a1 100%);
  background-size: 200% 200%;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  margin-top: 15px;
  letter-spacing: 0.8px;
  text-transform: uppercase;
  font-size: 0.95rem;
  box-shadow: 0 4px 15px rgba(150, 230, 161, 0.4), 0 2px 8px rgba(212, 252, 121, 0.3);
  position: relative;
  overflow: hidden;
  font-family: 'Inter', 'Montserrat', 'Roboto', sans-serif;
  white-space: nowrap;
  touch-action: manipulation;
  -webkit-tap-highlight-color: transparent;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
    transition: left 0.6s ease;
  }

  &:hover:not(:disabled) {
    background-position: 100% 50%;
    transform: translateY(-2px) scale(1.01);
    box-shadow: 0 8px 25px rgba(150, 230, 161, 0.5), 0 4px 12px rgba(212, 252, 121, 0.4);
    
    &::before {
      left: 100%;
    }
  }

  &:active:not(:disabled) {
    transform: translateY(0) scale(0.99);
    box-shadow: 0 2px 10px rgba(150, 230, 161, 0.3);
  }

  &:disabled {
    opacity: 0.65;
    cursor: not-allowed;
    transform: none;
    background: linear-gradient(135deg, #d4fc79 0%, #96e6a1 100%);
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
  color: rgba(71, 85, 105, 0.7);
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

export const BackButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  background: #23272f;
  border: 1.5px solid #23272f;
  color: #fff;
  padding: 6px 12px;
  border-radius: 18px;
  font-size: 0.8rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.8s ease, color 2s ease, box-shadow 0.3s ease, transform 0.3s ease;
  margin-bottom: 12px;
  align-self: flex-start;
  font-family: 'Inter', 'Montserrat', 'Roboto', sans-serif;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);

  &:hover {
    background: #d4fc79;
    color: #23272f;
    box-shadow: 0 4px 16px rgba(224, 252, 55, 0.3);
    border-color: #23272f;
    transform: translateX(-2px);
  }

  @media (max-width: 768px) {
    padding: 5px 10px;
    font-size: 0.75rem;
    border-radius: 16px;
    gap: 3px;
  }

  @media (max-width: 425px) {
    font-size: 0.7rem;
    padding: 4px 9px;
    border-radius: 14px;
  }

  @media (max-width: 375px) {
    font-size: 0.68rem;
    padding: 4px 8px;
    border-width: 1px;
  }

  @media (max-width: 320px) {
    font-size: 0.65rem;
    padding: 3px 7px;
    border-radius: 12px;
    border-width: 1px;
  }
`;
