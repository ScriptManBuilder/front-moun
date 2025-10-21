import React from 'react';
import styled from 'styled-components';
import { FaTelegramPlane } from "react-icons/fa";





const ButtonContainer = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
  background-color: #000; /* Темный фон */
  border-radius: 50%; /* Круглая заливка */
  padding: 8px; /* Увеличение padding для пропорциональности */
  display: flex;
  justify-content: center;
  align-items: center;

  .icon {
    color: #fff; /* Белая иконка */
    font-size: 23px;
    cursor: pointer;
    transition: transform 0.3s ease, background-color 0.3s ease, color 0.3s ease;
  }

  &:hover {
    background: #e6ff00; /* Цвет заливки при наведении */
    .icon {
      color: #23272f; /* Цвет иконки при наведении */
    }
  }

  &::after {
    content: '1';
    position: absolute;
    top: -5px;
    right: -5px;
    background-color: #ff3333;
    color: white;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 11px;
    font-weight: bold;
    font-family: Arial, sans-serif;
    opacity: 0;
    transform: scale(0);
    animation: showBadge 0.3s ease-out 3s forwards;
  }

  @keyframes showBadge {
    0% {
      opacity: 0;
      transform: scale(0);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }
`;

const TelegramButton: React.FC = () => {
  const handleClick = () => {
    window.open('https://t.me/moun_digital', '_blank');
  };

  return (
    <ButtonContainer>
      {React.createElement(FaTelegramPlane as any, { 
        className: "icon", 
        onClick: handleClick 
      })}
    </ButtonContainer>
  );
};

export default TelegramButton;
