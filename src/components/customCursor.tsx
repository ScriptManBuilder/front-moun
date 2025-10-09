import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

interface CursorPosition {
  x: number;
  y: number;
}

interface CursorFollowerProps {
  x: number;
  y: number;
  isVisible: boolean;
  isHovering: boolean;
}

const CursorFollower = styled.div.attrs<CursorFollowerProps>(({ x, y, isVisible }) => ({
  style: {
    transform: `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`,
    opacity: isVisible ? 1 : 0,
  },
}))<CursorFollowerProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: ${({ isHovering }) => isHovering ? '14px' : '12px'};
  height: ${({ isHovering }) => isHovering ? '14px' : '12px'};
  background: ${({ isHovering }) => 
    isHovering 
      ? 'linear-gradient(135deg, #00d4aa 0%, #96e6a1 50%, #d4fc79 100%)'
      : 'rgba(0, 212, 170, 0.8)'
  };
  border: 2px solid rgba(255, 255, 255, 0.9);
  border-radius: 50%;
  pointer-events: none;
  z-index: 999999999; /* Увеличиваем z-index для гарантированного отображения поверх скролла */
  transition: all 0.2s cubic-bezier(0.23, 1, 0.32, 1);
  backdrop-filter: blur(5px);
  mix-blend-mode: normal; /* Добавляем для корректного отображения */
  
  /* Градиентное свечение */
  box-shadow: 
    0 0 20px rgba(0, 212, 170, 0.4),
    0 0 40px rgba(0, 212, 170, 0.2),
    inset 0 0 20px rgba(255, 255, 255, 0.2);
  
  /* Анимация пульсации при hover */
  ${({ isHovering }) => isHovering && `
    animation: cursorPulse 1.5s ease-in-out infinite;
  `}
  
  @keyframes cursorPulse {
    0%, 100% {
      box-shadow: 
        0 0 20px rgba(0, 212, 170, 0.4),
        0 0 40px rgba(0, 212, 170, 0.2),
        inset 0 0 20px rgba(255, 255, 255, 0.2);
    }
    50% {
      box-shadow: 
        0 0 30px rgba(0, 212, 170, 0.6),
        0 0 60px rgba(0, 212, 170, 0.4),
        inset 0 0 20px rgba(255, 255, 255, 0.3);
    }
  }
  
  /* Отключаем на мобильных устройствах */
  @media (max-width: 768px) {
    display: none;
  }
  
  @media (hover: none) {
    display: none;
  }
  
  @media (pointer: coarse) {
    display: none;
  }
`;

const CursorTrail = styled.div.attrs<{ x: number; y: number; isVisible: boolean }>(({ x, y, isVisible }) => ({
  style: {
    transform: `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`,
    opacity: isVisible ? 0.6 : 0,
  },
}))<{ x: number; y: number; isVisible: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 8px;
  height: 8px;
  background: linear-gradient(135deg, #96e6a1 0%, #d4fc79 100%);
  border-radius: 50%;
  pointer-events: none;
  z-index: 999999998; /* Немного меньше основного курсора */
  transition: all 0.3s ease-out;
  
  @media (max-width: 768px) {
    display: none;
  }
  
  @media (hover: none) {
    display: none;
  }
  
  @media (pointer: coarse) {
    display: none;
  }
`;

const CustomCursor: React.FC = () => {
  const [cursorPosition, setCursorPosition] = useState<CursorPosition>({ x: 0, y: 0 });
  const [trailPosition, setTrailPosition] = useState<CursorPosition>({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(true); // Делаем видимым по умолчанию
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
      
      // Задержка для trail эффекта
      setTimeout(() => {
        setTrailPosition({ x: e.clientX, y: e.clientY });
      }, 100);
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Проверяем интерактивные элементы
      const isInteractive = 
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        !!target.onclick ||
        target.style.cursor === 'pointer' ||
        window.getComputedStyle(target).cursor === 'pointer' ||
        !!target.closest('button') ||
        !!target.closest('a') ||
        !!target.closest('[role="button"]') ||
        !!target.closest('.clickable');
      
      setIsHovering(isInteractive);
    };

    // Скрываем стандартный курсор
    document.body.style.cursor = 'none';
    
    // Добавляем стили для интерактивных элементов
    const style = document.createElement('style');
    style.textContent = `
      * {
        cursor: none !important;
      }
    `;
    document.head.appendChild(style);

    // ИСПРАВЛЕНИЕ: Добавляем слушатели на window вместо document для полного покрытия
    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseover', handleMouseOver);
      
      // Восстанавливаем стандартный курсор
      document.body.style.cursor = 'auto';
      if (document.head.contains(style)) {
        document.head.removeChild(style);
      }
    };
  }, []);

  return (
    <>
      <CursorTrail
        x={trailPosition.x}
        y={trailPosition.y}
        isVisible={isVisible}
      />
      <CursorFollower
        x={cursorPosition.x}
        y={cursorPosition.y}
        isVisible={isVisible}
        isHovering={isHovering}
      />
    </>
  );
};

export default CustomCursor;