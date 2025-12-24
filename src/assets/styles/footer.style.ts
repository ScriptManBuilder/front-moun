import styled from "styled-components";

export const FooterWrapper = styled.footer`
  width: 100%;
  background: #f7f7f7;
  color: #333;
  padding: 20px 20px 10px;
  box-sizing: border-box;
  box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 16px 15px 8px;
  }

  @media (max-width: 425px) {
    padding: 14px 12px 7px;
  }

  @media (max-width: 375px) {
    padding: 12px 10px 6px;
  }

  @media (max-width: 320px) {
    padding: 10px 8px 5px;
  }
`;

export const FooterContent = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 12px;

  @media (max-width: 768px) {
    gap: 10px;
  }

  @media (max-width: 425px) {
    gap: 9px;
  }

  @media (max-width: 320px) {
    gap: 8px;
  }
`;

export const FooterTop = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  gap: 120px;

  @media (max-width: 1024px) {
    gap: 70px;
  }

  @media (max-width: 992px) {
    flex-direction: column;
    align-items: center;
    gap: 24px;
  }

  @media (max-width: 768px) {
    gap: 20px;
  }

  @media (max-width: 425px) {
    gap: 16px;
  }

  @media (max-width: 375px) {
    gap: 14px;
  }

  @media (max-width: 320px) {
    gap: 12px;
  }
`;

export const FooterLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 14px;
  flex: 1;
  text-align: left;

  @media (max-width: 992px) {
    align-items: center;
    text-align: center;
    width: 100%;
    order: 1;
  }

  @media (max-width: 768px) {
    gap: 12px;
  }

  @media (max-width: 425px) {
    gap: 10px;
  }

  @media (max-width: 375px) {
    gap: 9px;
  }

  @media (max-width: 320px) {
    gap: 8px;
  }
`;

export const FooterCenter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
  flex: 0 0 auto;
  text-align: center;

  @media (max-width: 992px) {
    width: 100%;
    order: 3;
  }

  @media (max-width: 768px) {
    gap: 8px;
  }

  @media (max-width: 576px) {
    gap: 6px;
  }

  @media (max-width: 425px) {
    gap: 5px;
  }

  @media (max-width: 375px) {
    gap: 4px;
  }

  @media (max-width: 320px) {
    gap: 3px;
  }
`;

export const FooterRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  flex: 0 0 400px;
  max-width: 400px;

  @media (max-width: 992px) {
    flex: 1;
    max-width: 100%;
    width: 100%;
    gap: 16px;
    order: 2;
  }
  
  @media (max-width: 768px) {
    gap: 14px;
  }

  @media (max-width: 576px) {
    max-width: 450px;
  }

  @media (max-width: 425px) {
    gap: 12px;
  }

  @media (max-width: 375px) {
    gap: 11px;
  }

  @media (max-width: 320px) {
    gap: 10px;
  }
`;

export const NewsletterSection = styled.div`
  background: #ffffff;
  border: 2px solid #18181b;
  border-radius: 16px;
  padding: 24px;
  width: 100%;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);

  @media (max-width: 992px) {
    max-width: 500px;
  }

  @media (max-width: 527px) {
    border: none;
  }

  @media (max-width: 425px) {
    padding: 14px;
    border-radius: 10px;
  }

  @media (max-width: 375px) {
    padding: 12px;
  }

  @media (max-width: 320px) {
    padding: 10px;
  }
`;

export const NewsletterTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 700;
  color: #18181b;
  margin: 0 0 12px 0;
  font-family: "Poppins", sans-serif;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }

  @media (max-width: 425px) {
    font-size: 0.95rem;
    margin-bottom: 7px;
  }

  @media (max-width: 375px) {
    font-size: 0.9rem;
  }

  @media (max-width: 320px) {
    font-size: 0.85rem;
    margin-bottom: 6px;
  }
`;

export const NewsletterDescription = styled.p`
  font-size: 0.9rem;
  color: #52525b;
  line-height: 1.5;
  margin: 0 0 16px 0;

  @media (max-width: 768px) {
    font-size: 0.85rem;
  }

  @media (max-width: 425px) {
    font-size: 0.78rem;
    margin-bottom: 12px;
    line-height: 1.4;
  }

  @media (max-width: 375px) {
    font-size: 0.75rem;
    margin-bottom: 10px;
  }

  @media (max-width: 320px) {
    font-size: 0.72rem;
    margin-bottom: 10px;
  }
`;

export const NewsletterForm = styled.form`
  display: flex;
  gap: 8px;

  @media (max-width: 576px) {
    flex-direction: column;
    gap: 10px;
  }

  @media (max-width: 375px) {
    gap: 8px;
  }
`;

export const NewsletterInput = styled.input`
  flex: 1;
  padding: 12px 16px;
  border: 1px solid #d4d4d8;
  border-radius: 8px;
  font-size: 0.95rem;
  outline: none;
  transition: all 0.3s ease;
  touch-action: manipulation;

  &:focus {
    border-color: #18181b;
    box-shadow: 0 0 0 3px rgba(24, 24, 27, 0.1);
  }

  &::placeholder {
    color: #a1a1aa;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding: 10px 14px;
  }

  @media (max-width: 425px) {
    font-size: 16px;
    padding: 9px 12px;
    border-radius: 6px;
  }

  @media (max-width: 375px) {
    font-size: 16px;
    padding: 8px 10px;
  }

  @media (max-width: 320px) {
    font-size: 16px;
    padding: 8px 10px;
  }
`;

export const SubscribeButton = styled.button`
  padding: 12px 24px;
  background: #d4fc79;
  color: #18181b;
  border: none;
  border-radius: 8px;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;
  touch-action: manipulation;
  -webkit-tap-highlight-color: transparent;

  &:hover {
    background: #d4fc79;
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(230, 255, 0, 0.3);
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding: 10px 20px;
  }

  @media (max-width: 576px) {
    width: 100%;
  }

  @media (max-width: 425px) {
    font-size: 16px;
    padding: 9px 16px;
    border-radius: 6px;
  }

  @media (max-width: 375px) {
    font-size: 16px;
    padding: 8px 14px;
  }

  @media (max-width: 320px) {
    font-size: 16px;
    padding: 8px 12px;
  }
`;

export const ServiceArea = styled.div`
  font-size: 1rem;
  font-weight: 500;
  color: #52525b;
  letter-spacing: 0.02em;
  line-height: 1.3;
  margin-bottom: 0;
  
  @media (max-width: 768px) {
    font-size: 0.92rem;
  }

  @media (max-width: 576px) {
    font-size: 0.88rem;
    padding: 0 8px;
  }

  @media (max-width: 425px) {
    font-size: 0.84rem;
    padding: 0 6px;
    line-height: 1.25;
    margin-bottom: 0;
  }

  @media (max-width: 375px) {
    font-size: 0.8rem;
    padding: 0 5px;
  }

  @media (max-width: 320px) {
    font-size: 0.76rem;
    padding: 0 4px;
    line-height: 1.2;
  }
`;

export const ContactSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 9px;
  align-items: flex-start;

  @media (max-width: 992px) {
    align-items: center;
  }

  @media (max-width: 768px) {
    gap: 8px;
  }

  @media (max-width: 576px) {
    gap: 6px;
  }

  @media (max-width: 425px) {
    gap: 5px;
  }

  @media (max-width: 375px) {
    gap: 4px;
  }

  @media (max-width: 320px) {
    gap: 3px;
  }
`;

export const ContactTitle = styled.div`
  font-size: 1.15rem;
  font-weight: 600;
  color: #18181b;
  line-height: 1.3;

  @media (max-width: 768px) {
    font-size: 1.05rem;
  }

  @media (max-width: 576px) {
    font-size: 1rem;
    padding: 0 12px;
  }

  @media (max-width: 425px) {
    font-size: 0.96rem;
    padding: 0 10px;
    line-height: 1.28;
  }

  @media (max-width: 375px) {
    font-size: 0.9rem;
    padding: 0 8px;
  }

  @media (max-width: 320px) {
    font-size: 0.85rem;
    padding: 0 6px;
    line-height: 1.25;
  }
`;

export const ContactSubtitle = styled.p`
  font-size: 0.95rem;
  font-weight: 400;
  color: #52525b;
  line-height: 1.4;
  margin: 2px 0 0 0;
  max-width: 500px;

  @media (max-width: 992px) {
    text-align: center;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
    line-height: 1.3;
  }

  @media (max-width: 425px) {
    font-size: 0.85rem;
    padding: 0 10px;
    line-height: 1.25;
    margin: 0;
  }

  @media (max-width: 375px) {
    font-size: 0.82rem;
    padding: 0 8px;
  }

  @media (max-width: 320px) {
    font-size: 0.78rem;
    padding: 0 5px;
  }
`;

export const ContactEmail = styled.a`
  font-size: 1.1rem;
  font-weight: 600;
  color: #18181b;
  text-decoration: none;
  display: block;
  margin-bottom: 2px;

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 425px) {
    font-size: 0.95rem;
  }
`;

export const EmailDescription = styled.div`
  font-size: 0.9rem;
  color: #71717a;
  font-weight: 400;

  @media (max-width: 768px) {
    font-size: 0.87rem;
  }

  @media (max-width: 576px) {
    font-size: 0.84rem;
  }

  @media (max-width: 425px) {
    font-size: 0.82rem;
  }

  @media (max-width: 375px) {
    font-size: 0.8rem;
  }

  @media (max-width: 320px) {
    font-size: 0.78rem;
  }
`;

export const SocialSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  width: 100%;

  @media (max-width: 768px) {
    gap: 9px;
  }

  @media (max-width: 425px) {
    gap: 8px;
  }
`;

export const SocialTitle = styled.h4`
  font-size: 0.95rem;
  font-weight: 500;
  color: #18181b;
  opacity: 0.7;
  margin: 0;
  font-family: "Poppins", sans-serif;

  @media (max-width: 768px) {
    font-size: 0.88rem;
  }

  @media (max-width: 425px) {
    font-size: 0.82rem;
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: 768px) {
    gap: 12px;
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

export const PrivacyLink = styled.a`
  color: #18181b;
  text-decoration: none;
  transition: all 0.3s ease;
  font-weight: 500;
  font-size: 0.85rem;
  display: inline-block;

  &:hover {
    color: #e6ff00;
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }

  @media (max-width: 425px) {
    font-size: 0.75rem;
  }

  @media (max-width: 375px) {
    font-size: 0.72rem;
  }

  @media (max-width: 320px) {
    font-size: 0.68rem;
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