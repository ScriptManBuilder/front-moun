import styled from "styled-components";

// ===== Main Section Container =====
export const ApproachSection = styled.section`
  background: #18161e;
  padding: 20px 0 40px 0;
  text-align: center;
  width: 100%;
  overflow-x: hidden;

  @media (max-width: 600px) {
    padding: 36px 0 18px 0;
  }
`;



// ===== Section Headings =====
export const ApproachTitle = styled.h2`
  font-size: 2.4rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 10px;

  b {
    font-style: italic;
    color: #ffe066;
  }

  @media (max-width: 600px) {
    font-size: 2rem;
  }
`;

export const ApproachSubtitle = styled.p`
  color: #e0e0e0;
  font-size: 1.08rem;
  margin-bottom: 36px;

  @media (max-width: 600px) {
    font-size: 0.95rem;
  }
`;

// ===== Grid Layout =====
export const ApproachSteps = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 2.5px;
  padding: 10px;
  justify-content: center;
  margin: 0 auto;
  width: 100%;
  max-width: 1200px;
  box-sizing: border-box;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    padding: 20px;
    max-width: 600px;
    justify-items: center;
  }

  @media (max-width: 767px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
    padding: 15px;
    max-width: 550px;
    justify-items: center;
  }

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    padding: 0 15px;
  }
`;

// ===== Individual Step Cards =====
export const ApproachStep = styled.div<{ $active?: boolean }>`
  position: relative;
  width: ${({ $active }) => ($active ? "210px" : "190px")};
  height: 240px;
  padding: 20px 15px;
  background: ${({ $active }) =>
    $active
      ? "linear-gradient(135deg, #faff00 0%, #e4ff70 100%)"
      : "linear-gradient(to bottom, #F9FAFB, #F1F5F9)"};
  border-radius: 12px;
  box-shadow: ${({ $active }) =>
    $active
      ? "0 8px 30px rgba(0, 0, 0, 0.12), 0 2px 10px rgba(76, 175, 80, 0.2)"
      : "0 4px 20px rgba(0, 0, 0, 0.08)"};
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  border: 1px solid rgba(0, 0, 0, 0.06);

  @media (max-width: 1024px) {
    width: 260px;
    height: auto;
    min-height: 240px;
  }

  @media (max-width: 767px) {
    width: 260px;
    max-width: calc(100vw - 40px);
    height: auto;
    min-height: 240px;
  }

  @media (max-width: 425px) {
    width: 240px;
    max-width: calc(100vw - 30px);
    padding: 18px 15px;
  }

  @media (max-width: 375px) {
    width: 220px;
    max-width: calc(100vw - 30px);
    padding: 16px 12px;
  }

  @media (max-width: 320px) {
    width: 200px;
    max-width: calc(100vw - 30px);
    padding: 15px 10px;
  }
`;

// ===== Step Components =====
export const StepIcon = styled.div<{ $active?: boolean }>`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: ${({ $active }) =>
    $active
      ? "linear-gradient(135deg, #f0f9ff 0%, #cfe8ff 100%)"
      : "linear-gradient(135deg, #f7fbe9 0%, #fff 100%)"};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  margin-bottom: 12px;
  box-shadow: ${({ $active }) =>
    $active ? "0 2px 10px rgba(67,198,172,0.12)" : "none"};
  transition: background 0.25s, box-shadow 0.25s;

  @media (max-width: 600px) {
    width: 38px;
    height: 38px;
    font-size: 1.5rem;
    margin-bottom: 8px;
  }
`;

export const StepTitle = styled.div`
  font-size: 0.9rem; /* Slightly larger font size */
  font-weight: 700; /* Bold for emphasis */
  color: #232946;
  position: absolute; /* Fixed positioning */
  top: 80px; /* Explicitly positioned at the top */
  left: 20px; /* Adjusted for left alignment */
  text-align: left; /* Left alignment */
  width: calc(100% - 40px); /* Adjusted width */
  max-width: 100%;
  padding: 0 2px;
  word-break: break-word;
  line-height: 1.2;
  height: auto; /* Allow dynamic height */

  @media (max-width: 600px) {
    font-size: 0.8rem;
    top: 60px; /* Adjusted for smaller screens */
    left: 15px;
    width: calc(100% - 30px);
    padding: 0 1px;
  }
`;

export const StepDescription = styled.div<{ $active?: boolean }>`
  font-size: 0.75rem; /* Adjusted font size */
  color: #232946;
  margin-top: ${({ $active }) => ($active ? "20px" : "0")}; /* Adjusted margin-top */
  text-align: left; /* Align text to the left */
  font-weight: 400;
  max-height: ${({ $active }) => ($active ? "140px" : "0")}; /* Increased max height */
  opacity: ${({ $active }) => ($active ? 1 : 0)};
  overflow: visible; /* Ensure text is not clipped */
  transition: max-height 0.35s cubic-bezier(.4,0,.2,1), opacity 0.25s;
  padding: 0 2px;
  word-break: break-word;
  line-height: 1.4; /* Increased line height */
  height: ${({ $active }) => ($active ? "auto" : "0")};
  display: block; /* Removed flex properties */

  @media (max-width: 600px) {
    font-size: 0.7rem;
    padding: 0 0.5px;
  }
`;

export const StepArrow = styled.div<{ $active?: boolean }>`
  position: absolute;
  bottom: 12px;
  right: 16px;
  font-size: 1.2rem;
  color: #fff; /* Белая стрелка */
  background: #000; /* Черная заливка */
  border-radius: 50%;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
  transform: ${({ $active }) => ($active ? "rotate(-90deg)" : "rotate(0deg)")}; /* Rotate arrow upward when active */
  transition: all 0.25s cubic-bezier(.4,0,.2,1);

  @media (max-width: 600px) {
    width: 20px;
    height: 20px;
    font-size: 1rem;
    right: 8px;
    bottom: 8px;
    transform: ${({ $active }) => ($active ? "rotate(-90deg)" : "rotate(0deg)")}; /* Adjusted for smaller screens */
  }
`;

// ===== Presentation Section =====
export const PresentationSection = styled.div`
  margin-top: 60px;
  padding: 50px 30px;
  background: linear-gradient(135deg, #18161e 0%, #23272f 50%, #2a2a2a 100%);
  border: 1px solid rgba(212, 252, 121, 0.2);
  border-radius: 20px;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  position: relative;
  overflow: hidden;
  box-shadow: 
    0 10px 30px rgba(0, 0, 0, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 20% 80%, rgba(212, 252, 121, 0.15) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(255, 224, 102, 0.1) 0%, transparent 50%);
    border-radius: 20px;
    pointer-events: none;
  }

  /* Desktop Large */
  @media (min-width: 1440px) {
    margin-top: 80px;
    padding: 60px 40px;
    max-width: 1000px;
    border-radius: 24px;
  }

  /* Laptop */
  @media (max-width: 1024px) {
    margin-top: 50px;
    padding: 45px 25px;
    max-width: 850px;
    border-radius: 18px;
  }

  /* Tablet */
  @media (max-width: 768px) {
    margin-top: 40px;
    padding: 35px 20px;
    border-radius: 15px;
    max-width: 95%;
    margin-left: 2.5%;
    margin-right: 2.5%;
  }

  /* Mobile Large */
  @media (max-width: 425px) {
    margin-top: 30px;
    padding: 25px 15px;
    border-radius: 12px;
    max-width: calc(100vw - 20px);
    margin-left: 10px;
    margin-right: 10px;
    box-shadow: 
      0 8px 25px rgba(0, 0, 0, 0.25),
      inset 0 1px 0 rgba(255, 255, 255, 0.08);
  }

  /* Mobile Medium */
  @media (max-width: 375px) {
    margin-top: 25px;
    padding: 20px 12px;
    border-radius: 10px;
    margin-left: 8px;
    margin-right: 8px;
  }

  /* Mobile Small */
  @media (max-width: 320px) {
    margin-top: 20px;
    padding: 18px 10px;
    border-radius: 8px;
    margin-left: 5px;
    margin-right: 5px;
    border-width: 0.5px;
  }
`;

export const PresentationTitle = styled.h3`
  font-size: 2.2rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 20px;
  position: relative;
  z-index: 1;
  font-family: 'Inter', 'Montserrat', 'Roboto', sans-serif;

  span {
    color: #d4fc79;
    font-style: italic;
    background: linear-gradient(135deg, #d4fc79 0%, #ffe066 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  @media (max-width: 768px) {
    font-size: 1.8rem;
    margin-bottom: 16px;
  }

  @media (max-width: 425px) {
    font-size: 1.5rem;
    margin-bottom: 14px;
  }
`;

export const PresentationDescription = styled.p`
  font-size: 1.2rem;
  color: #c0c0c0;
  margin-bottom: 35px;
  line-height: 1.7;
  position: relative;
  z-index: 1;
  font-family: 'Inter', 'Montserrat', 'Roboto', sans-serif;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 30px;
    line-height: 1.6;
  }

  @media (max-width: 425px) {
    font-size: 1rem;
    margin-bottom: 25px;
    line-height: 1.5;
  }
`;

export const PresentationButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 12px;
  background: linear-gradient(135deg, #d4fc79 0%, #96e6a1 100%); /* Красивый зеленый градиент */
  color: #23272f; /* Темный текст для контраста */
  border: 2px solid transparent; /* Прозрачная граница */
  border-radius: 32px;
  text-decoration: none;
  font-weight: 600;
  font-size: 20px;
  transition: all 0.3s ease, transform 0.3s ease; /* Плавные переходы */
  cursor: pointer;
  font-family: 'Inter', 'Montserrat', 'Roboto', sans-serif;
  box-shadow: 0 4px 15px rgba(212, 252, 121, 0.4); /* Зеленоватая тень */
  padding: 16px 40px;
  position: relative;
  z-index: 1;

  &:hover {
    background: linear-gradient(135deg, #96e6a1 0%, #d4fc79 100%); /* Обратный градиент */
    color: #1a1a1a; /* Еще более темный текст */
    border: 2px solid #23272f; /* Черный бордер при наведении */
    box-shadow: 0 6px 20px rgba(212, 252, 121, 0.6); /* Более яркая тень */
    transform: translateY(-3px) scale(1.02); /* Поднимается и слегка увеличивается */
  }

  .pdf-icon {
    font-size: 1.3rem;
  }

  /* Адаптивность для разных размеров экранов */
  @media (min-width: 1440px) {
    /* Laptop L */
    padding: 18px 45px;
    font-size: 22px;
    border-radius: 36px;
  }
  
  @media (max-width: 1024px) {
    /* Laptop */
    padding: 13px 30px;
    font-size: 16px;
  }
  
  @media (max-width: 768px) {
    /* Tablet */
    padding: 12px 24px;
    font-size: 14px;
    border-radius: 26px;
  }
  
  @media (max-width: 425px) {
    /* Mobile L */
    padding: 10px 20px;
    font-size: 13px;
    border-radius: 22px;
  }
  
  @media (max-width: 375px) {
    /* Mobile M */
    padding: 8px 16px;
    font-size: 12px;
    border-width: 1.5px;
  }
  
  @media (max-width: 320px) {
    /* Mobile S */
    padding: 6px 12px;
    font-size: 11px;
    border-radius: 18px;
    border-width: 1.5px;
  }
`;