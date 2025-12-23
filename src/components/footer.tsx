import React from "react";
import {
  FooterWrapper,
  FooterContent,
  FooterTop,
  ServiceArea,
  ContactSection,
  ContactTitle,
  ContactEmail,
  SocialIcons,
  FooterIconLink,
  FooterBottom,
  Copyright,
  TrustBadges,
} from "../assets/styles/footer.style";
import { useLocale } from "../LocaleContext";

import { FaInstagram, FaTelegramPlane, FaLinkedin } from "react-icons/fa";
import { SiTiktok, SiThreads } from "react-icons/si";

const Footer: React.FC = () => {
  const { localeContent } = useLocale();

  return (
    <FooterWrapper>
      <FooterContent>
        <FooterTop>
          <ServiceArea>
            {localeContent?.footer.serviceArea || "High-quality web development for clients in Ukraine, USA & Europe"}
          </ServiceArea>
          
          <ContactSection>
            <ContactTitle>
              {localeContent?.footer.contactTitle || "Have an idea or need a reliable digital partner?"}
            </ContactTitle>
            <ContactEmail as="div">
              <span style={{ fontSize: '0.85em' }}>📩</span> {localeContent?.footer.supportEmail || "support@mounweb.com"}
            </ContactEmail>
          </ContactSection>

          <SocialIcons>
            <FooterIconLink href="https://www.instagram.com/moun_digital_agency" target="_blank" rel="noopener noreferrer">
              {React.createElement(FaInstagram as any)}
            </FooterIconLink>
            <FooterIconLink href="https://www.threads.com/@moun_digital_agency" target="_blank" rel="noopener noreferrer">
              {React.createElement(SiThreads as any)}
            </FooterIconLink>
            <FooterIconLink href="https://www.linkedin.com/company/digital-agency-moun/" target="_blank" rel="noopener noreferrer">
              {React.createElement(FaLinkedin as any)}
            </FooterIconLink>
            <FooterIconLink href="https://www.tiktok.com/@moun.digital.agen" target="_blank" rel="noopener noreferrer">
              {React.createElement(SiTiktok as any)}
            </FooterIconLink>
            <FooterIconLink href="https://t.me/moun_digital" target="_blank" rel="noopener noreferrer">
              {React.createElement(FaTelegramPlane as any)}
            </FooterIconLink>
          </SocialIcons>
        </FooterTop>

        <FooterBottom>
          <Copyright>{localeContent?.footer.copyright || "© 2025 Moun Digital Agency. All rights reserved."}</Copyright>
          <TrustBadges>
            {localeContent?.footer.trustBadges || "Building digital solutions for clients worldwide • Long-term partnerships"}
          </TrustBadges>
        </FooterBottom>
      </FooterContent>
    </FooterWrapper>
  );
};

export default Footer;