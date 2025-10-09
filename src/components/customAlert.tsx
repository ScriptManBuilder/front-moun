import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import styled, { keyframes, css } from 'styled-components';
import { useLocale } from '../LocaleContext';

interface CustomAlertProps {
  isVisible: boolean;
  type: 'success' | 'error' | 'warning' | 'info';
  title?: string;
  message: string;
  duration?: number;
  onClose: () => void;
}

const slideInTop = keyframes`
  from {
    transform: translateY(-100%) translateX(-50%);
    opacity: 0;
  }
  to {
    transform: translateY(0) translateX(-50%);
    opacity: 1;
  }
`;

const slideOutTop = keyframes`
  from {
    transform: translateY(0) translateX(-50%);
    opacity: 1;
  }
  to {
    transform: translateY(-100%) translateX(-50%);
    opacity: 0;
  }
`;

const progressAnimation = keyframes`
  from {
    width: 100%;
  }
  to {
    width: 0%;
  }
`;

const AlertContainer = styled.div<{ isVisible: boolean; type: string; isClosing: boolean }>`
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10000;
  min-width: 400px;
  max-width: 500px;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px) saturate(180%);
  border-radius: 16px;
  box-shadow: 
    0 20px 40px rgba(0, 0, 0, 0.1),
    0 8px 32px rgba(0, 212, 170, 0.2),
    0 0 0 1px rgba(255, 255, 255, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.8);
  border: 2px solid ${({ type }) => {
    switch (type) {
      case 'success': return 'rgba(0, 212, 170, 0.3)';
      case 'error': return 'rgba(255, 99, 99, 0.3)';
      case 'warning': return 'rgba(255, 193, 7, 0.3)';
      default: return 'rgba(0, 212, 170, 0.3)';
    }
  }};
  overflow: hidden;
  animation: ${({ isVisible, isClosing }) => {
    if (isClosing) {
      return css`${slideOutTop} 0.4s cubic-bezier(0.23, 1, 0.32, 1)`;
    } else if (isVisible) {
      return css`${slideInTop} 0.4s cubic-bezier(0.23, 1, 0.32, 1)`;
    } else {
      return 'none';
    }
  }};
  
  @media (max-width: 768px) {
    min-width: 320px;
    max-width: calc(100vw - 40px);
    top: 10px;
  }
`;

const AlertContent = styled.div`
  padding: 20px 24px;
  display: flex;
  align-items: flex-start;
  gap: 16px;
`;

const AlertIcon = styled.div<{ type: string }>`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  color: white;
  flex-shrink: 0;
  background: ${({ type }) => {
    switch (type) {
      case 'success': return 'linear-gradient(135deg, #00d4aa 0%, #96e6a1 100%)';
      case 'error': return 'linear-gradient(135deg, #ff6363 0%, #ff9999 100%)';
      case 'warning': return 'linear-gradient(135deg, #ffc107 0%, #ffeb3b 100%)';
      default: return 'linear-gradient(135deg, #00d4aa 0%, #96e6a1 100%)';
    }
  }};
  box-shadow: 0 4px 12px rgba(0, 212, 170, 0.3);
`;

const AlertTextContainer = styled.div`
  flex: 1;
`;

const AlertTitle = styled.h4`
  margin: 0 0 4px 0;
  font-size: 16px;
  font-weight: 700;
  color: #111827;
  line-height: 1.3;
`;

const AlertMessage = styled.p`
  margin: 0;
  font-size: 14px;
  color: #6B7280;
  line-height: 1.4;
  font-weight: 450;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;
  width: 28px;
  height: 28px;
  border: none;
  background: rgba(107, 114, 128, 0.1);
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  color: #6B7280;
  transition: all 0.2s ease;
  
  &:hover {
    background: rgba(107, 114, 128, 0.2);
    color: #374151;
    transform: scale(1.1);
  }
`;

const ProgressBar = styled.div<{ duration: number; isVisible: boolean }>`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 3px;
  background: linear-gradient(90deg, #00d4aa 0%, #96e6a1 50%, #d4fc79 100%);
  animation: ${({ isVisible, duration }) => 
    isVisible ? css`${progressAnimation} ${duration}ms linear` : 'none'
  };
  border-radius: 0 0 16px 16px;
`;

const CustomAlert: React.FC<CustomAlertProps> = ({
  isVisible,
  type,
  title,
  message,
  duration = 5000,
  onClose
}) => {
  const [isClosing, setIsClosing] = useState(false);
  const { localeContent } = useLocale();

  const getIcon = () => {
    switch (type) {
      case 'success': return '✓';
      case 'error': return '✕';
      case 'warning': return '⚠';
      default: return 'ℹ';
    }
  };

  const getDefaultTitle = () => {
    switch (type) {
      case 'success': return 'Success';
      case 'error': return 'Error';
      case 'warning': return 'Warning';
      default: return 'Information';
    }
  };

  useEffect(() => {
    if (isVisible && duration > 0) {
      const timer = setTimeout(() => {
        handleClose();
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [isVisible, duration]);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
      setIsClosing(false);
    }, 400);
  };

  if (!isVisible && !isClosing) return null;

  const alertElement = (
    <AlertContainer isVisible={isVisible} type={type} isClosing={isClosing}>
      <AlertContent>
        <AlertIcon type={type}>
          {getIcon()}
        </AlertIcon>
        <AlertTextContainer>
          <AlertTitle>{title || getDefaultTitle()}</AlertTitle>
          <AlertMessage>{message}</AlertMessage>
        </AlertTextContainer>
        <CloseButton onClick={handleClose}>
          ×
        </CloseButton>
      </AlertContent>
      <ProgressBar duration={duration} isVisible={isVisible && !isClosing} />
    </AlertContainer>
  );

  return createPortal(alertElement, document.body);
};

export default CustomAlert;