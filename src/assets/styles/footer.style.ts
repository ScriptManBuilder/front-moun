import styled from "styled-components";

export const FooterWrapper = styled.footer`
  width: 100%;
  background: #f7f7f7;
  color: #333;
  padding: 30px 20px 15px;
  box-sizing: border-box;
  box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 22px 15px 13px;
  }

  @media (max-width: 425px) {
    padding: 18px 12px 11px;
  }

  @media (max-width: 375px) {
    padding: 15px 10px 9px;
  }

  @media (max-width: 320px) {
    padding: 12px 8px 7px;
  }
`;

export const FooterContent = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 21px;

  @media (max-width: 768px) {
    gap: 16px;
  }

  @media (max-width: 425px) {
    gap: 13px;
  }

  @media (max-width: 320px) {
    gap: 10px;
  }
`;

export const FooterTop = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  text-align: center;

  @media (max-width: 768px) {
    gap: 13px;
  }

  @media (max-width: 425px) {
    gap: 11px;
  }

  @media (max-width: 320px) {
    gap: 9px;
  }
`;

export const ServiceArea = styled.div`
  font-size: 1rem;
  font-weight: 500;
  color: #52525b;
  letter-spacing: 0.02em;
  line-height: 1.4;
  
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }

  @media (max-width: 425px) {
    font-size: 0.82rem;
    padding: 0 5px;
  }

  @media (max-width: 375px) {
    font-size: 0.78rem;
  }

  @media (max-width: 320px) {
    font-size: 0.72rem;
    padding: 0 3px;
    line-height: 1.35;
  }
`;

export const ContactSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;

  @media (max-width: 425px) {
    gap: 8px;
  }

  @media (max-width: 320px) {
    gap: 6px;
  }
`;

export const ContactTitle = styled.div`
  font-size: 1.15rem;
  font-weight: 600;
  color: #18181b;
  line-height: 1.4;

  @media (max-width: 768px) {
    font-size: 1.05rem;
  }

  @media (max-width: 425px) {
    font-size: 0.95rem;
    padding: 0 10px;
  }

  @media (max-width: 375px) {
    font-size: 0.88rem;
    padding: 0 8px;
  }

  @media (max-width: 320px) {
    font-size: 0.82rem;
    padding: 0 5px;
    line-height: 1.35;
  }
`;

export const ContactEmail = styled.a`
  font-size: 1.05rem;
  font-weight: 600;
  color: #18181b;
  text-decoration: none;
  transition: all 0.3s ease;
  
  &:hover {
    color: #000;
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    font-size: 0.95rem;
  }

  @media (max-width: 425px) {
    font-size: 0.88rem;
  }

  @media (max-width: 375px) {
    font-size: 0.82rem;
  }

  @media (max-width: 320px) {
    font-size: 0.75rem;
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  margin-top: 5px;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: 768px) {
    gap: 12px;
    margin-top: 3px;
  }

  @media (max-width: 425px) {
    gap: 10px;
    margin-top: 2px;
  }

  @media (max-width: 375px) {
    gap: 8px;
  }

  @media (max-width: 320px) {
    gap: 7px;
    margin-top: 0;
  }
`;

export const FooterBottom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 9px;
  padding-top: 16px;
  border-top: 1px solid rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding-top: 13px;
    gap: 7px;
  }

  @media (max-width: 425px) {
    padding-top: 11px;
    gap: 6px;
  }

  @media (max-width: 320px) {
    padding-top: 9px;
    gap: 5px;
  }
`;

export const Copyright = styled.div`
  font-size: 0.95rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  font-family: "Poppins", sans-serif;
  color: #18181b;

  @media (max-width: 768px) {
    font-size: 0.88rem;
  }

  @media (max-width: 425px) {
    font-size: 0.8rem;
    letter-spacing: 0.03em;
  }

  @media (max-width: 375px) {
    font-size: 0.75rem;
  }

  @media (max-width: 320px) {
    font-size: 0.7rem;
    letter-spacing: 0.02em;
  }
`;

export const TrustBadges = styled.div`
  font-size: 0.85rem;
  color: #52525b;
  font-weight: 400;
  letter-spacing: 0.01em;
  text-align: center;
  line-height: 1.4;

  @media (max-width: 768px) {
    font-size: 0.78rem;
  }

  @media (max-width: 425px) {
    font-size: 0.72rem;
    padding: 0 10px;
  }

  @media (max-width: 375px) {
    font-size: 0.68rem;
    padding: 0 5px;
  }

  @media (max-width: 320px) {
    font-size: 0.63rem;
    padding: 0 3px;
    line-height: 1.35;
  }
`;

export const FooterIconLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  background: #e0e0e0;
  color: #000;
  border-radius: 50%;
  font-size: 1.4rem;
  transition: all 0.3s ease;
  flex-shrink: 0;

  &:hover {
    background: #e6ff00;
    color: #000;
    transform: translateY(-3px) scale(1.1);
    box-shadow: 0 5px 15px rgba(230, 255, 0, 0.3);
  }

  @media (max-width: 768px) {
    width: 42px;
    height: 42px;
    font-size: 1.3rem;
  }

  @media (max-width: 425px) {
    width: 38px;
    height: 38px;
    font-size: 1.2rem;
  }

  @media (max-width: 375px) {
    width: 36px;
    height: 36px;
    font-size: 1.15rem;
  }

  @media (max-width: 320px) {
    width: 34px;
    height: 34px;
    font-size: 1.1rem;
  }
`;