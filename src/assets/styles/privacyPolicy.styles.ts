import styled from "styled-components";

export const PrivacyWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #f7f7f7;
  padding: 80px 20px 40px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 60px 15px 30px;
  }

  @media (max-width: 425px) {
    padding: 50px 12px 25px;
  }
`;

export const PrivacyContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
  background: #ffffff;
  border-radius: 16px;
  padding: 50px 60px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);

  @media (max-width: 768px) {
    padding: 35px 30px;
    border-radius: 12px;
  }

  @media (max-width: 425px) {
    padding: 25px 20px;
    border-radius: 10px;
  }
`;

export const BackButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 28px;
  background: #23272f;
  color: #fff;
  border: 2px solid #23272f;
  border-radius: 28px;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.95rem;
  transition: background 0.8s ease, color 0.8s ease, transform 0.3s ease;
  cursor: pointer;
  font-family: 'Inter', 'Montserrat', 'Roboto', sans-serif;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  margin-bottom: 30px;

  &:hover {
    background: #d4fc79;
    color: #23272f;
    box-shadow: 0 4px 16px rgba(224, 252, 55, 0.3);
    border-color: #23272f;
    transform: translateX(-5px);
  }

  @media (max-width: 768px) {
    padding: 10px 22px;
    font-size: 0.88rem;
    border-radius: 24px;
    margin-bottom: 20px;
  }

  @media (max-width: 425px) {
    padding: 8px 18px;
    font-size: 0.82rem;
    border-radius: 20px;
    margin-bottom: 15px;
  }

  @media (max-width: 375px) {
    padding: 7px 15px;
    font-size: 0.78rem;
    border-width: 1.5px;
  }

  @media (max-width: 320px) {
    padding: 6px 12px;
    font-size: 0.75rem;
    border-radius: 18px;
    border-width: 1.5px;
  }
`;

export const PrivacyTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: #18181b;
  margin: 0 0 20px 0;
  font-family: "Poppins", sans-serif;

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 425px) {
    font-size: 1.6rem;
    margin-bottom: 15px;
  }
`;

export const PrivacySection = styled.section`
  margin: 30px 0;

  @media (max-width: 768px) {
    margin: 25px 0;
  }

  @media (max-width: 425px) {
    margin: 20px 0;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: #18181b;
  margin: 0 0 15px 0;
  font-family: "Poppins", sans-serif;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }

  @media (max-width: 425px) {
    font-size: 1.15rem;
    margin-bottom: 12px;
  }
`;

export const SectionText = styled.p`
  font-size: 1rem;
  line-height: 1.7;
  color: #52525b;
  margin: 0 0 15px 0;

  strong {
    color: #18181b;
    font-weight: 600;
  }

  @media (max-width: 768px) {
    font-size: 0.95rem;
    line-height: 1.65;
  }

  @media (max-width: 425px) {
    font-size: 0.9rem;
    line-height: 1.6;
    margin-bottom: 12px;
  }
`;

export const SectionList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 15px 0;

  @media (max-width: 425px) {
    margin: 12px 0;
  }
`;

export const ListItem = styled.li`
  font-size: 1rem;
  line-height: 1.7;
  color: #52525b;
  margin: 10px 0;
  padding-left: 25px;
  position: relative;

  &:before {
    content: "•";
    position: absolute;
    left: 0;
    color: #e6ff00;
    font-weight: bold;
    font-size: 1.2rem;
  }

  strong {
    color: #18181b;
    font-weight: 600;
  }

  @media (max-width: 768px) {
    font-size: 0.95rem;
    line-height: 1.65;
    margin: 8px 0;
  }

  @media (max-width: 425px) {
    font-size: 0.9rem;
    line-height: 1.6;
    padding-left: 20px;
  }
`;
