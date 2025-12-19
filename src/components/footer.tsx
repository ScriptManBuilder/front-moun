import React from "react";
import {
  FooterWrapper,
  FooterTitle,
  FooterIcons,
  FooterIconLink,
  SupportBlock,
  SupportText,
  SupportEmail,
} from "../assets/styles/footer.style";
import { useLocale } from "../LocaleContext";
import { FooterLocaleContent } from "../localization";

import { FaInstagram, FaTelegramPlane, FaLinkedin } from "react-icons/fa";
import { SiTiktok, SiThreads } from "react-icons/si";

const Footer: React.FC = () => {
  const { localeContent } = useLocale();

  return (
    <FooterWrapper>
      <FooterTitle>© 2025 Moun Digital Agency</FooterTitle>
      <SupportBlock>
        <SupportText>{localeContent?.footer.supportText || "Have questions? Send us an email!"}</SupportText>
        <SupportEmail>
          support@mounweb.com
        </SupportEmail>
      </SupportBlock>
      <FooterIcons>
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
      </FooterIcons>
    </FooterWrapper>
  );
};

export default Footer;